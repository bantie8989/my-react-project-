import propTypes from 'prop-types';
function List(props) {
  // fruits.sort((a,b)=> a.name.localeCompare(b.name)); //ALPHABETICAL ORDER from a to z
  // fruits.sort((a,b)=> b.name.localeCompare(a.name)); //ALPHABETICAL ORDER from z to a
  // fruits.sort((a,b) => a.calories - b.calories)//ASSENDIING ORDR OF CALORIES
  // fruits.sort((a,b) => b.calories - a.calories)//decending  ORDR OF CALORIES
  const itemLists = props.items;
  const catagories = props.catagories;

  const listItems = itemLists.map((item) => (
    <li key={item.id}>
      {item.name}: &nbsp; <b>{item.calories}</b>{" "}
    </li>
  ));
  return <>
  <h1 className="catagories">{catagories}</h1>
  <ol className="listItems">{listItems}</ol>
  </>;
}

List.defaultProps{
  catagories:'catagories',
  itemlist;[]

}
export default List;
