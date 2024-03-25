import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: String,
  address: {
    city: String,
    country: String,
    street: String,
  },
  telephone: {
    type: String,
    validate: {
      validator: function (v) {
        // 9 digits
        return /^\d{9}$/.test(v);
      },
      message: (props) => `${props.value} is not a valid phone number!`,
    },
  },
  households: [{ type: mongoose.Schema.Types.ObjectId, ref: "Household" }],
});

const User = mongoose.model("User", userSchema);

export default User;
