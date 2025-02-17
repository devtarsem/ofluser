import './../styles/flash.css'
import { flashCartCreator } from '../slices/productslice';
import { useSelector, useDispatch } from 'react-redux';

function FlashCart(){

    const dispatch = useDispatch();
    const store = useSelector(store=> store.addedprods)
    console.log(store)

    function flashEntry(){
        dispatch(flashCartCreator())
    }

    return(
        <div className="flash pad16 flex flex-2">
            <button onClick={flashEntry} className='flashbtn flex flex-2'>
                <h1 className='flashHead'>Try our flash basket</h1>
            </button>
        </div>
    )
}

export default FlashCart;