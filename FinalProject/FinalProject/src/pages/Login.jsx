import React from "react";
import loginPage from "@/assets/LoginPageImg.jpg";
import Input from "@/components/Input";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Button from "@/components/Button";

import { setUser } from "../store/slice/loginSlice";
//
import { useDispatch, useSelector } from "react-redux";

// hook
import useInput from "../hooks/use-input";

import "react-toastify/dist/ReactToastify.css";

//ref
import { useRef, useState } from "react";
import { supabase } from "@/lib/supabaseClient";

import { Link } from "react-router-dom";

const Login = () => {
  const emailRef = useRef();
  const passRef = useRef();
  const user = useSelector((state) => state.login.user);

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

  const loginHandler = async (e) => {
    e.preventDefault();

    const {
      data: { user },
      error
    } = await supabase.auth.signInWithPassword({
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
      setIsSubmitted(true);
      emailReset();
      passReset();
    }
    if (user) {
      toast.success("Login successul!!", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored"
      });
      dispatch(setUser(user));

      navigate("/");
    }

    // dispatch(setUser(user));
  };
  return (
    <>
      <section className="bg-[url('@/assets/LoginPageBackground.jpg')] min-h-screen h-full w-screen flex items-center  bg-cover bg-bottom text-blueblack min-w-[300px]">
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

        <div className=" w-[80%] max-w-[1000px] xl:max-h-[800px] lg:max-h-[700px] md:max-h-[550px]   flex items-center mx-auto rounded-xl overflow-hidden shadow-lg aspect-[3/2] bg-[white]  max-md:aspect-[3/4] max-sm:flex-col max-md:relative  max-md:justify-center max-md:w-[85%] max-xs:w-[95%] max-xs:h-auto max-lg:max-h-[90%] my-[5%]">
          <form
            action=""
            className="p-3 flex flex-col w-[40%] font-main items-center gap-[0.3rem] max-lg:gap-[0.1rem] max-md:relative max-md:z-10 max-md:bg-[rgba(255,255,255,0.7)] max-md:rounded-lg max-md:py-5 max-md:px-4 max-md:w-4/5 max-md:h-4/5 max-md:justify-center "
          >
            <h2 className="font-main mb-[-.5rem] max-xs:text-[0.9rem] ">
              welcome to
            </h2>
            <h1 className="mb-5 font-title text-[2rem] max-xs:mb-2 max-xs:text-[1.5rem]">
              SmartRecipe
            </h1>
            <label htmlFor="email" className="text-center text-[1.1rem] ">
              Email
            </label>
            <Input
              ref={emailRef}
              type="email"
              value={emailValue}
              onChange={emailInputHandler}
            />
            {!emailValidation && isSubmitted && (
              <p className=" text-[red] text-[0.9rem]">This email is invalid</p>
            )}
            <label
              htmlFor="password"
              className="mt-2 max-lg:mt-1 text-center text-[1.1rem]"
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
              <p className=" text-[red] text-[0.9rem]">
                password has be longer than 8 letters
              </p>
            )}

            <Button
              onClick={loginHandler}
              type="submit"
              className="btn bg-primary w-[100px] text-[white] rounded-[10px] px-1 py-[0.3rem] mt-8 text-[1.1rem]"
            >
              Login
            </Button>
            <Link to="/register" className="hover:text-accent">
              don't have an account? →
            </Link>
          </form>

          <div className="w-[60%] max-md:absolute max-md:z-1 max-md:w-full">
            <img
              className="  w-full"
              src={loginPage}
              alt="login page picture"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
