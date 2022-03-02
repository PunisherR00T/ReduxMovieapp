import { useSelector } from 'react-redux';
import './AllFilms.css'
import FilmCard from './FilmCard'

const AllFilms = () => {
    const films = useSelector((state) => state.films);
    const rate = useSelector((state) => state.rate);
    const inpt = useSelector((state) => state.inpt);
    const x = films.filter(film => film.titre.toUpperCase().includes(inpt.toUpperCase()) && film.rating >= rate).map(film => <FilmCard key={film.id} film={film}/> )
    return(
        
        <div className="List">
            {
                x.length === 0 ? <img src='https://media.istockphoto.com/vectors/page-not-found-error-with-film-flap-design-vector-id1265221960?k=20&m=1265221960&s=170667a&w=0&h=jCITUlo5a7s5fue3XrX2WB8FOK9VnbaWeLCHB8Ovj-c=' alt='Verify Source'/> : x
            }
           
        </div>
    )
}

export default AllFilms