import {useState} from 'react';

function List(){
    const [inputTask, setInputTask] = useState("");
    const [addedTask, setAddedTask] = useState("");

    const handleTnputChange = (e) => {
        setInputTask(e.target.value);
    };  
    const addTask = ()=> {
        setAddedTask(inputTask);
        setInputTask("");
    }

    return(
        <>
            <div className="input-container">
                <input id="input-task" type="text" value={inputTask} onChange={handleTnputChange}/>
                <button id="btn-Add" onClick={addTask}>Add</button>
            </div>
            <div className="list-container">
                <div className="task-container">
                    <p id="task-info">Task:{addedTask}</p>
                </div>
            </div>
        </>   
    );
}
export default List;