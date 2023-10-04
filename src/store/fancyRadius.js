import { createSlice } from "redux-sync-tabs";

const initialState = {
    topLeft:{x:10,y:10},
    topRight:{x:10,y:10},
    bottomLeft:{x:10,y:10},
    bottomRight:{x:10,y:10},
}

export const fancyRadiusSlice = createSlice({
  name: 'fancyRadius',
  initialState,
  reducers: {

    setBottom: (state,payload) => {
        const bottomLeftX = payload.payload;
        state.bottomLeft = {
            ...state.bottomLeft,
            x:bottomLeftX,
        };
        state.bottomRight = {
            ...state.bottomRight,
            x:(100-bottomLeftX)
        }
    },

    setRight:(state,payload) => {
        const bottomRightY = payload.payload;
        state.topRight = {
            ...state.topRight,
            y:(100-bottomRightY),
        };
        state.bottomRight = {
            ...state.bottomRight,
            y:bottomRightY
        }
    },

    setTop:(state,payload) => {
        const topRightX = payload.payload;
        state.topRight = {
            ...state.topRight,
            x:(topRightX),
        };
        state.topLeft = {
            ...state.topLeft,
            x:(100-topRightX)
        }
    },

    setLeft:(state,payload)=>{
        const topLeftY = payload.payload;
        state.topLeft = {
            ...state.topLeft,
            y:topLeftY,
        }
        state.bottomLeft = {
            ...state.bottomLeft,
            y:100-topLeftY,
        }
    },

    resetFancyShapeRadius:(state)=>{
        state.topLeft={x:10,y:10};
        state.topRight={x:10,y:10};
        state.bottomLeft={x:10,y:10};
        state.bottomRight={x:10,y:10};
    }


  },
  storagble:true,
  key:'fancyRadius',
  srorageKey:'fancy',
})

export const { 
    setBottom,
    setRight,
    setTop,
    setLeft,
    resetFancyShapeRadius,
} = fancyRadiusSlice.actions

export default fancyRadiusSlice.reducer;
