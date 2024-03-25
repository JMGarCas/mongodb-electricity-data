import mongoose from "mongoose";

const { Schema } = mongoose;

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  energies: [{ type: Schema.Types.ObjectId, ref: "Energy" }],
});

const User = mongoose.model("User", userSchema);

export default User;
