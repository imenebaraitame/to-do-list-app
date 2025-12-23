import {useState} from 'react';

function List(){
    const [inputTask, setInputTask] = useState("");
    const [tasks, setTasks] = useState([]);

    const handleTnputChange = (e) => {
        setInputTask(e.target.value);
    };  
    const addTask = ()=> {
        const arryTask = [...tasks, inputTask];
        setTasks(arryTask);
        setInputTask("");
    };
    
    return(
        <>
            <div className="input-container">
                <input id="input-task" type="text" value={inputTask} onChange={handleTnputChange}/>
                <button id="btn-Add" onClick={addTask}>Add</button>
            </div>
            <div className="list-container">
                <div className="task-container">
                    {
                        tasks.map((task,index) => (
                            <p id="task-info" key={index}>{task}</p>
                        ))
                    }
                    
                </div>
            </div>
        </>   
    );
}
export default List;