// ---- COMPONENT ----

const Resize = () => {
  //? ---- rendering ----
  return (
    <div className="resize">
      <div className="size">
        <div></div>
        For best experience, resize your window.
      </div>
      <div className="zoomout">
        <div></div>
        You can also try to zoom-out a little!
      </div>
      <div className="orient">
        <div></div>If you're using a tablet, rotate to landscape.
      </div>
    </div>
  );
};
export default Resize;
