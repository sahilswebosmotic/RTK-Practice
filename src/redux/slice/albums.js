import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchAlbums = createAsyncThunk('fetchAlbums', async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/albums')
    return response.json();
})

const albumSlice = createSlice({
    name: 'album',
    initialState: {
        isLoading: false,
        data: null,
        isError: false,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchAlbums.pending, (state) => {
            state.isLoading = true
        });
        builder.addCase(fetchAlbums.rejected,
            (state, action) => {
                state.isLoading = false;
                state.isError = true;
                console.log('error', action.payload);
            }
        );
        builder.addCase(fetchAlbums.fulfilled,
            (state, action) => {
                state.isLoading = false;
                state.data = action.payload;
            }
        );
    }
});
export default albumSlice.reducer;
