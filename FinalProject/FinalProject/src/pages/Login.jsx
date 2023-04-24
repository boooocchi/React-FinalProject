import React from "react";
import loginPage from "@/assets/loginPage.jpg";
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

const Login = () => {
  const emailRef = useRef();
  const passRef = useRef();
  const user = useSelector((state) => state.login.user);

  const navigate = useNavigate();

  const dispatch = useDispatch();
  console.log(user);

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

    console.log(emailRef.current.value, passRef.current.value);
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
      <section className="bg-[url('@/assets/loginBackground.jpg')] h-screen flex items-center  bg-cover bg-bottom">
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
        <div className="w-full h-full flex items-center backdrop-blur-sm">
          <div className="w-[700px]  flex items-center mx-auto rounded-xl overflow-hidden shadow-lg aspect-[3/2] bg-[white]">
            <form
              action=""
              className="flex flex-col w-[40%] font-main items-center gap-[0.5rem]"
            >
              <h2 className="font-main mb-[-1rem]">welcome to</h2>
              <h1 className="mb-5 font-title text-[2rem]">SmartRecipe</h1>
              <label htmlFor="email" className="text-center text-[1.1rem]">
                Email
              </label>
              <Input
                ref={emailRef}
                type="email"
                value={emailValue}
                onChange={emailInputHandler}
              />
              {!emailValidation && isSubmitted && (
                <p className=" text-[red] text-[0.9rem]">
                  This email is invalid
                </p>
              )}
              <label htmlFor="password" className="text-center text-[1.1rem]">
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
            </form>

            <div className="w-[60%]">
              <img
                className="  w-full"
                src={loginPage}
                alt="login page picture"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
