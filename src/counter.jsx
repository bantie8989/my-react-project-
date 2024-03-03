function Counter({count, onClick}) {
  return (
    <div className="yonas">
      <button onClick={onClick}>clicked {count} times</button>
    </div>
  );
}
export default Counter;
