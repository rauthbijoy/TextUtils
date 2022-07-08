function FormBox(props) {
  return (
    <div
      className="container my-3"
      style={{ color: props.mode === "light" ? "black" : "white" }}
    >
      <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
          <h1>{props.heading}</h1>
        </label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="8"
          onChange={props.handleOnChange}
          value={props.text}
          style={{
            backgroundColor: props.mode === "light" ? "white" : "black",
            color: props.mode === "light" ? "black" : "white",
          }}
        ></textarea>
      </div>
      <button className="btn btn-primary" onClick={props.handleUpClick}>
        Convert to UpperCase
      </button>
      <h2 className="my-3">Summary</h2>
      <p>
        {props.text.split(" ").filter((element)=>{return element.length!==0}).length} Word & {props.text.length} Characters
      </p>
      <h3>Preview</h3>
      <p>
        {props.text.length > 0 ? props.text : "Enter Some Text to Preview Here"}
      </p>
    </div>
  );
}

export default FormBox;
