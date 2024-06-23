import { Task } from "../models/task.js";

export const createTask = async (req, res) => {
  const { title, description } = req.body;
  try {
    const newTask = await Task.create({
      title,
      description,
    });
    res.json(newTask);
  } catch (error) {
    return res.status(500).json({
      message: "Error: " + error.message,
    });
  }
};

export const getTasks = async (req, res) => {
  try {
    const tasks = await Task.findAll();
    res.json(tasks);
  } catch (error) {
    return res.status(500).json({
      message: "Error: " + error.message,
    });
  }
};

export const getTaskById = async (req, res) => {
  const { id } = req.params;
  try {
    const task = await Task.findByPk(id);

    if (!task) {
      return res.status(404).json({
        message: `Task with id ${id} not found`,
      });
    }

    res.json(task);
  } catch (error) {
    return res.status(500).json({
      message: "Error: " + error.message,
    });
  }
};

export const updateTask = async (req, res) => {
  const { id } = req.params;
  const { title, description } = req.body;
  try {
    const task = await Task.findByPk(id);

    if (!task) {
      return res.status(404).json({
        message: `Task with id ${id} not found`,
      });
    }

    task.title = title;
    task.description = description;

    await task.save();

    res.json(task);
  } catch (error) {
    return res.status(500).json({
      message: "Error: " + error.message,
    });
  }
};

export const deleteTask = async (req, res) => {
  const { id } = req.params;
  try {
    const task = await Task.destroy({
      where: {
        id,
      },
    });

    if (task === 0) {
      return res.status(404).json({
        message: `Task with id ${id} not found`,
      });
    }

    res.json({
      message: `Task with id ${id} was deleted`,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Error: " + error.message,
    });
  }
};
