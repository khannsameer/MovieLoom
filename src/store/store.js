import { configureStore } from "@reduxjs/toolkit";
import MovieReducer from "./MovieSlice";

export default configureStore({
  reducer: {
    movieData: MovieReducer,
  },
});
