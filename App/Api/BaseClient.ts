import { create } from "apisauce";

import { Endpoints } from "../Constants/Settings";

export class Api {
	public static readonly client = create({
		baseURL: Endpoints.baseUrl,
		headers: {
			APPCODE: "somesecret",
			APPSUBSCRIPTION: "clientsecretvalue"
		}
	})
}