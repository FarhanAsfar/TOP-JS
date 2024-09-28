export function CreateTodo(){

    return <div>
        <input type="text" placeholder="title" /> <br /> <br />
        <input type="text" placeholder="description" /> <br /> <br />

        <button onClick={() => {
            fetch("http://localhost:3000/todos")
            .then(async function(res){
                
            })
        }}>Add a Task</button>
        
    </div>
}