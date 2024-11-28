function TodoItem({ todoName, todoDate }){
    return (
        <div>
            <div className="col-6">{todoName}</div>
            <div className="col-4">{todoDate}</div>

            <div>
                <button type="button" className="btn">Delete</button>
            </div>
        </div>
    )
}

export default TodoItem;