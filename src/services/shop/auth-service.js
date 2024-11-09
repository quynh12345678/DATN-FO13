import { getMethod, postMethod, putMethod } from "../api-service"

export const Auth_Service = {
	login: async (data) => {
		return await postMethod('login', data);
	},
	register: async (data) => {
		return await postMethod('register', data);
	},
	
}
