import { useContext } from "react";
import { FavoriteContext } from "../../context";

export default function FavoriteListModal() {
  const { favorites } = useContext(FavoriteContext);

  return (
    <div className="max-w-xs py-4 bg-white rounded-md border-gray-500 absolute right-0 top-16 text-black shadow-lg ">
      <h3 className="text-lg font-bold px-4">Favorites Locations</h3>
      <ul className="space-y-2 mt-4 *:py-2 *:px-4 *:cursor-pointer">
        {favorites?.map((fav) => (
          <li key={fav.location} className="hover:bg-gray-200">
            {fav.location}
          </li>
        ))}

        {favorites.length === 0 && <p>Nothing add to Favorite</p>}
      </ul>
    </div>
  );
}
