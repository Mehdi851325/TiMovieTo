import { useEffect, useState } from "react";
//api
import { movieImage } from "../services/api";
//redux
import { useDispatch } from "react-redux";
import { loadDetail } from "../action/detailAction";
import { useSelector } from "react-redux";
//motion
import { AnimatePresence, motion } from "framer-motion";
//svg
import imdb from "../assets/imdb.svg";

const Detail = ({ heroMovie, gameId }) => {
  const dispatch = useDispatch();
  const [switchGame, setSwitchGame] = useState([]);
  useEffect(() => {
    const switchGame = heroMovie.filter((game) => game.id === gameId);
    setSwitchGame(switchGame);
    if (heroMovie[0]) {
      dispatch(loadDetail(gameId));
    }
  }, [gameId]);

  const { detailMovie } = useSelector((state) => state.detail);

  if (heroMovie[0] && switchGame.length === 0) {
    return (
      <div className="detail-main">
        <div
          className="bg-detail"
          style={{
            backgroundImage: `url(${movieImage.imageOriginal(
              heroMovie[0].backdrop_path || heroMovie[0].poster_path
            )})`,
          }}
        ></div>
        <div className="detail-container">
          <div className="detail-poster">
            <motion.img
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 1,
                ease: "easeInOut",
              }}
              src={movieImage.imageOriginal(heroMovie[0].poster_path)}
              alt=""
            />
          </div>
          <div className="detail-info">
            <div>
              <h2>{heroMovie[0].title || heroMovie[0].original_name}</h2>
            </div>
            <div>
              <h4>{heroMovie[0].overview}</h4>
            </div>
            <div>
              <h3>
                Genre :{" "}
                {detailMovie.genres
                  ? detailMovie.genres.map((genre) => (
                      <span key={genre.id}>{genre.name} / </span>
                    ))
                  : null}
              </h3>
            </div>
            <div className="detail-vote">
              <img src={imdb} alt={imdb}/>
              <h3>:{" "}{heroMovie[0].vote_average}</h3>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (switchGame[0]) {
    return (
      <div className="detail-main">
        <div
          className="bg-detail"
          style={{
            backgroundImage: `url(${movieImage.imageOriginal(
              switchGame[0].backdrop_path || switchGame[0].poster_path
            )})`,
          }}
        ></div>
        <div className="detail-container">
          <div className="detail-poster">
            <AnimatePresence mode="wait">
              <motion.img
                key={gameId}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 1,
                  ease: "easeInOut",
                }}
                src={movieImage.imageOriginal(switchGame[0].poster_path)}
                alt=""
              />
            </AnimatePresence>
          </div>
          <div className="detail-info">
            <div>
              <h2>{switchGame[0].title || switchGame[0].original_name}</h2>
            </div>
            <div>
              <h4>{switchGame[0].overview}</h4>
            </div>
            <div>
              <h3>
                Genre :{" "}
                {detailMovie.genres
                  ? detailMovie.genres.map((genre) => (
                      <span key={genre.id}>{genre.name} / </span>
                    ))
                  : null}
              </h3>
            </div>
            <div className="detail-vote">
              <img src={imdb} alt={imdb}/>
              <h3>:{" "}{switchGame[0].vote_average}</h3>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Detail;
