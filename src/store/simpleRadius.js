import { createSlice } from "redux-sync-tabs";

const initialState = {
    topLeft:10,
    topRight:10,
    bottomLeft:10,
    bottomRight:10,

    topLeftUnit:'%',
    topRightUnit:'%',
    bottomLeftUnit:'%',
    bottomRightUnit:'%',

}

export const simpleRadiusSlice = createSlice({
  name: 'simpleRadius',
  initialState,
  reducers: {

    setTopLeft:(state,payload)=>{
        state.topLeft = payload.payload;
    },
    setTopRight:(state,payload)=>{
        state.topRight = payload.payload;
    },
    setBottomLeft:(state,payload)=>{
        state.bottomLeft = payload.payload;
    },
    setBottomRight:(state,payload)=>{
        state.bottomLeft = payload.payload;
    },

    setTopLeftUnit:(state,payload)=>{
        state.topLeftUnit = payload.payload;
    },
    setTopRightUnit:(state,payload)=>{
        state.topRightUnit = payload.payload;
    },
    setBottomLeftUnit:(state,payload)=>{
        state.bottomLeftUnit = payload.payload;
    },
    setBottomRightUnit:(state,payload)=>{
        state.bottomRightUnit = payload.payload;
    },

    resetSimpleShapeRadius:(state)=>{
        state.topLeft=10;
        state.topRight=10;
        state.bottomLeft=10;
        state.bottomRight=10;

        state.topLeftUnit='%';
        state.topRightUnit='%';
        state.bottomLeftUnit='%';
        state.bottomRightUnit='%';
    }




  },
  storagble:true,
  key:'simpleRadius',
  srorageKey:'simple',
})

export const { 
    setTopLeft,
    setBottomLeft,
    setBottomRight,
    setTopRight,

    setTopLeftUnit,
    setBottomLeftUnit,
    setBottomRightUnit,
    setTopRightUnit,

    resetSimpleShapeRadius,
} = simpleRadiusSlice.actions

export default simpleRadiusSlice.reducer;
