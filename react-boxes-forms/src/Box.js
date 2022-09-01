
function Box({ height, width, backgroundColor, removeBox }) {
  const style = {
    height: `${height}px`,
    width: `${width}px`,
    backgroundColor
  };
  console.log("STYLE", style);
  return (
    <div>
      <div style={style}></div>
      <button>  </button>
    </div>
  );

}

export default Box;