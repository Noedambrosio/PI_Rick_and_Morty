import { ADD_FAV, FILTER, ORDER, REMOVE_FAV, CLEAR_FAV} from "./actions";

const initialState =  {
    myFavorites:[],
    allCharacters:[]
}

export const reducer = (state = initialState,action)=>{
    switch (action.type) {
        case ADD_FAV: return {
            ...state,
            myFavorites: [...state.allCharacters,action.payload],
            allCharacters: [...state.allCharacters,action.payload]
        }
        case REMOVE_FAV: return {
            ...state,
            myFavorites: state.myFavorites.filter((character)=>character.id !== Number(action.payload)),
            allCharacters: state.allCharacters.filter((character)=>character.id !== Number(action.payload)),
        }

        case ORDER: switch (action.payload) {
            case "A": return {
                ...state,
                allCharacters: [...state.allCharacters],
                myFavorites: [...state.myFavorites].sort((character,next)=>character.id - next.id)
            }
            case "D": return {
                ...state,
                allCharacters: [...state.allCharacters],
                myFavorites: [...state.myFavorites].sort((character,next)=> next.id - character.id)
            }
            case "UN": return {
                ...state,
                allCharacters: [...state.allCharacters],
                myFavorites: [...state.allCharacters]
            }       
            default: return{
                ...state
            }
        
        }

        case FILTER: return {
            ...state,
            myFavorites: action.payload !== "ALL" ? 
                [...state.allCharacters].filter(
                    (character)=>character.gender === action.payload
                ):
                [...state.allCharacters],
            allCharacters: [...state.allCharacters],
        }

        case CLEAR_FAV: return {
            myFavorites:[],
            allCharacters:[]
        }
        
        default: return {
            ...state
        }
    }
}
