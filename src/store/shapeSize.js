import { createSlice } from "redux-sync-tabs";

const initialState = {
    width:200,
    height:200,
}

export const shapeSizeSlice = createSlice({
  name: 'shapeSize',
  initialState,
  reducers: {
    setHeight: (state,payload) => {
        const height = payload.payload;
        state.height = height;
    },
    setWidth: (state,payload) => {
        const width = payload.payload;
        state.width = width;
    },
    resetShapeSize:()=>{
        state.width=200;
        state.height=200;
    }
  },
  storagble:true,
  key:'shapeSize',
  srorageKey:'custom keys',
})

export const { setWidth, setHeight, resetShapeSize } = shapeSizeSlice.actions

export default shapeSizeSlice.reducer;
