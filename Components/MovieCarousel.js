import MovieCard from "./MovieCard"
import styles from "../css/MovieCarousel.module.css";
export default function MovieCarousel({category, movieList}){
    return (
        <div className={styles.category}>
            <p className={styles.categoryName} >{category}</p>
            <div className={styles.carousel}>
                {movieList.map((movie)=>{
                    return (
                        <MovieCard movie={movie}/>
                        )
                    })}
            </div>
        </div>
    )
}