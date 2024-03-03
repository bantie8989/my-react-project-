import { useState } from "react";
function UpdateList() {
    const [foods, setFoods] = useState(['apple' , 'orange' , 'banana' ]);

    function handlAddFood(){
        const newFood = document.getElementById('foodInput').value;
        document.getElementById('foodInput').value = "";
        setFoods(f => [...f,newFood]);
    }
    function handleRemovecar(index){
        setFoods(foods.filter((_, i) => i !== index))


        
    }
  return (
    <div>
        <h2>List of Food</h2>
        <ul>
            {foods.map((food ,index)=> <li key={index} onClick={()=> handleRemovecar(index)}> {food}</li>)}

        </ul>
        <input type="text" id = "foodInput" placeholder="Enter food name" />
        <button onClick={handlAddFood}> Add Food </button>

    </div>

    );
}
export default UpdateList;
