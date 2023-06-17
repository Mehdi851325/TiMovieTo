import { movieImage } from "../services/api";



const PopularList = ({ vote, poster, id, setGameId }) => {
  
  const posterImage = movieImage.imageW500(poster);
  const detailHandler = () => {
    setGameId(id);
  };

  return (
    <div onClick={detailHandler} className="Popular-list">
        <div className="container-box">
          <h3>{vote}</h3>
          <img src={posterImage} alt="" />
        </div>
    </div>
  );
};

export default PopularList;
