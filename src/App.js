import "bootstrap/dist/css/bootstrap.min.css";
import { FavoritesContextProvider } from "./context/favorites-context";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import { Favorites } from "./pages/Favorites";
import Movies from "./pages/Movies";
import Books from "./pages/Books";
import Albums from "./pages/Albums";

export default function App() {
  return (
    <FavoritesContextProvider>
      <Navbar />
      <Routes>
        <Route path="/gallery" element={<Favorites />} />
        <Route path="/" element={<Favorites />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/books" element={<Books />} />
        <Route path="/albums" element={<Albums />} />
      </Routes>
    </FavoritesContextProvider>
  );
}
