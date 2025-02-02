import './../styles/track.css'
import { useState, useEffect} from 'react';
import cross from './../icons/remove.png'
import accept from './../icons/accept.png'
import { useParams } from 'react-router';
import { TrackedItemCreator } from '../slices/productslice';
import { useDispatch, useSelector } from 'react-redux';

function Track(){
    const [innerWall, setInnerWall] = useState(false)
    const [outerWall, setOuterWall] = useState(false)
    const dispatch = useDispatch()
    const productItem = useSelector(store=> store.product)
    console.log(productItem)
    const params = useParams()
    useEffect(el=>{
        dispatch(TrackedItemCreator(params.id))
    }, [])


    function OrderDetailsWallInner(){
        setInnerWall(innerWall=> !innerWall)
    }
    function OrderDetailsWallOuter(){
        setOuterWall(outerWall=> !outerWall)
    }


    return(
        <div className="track">
            <div className='map'>
                <div onClick={OrderDetailsWallInner} className={innerWall ? 'innerLayerOpens itemslayer pad16 flex flex-dir gap16' : 'itemslayer pad16 flex flex-dir gap16'}>
                    <h4 className='head4 headCorrect'>Order details</h4>
                    <p className='items_count'>Total items - {productItem.trackedItem.item_list.length}</p>
                    <p className='ordertime'>Order time - {productItem.trackedItem.time} </p>
                    <p className='ordertime'>Expected delivery - 1:30:30 </p>
                    <div className='itemscover flex flex-dir gap16'>
                        {productItem.trackedItem.item_list.map((el,index)=>
                            <div className='itemsOfCart flex flex-1 pad16' key={el._id} >
                                <div className='flex flex-2 gap8'>
                                    <p className='nameofitem'>{index+1}</p>
                                    <p className='nameofitem'>{el.name}.</p>
                                </div>
                                <p className='nameofitem'>{el.addedValue}{el.units}</p>
                            </div>
                        )}
                    </div>
                </div>
                <div onClick={OrderDetailsWallOuter} className={outerWall ? 'outerLayerOpens deliverylayer pad16 flex flex-dir gap16' : 'deliverylayer pad16 flex flex-dir gap16'}>
                    <h4 className='ordertracks'>Order tracking</h4>
                    <div className='deliverybar'></div>
                    <div className='status flex flex-3 gap16'>
                        <img src={accept} className='statusicon' alt='check'/>
                        <p className='statusname'>Order is being packed</p>
                    </div>
                    <div className='status flex flex-dir gap16'>
                        <div className='flex flex-3 gap16'>
                            <img src={cross} className='statusicon' alt='check'/>
                            <p className='statusname'>Delivery partner at store</p>
                        </div>
                        <p className='deliveryname'>Deleep singh at store to pick your order</p>
                        <p className='deliveryname'>Call delivery agent at <span>+91 7837642836</span></p>
                    </div>
                    <div className='status flex flex-3 gap16'>
                        <img src={cross} className='statusicon' alt='check'/>
                        <p className='statusname'>Order is picked by delivery partner</p>
                    </div>
                    <div className='status flex flex-3 gap16'>
                        <img src={cross} className='statusicon' alt='check'/>
                        <p className='statusname'>Out of delivery</p>
                    </div>
                    <div className='status flex flex-3 gap16'>
                        <img src={cross} className='statusicon' alt='check'/>
                        <p className='statusname'>Order delivered</p>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Track;