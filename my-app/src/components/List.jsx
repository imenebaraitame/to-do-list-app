import {useState} from 'react';

function List(){
    const [inputTask, setInputTask] = useState("");
    const [tasks, setTasks] = useState([]);
    const [editingId, setEditingId] = useState(null);
    const [darkMode, setDarkMode] = useState(false);

    const handleTnputChange = (e) => {
        setInputTask(e.target.value);
    };  
    const addTask = ()=> {
        if(!inputTask.trim()) return;

        if(editingId === null) {
            setTasks(prev => [
                ...prev,
                { id: Date.now(), text: inputTask , completed: false}
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
    };

    const editTask = (task) => {
        setInputTask(task.text || "");
        setEditingId(task.id);
    };

    const toggleCompleted = (id) => {
        setTasks(prev =>
            prev.map(task =>
                task.id === id ? { ...task, completed: !task.completed } : task
            )
        );
    };
    
    const toggleMode = () => {
        setDarkMode(prev => !prev);
    };
    
    return(
        <>
            <div className={darkMode ? "dark" : "light"}>
                <div className="todo-wrapper">
                    <h1 className='title'>TODO LIST</h1>
                    <div className="input-container">
                        <input type="text" value={inputTask} onChange={handleTnputChange} placeholder="Enter a task..."/>
                        <button className="btn-add" onClick={addTask}>
                            {editingId === null ? "Add" : "Update"}
                        </button>
                        
                        <button className="toggle-btn" onClick={toggleMode}>
                            <i className={darkMode ? "fa-solid fa-sun" : "fa-solid fa-moon"}></i>
                        </button>
                    </div>
                
                    <div className="task-container">
                        {
                            tasks.map(task => (
                                <div key={task.id} className="task-item">
                                    
                                    <div className="checkbox-wrapper-1">
                                        <input id="checkbox-filled-1" className="checkbox-1" type="checkbox" checked={task.completed} onChange={() => toggleCompleted(task.id)}/>
                                        <label htmlFor="checkbox-filled-1"  className="task-text" id={task.completed ? "completed" : ""}>
                                            {task.text}
                                        </label>
                                    </div>  
                                
                                    <div className='button-container'>
                                        <span className='btn-update' onClick={() => deleteTask(task.id)}><i class="fa-solid fa-trash-can"></i></span>
                                        <span className='btn-update' onClick={() => editTask(task)}><i class="fa-solid fa-pen"></i></span>
                                    </div>
                                    
                                </div>     
                            )) 
                        }
                    </div>
                </div>
            </div>
            
        </>   
    );
}
export default List;