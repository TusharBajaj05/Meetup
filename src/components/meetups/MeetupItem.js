import { useContext } from 'react'
import Cards from '../ui/Cards'
import classes from './MeetupItem.module.css'
import FavoritesContext from '../../store/favorites-context'

function MeetupItem(props) {
    const favoritesCtx = useContext(FavoritesContext)
    const itemIsFavorite = favoritesCtx.itemIsFavorite(props.id)

    function toggleFavoritesHandler(){
        if(itemIsFavorite){
            favoritesCtx.removeFavorite(props.id)
        }
        else{
            favoritesCtx.addFavorite({
                id: props.id,
                title: props.title,
                description: props.description,
                image: props.image,
                address: props.address
            })
        }
    }

  return (
    <li className={classes.item}>
        <Cards>
            <div className={classes.image}>
                <img src={props.image} alt="props.title"></img>
            </div>
            <div className={classes.content}>
                <h3>{props.title}</h3>
                <address>{props.address}</address>
                <p>{props.description}</p>
            </div>
            <div className={classes.actions}>
                <button onClick={toggleFavoritesHandler}>
                    {itemIsFavorite ? 'Remove from Favorites' : 'To Favorites'}
                </button>
            </div>
        </Cards>
    </li>
  )
}

export default MeetupItem
