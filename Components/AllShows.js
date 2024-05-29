import { useNavigate } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import apiContextProvider from "./Context.js";
import styles from "../css/AllShows.module.css";
import MovieCarousel from "./MovieCarousel.js";

export default function AllShows(){
    const valueFromContext = useContext(apiContextProvider);
    const navigate = useNavigate();
    const [limit, setLimit] = useState(110);
    const [categoryList, setCategoryList] = useState([]);
    const [movies, setMovies] = useState({});

    useEffect(()=>{
        async function fetchCategoryList(){
            let res = await fetch("https://academics.newtonschool.co/api/v1/ottx/categories",{
                method: "GET",
                headers: {
                    'accept' : "application/json",
                    'projectID' : valueFromContext.projectId,
                }
    
            });
            let data = await res.json();
            if(data.message == 'success'){
                setCategoryList(data.data);

            }
            else{
                navigate('/error');
            }
        }
        fetchCategoryList();
    },[])
    useEffect(()=>{
        async function fetchMovies(){

            let moviesData = await fetch(`https://academics.newtonschool.co/api/v1/ottx/show?limit=${limit}`,{
                method: "GET",
                headers: {
                    'accept' : "application/json",
                    'projectID' : valueFromContext.projectId,
                }
            });
            let movie = await moviesData.json();
            if(movie.status === 'success'){
                let categoryWiseMovieList = {};
                categoryList.forEach((category)=>{
                    const list = movie.data.filter((m)=>m.type == category);
                    categoryWiseMovieList[category] = list;
                })
                setMovies({...categoryWiseMovieList});                    
            }
            else{
                navigate('/error');
            }
        }
        fetchMovies();
    },[categoryList])
    if(Object.keys(movies).length != 0){
        return(
            <div className={styles.shows}>
                {categoryList.map((category)=>{
                    const movieList = movies[category];
                    if(movieList){
                        return(
                            <MovieCarousel category={category} movieList={movies[category]}/>    
                            )
                        }
                    })}
            </div>
        )
    }
    else{
        return(
            <h1 className={styles.loading}>Loading...</h1>
        )
    }
}