const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

// * bcrypt is a password hashing function designed for secure password storage. When you create a new account on a website, your password should not be stored in plain text for security reasons. Instead, the website stores a hashed version of your password using bcrypt.

// ! Hashing: When you create a password, bcrypt converts it into a fixed-length string of characters (called a hash) that doesn’t resemble the original password.

// ! Salting: bcrypt adds a random string of characters (called a salt) to your password before hashing it. This ensures that even if two users have the same password, their hashes will be different.

// ! Comparison: When you log in, bcrypt hashes the password you enter and compares it to the stored hash. If they match, the login is successful.

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

// Encrypt password before saving the user
UserSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  }
  const salt = await bcrypt.genSalt(10)
  this.password = await bcrypt.hash(this.password, salt)
});
