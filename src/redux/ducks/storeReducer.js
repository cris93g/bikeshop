import axios from "axios";

const GET_ALL_PRODUCTS = "GET_ALL_PRODUCTS";

export function getBikes() {
	return {
		type: GET_ALL_PRODUCTS,
		payload: axios.get(`/api/bikes`)
	};
}

// export function getYourProduct(){
// 	return{
// 		type:
// 	}
// }

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
		default:
			return console.log(state);
	}
}
