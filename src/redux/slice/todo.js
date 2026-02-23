import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


export const fetchTodos = createAsyncThunk(
    'fetchTodos',
    async () => {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos");
        return response.json();
    }
)


const todoSlice = createSlice({
    name : 'todo',
    initialState :{
        isLoading : false,
        data:null,
        isError : false,
    },
    extraReducers : (builder)=>{
        builder.addCase(fetchTodos.pending, 
            (state)=>{
                state.isLoading = true;
            }
        );
        builder.addCase(fetchTodos.rejected, 
            (state,action)=>{
                state.isLoading = false;
                state.isError = true;
                console.log('error', action.payload);
            }
        );
        builder.addCase(fetchTodos.fulfilled, 
            (state, action)=>{
                state.isLoading = false;
                state.data = action.payload;
            }
        );
    }
})

export default todoSlice.reducer;