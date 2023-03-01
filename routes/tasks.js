const express = require("express");
const router = express.Router();

const {
  getAllTasks,
  getSingleTask,
  postTask,
  editTask,
  deleteTask,
} = require("../controllers/tasks");

router.route("/").get(getAllTasks).post(postTask);
router.route("/:id").get(getSingleTask).patch(editTask).delete(deleteTask);

module.exports = router;
