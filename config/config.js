let backendHost;
let socketUrl;
const apiVersion = 'v0';

const hostname = window && window.location && window.location.hostname;

const protocol = "https";

if (hostname === 'api.otis-test') { // production hostname
    backendHost = `${protocol}://api.otis-test.tech`;
    socketUrl = `${protocol}://socket.otis-test.tech`;
} else if (hostname === '198.58.101.239') {
    backendHost = 'http://172.104.132.185';
} else if (/^qa/.test(hostname)) {
    backendHost = `https://${hostname}`;
} else {
    backendHost = `${protocol}://api.otis-test.tech`;
    socketUrl = `${protocol}://socket.otis-test.tech`;
}

export const API_ROOT = `${backendHost}/api/${apiVersion}`;

export const SOCKET_URL = socketUrl;

