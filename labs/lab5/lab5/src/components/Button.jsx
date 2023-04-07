export default function Button(props) {
  return (
    <button className="Button" onClick={props.loginHandler}>
      <div className="Button__Label">{props.label}</div>
    </button>
  );
}
