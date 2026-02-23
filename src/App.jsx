import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { fetchTodos } from "./redux/slice/todo";
import { fetchPosts } from "./redux/slice/post";

function App() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  const cardStyle = {
    width: "300px",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
    overflow: "hidden",
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#fff",
    transition: "0.3s",
    margin: "20px",
  };


  const containerStyle = {
    padding: "16px",
  };

  const titleStyle = {
    margin: "0 0 10px 0",
    fontSize: "20px",
    color: "#333",
  };

  const textStyle = {
    fontSize: "14px",
    color: "#666",
    lineHeight: "1.5",
  };
  if (state.todo.isLoading) {
    return <h1>Loading...</h1>;
  }
  return (
    <>
      <div>
        <button onClick={() => dispatch(fetchTodos())}>fetch Todo</button>
        {state.todo.data &&
          state.todo.data.map((e) => {return (<li key={e.id}>{e.title}</li>)})}
      </div>
      <div>
        <button onClick={() => dispatch(fetchPosts())}>Fetch Posts</button>
        {state.post.data &&
          state.post.data.map((e) =>  {
            return(
            <div key = {e.id} style={cardStyle}>
              <div style={containerStyle}>
                <h2 style={titleStyle}>{e.title}</h2>
                <h6 style={textStyle}>{e.userId}</h6>
                <p style={textStyle}>
                  {e.body}
                </p>
              </div>
            </div>
            )
          })}
      </div>
      <div>
        
      </div>
    </>
  );
}

export default App;
