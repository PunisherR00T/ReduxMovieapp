import AllFilms from './AllFilms'
import FilmAdd from './FilmAdd'
import Filmfilter from './Filmfilter'
import './Films.css'

const Films = () => {
     
    return (

        <div>
                
                <aside id='Title'>
                        <h2>Films</h2> 
                        <Filmfilter  />
                        <FilmAdd />
                        <AllFilms />
                 </aside>
                
        </div>
    )
}

export default Films