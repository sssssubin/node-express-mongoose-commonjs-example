const express = require("express");
const {
  createTask,
  getTasks,
  editTask,
  deleteTask,
} = require("../controllers/task.controller");
const router = express.Router();

router.get("/", getTasks);
router.post("/", createTask);
router.put("/:id", editTask);
router.delete("/:id", deleteTask);

module.exports = router;
