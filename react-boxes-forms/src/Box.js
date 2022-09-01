
/**
 * Props: { height, width, backgroundColor, removeBox, id}
 * Returns a box
 * BoxList -> Box
 */
function Box({ height, width, backgroundColor, removeBox}) {
  const style = {
    height: `${height}px`,
    width: `${width}px`,
    backgroundColor
  };
  return (
    <div>
      <div style={style}></div>
      <button onClick = {removeBox}>x</button>
    </div>
  );

}

export default Box;