
const { default: axious} = require("axios");

export const clientServer = axious.create({
    baseURL: "http://localhost:9090"
});

export default clientServer;