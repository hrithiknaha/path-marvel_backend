const express = require("express");

const app = express();
console.log("Server");

app.use("/", require("./routes/Feed"));
app.use("/details", require("./routes/FeedDetails"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running on ${PORT}`));
