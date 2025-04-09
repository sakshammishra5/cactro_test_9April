const router=require('express').Router();
const { addTask, getTasks, updateTask, deleteTask } = require('../controllers/task');
const auth=require("../middleware/verifyuser");
const { body, validationResult } = require('express-validator');

router.post('/addtask',[auth,body('title', 'Title is required').notEmpty(),
body('description', 'Description must be a string').optional().isString()
],addTask);

router.get('/gettasks',auth,getTasks);

router.put('/updatetask/:id',[
    auth,
    body('title', 'Title is required').optional().notEmpty(),
    body('description', 'Description must be a string').optional().isString(),
    body('status', 'Status must be pending, in-progress, or completed').optional().isIn(['pending', 'in-progress', 'completed'])
  ],updateTask);

router.delete('/deletetask/:id',auth,deleteTask);



module.exports=router;
