import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchPhotos = createAsyncThunk('fetchPhotos', async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/photos')
    return response.json();
})

const photosSlice = createSlice({
    name: 'photos',
    initialState: {
        isLoading: false,
        data: null,
        isError: false,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchPhotos.pending, (state) => {
            state.isLoading = true
        });
        builder.addCase(fetchPhotos.rejected,
            (state, action) => {
                state.isLoading = false;
                state.isError = true;
                console.log('error', action.payload);
            }
        );
        builder.addCase(fetchPhotos.fulfilled,
            (state, action) => {
                state.isLoading = false;
                state.data = action.payload;
            }
        );
    }
});
export default photosSlice.reducer;
