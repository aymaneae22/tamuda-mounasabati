const mongoose = require('mongoose')
const DB_Url = "mongodb://127.0.0.1:27017/mounasabati";
mongoose.connect((DB_Url), () => console.log('mongodb connect successfuly'))
const Schema = mongoose.Schema;
const userSchema = new Schema({
  googleId: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  photo: {
    type: String,
    required: true,
  },
});
module.exports = mongoose.model("user", userSchema);