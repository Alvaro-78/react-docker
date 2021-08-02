import { LOGIN, LOGOUT } from '../types/userType'


const initialState = {
	user: {},
};

const userReducer = (state = initialState, action) => {

	switch (action.type) {

		case LOGIN:
			return {
				...state,
				user: action.payload.user,
			}

		case LOGOUT:
			return {
				...state,
				user: initialState
			}
		default:
			return state;
	}
};

export default userReducer;