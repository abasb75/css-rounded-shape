import { createSlice } from "redux-sync-tabs";

const BorderType = {
    FANCY:'FANCY',
    FULL:'FULL',
    SIMPLE:'SIMPLE',
}

const initialState = {
    borderType:BorderType.FULL,
    darkMode:false,
}

export const confSlice = createSlice({
  name: 'conf',
  initialState,
  reducers: {
    setBorderType:(state,payload)=>{
        state.borderType = payload.payload;
    },
    toggleDarkMode:(state)=>{
      state.darkMode = !state.darkMode;
    },
  },

  

  storagble:true,
  key:'conf',
  srorageKey:'conf',
})

export const { 
    setBorderType,
    toggleDarkMode,
} = confSlice.actions

export { BorderType };

export default confSlice.reducer;
