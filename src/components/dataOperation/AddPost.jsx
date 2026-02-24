import React, { useState } from 'react'
import { useAddPostMutation } from '../../redux/slice/apiSlice';

const AddPost = () => {
  const [createPost, { isLoading, isSuccess, error, data }] =
    useAddPostMutation()

  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')

  const handleSubmit = async () => {
    if (!title || !body) return alert('Fill fields')

    await createPost({
      title,
      body,
      userId: 1,
    })
  }
  const pageStyle = {
    marginTop:"10vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "linear-gradient(135deg, #0f172a, #1e293b)",
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
  };

  const cardStyle = {
    width: "380px",
    borderRadius: "14px",
    boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
    backgroundColor: "#ffffff",
    padding: "22px",
    transition: "0.25s ease",
  };

  const titleStyle = {
    margin: "0 0 18px 0",
    fontSize: "22px",
    fontWeight: "600",
    textAlign: "center",
    color: "#0f172a",
  };

  const inputStyle = {
    width: "100%",
    padding: "12px 14px",
    marginBottom: "12px",
    borderRadius: "10px",
    border: "1px solid #e2e8f0",
    fontSize: "14px",
    outline: "none",
    transition: "0.2s ease",
    boxSizing: "border-box",
  };

  const textareaStyle = {
    ...inputStyle,
    minHeight: "90px",
    resize: "none",
  };

  const buttonStyle = {
    width: "100%",
    padding: "12px",
    marginTop: "6px",
    backgroundColor: "#6366f1",
    color: "#ffffff",
    border: "none",
    borderRadius: "10px",
    fontSize: "14px",
    fontWeight: "600",
    cursor: "pointer",
    transition: "0.2s ease",
  };

  const successStyle = {
    marginTop: "14px",
    color: "#16a34a",
    fontSize: "14px",
    textAlign: "center",
  };

  const errorStyle = {
    marginTop: "14px",
    color: "#dc2626",
    fontSize: "14px",
    textAlign: "center",
  };

  const responseStyle = {
    marginTop: "16px",
    backgroundColor: "#0f172a",
    color: "#e2e8f0",
    padding: "10px",
    borderRadius: "10px",
    fontSize: "12px",
    overflowX: "auto",
  };

  return (
    <div style={pageStyle}>
      <div style={cardStyle}>
        <h2 style={titleStyle}>Create Post</h2>

        <input
          style={inputStyle}
          placeholder="Enter title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          style={textareaStyle}
          placeholder="Enter post body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />

        <button
          style={{
            ...buttonStyle,
            backgroundColor: isLoading ? "#a5b4fc" : "#6366f1",
            cursor: isLoading ? "not-allowed" : "pointer",
          }}
          onClick={handleSubmit}
          disabled={isLoading}
        >
          {isLoading ? "Creating..." : "Create Post"}
        </button>

        {isSuccess && <p style={successStyle}> Post created successfully</p>}
        {error && <p style={errorStyle}> Failed to create post</p>}

        {data && (
          <pre style={responseStyle}>
            {JSON.stringify(data, null, 2)}
          </pre>
        )}
      </div>
    </div>
  )
}

export default AddPost