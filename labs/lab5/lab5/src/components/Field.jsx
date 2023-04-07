export default function Field(props) {
  return (
    <div className="Field">
      <div className="Field__Label">{props.label}</div>
      <input
        value={props.value}
        onChange={props.onChange}
        className="Field__Input"
        pettern={props.pattern}
        required
      />
      <div className="Field__HelperMessage">{props.helperMsg}</div>
    </div>
  );
}
