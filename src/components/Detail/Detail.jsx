import React, { useEffect, useState } from "react";
import styles from "./Detail.module.css"
import axios from "axios";
import {useParams} from "react-router-dom"
import { Link } from "react-router-dom";


const Detail = ()=> {
    
    const {id} = useParams()
    const [character ,setCharacter] = useState({})
    
    useEffect(() => {
        axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
            if (data.name) {
                setCharacter(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharacter({});
     }, [id]);

    return (
        <>
        {character?.name ? (
            <div className={styles.detailContainer}>
                <div className={styles.imageContainer}>
                    <img src={character.image} alt="Imagen" />
                </div>
                <div className={styles.dataContainer} >
                    <h1>{character.name}</h1>
                    <h2>Status|{character.status}</h2>
                    <h2>Species|{character.species}</h2>
                    <h2>Gender|{character.gender}</h2>
                    <h2>Origin|{character.origin.name}</h2>
                </div>
            </div>
        ): <div>
                LOADING
            </div>}
        <Link to={`/home`} >
            <button className={styles.buttonNav}>VOLVER</button>
        </Link>
    </>
    )
}

export default Detail
