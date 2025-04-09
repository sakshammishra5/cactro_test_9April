const { validationResult } = require("express-validator");
const Task = require("../models/taskSchema");

exports.addTask = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const { title, description } = req.body;
    try {
        const newTask = new Task({
            title,
            description,
            user: req.user.id // Associate task with the authenticated user
        });

        const task = await newTask.save();
        res.status(201).json(task);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
}


exports.getTasks = async (req, res) => {
    try {
        const tasks = await Task.find({ user: req.user.id });
        res.status(200).json(tasks);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
}


exports.updateTask = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { title, description, status } = req.body;
    try {
        const task = await Task.findById(req.params.id);
        if (!task) {
            return res.status(404).json({ msg: "Task not found" });
        }
        task.title = title;
        task.description = description;
        task.status = status;
        await task.save();
        res.status(200).json(task);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
}


exports.deleteTask = async (req, res) => {
    try {
        const task = await Task.findById(req.params.id);
        if (!task) {
            return res.status(404).json({ msg: "Task not found" });
        }
        await task.deleteOne();
        res.status(200).json({ msg: "Task deleted" });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
}