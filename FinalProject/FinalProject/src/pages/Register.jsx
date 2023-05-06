import React from "react";
import registerPage from "@/assets/RegisterPageImg.jpg";
import Input from "@/components/Input";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate, Link } from "react-router-dom";
import Button from "@/components/Button";

//
import { useDispatch, useSelector } from "react-redux";

// hook
import useInput from "../hooks/use-input";

import "react-toastify/dist/ReactToastify.css";

//ref
import { useRef, useState } from "react";
import { supabase } from "@/lib/supabaseClient";

const Register = () => {
  const emailRef = useRef();
  const passRef = useRef();
  const passRef2 = useRef();
  const user = useSelector((state) => state.login.user);
  const [disableBtn, setDisableBtn] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    enteredValue: emailValue,
    reset: emailReset,
    inputValueHandler: emailInputHandler,
    validation: emailValidation
  } = useInput((value) => {
    return value.match(
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    );
  });
  const {
    enteredValue: passValue,
    reset: passReset,
    inputValueHandler: passInputHandler,
    validation: passValidation
  } = useInput((value) => {
    return value.trim().length >= 8;
  });

  const {
    enteredValue: passValue2,
    reset: passReset2,
    inputValueHandler: pass2Handler
  } = useInput();

  const registerHandler = async (e) => {
    e.preventDefault(true);
    setIsSubmitted(true);
    if (passRef.current.value !== passRef2.current.value) {
      setDisableBtn(true);
      toast.error("passwords are different", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored"
      });
      return;
    }
    //validation
    if (!passValidation || !emailValidation) {
      setDisableBtn(true);
      return;
    }
    setDisableBtn(false);
    console.log(emailRef.current.value, passRef.current.value);
    const {
      data: { user },
      error
    } = await supabase.auth.signUp({
      email: emailRef.current.value,
      password: passRef.current.value
    });

    if (error) {
      toast.error(error.message, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored"
      });

      emailReset();
      passReset();
      passReset2();
    }
    if (user) {
      toast.success("register successul!!", {
        position: "top-center",

        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored"
      });

      navigate("/login");
    }

    // dispatch(setUser(user));
  };
  return (
    <>
      <section className="bg-[url('@/assets/RegisterPageBackground.jpg')] min-h-screen h-full w-screen flex items-center  bg-cover bg-bottom text-blueblack min-w-[300px]">
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />

        <div className="w-[85%] max-w-[1000px] xl:max-h-[800px] lg:max-h-[700px] md:max-h-[580px]   flex items-center mx-auto rounded-xl overflow-hidden shadow-lg aspect-[3/2] bg-[white]  max-md:aspect-[3/4] max-sm:flex-col max-md:relative  max-md:justify-center max-md:w-[85%] max-xs:w-[95%] max-xs:h-auto max-lg:max-h-[90%] my-[5%]">
          <form
            action=""
            className="p-4 flex flex-col w-[40%] font-main items-center gap-[0.3rem] max-lg:gap-[0.1rem] max-md:relative max-md:z-10 max-md:bg-[rgba(255,255,255,0.7)] max-md:rounded-lg max-md:py-5 max-md:px-4 max-md:w-4/5 max-md:h-4/5 max-md:justify-center "
          >
            <h2 className="font-main mb-[-.5rem] max-xs:text-[0.9rem] max-md:mb-[-0.5rem]">
              welcome to
            </h2>
            <h1 className="mb-4 font-title text-[2rem] max-xs:mb-2 max-xs:text-[1.5rem] max-md:mb-2">
              SmartRecipe
            </h1>
            <label
              htmlFor="email"
              className="text-center text-[1.1rem] -mb-1 max-xs:text-[0.9rem]"
            >
              Email
            </label>
            <Input
              ref={emailRef}
              type="email"
              value={emailValue}
              onChange={emailInputHandler}
            />
            {!emailValidation && isSubmitted && (
              <p className=" text-[red] text-[0.9rem] -mt-4">
                This email is invalid
              </p>
            )}
            <label
              htmlFor="password"
              className="-mb-1 text-center text-[1.1rem] max-xs:text-[0.9rem]"
            >
              Password
            </label>
            <Input
              ref={passRef}
              type="password"
              value={passValue}
              onChange={passInputHandler}
            />
            {!passValidation && isSubmitted && (
              <p className=" text-[red] text-[0.9rem] -mt-4">
                password has be longer than 8 letters
              </p>
            )}
            <label
              htmlFor="password2"
              className=" -mb-1 text-center text-[1.1rem]  max-xs:text-[0.9rem]"
            >
              Confirm Password
            </label>
            <Input
              ref={passRef2}
              type="password"
              value={passValue2}
              onChange={pass2Handler}
            />

            <Button
              onClick={registerHandler}
              type="submit"
              disable={disableBtn}
            >
              Sign up
            </Button>
            <Link
              to="/login"
              className="hover:text-primary  max-xs:text-[0.9rem]"
            >
              ← Login
            </Link>
          </form>

          <div className="w-[60%] max-md:absolute max-md:z-1 max-md:w-full">
            <img
              className="  w-full"
              src={registerPage}
              alt="register page picture"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Register;
