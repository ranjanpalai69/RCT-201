// import axios from 'axios';
import axios from 'axios';
import { useRouter } from 'next/router';
import React from 'react'
import styles from "../styles/Home.module.css"
const movie= ({movie}) => {
    const router=useRouter();
    console.log(movie);
      const postMovie=async (movie)=>{
         try {
         const res=await axios.post(`http://localhost:8080/wishlists`,movie);
         let data=res.data;
         console.log(data);
         alert("Item added to wishlist")
         } catch (error) {
          console.log(error);
          alert("Something went wrong");

         }
      }  
    
  return (
    <div className={styles.singleMovie}>
       <button onClick={()=>router.back()}>Go back</button>
       <h1 className={styles.heading}>Single Movie page</h1>
       <h1 className={styles.heading}>Movie No:-- {movie.id}</h1>
       <div className={styles.movie}>
          <img src={movie.Poster} alt={movie.Title}/>
          <h2>Name:-  {movie.Title}</h2>
          <h3>Publish:- {movie.Year}</h3>
          <h3>Duration:- {movie.Runtime}</h3>
          <button style={{"padding":"7px 8px","borderRadius":"4px"}} onClick={()=>postMovie(movie)}>Add to wishlist</button>
       </div>
    </div>
  )
}

export async function getStaticPaths(){
    const res=await fetch("http://localhost:8080/movies");
    let data=await res.json();
    return {
        paths:data.map(movie=>({params:{id:movie.id.toString()}})),
        fallback:false
    }
}

export async function getStaticProps(context){
   console.log(context);
   const {params:{id}}=context;
   const res=await fetch (`http://localhost:8080/movies/${id}`);
   const movie=await res.json();
   return {
    props:{
      movie
    }
   }
}

export default movie;