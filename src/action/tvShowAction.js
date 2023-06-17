import axios from "axios";
import { popularTvUrl } from "../services/api";
import { topTvUrl } from "../services/api";

export const loadTv = () => async (dispatch) => {
  const popularTvData = await axios.get(popularTvUrl());
  const topRatingTvData = await axios.get(topTvUrl());

  dispatch({
    type: "FETCH_TV",
    payload: {
      popularTv: popularTvData.data.results,
      topRatingTv: topRatingTvData.data.results,
    },
  });
};
