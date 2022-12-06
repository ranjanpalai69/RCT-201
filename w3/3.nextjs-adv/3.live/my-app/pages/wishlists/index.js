import { useRouter } from 'next/router';
import React from 'react'
import styles from "../../styles/Home.module.css";
const Wishlist = ({movies}) => {
    const router=useRouter();
    const deleteMovie=async(id)=>{
        try {
            const res=await fetch(`http://localhost:8080/wishlists/${id}`,{
            method:"DELETE",
            headers:{
                "Content-Type":"application/json",
            }
        });
        const data=await res.json();
        console.log(data);
        router.push("/wishlists");

        } catch (error) {
            console.log(error);
        }
    }
  return (
    <div style={{"textAlign":"center"}}>
        <h1 className={styles.heading}>My Wishlists</h1>
        <button onClick={()=>router.back()}>Go back</button>
        <div className={styles.movies}>
          {
            movies?.map((movie)=>{
              return <div key={movie.id}>
                 <img src={movie.Poster} alt={movie.Title}/>
                 <p>Movie :- {movie.Title}</p>
                 <p>Year :- {movie.Year}</p>
                 <button style={{"padding":"5px ","borderRadius":"4px"}} onClick={()=>deleteMovie(movie.id)}>
                  Delete from List
                 </button>
              </div>
            })
          }
            
        </div>
    </div>
  )
}
export async function getServerSideProps(){
    let res=await fetch("http://localhost:8080/wishlists");
    let data= await res.json();
    
    return{
      props:{
        movies:data
      }
    }
  
  }
export default Wishlist;