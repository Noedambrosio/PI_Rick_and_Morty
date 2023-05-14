import React from "react"
import styles from './Card.module.css'
import CloseButton from "../CloseButton/CloseButton"
import {Link} from "react-router-dom"
import { addFav, removeFav} from "../../redux/actions"
import { useState } from "react"
//import {useSelector, useDispatch} from "react-redux"
import FavButton from "../FavButton/FavButton"
import { useEffect } from "react"
import { connect } from "react-redux"

function Card({id,name,status,species,gender,origin,image,onClose,addFavCard,removeFavCard,myFavorites}) {
   
   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [myFavorites]);
   
   const addFavDispath = ()=> {
      (addFavCard({id,name,status,species,gender,origin,image}))
   }

   const removeFavDispath = ()=> {
      (removeFavCard(id))
   }

   const [isFav, setIsFav] = useState(false)


   const handleFavorite = ()=> { 
      if(isFav){
         setIsFav(false)
         removeFavDispath()
      }else{
         setIsFav(true)
         addFavDispath()
      }
   }
   
   return(
      <div className={styles.cardContainer}>
         <div className={styles.buttonContainer}>
            <FavButton isFav={isFav} onClick={handleFavorite}/>
            <CloseButton onClose={onClose} id={id} textButton={"x"}/>
         </div>
            <div className={styles.stikerCard}>
            <Link to={`/detail/${id}`} >
               <h2 className={styles.Title}>{name}</h2>
            </Link>
            <h2 className={styles.subTitle}>{status}</h2>
            <h2 className={styles.subTitle}>{species}</h2>
            <h2 className={styles.subTitle}>{gender}</h2>
            <h2 className={styles.subTitle}>{origin}</h2>
            <div className={styles.imgCard}>
               <img src={image} alt='Caricatura del Personaje' />
            </div>
         </div>
      </div>
   ) 
} 

export function mapDispatchToProps(dispatch){
   return {
      addFavCard: (character)=> dispatch(addFav(character)),
      removeFavCard: (id)=> dispatch(removeFav(id)),
   }
}

export function mapStateToProps(state){
   return {
      myFavorites: state.myFavorites,
   }
}

export default connect(mapStateToProps,mapDispatchToProps)(Card)