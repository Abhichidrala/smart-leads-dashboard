import mongoose, {
  Schema,
  Document,
} from "mongoose";

export interface ILead extends Document {
  name: string;
  email: string;
  status: string;
  source: string;
}

const leadSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
    },

    status: {
      type: String,
      default: "New",
    },

    source: {
      type: String,
      default: "Website",
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model(
  "Lead",
  leadSchema
);