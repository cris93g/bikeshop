import axios from "axios";

const SET_TOTAL = "SET_TOTAL";
const GET_USER = "GET_USER";
const LOG_OUT = "LOG_OUT";
const GET_ALL_PRODUCTS = "GET_ALL_PRODUCTS";
const GET_MENS_BIKES = "GET_MENS_BIKES";
const GET_WOMENS_BIKES = "GET_WOMENS_BIKES";
const GET_KIDS_BIKES = "GET_KIDS_BIKES";

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

// export function setTotal(total) {
//   return { type: SET_TOTAL, payload: total };
// }
const setTotal = (state, payload) => {
	const newState = {};
	Object.assign(newState, state, { total: payload });
	return newState;
};
const initialState = {
	user: [],
	isAuthed: false,
	items: [],
	total: 0
};

export default function userReducer(state = initialState, action) {
	switch (action.type) {
		case SET_TOTAL:
			return setTotal(state, action.payload);
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
			return state;
	}
}
