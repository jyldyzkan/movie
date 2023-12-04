import React, {useEffect, useState} from 'react';
import layout from "../../Components/Layout/Layout";
import {useParams} from "react-router-dom";
import axios from "axios";
import {API_KEY, BASE_URL} from "../../config/config";


const MoviePage = () => {
    const {id}= useParams()
    const [movie,setMovie] = useState([])
    useEffect(()=>{
        axios (`${BASE_URL}movie/${id}?api_key=${API_KEY}$language=ru-RU`)
            .then(({data}) => console.log(data))

    },[])
    return (
        <layout>
            <div>


            </div>
        </layout>
    );
}

export default MoviePage;