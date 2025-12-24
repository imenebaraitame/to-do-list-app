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
                                <label htmlFor={`task-${task.id}`} >{task.text}</label>
                                <input type="checkbox" id={`task-${task.id}`}/>
                            </div>    
                           
                        ))
                    }
                    
                </div>
            </div>
        </>   
    );
}
export default List;