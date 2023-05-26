import { Schema } from "mongoose";
import mongoose from "mongoose";

const ServicesSchema = new Schema(
  {
    serviceName: {
      type: String,
      required: true,
      unique: true,
    },
    description: {
      type: String,
    },
  },
  { versionKey: false }
);

export default mongoose.model("services", ServicesSchema);
