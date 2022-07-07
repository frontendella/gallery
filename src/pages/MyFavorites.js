// import { useContext, useState, useEffect } from "react";
// import { MoviesContext } from "../context/MoviesContext";
// import ImagesList from "./ImagesList"; 

// const MyFavorites = () => {

//     const { myfavorites ,loading,setLoading} = useContext(MoviesContext)

//     const [favoriList, setFavoriList] = useState([])

//     useEffect(() => {
//         setTimeout(() => {
//             setLoading(false)
//         }, 3000);
//         getMovie()
//     }, [setLoading])

//     const getMovie = () => {
//         const data = []
//         myfavorites.map(async (id, index) => {
//             const MOVIE_API = `https://api.themoviedb.org/3/movie/${movieID}?api_key=${apiKey}&language=en-US`

//             const movieJson = await axios(MOVIE_API)

//             const res = movieJson.data

//             data.push(res)

//             if (data.length === index + 1) {

//                 setFavoriList([...favoriList.concat(data)])

//             }


//         })


//     }

  