import { CustomerModel } from "../models/index.js";
export const onboard = async (req, res, next) => {
  try {
    const {
      fname,
      mname,
      lname,
      dob,
      homeAddress,
      sixMonthAddressFlag,
      previousAddress,
    } = req.body;
    const newUser = await new CustomerModel({
      fname,
      mname,
      lname,
      dob,
      homeAddress,
      sixMonthAddressFlag,
      previousAddress,
    }).save();

    res.json({
      ApplicationId: newUser._id,
      Description: "Customer has been registered Successfully.",
      OnlineCredentialsCreated: false,
      status: "success",
    });
  } catch (error) {
    next(error);
  }
};
