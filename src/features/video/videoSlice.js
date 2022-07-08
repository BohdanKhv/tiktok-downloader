import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import videoService from './videoService';


const initialState = {
    video: null,
    isLoading: false,
    isError: false,
    isSuccess: false,
    msg: ''
}

// Create list 
export const getVideo = createAsyncThunk(
    "list/getVideo",
    async (url, thunkAPI) => {
        try {
            return await videoService.getVideo(url);
        } catch (error) {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.msg) ||
                error.message ||
                error.toString();
            return thunkAPI.rejectWithValue(message);
        }
    }
);

// create slice
const videoSlice = createSlice({
    name: 'video',
    initialState,
    reducers: {
        resetVideo: (state) => {
            state.video = null;
            state.isLoading = false;
            state.isError = false;
            state.isSuccess = false;
            state.msg = '';
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getVideo.pending, (state, action) => {
            state.isLoading = true;
            state.isError = false;
            state.isSuccess = false;
            state.msg = '';
        });
        builder.addCase(getVideo.fulfilled, (state, action) => {
            state.video = action.payload;
            state.isLoading = false;
            state.isError = false;
            state.isSuccess = true;
            state.msg = '';
        });
        builder.addCase(getVideo.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.isSuccess = false;
            state.msg = action.payload;
        });
    }
});


// export action
export const { resetVideo } = videoSlice.actions;
// export reducer
export default videoSlice.reducer;
