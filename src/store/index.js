import { configureStore } from 'redux-sync-tabs';

import shapeRadius from './shapeRadius';
import shapeSize from './shapeSize';
import confSlice from './conf';
import fancyRadius from './fancyRadius';
import simpleRadius from './simpleRadius';

const store = configureStore({
  reducer: {
    shapeSize,
    shapeRadius,
    conf:confSlice,
    fancyRadius:fancyRadius,
    simpleRadius:simpleRadius,
  },
});

export default store;