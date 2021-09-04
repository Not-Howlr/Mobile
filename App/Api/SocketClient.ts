import connect from "socket.io-client";

import { Endpoints } from "../Constants/Settings";
import { offline, online } from "../Store/Slices/Online";
import { store } from "../Store/Store";

export interface INewMessage {
	to: string,
	content: string,
	sent: Date
}

export class WebSocket {
	public static online: boolean
	public static io = connect(Endpoints.rtcBaseUrl, { withCredentials: true })

	public static Connect(): void {
		WebSocket.io.connect();
	}

	public static SendMessage(message: INewMessage): void {
		WebSocket.io.emit("send_message", message);
	}
}
interface IMessage {
	from: string,
	content: string,
	sent: Date
}
interface IResponse {
	ok: boolean,
	data: IMessage
}

WebSocket.Connect();
WebSocket.io.on("connect", () => {
	store.dispatch(online(true));
});
WebSocket.io.on("disconnect", () => {
	store.dispatch(offline());
});
WebSocket.io.on("response", (data) => console.log(data));
WebSocket.io.on("recieve_message", (response: IResponse) => {
	const { data } = response;
	console.log(data);
	alert(`${data.from}:\n${data.content}`);
	// ^^ store in redux
});