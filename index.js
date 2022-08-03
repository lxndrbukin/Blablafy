const express = require('express');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = 5000;
app.listen(PORT, console.log(`SERVER IS RUNNING ON PORT ${PORT}`));
