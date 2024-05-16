import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import bookRoute from './routes/book.route.js';
import userRoute from './routes/user.route.js';
import core from 'cors';


dotenv.config();
const app = express();
app.use(core());
app.use(express.json());
const uri = "mongodb://localhost:27017/bookstore";

const PORT = process.env.PORT || 4000;

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error', error);
  });



 ////// define routes
 
 app.use("/book", bookRoute)
 app.use("/user", userRoute)

app.listen(PORT, (err) => {
    console.error(err)
  console.log(`Server is running on port ${PORT}`);
});
