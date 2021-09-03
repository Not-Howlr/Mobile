const host = "192.168.1.3";
const port = "8888";

const rtcHost = "192.168.1.3";
const rtcPort = "6969";

export const Endpoints = {
	baseUrl: `http://${host}:${port}/api/v1/`,
	// rtcBaseUrl: `http://${rtcHost}:${rtcPort}/socket.io/socket.io.js`,
	rtcBaseUrl: `http://${rtcHost}:${rtcPort}`,
};