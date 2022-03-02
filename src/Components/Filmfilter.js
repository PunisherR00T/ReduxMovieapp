import { Rating } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux';
import { inptlist, ratelist } from '../Redux/Actions';
import './Filmfilter.css'

const Filmfilter = () => {
    const rate = useSelector((state) => state.rate);
    const inpt = useSelector((state) => state.inpt);
    const dispatch = useDispatch()
    return (
        <div className="modalL">
            <input onChange={(e)=> dispatch(inptlist(e.target.value))} value={inpt}/>
            <Rating onChange={(e)=> dispatch(ratelist(e.target.value))} value={rate}/>
        </div>
    )
}

export default Filmfilter