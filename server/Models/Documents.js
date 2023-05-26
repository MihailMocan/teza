import { Schema, Types } from "mongoose";
import mongoose from "mongoose";

const DocumentSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      required: true,
    },
    documents: [
      {
        type: Schema.Types.ObjectId,
        required: true,
        _id: 0,
      },
    ],
  },
  { versionKey: false }
);

export default mongoose.model("documents", DocumentSchema);
