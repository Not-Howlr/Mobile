import connect from "socket.io-client";

import { Endpoints } from "../Constants/Settings";

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

WebSocket.Connect();
WebSocket.io.on("connect", () => WebSocket.online = true);
WebSocket.io.on("disconnect", () => WebSocket.online = false);
WebSocket.io.on("response", (data) => console.log(data));