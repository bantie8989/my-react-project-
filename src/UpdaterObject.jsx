import { useState } from "react";

function UpdaterObject() {
  const [cars, setCars] = useState([]);
  const [carYear, setCarYear] = useState(new Date().getFullYear());
  const [carMake, setCarMake] = useState("");
  const [carModel, setCarModel] = useState("");

  function handleAddCar() {
    const newCar = { year: carYear, make: carMake, model: carModel };
    setCars(c=> [...c, newCar]);

    setCarYear(new Date().getFullYear());
    setCarMake("");
    setCarModel("");
    
  }


  function handleRemovecar(index) {
    setCars(c => c.filter((_, i) =>i !== index));

    
  }

  function handleYearChange(event) {
    setCarYear(event.target.value);
  }
  function handleMakeChange(event) {
    setCarMake(event.target.value);
  }
  function handleModelChange(event) {
    setCarModel(event.target.value);
  }

  return (
    <div>
      <h1>list of Car object</h1>
      <ul>
        {cars.map((car, index) => (
          <li key={index} onClick={() => handleRemovecar(index)}>
            {car.make} {car.year}
            {car.model}
          </li>
        ))}
      </ul>
      <input type="number" value={carYear} onChange={handleYearChange} />
      <br />
      <input
        type="text"
        value={carMake}
        onChange={handleMakeChange}
        placeholder="Enter the make of car"
      />
      <br />
      <input
        type="text"
        value={carModel}
        onChange={handleModelChange}
        placeholder="Enter the model of the car"
      />
      <br />

      <button onClick={handleAddCar}>Add Car </button>
    </div>
  );
}
export default UpdaterObject;
