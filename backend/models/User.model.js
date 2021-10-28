const crypto = require("crypto");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        // required: [false, "Please provide email address"],
        unique: true,
        match: [
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            "Please provide a valid email",
        ],
    },
    password: {
        type: String,
        // required: [true, "Please add a password"],
        minlength: 6,
        select: false,
    },

    // Oauth
    facebookId: {
        type: String,
        required: false,
        unique: true
    },
    googleId: {
        type: String,
        required: false,
        unique: true
    },
    twitterId: {
        type: String,
        required: false,
        unique: true
    },
    lineId: {
        type: String,
        required: false,
        unique: true
    },
    // User Info
    status: {
        type: String,
        required: [true, "Please provide user status"],
        default: "enable"
    },
    name: {
        type: String,
        required: [true, "Please provide username"],
    },
    authorities: {
        type: String,
        required: [true, "Please authority to this user"],
        default: "customer"
    },
    coins: {
        type: Number,
        required: [true, "Please provide coins to this user"],
        default: 0
    },
    address: {
        type: Array,
        default: [
            {
                addrName: "home",
                addrInfo: "1212121"
            },
            {
                addrName: "now",
                addrInfo: "22222"
            },
        ]
    },
    join: {
        type: Date,
        required: true,
        default: Date.now()
    },
    token_reset_password: String,
    token_reset_password_exp: Date,
});

UserSchema.pre("save", async function (next) {
    if (!this.isModified("password")) {
        next();
    }

    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

UserSchema.methods.matchPassword = async function (password) {
    return await bcrypt.compare(password, this.password);
};

UserSchema.methods.getSignedJwtToken = function () {
    return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRE,
    });
};

UserSchema.methods.getResetPassToken = function () {
    const resetToken = crypto.randomBytes(20).toString("hex");

    // Hash token (private key) and save to database
    this.token_reset_password = crypto
        .createHash("sha256")
        .update(resetToken)
        .digest("hex");

    // Set token expire date
    this.token_reset_password_exp = Date.now() + 10 * (60 * 1000); // Ten Minutes

    return resetToken;
};

const User = mongoose.model("User", UserSchema);

module.exports = User;