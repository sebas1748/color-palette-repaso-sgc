import { FaHeart, FaRegHeart } from 'react-icons/fa'
import { useContext, useState } from 'react';
import { FavoritesContext } from '../../context/FavoriteContext';
import './Palette.css';

// (props.palette.name) este es mi props, entonces voy a hacer destructury de props

const Palette = ({ palette }) => {   
    const { id, name, colors, liked } = palette
    
    //en App.js ya defini la lista y la funcion de Favoritos
    //useContext le asigno el Contexto que cree y quiero usar
    const {favorites, setFavorites } = useContext(FavoritesContext);
    const [isFavorite, setIsFavorite] = useState(liked);

    //manejar el favorito, si hago clic siendo true o no el liked
    const handleFavorite = () => {
        setIsFavorite((isFavorite) => !isFavorite);

        //buscamos el id del favorito
        const foundIndex = favorites.findIndex(fav => fav.id === id);

        //si me devuelve - es por que no existe la paleta
        //para agregar a favoritos
        if(foundIndex === -1){
            setFavorites([...favorites, palette])
            return
        }

        //Quitar de favoritos
        setFavorites(
            favorites.filter((fav) => fav.id !== id)
        );
    }

    return (
        <div className='palette-container'>
            <div className='palette'>
                <h3>{name}</h3>  
                {colors.map((color) => {   
                    return (
                        <div 
                            key={color} 
                            className='color' 
                            style={{ backgroundColor: color }}
                        >
                            <span>{color}</span>
                        </div>
                    );
                })}
            </div>
            <div className='fav'>
                {isFavorite ? (
                <FaHeart className='fav heart' onClick={handleFavorite}/>
                ) : (
                <FaRegHeart className='fav' onClick={handleFavorite}/>
                )}
            </div>
        </div>
    );
}

export default Palette;