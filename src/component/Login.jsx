import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../common/auth";
import NetflixLogo from "../assets/Netflix_Logo.png";
function Login() {
        const{signIn}=useAuth()??{}
         const navigate=useNavigate();

      async function onHandleSubmit(event){
        event.preventDefault();
          const {email,password}=event.target;
          console.log(email.value,password.value)
        //  const user  =await signIn(email.value,password.value);
        //   if(user){
           navigate("/")
          
        // }



      }
  return (
    <>
      <header className=" relative z-[1] w-full">
        <img src={NetflixLogo} alt="logo" className="w-[200px]" />
      </header>
      <main>
        <section className='  absolute top-0 min-h-screen w-full bg-[url("Netflix_cover.jpg")] bg-cover'>
          <section className="  absolute inset-0  bg-gradient-to-b from bg-zinc-900/50"></section>
        </section>

        <form onSubmit={onHandleSubmit} className=" relative mx-auto w-[350px] rounded-sm bg-dark/75 p-14">
          <article className="overflow-hidden">
            <h1 className="mb-4 p-2 text-3xl ">SignIn</h1>
            <section className="flex flex-col gap-4 overflow-hidden ">
              <input
                type="text"
                id="email"
                name="email"
                placeholder="Email"
                className="mt-1 required block w-full rounded-md border border-slate-300 bg-zinc-500  px-3 py-2 text-sm text-gray-300 placeholder-slate-400 shadow-sm invalid:border-pink-500 invalid:text-pink-600 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 focus:invalid:border-pink-500 focus:invalid:ring-pink-500
    "
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                id="password"
                className="mt-1  required block w-full rounded-md border border-slate-300 bg-zinc-500  px-3 py-2 text-sm text-gray-300 placeholder-slate-400 shadow-sm invalid:border-pink-500 invalid:text-pink-600 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 "
              />
              <button
                className="my-4 rounded-md  bg-NetflixRed p-2 font-semibold hover:bg-[#de1c25fc]"
                type="submit "
              >
                Sign In
              </button>
            </section>
            <section>
              <p>New to Netflix?{' '}<Link className="hover:underline" to="/register">sign up</Link> </p>
            </section>
          </article>
        </form>
      </main>
    </>
  );
}

export default Login;
