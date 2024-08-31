// 4. 기능 개발 준비
const Task = require("../models/Task");

const taskController = {};

// 5. 할일 추가하기 기능 개발
taskController.createTask = async (req, res) => {
  try {
    const { task, isComplete } = req.body;
    const newTask = new Task({ task, isComplete });
    await newTask.save();
    return res.status(200).json({ status: "ok", data: newTask });
  } catch (error) {
    res.status(400).json({ status: "fail", error });
  }
};

// 6. 할일 가져오기 만들기
taskController.getTasks = async (req, res) => {
  try {
    const tasks = await Task.find();

    if (!tasks) {
      return res
        .status(404)
        .json({ status: "fail", message: "Task not found" });
    }

    return res.status(200).json({ status: "ok", data: tasks });
  } catch (error) {
    res.status(400).json({ status: "fail", error });
  }
};

// 7. 할일 수정하기 만들기
taskController.editTask = async (req, res) => {
  try {
    const { id } = req.params;
    const { task, isComplete } = req.body;
    const updatedTask = await Task.findByIdAndUpdate(
      id,
      { task, isComplete },
      { new: true }
    );

    if (!updatedTask) {
      return res
        .status(404)
        .json({ status: "fail", message: "Task not found" });
    }

    return res.status(200).json({ status: "ok", data: updatedTask });
  } catch (error) {
    res.status(400).json({ status: "fail", error });
  }
};

// 8. 할일 삭제하기 만들기
taskController.deleteTask = async (req, res) => {
  try {
    const deletedTask = await Task.findByIdAndDelete(req.params.id);

    if (!deletedTask) {
      return res
        .status(404)
        .json({ status: "fail", message: "Task not found" });
    }

    return res
      .status(200)
      .json({ status: "ok", message: "Task deleted successfully" });
  } catch (error) {
    res.status(400).json({ status: "fail", error });
  }
};

module.exports = taskController;
