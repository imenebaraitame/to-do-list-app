import {useState} from 'react';

function List(){
    const [inputTask, setInputTask] = useState("");
    const [tasks, setTasks] = useState([]);

    const handleTnputChange = (e) => {
        setInputTask(e.target.value);
    };  
    const addTask = ()=> {
        setTasks(prev => [
            ...prev,
            { id: Date.now(), text: inputTask }
        ]);
        setInputTask("");
    };
    const deleteTask = (id) => {
        setTasks(prev => 
            prev.filter(task =>task.id !== id)
        );
    }
    
    return(
        <>
            <div className="input-container">
                <input id="input-task" type="text" value={inputTask} onChange={handleTnputChange}/>
                <button className="btn-add" onClick={addTask}>Add</button>
            </div>
            <div className="list-container">
                <div className="task-container">
                    {
                        tasks.map(task => (
                            <div key={task.id}>
                                <label htmlFor="note" >{task.text}</label>
                                <input type="checkbox" id="note"/>
                                <button onClick={() => deleteTask(task.id)}>Delete</button>
                            </div>    
                           
                        ))
                       
                    }
                </div>
            </div>
        </>   
    );
}
export default List;