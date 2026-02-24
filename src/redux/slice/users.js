import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchUsers = createAsyncThunk('fetchUsers', async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    return response.json();
})

const usersSlice = createSlice({
    name: 'users',
    initialState: {
        isLoading: false,
        data: null,
        isError: false,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchUsers.pending, (state) => {
            state.isLoading = true
        });
        builder.addCase(fetchUsers.rejected,
            (state, action) => {
                state.isLoading = false;
                state.isError = true;
                console.log('error', action.payload);
            }
        );
        builder.addCase(fetchUsers.fulfilled,
            (state, action) => {
                state.isLoading = false;
                state.data = action.payload;
            }
        );
    }
});
export default usersSlice.reducer;
