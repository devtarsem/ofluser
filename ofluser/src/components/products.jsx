import './../styles/products.css'
import Search from './search';
import axios from 'axios'
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { cartPrepOnStartWhenCartNotAvailable, OrderItemWITHCODCreator,BillCalculationOnPageLoad,LessMoreQuantityToItemsCreator,AddMoreQuantityToItemsCreator,AddToCartCreator,alreadyHaveCart} from '../slices/productslice';
import carrot from './../icons/carot.jpg'
import home from './../icons/homeW.png'
import {Link} from 'react-router-dom'
import { useState } from 'react';
import tick from './../icons/tick.png'
import io from 'socket.io-client'

const socket = io.connect("http://127.0.0.1:4000")


function Products(){
    
    const productStore = useSelector(store=> store.product)
    console.log(productStore)
    const [billPanel, setBillPanel] = useState(false)
    const dispatch = useDispatch()

    useEffect(el=>{
        if(localStorage.getItem('prepcart')){
            dispatch(alreadyHaveCart(JSON.parse(localStorage.getItem('prepcart'))))
        }else{
            axios({
                method : 'POST',
                url : 'http://127.0.0.1:4000/api/v1/product/all-products',
                data : {
                    token : 'logout'
                }
            }).then(el=>{
                console.log()
                dispatch(cartPrepOnStartWhenCartNotAvailable(el.data.data.items))
            })
        }
    }, [])

    useEffect(el=>{
        dispatch(BillCalculationOnPageLoad())
    }, [])

    useEffect(el=>{
        socket.on("receive_message", (data)=>{
            alert(data.message)
        })
    }, [socket])

    function AddToCart(el){
        console.log(el.target.parentNode.children[2].textContent.split('-')[1].split('kg')[0])
        const newElement = [el.target.parentNode.children[1].textContent, el.target.parentNode.children[2].textContent.split('-')[1].split('kg')[0]]
        dispatch(AddToCartCreator(newElement, JSON.parse(localStorage.getItem('prepcart'))))
    }

    function AddMoreToCart(el){
        dispatch(AddMoreQuantityToItemsCreator(el.target.parentNode.parentNode.children[1].textContent))
    }

    function AddLessToCart(el){
        dispatch(LessMoreQuantityToItemsCreator(el.target.parentNode.parentNode.children[1].textContent))
    }

    function billPanelShow(){
        setBillPanel(billPanel=> !billPanel)
    }

    function CheckOut(){
        const data = {
            itemsList : productStore.addedprods,
            token : JSON.parse(localStorage.getItem('user')).data.token,
            grossBill : productStore.grossBill,
            delivery : productStore.delivery_charges,
            totalBill : productStore.total_bill
        }
        dispatch(OrderItemWITHCODCreator(data))
        socket.emit("order_placed", {message : 'socket'})

    }



    return(
        <div className="products">
            {productStore.order_finish ?
                <div className='orderfinish flex flex-2'>
                    <div className='flex flex-2 flex-dir gap8'>
                        <img src={tick} className='ordericon' alt='order placed'/>
                        <h2 className='congo'>Congratulations</h2>
                        <h2 className='congo'>Your order is placed</h2>
                        <Link to='/track-all' className='trackBtn'>Track now!</Link>
                    </div>
                </div>
             : ''}
            <div className={billPanel ?'billpanelOpen billpanel pad16 flex flex-dir gap16' : 'billpanel billpanelClose pad16 flex flex-dir gap16'}>
                <h3 className='head3 head3Big'>Your bill</h3>
                <div className='flex flex-1'>
                    <p className='Grossbill'>Gross bill</p>
                    <p className='grossbillval'>₹{productStore.grossBill}/-</p>
                </div>
                <div className='flex flex-1'>
                    <p className='Grossbill'>Taxes</p>
                    <p className='grossbillval'>₹0/-</p>
                </div>
                <div className='flex flex-1'>
                    <p className='Grossbill'>Delivery charges</p>
                    <p className='grossbillval'>₹{productStore.delivery_charges}/-</p>
                </div>
                <div className='flex flex-dir gap16'>
                    <p className='Grossbill'>Add tip</p>
                    <div className='flex flex-2 gap16'>
                        <button className='checkbtn'>+10</button>
                        <button className='checkbtn'>+20</button>
                        <button className='checkbtn'>+30</button>
                    </div>
                </div>
                <div className='flex flex-dir gap16'>
                    <p className='Grossbill'>Apply coupan</p>
                    <div className='coupantbox flex flex-2 gap16'>
                        <button className='applybtn'>Apply</button>
                        <input className='inp' placeholder='coupan' type='text'/>
                    </div>
                </div>
                <div className='flex flex-1'>
                    <p className='Grossbill'>Total bill</p>
                    <p className='grossbillval'>₹{productStore.total_bill}/-</p>
                </div>
                <div className='flex flex-2 gap16'>
                    <button className='checkbtn'>Checkout</button>
                    <button onClick={billPanelShow} className='checkbtnOutFill'>Close</button>
                </div>
            </div>
            <div className="topsearch flex flex-2 pad16">
                <input className='search inp' placeholder='search' type='text'/>
            </div>
            <div className="productsMid grid-align grid grid-2-col gap16 pad16">
                {productStore.addedprods.map(el=>
                    <div className='procont flex flex-dir flex-3 gap8 pad16' key={el._id} >
                        <Link to={`/detail/${el.name}`} className='details'>
                            <img src={carrot} alt='vegetable image' className='prodicon'/>
                        </Link>
                        <p className='name name__'>{el.name}</p>
                        <p className='name name__'>Min - {el.min} {el.units}</p>
                        <p className='name name__'>₹{el.price}/- {el.units}</p>
                        {el.addedValue==0 ?
                            <button onClick={AddToCart} className='addtocart'>Add+</button>
                         : 
                            <div className='addless flex flex-1 gap8'>
                                <button onClick={AddMoreToCart} className=' addBtn'>+</button>
                                <p className='addedunits'>{el.addedValue}{el.units}</p>
                                <button onClick={AddLessToCart} className=' addBtn'>-</button>

                            </div>
                         }
                    </div>
                )}
            </div>
            <div className="Checkout pad16">
                <button onClick={billPanelShow} className='popUpBillBtn'>Full bill</button>
                <div className='checks flex flex-2 pad8 gap8'>
                    <Link to='/' >
                        <img src={home} className='iconHome' alt='home'/>
                    </Link>
                    <div className='checkotport flex flex-1 '>
                        <p className='bill '>₹{productStore.total_bill}/-</p>
                        {localStorage.getItem('user') ?
                            <button onClick={CheckOut} className='checkBtn addtocart'>Checkout</button>
                         : 
                            <Link to={'/auth'} className='checkBtn addtocart authsmallbtn flex flex-2'>Signup/Login</Link>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Products;