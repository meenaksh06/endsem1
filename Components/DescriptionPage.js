// import { useState, useEffect, useContext } from "react"
// import { useNavigate } from "react-router-dom";
// import styles from "../css/Description.module.css";

// import apiContextProvider from "./Context";
// export default function Description(){
//     const navigate = useNavigate();
//     const valueFromContext = useContext(apiContextProvider);
//     valueFromContext.jwt = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2NGEwMmQ1NWI5ODUwYTAyNzk4NWMwYyIsImlhdCI6MTcxNjEyNjU0OCwiZXhwIjoxNzQ3NjYyNTQ4fQ.Vbl0yhhjXRbJap3Dd3qs_NFN1mxLIZ2Ib_yXF630TmQ";
//     const [detail, setDetail] = useState(null);
//     const [id,setId] = useState("64cffee700bad552e8dcd509");
//     useEffect(()=>{
//         const url = window.location.pathname.split("/");
//         setId(url[(url.length)-1])
//         if(id){
//             async function dataFromApi(){
//                 const data = await fetch(`https://academics.newtonschool.co/api/v1/ottx/show/${id}`,{
//                     method:"GET",
//                     headers:{
//                         'accept' : "application/json",
//                         'projectID' : valueFromContext.projectId,
//                         'Authorization' : `Bearer ${valueFromContext.jwt}`
//                     }

//                 });
//                 let res = await data.json();
//                 if(res.status == "success"){
//                     setDetail(res);
//                 }
//                 else{
//                     // navigate("/error");
//                 }
//             }
//             dataFromApi();
//         }
//     },[])
//     if(detail){
//         console.log(detail);
//         return(
//             <div className={styles.poster}>
//                 <img className={styles.image} src={detail.data.thumbnail}/>
                
//                 {/* <video>
//                     <source src={detail.data.video_url}/>
//                 </video> */}
//             </div>
//         )
//     }
//     else{
//         return(
//             <h1>Loading...</h1>
//         )
//     }
// }