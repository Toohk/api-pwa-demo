const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cors = require('cors')

const authRoute = require('./routes/auth');
const folderRoute = require('./routes/folder');
const binderRoute = require('./routes/binder');

dotenv.config();

mongoose.connect(process.env.DB_CONNECT, {useNewUrlParser: true},
() => console.log('connected to db'));

app.use(express.json());

app.use(cors())



app.use('/api/user', authRoute);
app.use('/api/folder', folderRoute);
app.use('/api/binder', binderRoute);



app.listen(3000, () => console.log('Server Up and running'));