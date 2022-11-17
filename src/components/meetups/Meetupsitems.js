import Card from '../ui/Cards'
import classes from './MeetupItem.module.css'

export default function Meetupitems(props) {


    function toggleFavoriteStatusHandler() {

        alert("hello")

    }

    return (

        <li className={classes.item}>
            <Card>
                <div className={classes.image} >
                    <img src={props.image} alt={props.title} />

                </div>

                <div className={classes.content}>
                    <h3>{props.title}</h3>
                    <address>{props.address}</address>
                    <p>{props.description}</p>
                </div>
                <div className={classes.actions}>
                    <button onClick={toggleFavoriteStatusHandler}>Submit</button>
                </div>

            </Card>
        </li>
    )


}