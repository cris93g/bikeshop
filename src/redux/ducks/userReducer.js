import axios from "axios";

const GET_USER = "GET_USER";
const LOG_OUT = "LOG_OUT";
const GET_ALL_PRODUCTS = "GET_ALL_PRODUCTS";
export function getUser() {
	return {
		type: GET_USER,
		payload: axios.get("/me")
	};
}
export function logout() {
	return {
		type: LOG_OUT,
		payload: axios.get("/logout")
	};
}
export function getBikes() {
	return {
		type: GET_ALL_PRODUCTS,
		payload: axios.get(`/api/bikes`)
	};
}
const initialState = {
	user: [],
	isAuthed: false,
	items: []
};

export default function userReducer(state = initialState, action) {
	switch (action.type) {
		case `${GET_USER}_FULFILLED`:
			return {
				...state,
				user: action.payload.data,
				isAuthed: true
			};
		case `${GET_USER}_REJECTED`:
			return {
				...state,
				isAuthed: false
			};

		case `${LOG_OUT}_FULFILLED`:
			return {
				...state,
				user: action.payload.data,
				isAuthed: true
			};
		case `${GET_ALL_PRODUCTS}_PENDING`:
			return { ...state };
		case `${GET_ALL_PRODUCTS}_FULFILLED`:
			return { ...state, items: action.payload.data };
		case `${GET_ALL_PRODUCTS}_REJECTED`:
			return { ...state };
		default:
			return state;
	}
}
