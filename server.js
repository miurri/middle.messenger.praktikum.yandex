const express = require("express");

const app = express();
const DEFAULT_PORT = 3000;
const port = process.env.PORT || DEFAULT_PORT;

app.use(express.static(`${__dirname}/dist`));

app.get("*", function (request, response) {
	response.sendFile(`${__dirname}/dist/index.html`);
});

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
