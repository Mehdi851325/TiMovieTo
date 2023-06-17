import axios from "axios";
import { detailUrl } from "../services/api";

export const loadDetail = (id) => async (dispatch) => {
  const movieDetail = await axios.get(detailUrl(id));
  dispatch({
    type: "FETCH_DETAIL",
    payload: {
      detailMovie: movieDetail.data,
    },
  });
};
