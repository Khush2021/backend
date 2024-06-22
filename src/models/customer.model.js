import mongoose from "mongoose";
import validator from "validator";

const customerSchema = mongoose.Schema(
  {
    fname: {
      type: String,
      required: [true, "Please provide your first name."],
    },
    mname: {
      type: String,
      required: false,
    },
    lname: {
      type: String,
      required: [true, "Please provide your last name."],
    },
    dob: {
      type: String,
      required: [true, "Please provide your date of birth."],
    },
    homeAddress: {
      type: String,
      required: [true, "Please provide your home address."],
    },
    sixMonthAddressFlag: {
      type: Boolean,
      required: [
        true,
        "Please specify if you have lived at the home address for less than 6 months.",
      ],
    },
    previousAddress: {
      type: String,
      required: function () {
        return this.sixMonthAddressFlag === true;
      },
    },
  },
  {
    collection: "customers",
    timestamps: true,
  }
);

const CustomerModel =
  mongoose.models.CustomerModel ||
  mongoose.model("CustomerModel", customerSchema);

export default CustomerModel;
