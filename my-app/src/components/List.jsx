import {useState} from 'react';

function List(){
    const [inputTask, setInputTask] = useState("");
    const [tasks, setTasks] = useState([]);
    const [editingId, setEditingId] = useState(null);

    const handleTnputChange = (e) => {
        setInputTask(e.target.value);
    };  
    const addTask = ()=> {
        if(!inputTask.trim()) return;

        if(editingId === null) {
            setTasks(prev => [
                ...prev,
                { id: Date.now(), text: inputTask }
            ]);
        } else {
            setTasks(prev =>
                prev.map(task =>
                    task.id === editingId ? {...task, text:inputTask} : task
                )
            );
            setEditingId(null);
        }
        
        setInputTask("");
    };
    const deleteTask = (id) => {
        setTasks(prev => 
            prev.filter(task =>task.id !== id)
        );
    }
    const editTask = (task) => {
        setInputTask(task.text || "");
        setEditingId(task.id);
    }
    
    return(
        <>
            <div className="input-container">
                <input id="input-task" type="text" value={inputTask} onChange={handleTnputChange} placeholder="Enter a task..."/>
                <button className="btn-add" onClick={addTask}>
                    {editingId === null ? "Add" : "Update"}
                </button>
            </div>
            <div className="list-container">
                <div className="task-container">
                    {
                        tasks.map(task => (
                            <div key={task.id}>
                                <label htmlFor="note" >{task.text}</label>
                                <input type="checkbox" id="note"/>
                                <button onClick={() => deleteTask(task.id)}>Delete</button>
                                <button onClick={() => editTask(task)}>Edit</button>
                            </div>    
                           
                        ))
                       
                    }
                </div>
            </div>
        </>   
    );
}
export default List;