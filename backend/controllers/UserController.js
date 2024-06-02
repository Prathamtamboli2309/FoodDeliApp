import userModel from "../models/UserModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import validator from "validator";

//login user
const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.json({ success: false, message: "User not found" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.json({ success: false, message: "Incorrect password" });
    }

    const token = createToken(user._id);
    res.json({ success: true, token: token });
  } catch (error) {
    console.error(error);
    res.json({ success: false, message: "Server error" });
  }
};

//create token
const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET);
};
//register user
const registerUser = async (req, res) => {
  const { name, password, email } = req.body;
  try {
    //checking is user already exxists
    const exists = await userModel.findOne({ email });
    if (exists) {
      return res.json({ success: false, message: "Email already exists" });
    }
    //validating email format & strog password
    if (!validator.isEmail(email)) {
      return res.json({
        success: false,
        message: "Please enter a valid email",
      });
    }
    //
    if (password.length < 8) {
      return res.json({
        success: false,
        message: "Please Enter A String Password",
      });
    }

    //hashing user passowrd
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    //creating new user
    const newUser = new userModel({
      name: name,
      email: email,
      password: hashedPassword,
    });

    const user = await newUser.save();
    //generating token
    const token = createToken(user._id);

    res.json({ success: true, token: token });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Something went wrong" });
  }
};

export { loginUser, registerUser };
