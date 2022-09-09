//  @desc get all tasks
// @route GET/api/tasks

const getTasks = (req,res)=>{
    res.status(200).json({msg:'Get tasks'})
}

//  @desc create tasks
// @route POST/api/tasks

const createTasks = (req,res)=>{
    console.log(req.body )
    res.status(200).json({msg:'Create tasks'})
}


//  @desc update a specific task
// @route PUT/api/tasks/:id

const updateTask = (req,res)=>{
    res.status(200).json({msg:` Task ${req.params.id} has been updated.`})
}

//  @desc delete a specific task
// @route DELETE/api/tasks/id

const deleteTask = (req,res)=>{
    res.status(200).json({msg:` Task ${req.params.id} deleted.`})
}
module.exports = {
    getTasks,
    updateTask,
    createTasks,
    deleteTask
}


