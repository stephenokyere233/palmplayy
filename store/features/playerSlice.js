import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentSongs: [],
  currentIndex: 0,
  isActive: false,
  isPlaying: false,
  activeSong: {},
  genreListId: "",
};

const playerSlice=createSlice({
    name:'player',
    initialState,
    reducers:{

    }
})


export const {}=playerSlice.actions
export default playerSlice.reducer;