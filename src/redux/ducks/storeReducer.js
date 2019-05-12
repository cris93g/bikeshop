import axios from "axios";

const GET_ALL_PRODUCTS = "GET_ALL_PRODUCTS";
const GET_MENS_BIKES = "GET_MENS_BIKES";
const GET_WOMENS_BIKES = "GET_WOMENS_BIKES";
const GET_KIDS_BIKES = "GET_KIDS_BIKES";

export function getBikes() {
  return {
    type: GET_ALL_PRODUCTS,
    payload: axios.get(`/api/bikes`)
  };
}
export function getMensBikes() {
  return {
    type: GET_MENS_BIKES,
    payload: axios.get(`/api/mens`)
  };
}
export function getWomensBikes() {
  return {
    type: GET_WOMENS_BIKES,
    payload: axios.get(`/api/womens`)
  };
}
export function getKidsBikes() {
  return {
    type: GET_KIDS_BIKES,
    payload: axios.get(`/api/kids`)
  };
}

const initialState = {
  items: [],
  error: ""
};
export default function storeReducer(state = initialState, action) {
  switch (action.type) {
    case `${GET_ALL_PRODUCTS}_PENDING`:
      return { ...state };
    case `${GET_ALL_PRODUCTS}_FULFILLED`:
      return { ...state, items: action.payload.data };
    case `${GET_ALL_PRODUCTS}_REJECTED`:
      return { ...state };

    case `${GET_MENS_BIKES}_PENDING`:
      return { ...state };
    case `${GET_MENS_BIKES}_FULFILLED`:
      return { ...state, items: action.payload.data };
    case `${GET_MENS_BIKES}_REJECTED`:
      return { ...state };

    case `${GET_WOMENS_BIKES}_PENDING`:
      return { ...state };
    case `${GET_WOMENS_BIKES}_FULFILLED`:
      return { ...state, items: action.payload.data };
    case `${GET_WOMENS_BIKES}_REJECTED`:
      return { ...state };

    case `${GET_KIDS_BIKES}_PENDING`:
      return { ...state };
    case `${GET_KIDS_BIKES}_FULFILLED`:
      return { ...state, items: action.payload.data };
    case `${GET_KIDS_BIKES}_REJECTED`:
      return { ...state };
    default:
      return console.log(state);
  }
}
