import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchPosts = createAsyncThunk('fetchPosts', async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    return response.json();
})

const postSlice = createSlice({
    name: 'post',
    initialState: {
        isLoading: false,
        data: null,
        isError: false,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchPosts.pending, (state) => {
            state.isLoading = true
        });
        builder.addCase(fetchPosts.rejected,
            (state, action) => {
                state.isLoading = false;
                state.isError = true;
                console.log('error', action.payload);
            }
        );
        builder.addCase(fetchPosts.fulfilled,
            (state, action) => {
                state.isLoading = false;
                state.data = action.payload;
            }
        );
    }
});
export default postSlice.reducer;
