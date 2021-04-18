import React, { useState } from 'react';
import TaskCard from '../components/taskCard';

const TaskBoard = () => {
    const [tasks, setTasks] = useState([
        {
            id: 1,
            title: 'test',
            description: 'desc test',
        },
        {
            id: 2,
            title: 'test2',
            description: 'desc test2',
        },
    ]);


    const txtChangeHanldler = (e, type, id) => {
        const index = tasks.findIndex(task => task.id === id)
        const newArr = [...tasks]
        newArr[index] = {
            ...tasks[index],
            [type]: e.target.value
        }
        setTasks(newArr)
    }

    const addTask = () => {
        const newArr = [...tasks]
        newArr.push({ id: Math.random(), title: '???', description: '???' })
        setTasks(newArr)
    }

    const deleteTask = (id) => {
        const newArr = [...tasks]
        const index = tasks.findIndex(task => task.id === id)
        newArr.splice(index, 1)
        console.log(newArr)
        setTasks(newArr)
    }

    return (
        <div className="container mx-auto m-1" >
            <button onClick={addTask} className="focus:outline-none text-white text-sm py-2.5 px-5 rounded-md bg-blue-500 hover:bg-blue-600 hover:shadow-lg m-0.5 object-right-top" >Ajouter une task</button>
            <div className="flex flex-col space-y-2" >
                {tasks.map((task) => <TaskCard {...task} key={task.id} onChange={txtChangeHanldler} onDelete={() => deleteTask(task.id)} />)}
            </div>
        </div>
    );
};

export default TaskBoard;
