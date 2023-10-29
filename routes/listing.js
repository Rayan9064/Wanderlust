const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const {isloggedIn, isOwner, validateListing} = require("../middleware.js");
const Listing = require("../models/listing.js");
const listingController = require("../controllers/listing.js");
const multer = require('multer');
const {storage} = require("../cloudConfig.js");
const upload = multer({ storage });


router
    .route("/")
    .get(wrapAsync (listingController.index))
    //.post(validateListing, wrapAsync(listingController.createListing));
    .post(
         isloggedIn,
         upload.single("listing[image]"), 
         validateListing,
         wrapAsync(listingController.createListing)
    );

// New Route   
router.get("/new", isloggedIn, listingController.renderNewForm);

router
    .route("/:id")
    .get(wrapAsync (listingController.showListing))
    .put( isloggedIn, isOwner, validateListing, wrapAsync (listingController.updateListing))
    .delete(isloggedIn, isOwner, wrapAsync (listingController.destroyListing));  

// Edit Route
router.get("/:id/edit", isloggedIn, isOwner, wrapAsync (listingController.renderEditForm));

module.exports = router;