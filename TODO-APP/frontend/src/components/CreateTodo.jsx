export function CreateTodo(){
    const [title, setTitle] = userState("");
    const [description, setDescription] = userState("");

    return <div>
        <input id="title" type="text" placeholder="title" onChange={function(e){
            const value = e.target.value;
            setTitle.target.value;
        }}/> <br /> <br />

        <input id="desc" type="text" placeholder="description" onChange={function(e){
            const value = e.target.value;
            setDescription.target.value;
        }} /> <br /> <br />

        <button onClick={() => {
            fetch("http://localhost:3000/todos", {
                method: "POST",
                body: {
                    title:  
                }
            })
            .then(async function(res){
                const json = await res.json();
                alert("Todo added");
            })
        }}>Add a Task</button>
        
    </div>
}