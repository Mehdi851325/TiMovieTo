import {combineReducers} from "redux";
import movieReducer from './movieReducer/';
import detailMovieReducer from "./detailMovieReducer";
import TvShowReducer from "./tvShowReducer";



const rootReducer =combineReducers({
    movies:movieReducer,
    detail:detailMovieReducer,
    tvShow : TvShowReducer,
});

export default rootReducer;