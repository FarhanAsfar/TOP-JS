import TodoItem from "./TodoItem"
import styles from "./TodoItem.module.css"

const TodoItems({ todoItems }) => {
    return (
        <div className={styles.itemsContainer}>
            <div className="col-6">{todoName}</div>
            <div className="col-4">{todoDate}</div>

            <div>
                <button type="button" className="btn">Delete</button>
            </div>
        </div>
    );
}

export default TodoItems;