import { createContext } from "react";

// vamos a setear un objeto qeu va a tener una lista favorita y una funcion para settear esos favoritos, sin logica todavia
// por que es inicial nomas.
export const FavoritesContext = createContext ({
    favorites: [],
    setFavorites: () => {}
})