import React, { useState } from 'react'

const Todo = () => {
    const [task, setTask] = useState([])
    const [edit, setEdit] = useState(false)
    const [editIndex, setEditIndex] = useState(null)
    const [editedTask, setEditedTask] = useState([])
    console.log(editedTask, "editedTask");

    const handleAddTask = (e) => {
        e.preventDefault()
        const newTask = {
            description: e.target.description.value,
            priority: e.target.priority.value
        }
        setTask([...task, newTask])
        e.target.reset()
    }

    const handleDeleteTask = (i) => {
        // setTask(task.filter((task, index) => index !== i))
        const newTask = ([...task])
        newTask.splice(i, 1)
        setTask(newTask)
    }

    const handleEdit = (i) => {
        setEdit(true)
        setEditIndex(i)
        setEditedTask(task[i])
        // setEditedTask({
        //     description: task[i].description,
        //     priority: task[i].priority
        // })
    }

    const handleSubmitEdit = (e) => {
        e.preventDefault()
        const newTask = [...task]
        newTask[editIndex] = editedTask
        setTask(newTask)
        setEdit(false)
    }

    return (
        <>

            {edit ? <>
                <form onSubmit={handleSubmitEdit}>
                    <label>Description</label>
                    <input name="description" type="text" value={editedTask.description} onChange={(e) => setEditedTask({ ...editedTask, description: e.target.value })} />
                    <label>Priority</label>
                    <select name="priority" value={editedTask.priority} onChange={(e) => setEditedTask({ ...editedTask, priority: e.target.value })}>
                        <option value="high">High</option>
                        <option value="low">Low</option>
                        <option value="medium">Medium</option>
                    </select>
                    <button type="submit">Save Edit</button>
                </form>
            </> : <>
                <form onSubmit={handleAddTask}>
                    <label>Description</label>
                    <input name="description" type="text" value={task.description} />
                    <label>Priority</label>
                    <select name="priority" value={task.priority}>
                        <option value="high">High</option>
                        <option value="Low">Low</option>
                        <option value="medium">Medium</option>
                    </select>
                    <button type="submit">Add Task</button>

                </form>

            </>}
            <ul>
                {task.map((task, i) => {
                    return (
                        <li key={i}>
                            {/* {edit && editIndex === i ? (
                                <form onSubmit={handleSubmitEdit}>
                                    <label>Description</label>
                                    <input name="description" type="text" value={editedTask.description} onChange={(e) => setEditedTask({ ...editedTask, description: e.target.value })} />
                                    <label>Priority</label>
                                    <select name="priority" value={editedTask.priority} onChange={(e) => setEditedTask({ ...editedTask, priority: e.target.value })}>
                                        <option value="high">High</option>
                                        <option value="low">Low</option>
                                        <option value="medium">Medium</option>
                                    </select>
                                    <button type="submit">Save</button>
                                </form>
                            ) : <>
                            </>} */}
                            <div>Description:{task.description}</div>
                            <div>Priority:{task.priority}</div>
                            <button onClick={() => handleDeleteTask(i)}>handleDelete</button>
                            <button onClick={() => handleEdit(i)}>Edit</button>

                        </li>
                    )
                })}
            </ul>
        </>
    )
}

export default Todo