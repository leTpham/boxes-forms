
function Box({ height, width, backgroundColor, removeBox, id }) {
  const style = {
    height: `${height}px`,
    width: `${width}px`,
    backgroundColor
  };
  return (
    <div>
      <div style={style}></div>
      <button onClick = {() => removeBox(id)}>x</button>
    </div>
  );

}

export default Box;