import { useDispatch, useSelector } from "react-redux"
import Card from "../Card/Card"
import styles from './Favorites.module.css'
import { removeFav } from "../../redux/actions"
import { orderCards,filterCards } from "../../redux/actions"
import { useEffect, /*useState*/ } from "react"



const Favorites =()=>{
   
   const dispath= useDispatch()

   const {myFavorites}= useSelector((state)=> state)
    
   const onClose = (id)=>{
        dispath(removeFav(id))
    }
    const handleOrder = (event) =>{
      const {value} = event.target
      dispath(orderCards(value))
      
    }

    const handleFilter = (event) => {
      const {value} = event.target
      dispath(filterCards(value))
      
    }

    useEffect(()=>{
      const value = "UN"
      dispath(orderCards(value))
      //setAux(!aux)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

        return ( 
         <div className={styles.favContainer}>
            <div className={styles.selectContainer}>
               <select onChange={handleOrder}>
                  <option value="UN" selected disabled>Order by</option>
                  <option value="A">Ascendente</option>
                  <option value="D">Descendente</option>
               </select>
               <select onChange={handleFilter}>
                  <option value="ALL" selected disabled>Filter by</option>
                  <option value="ALL">All</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Genderless">Genderless</option>
                  <option value="unknown">Unknown</option>
               </select>
            </div>
            <div className={styles.carrucelFav}>
                {console.log("myFavorites: ",myFavorites)}
                {myFavorites.map( ({id,name,status,species,gender,origin,image}) => {
                     return(
                              <Card
                                 key={id}
                                 id={id}
                                 name={name}
                                 status={status}
                                 species={species}
                                 gender={gender}
                                 origin={origin.name}
                                 image={image}
                                 onClose={onClose}
                              />
                           ) 
                        }
                     )
                  }
            </div>
         </div>
         )
}

export default Favorites