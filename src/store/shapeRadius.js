import { createSlice } from "redux-sync-tabs";

const initialState = {
    topLeft:{x:10,y:10,ux:'%',uy:'%'},
    topRight:{x:10,y:10,ux:'%',uy:'%'},
    bottomLeft:{x:10,y:10,ux:'%',uy:'%'},
    bottomRight:{x:10,y:10,ux:'%',uy:'%'},
}

export const shapeRadiusSlice = createSlice({
  name: 'shapeRadius',
  initialState,
  reducers: {

    setTopLeftX: (state,payload) => {
        const topLeftX = payload.payload;
        state.topLeft = {
            ...state.topLeft,
            x:topLeftX
        };
    },
    setTopLeftY: (state,payload) => {
        const topLeftY = payload.payload;
        state.topLeft = {
            ...state.topLeft,
            y:topLeftY
        };
    },

    setTopLeftUX: (state,payload) => {
        const topLeftUX = payload.payload;
        state.topLeft = {
            ...state.topLeft,
            ux:topLeftUX
        };
    },
    setTopLeftUY: (state,payload) => {
        const topLeftUY = payload.payload;
        state.topLeft = {
            ...state.topLeft,
            uy:topLeftUY
        };
    },




    setTopRightX: (state,payload) => {
        const topRightX = payload.payload;
        state.topRight = {
            ...state.topRight,
            x:topRightX
        };
    },

    setTopRightUY: (state,payload) => {
        const topRightUY = payload.payload;
        state.topRight = {
            ...state.topRight,
            uy:topRightUY
        };
    },

    setTopRightUX: (state,payload) => {
        const topRightUX = payload.payload;
        state.topRight = {
            ...state.topRight,
            ux:topRightUX
        };
    },

    setTopRightY: (state,payload) => {
        const topRightY = payload.payload;
        state.topRight = {
            ...state.topRight,
            y:topRightY
        };
    },





    setBottomLeftX: (state,payload) => {
        const bottomLeftX = payload.payload;
        state.bottomLeft = {
            ...state.bottomLeft,
            x:bottomLeftX
        };
    },
    setBottomLeftY: (state,payload) => {
        const bottomLeftY = payload.payload;
        state.bottomLeft = {
            ...state.bottomLeft,
            y:bottomLeftY
        };
    },

    setBottomLeftUX: (state,payload) => {
        const bottomLeftUX = payload.payload;
        state.bottomLeft = {
            ...state.bottomLeft,
            ux:bottomLeftUX
        };
    },
    setBottomLeftUY: (state,payload) => {
        const bottomLeftUY = payload.payload;
        state.bottomLeft = {
            ...state.bottomLeft,
            uy:bottomLeftUY
        };
    },

    setBottomRightX: (state,payload) => {
        const bottomRightX = payload.payload;
        state.bottomRight = {
            ...state.bottomRight,
            x:bottomRightX
        };
    },

    setBottomRightY: (state,payload) => {
        const bottomRightY = payload.payload;
        state.bottomRight = {
            ...state.bottomRight,
            y:bottomRightY
        };
    },

    setBottomRightUX: (state,payload) => {
        const bottomRightUX = payload.payload;
        state.bottomRight = {
            ...state.bottomRight,
            ux:bottomRightUX
        };
    },

    setBottomRightUY: (state,payload) => {
        const bottomRightUY = payload.payload;
        state.bottomRight = {
            ...state.bottomRight,
            uy:bottomRightUY
        };
    },


    resetShapeRadius:(state)=>{
        state.topLeft={x:10,y:10,ux:'%',uy:'%'};
        state.topRight={x:10,y:10,ux:'%',uy:'%'};
        state.bottomLeft={x:10,y:10,ux:'%',uy:'%'};
        state.bottomRight={x:10,y:10,ux:'%',uy:'%'};
    }


  },
  storagble:true,
  key:'shapeRadius',
  srorageKey:'shape',
})

export const { 

    setTopLeftX,
    setTopLeftY,
    setTopRightX,
    setTopRightY,
    setBottomLeftX,
    setBottomLeftY,
    setBottomRightX,
    setBottomRightY,

    setTopLeftUX,
    setTopLeftUY,
    setBottomLeftUX,
    setBottomLeftUY,
    setBottomRightUX,
    setBottomRightUY,
    setTopRightUX,
    setTopRightUY,

    resetShapeRadius,

} = shapeRadiusSlice.actions

export default shapeRadiusSlice.reducer;
