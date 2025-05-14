const express = require("express");
const router = express.Router();
const { getUsers, deleteUser } = require("../controllers/adminController");
const { verifyAdmin } = require("../middleware/adminAuth");

router.get("/users", verifyAdmin, getUsers);
router.delete("/users/:id", verifyAdmin, deleteUser);

module.exports = router;
