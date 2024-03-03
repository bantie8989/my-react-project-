import propTypes from 'prop-types';
function Student(props) {
  return (
    <div className="box">
      <h1>Name: {props.name} </h1>
      <h1>age:{props.age} </h1>
      <h1>Student: {props.isStudent ? "yes" : "no"}</h1>
      <h1>is he is good: {props.isGood ? "yes": "no"}</h1>
      <h1>he live in: {props.place}</h1>
    </div>
  );
  Student.propTypes = {
    name: propTypes.string,
    age: propTypes.number,
    palce:propTypes.string,
    isGood:propTypesstring
  }
  Student.defaultProps = {
    name: 'ፍሬዘር',
    age:100,
    place: 'መንሸራሸር',
    
  }
  
}
export default Student;
