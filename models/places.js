// module.exports = [
//   {
//     name: "Healthy Snacks",
//     city: "Las Vegas",
//     state: "NV",
//     cuisines: "Tropical, Dessert",
//     pic: "/images/kiwi-n-nuts-snack.jpg",
//   },
//   {
//     name: "Refreshing Alternatives",
//     city: "Las Vegas",
//     state: "NV",
//     cuisines: "Fruits",
//     pic: "/images/milk-n-fruits.jpg",
//   },
// ];

const mongoose = require("mongoose");

const placeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  pic: String,
  cuisines: { type: String, required: true },
  city: { type: String, default: "Anytown" },
  state: { type: String, default: "USA" },
  founded: Number,
});

placeSchema.methods.showEstablished = function () {
  return `${this.name} has been serving ${this.city}, ${this.state} since ${this.founded}.`;
};

module.exports = mongoose.model("Place", placeSchema);
