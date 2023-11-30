import {Route, Routes} from "react-router-dom";
import HomePage from "../Views/HomePage";
import MoviePage from "../Views/MoviePage";

const AppRouts = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage/> }/>
            <Route path="/movie" element={<MoviePage/>}/>
        </Routes>
    )
}
export default AppRouts