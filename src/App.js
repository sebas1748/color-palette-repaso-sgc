import './App.css';
import Palettes from './components/Palette/Palettes';
import { useEffect, useState } from 'react';
import { getColorPalettes, getTags } from './service';
import Tags from './components/Tag/Tags';
import Favorites from './components/Favorite/Favorites';
import { FavoritesContext } from './context/FavoriteContext';

function App() {
  const [colorPalettes, setColorPalettes] = useState([]);
  const [tags, setTags] = useState([]);
  const [favorites, setFavorites] = useState([]);
  
  useEffect(() => {
    getColorPalettes()
      .then((data) => {
        setColorPalettes(data);
        setFavorites((data) => data.filter((palette) => palette.liked)); //si es true lo va a devolver setFavorites
      })
      .catch((err) => console.log(err));

    getTags()
    .then((data) => setTags(data))
    .catch((err) => console.log(err));
  }, []);

  // el estado de FavoriteContext ya fueron definidos en su componente, aqui solo vamos
    // a indicar los valores que van a tomar.
  return (
    <FavoritesContext.Provider value={{favorites,setFavorites}}>
      <div className='App'>
        <header>
          <h1>Color Palette Project</h1>
        </header>
        <div className='main-container'>
          <Tags tags={tags}/>                {/* Tags es el componente, tags es el props que pasamos, {tags} es el estado */}
          <Palettes palettes={colorPalettes}/>
          <Favorites favorites={favorites}/>
        </div>
      </div>
    </FavoritesContext.Provider>
  );
}

export default App;
