import { useState } from "react";

function Onchange() {
  const [name, setName] = useState("guest");
  const [quantity, setQuantity] = useState(0);
  const [comment, setComment] = useState("your order");
  const [payment, setPayment] = useState(0);
  const [shipping ,setShipping] = useState("delivery");



  function handleShiping( event){
    setShipping(event.target.value);
  }

  function handlePayment(event) {
    setPayment(event.target.value);
  }

  function handleComment(event) {
    setComment(event.target.value);
  }

  function handleQuantity(event) {
    setQuantity(event.target.value);
  }

  function handName(event) {
    setName(event.target.value);
  }
  return (
    <div>
      <input type="text" value={name} onChange={handName} />
      <p>Name: {name}</p>

      <input type="number" onChange={handleQuantity} value={quantity} />
      <p>quantity: {quantity}</p>

      <input type="text" onChange={handleComment} value={comment} />
      <p>comment:{comment}</p>

      <select name="" id="" value={payment} onChange={handlePayment}>
        <option value="default">select option </option>
        <option value="atm">ATm </option>
        <option value="bank">bank account </option>
        <option value="movile baknking">movile baknking </option>
      </select>
      <p>payment: {payment}</p>



      <label >
        <input type="radio" onChange={handleShiping} value= ' pick up' />
        pick up
      </label>
      <br />
      <label >
        <input type="radio" onChange={handleShiping} checked = {shipping==="pick up"} value= ' delivery' />
        delivery
      </label>
      <br />
      <label >
        <input type="radio" onChange={handleShiping} value="order" checked ={shipping === "order"}/>
        order
      </label>
      <br />
      <label >
        <input type="radio" onChange={handleShiping} value="food" checked ={shipping === "food"} />
        food
      </label>
      <p>shipping: {shipping} </p>
    </div>
  );
}
export default Onchange;
