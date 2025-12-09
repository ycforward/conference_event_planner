// store.js
import { configureStore } from '@reduxjs/toolkit';
import venueReducer from './venueSlice';
import addOnReducer from './avSlice';
import mealsReducer from './mealsSlice';

export default configureStore({
  reducer: {
    venue: venueReducer,
    addOn: addOnReducer,
    meals: mealsReducer,
  },
});
