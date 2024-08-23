import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Temperature  from "./api";
import { Post } from "./api";

function BookList() {
  return (
    <div className="booklist">
      <Book />
      <Book />
      <Book />
      <Book />
    </div>
  );
}
function Book() {
  return (
    <article className="book">
      <Title />
      <Img />
      <Author />
      <h1 className=" bg-slate-600">Hello world!</h1>
    </article>
  );
}

const Title = () => {
  return <p className="Title">Atomic Habits</p>;
};
const Img = () => {
  return <img src="./images/atomic_habits.jpg" alt="Atomic Hobits"></img>;
};
const Author = () => {
  return <p className="Author ">James Clear</p>;
};
const LoginButton = () => {
  return (
    <a href="login_view">
      <div className="text justify-center font-bold align-middle  p-4 m-8 text-center  rounded-xl text-white bg-green-500 border-b-8 border-green-600 ">
        <p>Log in</p>
      </div>
    </a>
  );
};
const SignInButton = () => {
  return (
    <a href="sign_up">
      <div className="text justify-center font-bold align-middle  p-4 m-8 text-center  rounded-xl text-white bg-green-500 border-b-8 border-green-600 ">
        <p>Sign up</p>
      </div>
    </a>
  );
};
const GoIn = ()=>{
  return (
    <div className="flex justify-center ">
      <SignInButton />
      <LoginButton />
    </div>
  );
}
const AnhsLinkLogo=()=>{
  return (
    <img
      className="h-24 w-24 rounded-full object-cover"
      src="./images/ANHSLink_logo.svg"
      alt="ANHS LOGO"
    />
  ); 
}
const AnhsGatePic = () =>{
  return (
    <img
      className="w-full h-48 object-cover rounded-lg mt-4"
      src="./images/login_page.png"
      alt="Background"
    />
  );
}
const WelcomeMessage = () =>{
  return (
    <div className="flex items-center">
      <p className="text-gray-600 hello text-center">
        Hello Nationalistas! Welcome to ANHSLINK
      </p>
    </div>
  );
}
const Header = () =>{
  return (
    <div className="flex justify-between space-x-4 p-4 border-b-4 bg-green-100 border-green-200">
      <AnhsLinkLogo />
      <WelcomeMessage />
      <Temperature />
    </div>
  );
}
function Landing() {
  return (
    <div className="flex justify-center items-center my-6">
      <div className="w-full max-w-4xl mx-auto p-2 bg-white  rounded-lg">
        
        <Header/>
        <AnhsGatePic />
        <GoIn />

        <div className="flex justify-center ">
          <p className="text-lg text-green-700">News and Updates</p>
        </div>

        
        <Post/>
      </div>
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(<Landing />);
