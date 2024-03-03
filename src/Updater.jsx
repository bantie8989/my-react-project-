import { useState } from "react";
function Updater() {
  const [car, setCar] = useState({
    year: 2929,
    make: "toyota",
    model: "mustang",
  });

  function handleYearChange(event) {
    setCar(c=> ({ ...c, year: event.target.value }));
  }

  function handleMakeChange(event) {
    setCar(c => ({ ...c, make: event.target.value }));
  }

  function handleModelChange(event) {
    setCar(c => ({ ...c, model: event.target.value }));
  }

  return (
    <div className="display">
      <h1>
        you favorite car: {car.year} {car.make} {car.model}
      </h1>
      <input
        type="number"
        onChange={handleYearChange}
        placeholder="year"
        value={car.year}
      />{" "}
      <br />
      <input
        type="text"
        onChange={handleMakeChange}
        placeholder="make"
        value={car.make}
      />{" "}
      <br />
      <input
        type="text"
        onChange={handleModelChange}
        placeholder="modle"
        value={car.model}
      />
    </div>
  );
}
export default Updater;
