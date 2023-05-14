import styled from "./FavButton.module.css"

const FavButton = ({isFav, onClick})=> {
    return(
        <>
            {
                isFav ? (
                    <button className={styled.favButtonOn} onClick={onClick}>❤️</button>
                ) : (
                    <button className={styled.favButtonOff} onClick={onClick}>🤍</button>
                )
            }
        </>
    )

}

export default FavButton