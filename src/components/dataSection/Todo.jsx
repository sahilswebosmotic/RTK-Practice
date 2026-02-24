import React from 'react'

const Todo = ({
    state
}) => {
    return (
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
            {state.todo.data && state.todo.data.length > 0 ? (
                <div>
                    {state.todo.data.map((todo) => (
                        <li key={todo.id} style={{ margin: "10px 0", fontSize: "16px" }}>
                            {todo.title}
                        </li>
                    ))}
                </div>
            ) : (
                <p style={{ fontSize: "18px", color: "#999", marginTop: "50px" }}>
                    Click "Fetch Todos" to load data
                </p>
            )}
        </div>
    )
}

export default Todo