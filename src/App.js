import "./styles/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { FavoritesContextProvider } from "./context/favorites-context";
import Navbar from "./components/Navbar/Navbar";
import PaginationList from "./components/PaginationList";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Favorites } from "./pages/Favorites";
import Movies from "./pages/Movies";
import Books from "./pages/Books";
import Albums from "./pages/Albums";

export default function App() {
  return (
    <FavoritesContextProvider>
      <Navbar />
      <Routes>
        <Route path="/movies" element={<Movies />} />
        <Route path="/" element={<Favorites />} />
        <Route path="/books" element={<Books />} />
        <Route path="/albums" element={<Albums />} />
      </Routes>
    </FavoritesContextProvider>
  );
}
