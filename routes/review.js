const express = require("express");
const router = express.Router({ mergeParams: true });
const wrapAsync = require("../utils/wrapAsync.js");
const Review = require("../models/reviews.js");
const Listing = require("../models/listing.js");
const {validateReview, isloggedIn} = require("../middleware.js");

const reviewController = require("../controllers/review.js");

// Post Route
router.post("/", isloggedIn, validateReview, wrapAsync(reviewController.createReview));

// Delete Review Route
router.delete("/:reviewId",
wrapAsync(reviewController.destroyReview));

module.exports = router;