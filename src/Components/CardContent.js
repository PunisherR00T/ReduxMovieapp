import { Rating } from "@mui/material";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom"
import './CardContent.css'

const CardContent = () => {
    const films = useSelector((state) => state.films);
    const {content} = useParams()
    const selectedFilm = films.find(film => film.titre === content)
  
    return (
        <div id="content">
            <h1>{selectedFilm.titre}</h1>
            <img src={selectedFilm.image} alt="Verify Source"/>
            <br/>
            <Rating id="rate" defaultValue={selectedFilm.rating} readOnly />
            <p id="p">{selectedFilm.description}</p>
            <br/>
            <Link to='/Films' className='link'>Films</Link>
        </div>
    )
}

export default CardContent