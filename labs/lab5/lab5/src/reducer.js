export const initialState = {
  email: "",
  pass: "",
  emailHelper: "",
  passHelper: ""
};

export function reducer(state, action) {
  switch (action.type) {
    case "SET_EMAIL":
      return {
        ...state,
        email: action.payload
      };

    case "SET_PASS":
      return {
        ...state,
        pass: action.payload
      };

    case "SET_EMAIL_HELPER":
      return {
        ...state,
        emailHelper: action.payload
      };

    case "SET_PASS_HELPER":
      return {
        ...state,
        passHelper: action.payload
      };

    default:
      return state;
  }
}
