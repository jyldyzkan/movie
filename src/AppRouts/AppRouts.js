import {Route, Routes} from "react-router-dom";
import HomePage from "../Views/HomePage/HomePage";
import MoviePage from "../Views/MoviePage/MoviePage";
import SearchPage from "../Views/SearchPage/SearchPage";


const AppRouts = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage/> }/>
            <Route path="/movie/:id" element={<MoviePage/>}/>
            <Route path={'/search'} element={<SearchPage/>}/>
            <Route path={''}/>
        </Routes>
    )
}
export default AppRouts