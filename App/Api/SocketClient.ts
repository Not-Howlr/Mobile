import { ClientHandler, ServerHandler, INewMessage } from "@not-howlr/types";
import connect from "socket.io-client";

import { Endpoints } from "../Constants/Settings";
import { addMessage } from "../Store/Slices/Messages";
import { offline, online } from "../Store/Slices/Online";
import { store } from "../Store/Store";

export class WebSocket {
	public static online: boolean
	public static io = connect(Endpoints.rtcBaseUrl, {
		withCredentials: true,
		forceNew: true,
		reconnection: true,
		reconnectionDelay: 2000,
		transports: ["websocket"],
	})

	public static Connect(): void {
		WebSocket.io.connect();
	}

	public static SendMessage(message: Partial<INewMessage>): void {
		WebSocket.io.emit(ServerHandler.SEND_MESSAGE, message);
	}
}

interface IResponse {
	ok: boolean,
	data: INewMessage
}

WebSocket.io.on(ClientHandler.CONNECT, () => {
	store.dispatch(online(true));
});
WebSocket.io.on(ClientHandler.DISCONNECT, () => {
	store.dispatch(offline());
});
// WebSocket.io.on(ServerHandler.RESPONSE, (data) => console.log(data));
WebSocket.io.on(ServerHandler.RECIEVE_MESSAGE, (response: IResponse) => {
	const { data } = response;
	store.dispatch(addMessage(data));
});