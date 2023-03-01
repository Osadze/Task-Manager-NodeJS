const getAllTasks = (req, res) => {
  res.send("all tasks");
};

const getSingleTask = (req, res) => {
  res.json({id:req.params.id});
};

const postTask = (req, res) => {
  res.json(req.body)
};

const editTask = (req, res) => {
  res.send("Item Has Been Eddited");
};

const deleteTask = (req, res) => {
  res.send("Item Has Been Deleted");
};

module.exports = {
  getAllTasks,
  getSingleTask,
  postTask,
  editTask,
  deleteTask
};
