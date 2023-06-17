import axios from "axios";
import { popularUrl } from "../services/api";
import { upComingUrl } from "../services/api";
import { topRatingUrl } from "../services/api";




export const loadMovie = () => async (dispatch)=>{
    const popularData = await axios.get(popularUrl())
    const upComingData = await axios.get(upComingUrl())
    const topRatingData = await axios.get(topRatingUrl())
   
    dispatch({
        type: "FETCH_MOVIES",
        payload :{
            popular:popularData.data.results,
            upComing:upComingData.data.results,
            topRating:topRatingData.data.results
        }
    })
}