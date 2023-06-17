import { useEffect, useState } from "react";
//redux
import { useDispatch, useSelector } from "react-redux";
import { loadMovie } from "../action/moviesAction";
import { loadTv } from "../action/tvShowAction";
//add components
import PopularList from "./PopularList";
import Detail from "./Detail";
import NavBar from "./NavBar";
//swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
//font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
//framer motion
import { motion, AnimatePresence } from "framer-motion";
import { animationPage } from "../animation";

const Home = () => {
  const [selectedList, setSelectedList] = useState(0);
  const [gameId, setGameId] = useState();
  const [list, setList] = useState("movie");
  const {popularTv , topRatingTv} = useSelector((state) => state.tvShow);
  const allTvShow = [
    {label:"Popular Tv",popularTv},
    {label:"Top Rating Tv",topRatingTv}
  ]
  
  const { popular, upComing, topRating } = useSelector((state) => state.movies);
  const allMovie = [
    { label: "Popular Movie", popular },
    { label: "Up coming Movie", upComing },
    { label: "Top Rating Movie", topRating },
  ];
  useEffect(() => {
    if (popular[0]) {
      setGameId(popular[0].id);
    }
  }, [popular]);

  const dispatch = useDispatch();

  const nextListHandler = () => {
    setSelectedList(selectedList + 1);
  };
  const prevListHandler = () => {
    setSelectedList(selectedList - 1);
  };
console.log(popularTv);
  useEffect(() => {
    dispatch(loadMovie());
    dispatch(loadTv());
  }, [dispatch]);

  if (allMovie && list==="movie") {
    return (
      <div className="home">
        <NavBar setList={setList} setSelectedList={setSelectedList}/>
        {selectedList === 0 && <Detail heroMovie={popular} gameId={gameId} />}
        {selectedList === 1 && <Detail heroMovie={upComing} gameId={gameId} />}
        {selectedList === 2 && <Detail heroMovie={topRating} gameId={gameId} />}
        <div className="title-btn-popular">
          <div className="control-title">
            {selectedList > 0 ? (
              <button onClick={prevListHandler} className="btn-list">
                <FontAwesomeIcon icon={faChevronLeft} />
              </button>
            ) : (
              <button onClick={prevListHandler} className="btn-list deactive">
                <FontAwesomeIcon icon={faChevronLeft} />
              </button>
            )}
            {selectedList === 0 && <h2>Popular Movies</h2>}
            {selectedList === 1 && <h2>UpComing Movies</h2>}
            {selectedList === 2 && <h2>Top rating Movies</h2>}
            {selectedList < 2 ? (
              <button onClick={nextListHandler} className="btn-list">
                <FontAwesomeIcon icon={faChevronRight} />
              </button>
            ) : (
              <button onClick={nextListHandler} className="btn-list deactive">
                <FontAwesomeIcon icon={faChevronRight} />
              </button>
            )}
          </div>
          <div className="control-swiper">
                <div className="control-prev">
                  <button className="btn-list-prv btn-list-control"><FontAwesomeIcon icon={faChevronLeft} /></button>
                </div>
                <div>
                  <button className="btn-list-next btn-list-control"><FontAwesomeIcon icon={faChevronRight} /></button>
                </div>
          </div>
        </div>
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedList}
            variants={animationPage}
            initial="hidden"
            animate="show"
            className="popular-container"
          >
            <Swiper
              grabCursor={true}
              slidesPerView={"auto"}
              spaceBetween={25}
              modules={[Navigation]}
              className="swiper-container"
              navigation={{
                nextEl:'.btn-list-next',
                prevEl:'.btn-list-prv',
                clickable: true
              }}
            >
              {selectedList === 0 &&
                popular.map((moviepoular) => (
                  <SwiperSlide key={moviepoular.id}>
                    <PopularList
                      vote={moviepoular.vote_average}
                      poster={moviepoular.poster_path}
                      id={moviepoular.id}
                      setGameId={setGameId}
                    />{" "}
                  </SwiperSlide>
                ))}

              {selectedList === 1
                ? upComing.map((upComingMovie) => (
                    <SwiperSlide key={upComingMovie.id}>
                      <PopularList
                        vote={upComingMovie.vote_average}
                        poster={upComingMovie.poster_path}
                        id={upComingMovie.id}
                        setGameId={setGameId}
                      />{" "}
                    </SwiperSlide>
                  ))
                : null}
              {selectedList === 2
                ? topRating.map((topMovie) => (
                    <SwiperSlide key={topMovie.id}>
                      <PopularList
                        vote={topMovie.vote_average}
                        poster={topMovie.poster_path}
                        id={topMovie.id}
                        setGameId={setGameId}
                      />{" "}
                    </SwiperSlide>
                  ))
                : null}
            </Swiper>
          </motion.div>
        </AnimatePresence>
      </div>
    );
  }
  if (allTvShow && list==='Tv Show') {
    return (
      <div className="home">
        <NavBar setList={setList} setSelectedList={setSelectedList}/>
        {selectedList === 0 && <Detail heroMovie={popularTv} gameId={gameId} />}
        {selectedList === 1 && <Detail heroMovie={topRatingTv} gameId={gameId} />}
        <div className="title-btn-popular">
          <div className="control-title">
          {selectedList > 0 ? (
            <button onClick={prevListHandler} className="btn-list">
              <FontAwesomeIcon icon={faChevronLeft} />
            </button>
          ) : (
            <button onClick={prevListHandler} className="btn-list deactive">
              <FontAwesomeIcon icon={faChevronLeft} />
            </button>
          )}
          {selectedList === 0 && <h2>Popular Tv show</h2>}
          {selectedList === 1 && <h2>Top rating Tv show</h2>}
          {selectedList < 1 ? (
            <button onClick={nextListHandler} className="btn-list">
              <FontAwesomeIcon icon={faChevronRight} />
            </button>
          ) : (
            <button onClick={nextListHandler} className="btn-list deactive">
              <FontAwesomeIcon icon={faChevronRight} />
            </button>
          )}
          </div>
          <div className="control-swiper">
                <div className="control-prev">
                  <button className="btn-list-prv btn-list-control"><FontAwesomeIcon icon={faChevronLeft} /></button>
                </div>
                <div>
                  <button className="btn-list-next btn-list-control"><FontAwesomeIcon icon={faChevronRight} /></button>
                </div>
          </div>
        </div>
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedList}
            variants={animationPage}
            initial="hidden"
            animate="show"
            className="popular-container"
          >
            <Swiper
              grabCursor={true}
              slidesPerView={"auto"}
              spaceBetween={25}
              modules={[Navigation]}
              className="swiper-container"
              navigation={{
                nextEl:'.btn-list-next',
                prevEl:'.btn-list-prv',
                clickable: true
              }}
            >
              
              {selectedList === 0 &&
                popularTv.map((tvPoular) => (
                  <SwiperSlide key={tvPoular.id}>
                    <PopularList
                      vote={tvPoular.vote_average}
                      poster={tvPoular.poster_path}
                      id={tvPoular.id}
                      setGameId={setGameId}
                    />{" "}
                  </SwiperSlide>
                ))}

              {selectedList === 1
                ? topRatingTv.map((topRatingTv) => (
                    <SwiperSlide key={topRatingTv.id}>
                      <PopularList
                        vote={topRatingTv.vote_average}
                        poster={topRatingTv.poster_path}
                        id={topRatingTv.id}
                        setGameId={setGameId}
                      />{" "}
                    </SwiperSlide>
                  ))
                : null}
                
            </Swiper>
          </motion.div>
        </AnimatePresence>
      </div>
    );
  }
};

export default Home;
