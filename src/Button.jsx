import React,{ useState } from "react";
function Button(){
  const [name, setName] = useState('guest');
  
  const updateName = () =>{
    setName('joon')

  }

  const [age, setAge] = useState(0);
  function increment(){
    setAge(age+3);
  }


  const [cart , setcart] = useState(0)
  function updateCart(){
    setcart(cart+1);
  }


  const [isEmployed , setIsEmployed] = useState(false);
  function toggleEmployed(){
    setIsEmployed(!isEmployed);
  }
  


  return (
    <div>
      <h1>name: {name} </h1>
      <button onClick={updateName}>set name</button>

      <h1 className=" cart ">cart: {cart} </h1>
      <button onClick={updateCart}>increase cart</button>



      <h1>age: {age} </h1>
      <button onClick={increment}>inrement  age </button>
      
      <h1>is employed : {isEmployed? 'yes' : 'No'} </h1>
      <button onClick={toggleEmployed}> toggle status </button>



    </div>
  );
}
export default Button;
