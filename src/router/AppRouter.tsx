import { Navigate, Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import Movie from "../pages/Movie/Movie";
import Tvshow from "../pages/Tvshow/Tvshow";


const AppRouter = () => {  

  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/movie" element={<Movie />} />
      <Route path="/tvshow" element={<Tvshow />} />
     
    {/* <Route path="*" element={<PageNotFound/>} /> */}
    </Routes>
  )
};

export default AppRouter;
