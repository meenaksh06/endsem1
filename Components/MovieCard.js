// import { useState } from "react";
// import styles from "../css/MovieCard.module.css";
// export default function MovieCard({movie}){

//     function des(){
//         const [des, setDes] = useState(des);

//         function showDes(){
//             setDes();
//         }
//     }
//     return (
//         <div>

//             <div className={styles.card} >
//                 <img onClick={{des}} src={movie.thumbnail}/>
//             </div>
//         </div>
//     )
// }
import { useState } from "react";
import styles from "../css/MovieCard.module.css";

export default function MovieCard({ movie }) {
    const [showDescription, setShowDescription] = useState(false);

    function toggleDescription() {
        setShowDescription(prevState => !prevState);
    }

    return (
        <div>
            <div className={styles.card}>
                <img onClick={toggleDescription} src={movie.thumbnail} alt={movie.title} />
                {showDescription && <p>{movie.description}</p>}
            </div>
        </div>
    );
}
