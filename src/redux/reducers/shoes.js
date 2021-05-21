const initialState = {
  shoes: [],
};

const shoes = (state = initialState, action) => {
  switch (action.type) {
    case "GETSHOES":
      return { shoes: action.payload };
    default:
      return state;
  }
};

export default shoes