import {
  REMOVE_ITEM,
  FETCH_PHONES,
  ADD_ONE_ITEM,
  REMOVE_ONE_ITEM
} from "../actions";
const initialState = {
  phones: [],
  loading: false
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PHONES:
      return {
        phones: action.phones,
        loading: false
      };
    case "LOADING":
      return {
        ...state,
        loading: true
      };
    case REMOVE_ITEM:
      return {
        ...state,
        phones: state.phones.filter(obj => obj.id !== action.id)
      };
    case ADD_ONE_ITEM:
      return {
        ...state,
        phones: state.phones.map(phone => {
          if (phone.id === action.id) {
            phone.count++;
            phone.total = (phone.count + 1) * phone.price;
          }
          return phone;
        })
      };
    case REMOVE_ONE_ITEM:
      return {
        ...state,
        phones: state.phones.map(phone => {
          if (phone.id === action.id) {
            phone.count--;
          }
          return phone;
        })
      };
    default:
      return state;
  }
};

export default appReducer;
