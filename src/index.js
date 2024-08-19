import React from "react";
import ReactDOM from "react-dom/client";
import './index.css';
function BookList(){
  return (
    <div className="booklist">
      <Book />
      <Book />
      <Book />
      <Book />
    </div>
  );
}

function Book(){
  return <article className="book">
  <Title/>
  <Img/>
  <Author/>

  </article>
}

const Title = () =>{
  return <p className="Title">Atomic Habits</p>;
}
const Img = () => {
  return <img src="./images/atomic_habits.jpg" alt="Atomic Hobits"></img>;
};
const Author = () => {
  return <p className="Author">James Clear</p>;
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList />);
