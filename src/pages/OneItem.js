import { useContext, useState, useEffect } from "react";
// import FavoritesContext from "../store/favorites-context";
import ImagesList from "./ImagesList"; 
import "../styles/favorites.css";
import "../styles/images.css";
// import  MoviesContext from "../context/MoviesContext";


const OneItem = (props) => {
  const { id, title, image, category } = props;
  const FavoriteComponent = props.FavoriteComponent;

  // const handleShow = () => setShowStatus(true);
  // const handleClose = () => setShowStatus(false);


  // const { myfavorites, setMyfavorites, getMoviesFromStorage } =
  //   useContext(MoviesContext);
  //   const [showStatus, setShowStatus] = useState(false);
  //   const [ıconStatus, setıconStatus] = useState(false);

  // useEffect(() => {
  //   if (myfavorites.includes(id)) {
  //     setıconStatus(!ıconStatus);
  //   }
  // }, []);

  // const handlerIcon = (e) => {
  //   setıconStatus(!ıconStatus);

  //   if (ıconStatus) {
  //     var index = myfavorites.indexOf(id);
  //     myfavorites.splice(index, 1);
  //     setMyfavorites(myfavorites);

  //     deleteMovieToStorage(id);
  //   } else {
  //     setMyfavorites(myfavorites.concat([id]));

  //     addMovieToStorage(id);
  //   }
  // };


  // const favoritesCtx = useContext(FavoritesContext);

  // const itemIsFavorite = favoritesCtx.itemIsFavorite(id)

  // function toggleFavoriteStatusHandler() {
  //   if (itemIsFavorite) {
  //     favoritesCtx.removeFavorite(id)
  //   } else {
  //     favoritesCtx.addFavorite(
  //       {
  //         id: id,
  //         title: title,
  //         image: image
  //       }
  //     )
  //   }}


    // const deleteMovieToStorage = (id) => {
    //   const FavoriList = getMoviesFromStorage();
    //   var index = FavoriList.indexOf(id);
    //   FavoriList.splice(index, 1);
    //   localStorage.setItem("myFavoriList", JSON.stringify(FavoriList));
    // };
    // const addMovieToStorage = (id) => {
    //   const FavoriList = getMoviesFromStorage();
    //   FavoriList.push(id);
    //   localStorage.setItem("myFavoriList", JSON.stringify(FavoriList));
    // };

  

  return (
    <div>
      {/* {error && <p>Error!: {error.message}</p>} */}
      <main className="">
        
        <div className="items-list" data-style="cards">
        
          <div key={id} className="items-list__item item">
          
            <img
              key={id}
              className="item__img"
              src={image}
              // onClick={handlerIcon}
              alt={title}
             
            />
          <FavoriteComponent/>
            
            <div className="item__info">
            
              <div className="caption">
                
                <h6 className="item__name text--center">{title}</h6>
               
                <div className="item__description">
                  Statham stars as Arthur Bishop, a professional assassin who
                  specializes in making his hits look like accidents, suicides,
                  or the acts of petty criminals.
                </div>
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default OneItem;
