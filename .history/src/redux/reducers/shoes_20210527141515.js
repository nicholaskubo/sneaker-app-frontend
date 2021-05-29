const initialState = {
  shoes: [],
  user_shoes: [],
  requesting: false
};

const shoes = (state = initialState, action) => {
  switch (action.type) {
      case "START_GETTING_ALL_USER_SHOES_REQUEST":
          return {
              ...state,
              user_shoes: [...state.user_shoes],
              requesting: true
          }
      case "GET_ALL_USER_SHOES":
          return {
              ...state,
              user_shoes: action.user_shoes,
              requesting: false
          }
      case "START_GETTING_ALL_SHOES_REQUEST":
        return {
            ...state,
            shoes: [...state.shoes],
            requesting: true
        }
      case "GET_ALL_SHOES":
        return {
            ...state,
            shoes: action.shoes,
            requesting: false
        }
      case "START_DELETING_USER_SHOE_REQUEST":
          return {
              ...state,
              user_shoes: [...state.user_shoes],
              requesting: true
          }
      case "DELETE_USER_SHOE":
          return {
              ...state,
              user_shoes: state.user_shoes.filter(s => s.id !== action.user_shoe.id),
              requesting: false 
          }
      case "START_ADDING_USER_SHOE_REQUEST":
          return {
                ...state,
                user_shoes: [...state.user_shoes],
                requesting: true
            }
      case "ADD_USER_SHOE":
          return {
                ...state,
                user_shoes: [...state.user_shoes, action.user_shoe,
            requesting: true
        }
      default:
          return state
  }
}

export default shoes;