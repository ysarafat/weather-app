import { FavoriteContext } from "../context";
import useLocalStorage from "../hooks/useLocalStorage";

export default function FavoriteProvider({ children }) {
  const [favorites, setFavorites] = useLocalStorage("favorites", []);

  // handle add to favorites
  const addToFavorites = (latitude, longitude, location) => {
    setFavorites([
      ...favorites,
      {
        latitude: latitude,
        longitude: longitude,
        location: location,
      },
    ]);
  };

  // handle remove location from favorites
  const removeFormFavorites = (location) => {
    const restFavorites = favorites.filter((fav) => fav.location !== location);

    setFavorites(restFavorites);
  };

  return (
    <FavoriteContext.Provider
      value={{ favorites, addToFavorites, removeFormFavorites }}
    >
      {children}
    </FavoriteContext.Provider>
  );
}
