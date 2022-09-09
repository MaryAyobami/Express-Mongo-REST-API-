const express = require('express')
const router = express.Router()

const {getTasks,createTasks,updateTask,deleteTask} = require('../controllers/taskControllers')

// // get request
// router.get('/', getTasks)
// // post request
// router.post('/', createTasks)

// // update 
// router.put('/:id', updateTask)

// // delete
// router.delete('/:id', deleteTask)

//get and post
router.route('/').get(getTasks).post(createTasks)

// update and delete
router.route('/:id').put(updateTask).delete(deleteTask)

module.exports = router