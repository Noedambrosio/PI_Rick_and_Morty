import {useState} from 'react';
import './App.css';
import Cards from './components/Cards/Cards';
import Nav from './components/Nav/Nav';
import Form from './components/Form/Form';
import axios from 'axios'
import {Routes, Route} from "react-router-dom"
import Detail from './components/Detail/Detail';
import Error from './components/Error/Error';
import { Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Favorites from './components/Favorites/Favorites'
import { useDispatch } from 'react-redux';
import { clearFav } from './redux/actions';

function App() {
   
   const [characters, setCharacters] = useState([]) 
   const [randomId,setRandomId] = useState(null) 
   
   const [access, setAccess] = useState(false) 
   const EMAIL = 'mail@mail.com'   
   const PASSWORD = 'password'      

   const navigate = useNavigate()
   const dispatch = useDispatch()
   
   const login = (userData)=> {  
      if (userData.password === PASSWORD && userData.email === EMAIL) {
         setAccess(true);
         navigate('/home');
      }
   }

   const logOut = ()=> { 
      setAccess(false)
      setCharacters([])
      dispatch(clearFav())
      navigate('/')
   }

   useEffect(() => { 
      !access && navigate('/');
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [access])
   
   useEffect(()=>{
      axios(`https://rickandmortyapi.com/api/character`).then(({data})=>{ 
         setRandomId(Math.floor(Math.random() * (Number(data.info.count)-1))+1)
         console.log(randomId);
      })
      onSearch(randomId)
      // eslint-disable-next-line react-hooks/exhaustive-deps
   },[access])
   
  
   const onSearch = (id)=> { 
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   }

   
   const onClose = (id)=>{ 
      const filtered = characters.filter((character)=>character.id !== Number(id))
         setCharacters(filtered)
      }
      
        
   
   return (
      <div on className='App'>
         <Nav onSearch={onSearch} logOut={logOut}/>
         <Routes>
            <Route path='/' element={<Form login={login}/>}/>
            <Route path='/home' element={<Cards characters={characters} onClose={onClose}/>}/>
            <Route path='/favorites' element={<Favorites onClose={onClose}/>}/>
            <Route path='/detail/:id' element={<Detail/>} />
            <Route path='*' element={<Navigate to='/404'/>}/> 
            <Route path='/404' element={<Error/>}/>
         </Routes>
      </div>
   );
}

export default App;
