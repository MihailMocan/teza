import { Schema } from "mongoose";
import mongoose from "mongoose";

const PassportSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      required: true,
      unique: true,
    },
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    birthday: {
      type: Date,
      required: true,
    },
    nationality: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    idnp: {
      type: String,
      required: true,
    },
    series: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: new Date(),
    },
    expiredAt: {
      type: Date,
      required: true,
    },
  },
  { versionKey: false }
);

export default mongoose.model("passport", PassportSchema);
