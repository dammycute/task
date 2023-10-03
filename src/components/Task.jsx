const Task = ({ task, onDelete }) => {
    return (
        <>
        <div className="task">
            <span>{task.name}</span>
            <span>{task.dueDate}</span>
            <button onClick={() => onDelete(task.id)}>Delete</button>
           
        </div>
         <hr />
        </>
    );
}

export default Task;



