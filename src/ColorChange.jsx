import { useState } from "react";
function ColorChange() {
    const [color , setColor] = useState("#FFFFFF")
    

    function handleColorChange(event){
        setColor(event.target.value)
    }
  return (
    <div>
        <h1> Color picker </h1>
        <h3 className="color-display" style={{backgroundColor:color}}> selected  Color {color}</h3>
        <label > select a color:</label>
        <input type="color" value = {color} onChange={handleColorChange}/>

    </div>
  );
}
export default ColorChange;
