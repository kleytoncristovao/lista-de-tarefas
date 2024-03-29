import React from 'react';
import {CgClose, CgInfo} from 'react-icons/cg'
import { useHistory } from "react-router-dom";

import "./Task.css"

const Task = ({ task, handleTaskClick, handleTaskDeletion }) => {
    const history = useHistory();

    const handleTaskDetailsClick = () => {
        history.push(`/${task.title}`);
        window.location.reload();
    }

    return (
         <div className='task-container' style={task.completed ? {borderLeft: '6px solid rgb(114, 187, 236)'} : {}} >

        <div className='task-title' onClick={() => handleTaskClick(task.id)}>
            {task.title}
        </div>

        <div className='buttons-container'>
            <button className='remove-task-button' onClick={() => handleTaskDeletion(task.id)}> <CgClose/> </button>
            
            <button className='see-task-details-button' onClick={handleTaskDetailsClick} > 
            <CgInfo/> 
            </button>
        </div>
    </div>
    )
}
 
export default Task;