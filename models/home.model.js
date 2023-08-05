const mongoose = require("mongoose");

const DB_Url = "mongodb://127.0.0.1:27017/mounasabati";

const placeSchema = mongoose.Schema({
  name: String,
  price: String,
  image: String,
  adress: String,
});
const place = mongoose.model("place", placeSchema);

exports.getplaces = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(DB_Url)
      .then(() => {
        return place.find({});
      })
      .then((places) => {
        mongoose.disconnect();
        resolve(places);
      })
      .catch((err) => {
        mongoose.disconnect();
        reject(err)
      });
  });
};
