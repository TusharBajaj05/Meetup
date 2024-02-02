import { createContext, useState } from 'react'

const FavoritesContext = createContext({
    favorites: [],
    totalFavorites: 0,
    addFavorite: (favoriteMeetup) => {},
    removeFavorite: (meetupId) => {},
    isItemFavorite: (meetupId) => {}
});

export function FavoritesContextProvider(props){
    const [userFavorites, setUserFavorites] = useState([])

    function addFavoriteHandler(favoriteMeetup){
        setUserFavorites(prevUserFavorites => {
            return prevUserFavorites.concat(favoriteMeetup)
        })
    }

    function removeFavoriteHandle(meetupId){
        setUserFavorites(prevUserFavorites => {
            return prevUserFavorites.filter(meetup => meetup.id !== meetupId)
        })
    }

    function itemIsFavoriteHandle(meetupId){
        return userFavorites.some(meetup => meetup.id === meetupId)
    }

    const context = {
        favorites: userFavorites,
        totalFavorites: userFavorites.length,
        addFavorite: addFavoriteHandler,
        removeFavorite: removeFavoriteHandle,
        itemIsFavorite: itemIsFavoriteHandle
    }

    return (
        <FavoritesContext.Provider value = {context}>
            {props.children}
        </FavoritesContext.Provider>
    )
}


export default FavoritesContext
