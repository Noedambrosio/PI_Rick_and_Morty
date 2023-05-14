import React from 'react';
import styles from './Cards.module.css'
import Card from '../Card/Card';

export default function Cards({characters,onClose}) {
   return ( 
      <div className={styles.carrucelCards}>
            {characters.map( ({id,name,status,species,gender,origin,image}) => {
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
      
   )
}
