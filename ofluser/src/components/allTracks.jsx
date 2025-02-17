import {useEffect, useState} from 'react'
import { TracksAllCreator } from '../slices/productslice';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router';
function TrackAll(){

    const productStore = useSelector(store=> store)
    const dispatch = useDispatch()
    console.log(productStore)

    useEffect(el=>{
        dispatch(TracksAllCreator())
    }, [])

    return(
        <div className="tracks ">
            <div className='topheadoftracks pad16 flex flex-2'>
                <h2 className='headtrack'>Track your orders</h2>
            </div>
            <div className='alltrackscontainer pad16 flex flex-dir gap16'>
                {productStore.product.tracks.length != 0 ? productStore.product.tracks.map(el=>
                    <div className='tracksItems pad16 flex flex-dir gap8' key={el._id}>
                        <p className='idOrder'>Order id : <span>{el._id}</span></p>
                        <p className='idOrder'>Order date : <span>{el.date}</span></p>
                        <p className='orderitems'>Number of items : <span>{el.item_list.length}</span></p>
                        <p className='billvalue'>Total bill : <span>{el.total}</span></p>
                        <p className='delstatus'>Delivery status : <span>{el.delivered}</span></p>
                        <Link to={`/track/${el._id}`} className='trackLink'>Track your order</Link>
                    </div>
                ) : <p className='noorderyet'>No order placed yet</p>}
            </div>
        </div>
    )
}


export default TrackAll;