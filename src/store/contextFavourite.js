import { createContext, useState } from 'react';

const FavouriteContext = createContext({
    favouriteItems: [],
    addFavouriteItem: () => { },
    removeFavouriteItem: () => { },
    isFavouriteItem: () => { },
});

export function ContextFavourite(props) {

    const [userFavourite, setUserFavourite] = useState([]);

    const addFavouriteItem = (product) => {
        setUserFavourite((prevUserFavourite) => {
            return prevUserFavourite.concat(product);
        })
    }
    const removeFavouriteItem = (id) => {
        setUserFavourite((prevUserFavourite) => {
            return prevUserFavourite.filter(product => product._id !== id);
        })
    }

    const isFavouriteItem = (id) => {
        return userFavourite.some(product => product._id === id);
    }

    const context = {
        favouriteItems: userFavourite,
        addFavouriteItem: addFavouriteItem,
        removeFavouriteItem: removeFavouriteItem,
        isFavouriteItem: isFavouriteItem
    }

    return <FavouriteContext.Provider value={context}>
        {props.children}
    </FavouriteContext.Provider>
}


export default FavouriteContext;