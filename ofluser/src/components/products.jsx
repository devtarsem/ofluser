import './../styles/products.css'
import Search from './search';
import axios from 'axios'
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { cartPrepOnStartWhenCartNotAvailable, makingOrderFinishSetToDefaultCreator,OrderItemWITHCODCreator,BillCalculationOnPageLoad,LessMoreQuantityToItemsCreator,AddMoreQuantityToItemsCreator,AddToCartCreator,alreadyHaveCart} from '../slices/productslice';

import home from './../icon/homeW.png'
import {Link} from 'react-router-dom'
import { useState } from 'react';
import tick from './../icon/tick.png'
import io from 'socket.io-client'

const socket = io.connect("https://wheelbackend.onrender.com")
import cross from './../icon/notfound.png'

import lassan from './../icon/lassan.jpg'
import carrot from './../icon/carrt.png'
import shalgam from './../icon/shalgam.jpg'
import orange from './../icon/orange.jpg'
import lichi from './../icon/lichi.jpg'
import apple from './../icon/kapple.jpg'
import baigan from './../icon/bharta.jpeg'
import noimg from './../icon/noimg.png'

import adrak from './../icon/adrak.jpg'
import amla from './../icon/amla.jpg'
import arbi from './../icon/arbinew.jpeg'
import babbu from './../icon/babbu.jpg'
import corn from './../icon/babycorn.jpeg'
import corn1 from './../icon/corn.jpeg'
import redpatta from './../icon/redpatta.jpeg'
import avacado from './../icon/avacado.webp'
import kiwi from './../icon/kiwi.jpeg'
import baiganlong from './../icon/baiganlong.jpeg'
import bharta from './../icon/bharta.jpeg'
import baigansmall from './../icon/baigansmall.jpeg'
import dhaina from './../icon/dhaiyna.jpeg'
import harimirch from './../icon/mirch.jpeg'
import gobi from './../icon/gobi.jpeg'
import gshimla from './../icon/gshimla.jpeg'
import saag from './../icon/saag1.jpeg'
import tinda from './../icon/tinda.jpeg'
import tori from './../icon/tori.jpeg'
import desitomato from './../icon/desitomato.jpeg'
import ggrapes from './../icon/ggrapes.jpeg'
import bgrapes from './../icon/bgrapes.jpeg'

import kela from './../icon/banana.webp'
import chappan from './../icon/chappan.jpeg'
import desikh from './../icon/desikheera.jpeg'
import halwa from './../icon/halwa.jpeg'
import chinalassan from './../icon/chinalassan.jpeg'
import medlassan from './../icon/medlassan.jpeg'
import matar from './../icon/matar.jpg'
import gnimbu from './../icon/gnimbu.jpeg'
import nimbu from './../icon/nimbu.jpeg'
import nasikonion from './../icon/nasikonion.jpeg'
import redonion from './../icon/redonion.jpeg'
import smallonion from './../icon/smallonion.jpeg'
import patta from './../icon/patta.jpeg'
import pudina from './../icon/pudina.jpeg'
import jack from './../icon/kathal.jpeg'
import Bhe from './../icon/Bhe.jpg'
import kundru from './../icon/kundru.jpeg'
import sweetpot from './../icon/sweetpot.jpeg'
import methi from './../icon/methi.jpeg'
import parmal from './../icon/parmal.jpeg'
import rawmango from './../icon/rawmango.jpeg'
import bathu from './../icon/bathu.jpeg'
import iceberg from './../icon/iceberg.jpeg'


// import band from './../icon/band.jpg'
// import basil from './../icon/basil.jpg'
// import beans from './../icon/beans.jpg'
import beetroot from './../icon/beet.jpg'
import bhe from './../icon/Bhe.jpg'
import bhindi from './../icon/bhindi.jpeg'
import beans from './../icon/beans.jpeg'
import jimikhand from './../icon/jimi.jpeg'
import rosemerry from './../icon/rosemerry.jpeg'
import drumstick from './../icon/drumstick.jpeg'
import lemonguass from './../icon/lemonguas.webp'
import kapple from './../icon/kapple.jpeg'
import wapple from './../icon/wapple.jpeg'
import gapple from './../icon/gapple.jpeg'
import galapple from './../icon/galapple.jpeg'
import anar from './../icon/anar.jpeg'
import papaya from './../icon/papaya.jpeg'

import broccli from './../icon/broccoli.webp'
import carrotred from './../icon/carrotred.webp'
import palak from './../icon/palak.jpeg'
import tomato from './../icon/tomato.jpeg'
import jackcut from './../icon/jackcut.jpeg'
import chinacabbage from './../icon/chinacabbage.jpeg'

import celery from './../icon/celery.jpeg'
import cherryTomato from './../icon/cherrytom.jpeg'
import redpot from './../icon/redpot.webp'
import smallpot from './../icon/smallpot.jpg'
import orgadrak from './../icon/orgadrak.jpeg'
import golkaddu from './../icon/golkaddu.jpeg'
import petha from './../icon/petha.jpeg'
import rawbanana from './../icon/rawbanana.jpeg'
import saladpatta from './../icon/saladpatta.jpeg'
import redcabbage from './../icon/redcab.jpeg'
import gzuc from './../icon/gzuc.jpeg'
import yzuc from './../icon/yzuc.jpeg'
import haldi from './../icon/haldi.jpeg'
import parsley from './../icon/parsley.jpeg'
import basil from './../icon/basil.jpeg'
import rocket from './../icon/rocket.jpeg'
import micro from './../icon/micro.jpeg'
import pokchey from './../icon/pokchey.jpeg'
import loki from './../icon/loki.jpeg'
import safeda from './../icon/safeda.jpeg'

// import chinacabbage from './../icon/china-cabbage.jpg'
// import dhaina from './../icon/dha.jpg'
import dragon from './../icon/dragon.webp'
import allobuk from './../icon/allobuk.jpeg'

import peel from './../icon/peel.jpeg'
import redcap from './../icon/redcap.jpeg'
import yellowcap from './../icon/yellowcap.jpeg'
import thime from './../icon/thime.jpeg'
import curry from './../icon/curry.jpeg'
import desiamrood from './../icon/desiamrood.jpeg'
import impamrood from './../icon/impamrood.jpeg'
import mousmi from './../icon/mausmi.jpeg'
import chikoo from './../icon/chiko.jpeg'
import bcoco from './../icon/bcoco.jpeg'
import gcoco from './../icon/gcoco.jpeg'
import ranipine from './../icon/rani-pineapple.jpg'
import rawpine from './../icon/rawpine.jpeg'
import blue from './../icon/blue.jpeg'
import kerbooja from './../icon/kharbooja.jpeg'
import thaiguava from './../icon/thaiguava.jpeg'
import thaiginger from './../icon/thaiginger.jpeg'

import shardha from './../icon/shardha.jpeg'
import noodles from './../icon/noodles.jpeg'
import mcamfries from './../icon/mcamfries.jpeg'
import masalafries from './../icon/masalafries.jpeg'
import watermelon from './../icon/watermelon.jpg'
import amulfries from './../icon/amulfries.jpeg'
import safal from './../icon/safal.jpeg'
import safalcorn from './../icon/safalcorn.jpeg'
import harapayaz from './../icon/harapayaz.jpeg'
import karela from './../icon/karela.jpeg'
import chinakheera from './../icon/chinakheera.jpeg'
import mooli from './../icon/mooli.jpeg'
import mashroom from './../icon/mashroom.jpeg'
import patato from './../icon/patato.jpeg'
import soyachaap from './../icon/chaap.jpeg'
import tikki from './../icon/tikki.jpeg'

import Loader from './loader';

function Products(){
    
    const productStore = useSelector(store=> store.product)
    console.log(productStore)
    const [billPanel, setBillPanel] = useState(false)
    const dispatch = useDispatch()
    const [load, setLoad] = useState(false);

    useEffect(el=>{
        if(localStorage.getItem('prepcart')){
            setLoad(load=> true)
            dispatch(alreadyHaveCart(JSON.parse(localStorage.getItem('prepcart'))))
            setLoad(load=> false)
        
        }else{
            setLoad(load=> true)
            axios({
                method : 'POST',
                url : 'https://wheelbackend.onrender.com/api/v1/product/all-products',
                data : {
                    token : 'logout'
                }
            }).then(el=>{
                console.log()
                dispatch(cartPrepOnStartWhenCartNotAvailable(el.data.data.items))
                setLoad(load=> false)
            
            })
        }
    }, [])

    useEffect(el=>{
        dispatch(BillCalculationOnPageLoad())
        dispatch(makingOrderFinishSetToDefaultCreator())
    }, [])

    useEffect(el=>{
        socket.off("orderPlacedResponse");
        socket.on("orderPlacedResponse", (data)=>{
            console.log(data)
        })
        return () => {
            socket.off("orderPlacedResponse"); // Cleanup on unmount
        };
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
        // socket.emit("placed", {message : 'socket'})
        // socket.emit('placed', {
        //     data : {
        //     items : data
        //     }
        // })

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
                {/* <div className='flex flex-dir gap16'>
                    <p className='Grossbill'>Add tip</p>
                    <div className='flex flex-2 gap16'>
                        <button className='checkbtn'>+10</button>
                        <button className='checkbtn'>+20</button>
                        <button className='checkbtn'>+30</button>
                    </div>
                </div> */}
                {/* <div className='flex flex-dir gap16'>
                    <p className='Grossbill'>Apply coupan</p>
                    <div className='coupantbox flex flex-2 gap16'>
                        <button className='applybtn'>Apply</button>
                        <input className='inp' placeholder='coupan' type='text'/>
                    </div>
                </div> */}
                <div className='flex flex-1'>
                    <p className='Grossbill'>Total bill</p>
                    <p className='grossbillval'>₹{productStore.total_bill}/-</p>
                </div>
                <div className='flex flex-2 gap16'>
                    <button className='checkbtn'>Checkout</button>
                    <button onClick={billPanelShow} className='checkbtnOutFill'>Close</button>
                </div>
            </div>
            <div className="topsearch  pad16">
                <Search/>
                {/* <input className='search inp' placeholder='search' type='text'/> */}
            </div>
            <div className="productsMid grid-align grid grid-2-col gap16 pad16">
                {load &&
                    <div className='loadp'>
                        <Loader/>
                    </div>
                }
                {productStore.addedprods.map(el=>
                    <div className='procont flex flex-dir flex-3 gap8 pad16' key={el._id} >
                        <Link to={`/detail/${el.name}`} className='details'>
                            {el.name==='allo diamond' && <img src={patato} className="icon__big" alt="vegetable" />}
                            {el.name==='allo red' && <img src={redpot} className="icon__big" alt="vegetable" />}
                            {el.name==='allo dum' && <img src={smallpot} className="icon__big" alt="vegetable" />}
                            {el.name==='adrak' && <img src={adrak} className="icon__big" alt="vegetable" />}
                            {el.name==='adrak organic' && <img src={orgadrak} className="icon__big" alt="vegetable" />}
                            {el.name==='arbi' && <img src={arbi} className="icon__big" alt="vegetable" />}
                            {el.name==='amla' && <img src={amla} className="icon__big" alt="vegetable" />}
                            {el.name==='baigan long' && <img src={baiganlong} className="icon__big" alt="vegetable" />}
                            {el.name==='baigan round' && <img src={baigan} className="icon__big" alt="vegetable" />}
                            {el.name==='baigan bharta' && <img src={bharta} className="icon__big" alt="vegetable" />}
                            {el.name==='baigan small' && <img src={baigansmall} className="icon__big" alt="vegetable" />}
    
                            {el.name==='bhindi' && <img src={bhindi} className="icon__big" alt="vegetable" />}
                            {el.name==='beans' && <img src={beans} className="icon__big" alt="vegetable" />}
                            {el.name==='gajjar orange' && <img src={carrot} className="icon__big" alt="vegetable" />}
                            {el.name==='gajjar red' && <img src={carrotred} className="icon__big" alt="vegetable" />}
    
                            {el.name==='goal khiya' && <img src={golkaddu} className="icon__big" alt="vegetable" />}
                            {el.name==='hara dhaniya' && <img src={dhaina} className="icon__big" alt="vegetable" />}
                            {el.name==='hari mirch' && <img src={harimirch} className="icon__big" alt="vegetable" />}
                            {el.name==='hara payaz' && <img src={harapayaz} className="icon__big" alt="vegetable" />}
                            {el.name==='chapan kaddu' && <img src={chappan} className="icon__big" alt="vegetable" />}
    
                            {el.name==='halwa kaddu' && <img src={halwa} className="icon__big" alt="vegetable" />}
                            {el.name==='china kheera' && <img src={chinakheera} className="icon__big" alt="vegetable" />}
    
                            {el.name==='karela' && <img src={karela} className="icon__big" alt="vegetable" />}
                            {el.name==='lokki' && <img src={loki} className="icon__big" alt="vegetable" />}
                            {el.name==='china lassan' && <img src={chinalassan} className="icon__big" alt="vegetable" />}
                            {el.name==='medium lassan' && <img src={medlassan} className="icon__big" alt="vegetable" />}
                            {el.name==='hara mattar' && <img src={matar} className="icon__big" alt="vegetable" />}
    
                            {el.name==='desi kheera' && <img src={desikh} className="icon__big" alt="vegetable" />}
                            {el.name==='mooli' && <img src={mooli} className="icon__big" alt="vegetable" />}
                            {el.name==='mashroom' && <img src={mashroom} className="icon__big" alt="vegetable" />}
                            {el.name==='nimbu' && <img src={nimbu} className="icon__big" alt="vegetable" />}
                            {el.name==='nimbu green' && <img src={gnimbu} className="icon__big" alt="vegetable" />}
                            {el.name==='nasik onion' && <img src={nasikonion} className="icon__big" alt="vegetable" />}
                            {el.name==='red onion' && <img src={redonion} className="icon__big" alt="vegetable" />}
                            {el.name==='sirka onion' && <img src={smallonion} className="icon__big" alt="vegetable" />}
                            {el.name==='patta gobhi' && <img src={patta} className="icon__big" alt="vegetable" />}
                            {el.name==='pudina' && <img src={pudina} className="icon__big" alt="vegetable" />}
                            {el.name==='full gobhi' && <img src={gobi} className="icon__big" alt="vegetable" />}
                            {el.name==='palak' && <img src={palak} className="icon__big" alt="vegetable" />}
                            {el.name==='green shimla mirch' && <img src={gshimla} className="icon__big" alt="vegetable" />}
                            {el.name==='sarso saag' && <img src={saag} className="icon__big" alt="vegetable" />}
                            {el.name==='shalgam' && <img src={shalgam} className="icon__big" alt="vegetable" />}
                            {el.name==='tinda' && <img src={tinda} className="icon__big" alt="vegetable" />}
                            {el.name==='tori' && <img src={tori} className="icon__big" alt="vegetable" />}
                            {el.name==='jimikhand' && <img src={jimikhand} className="icon__big" alt="vegetable" />}
                            {el.name==='bhe' && <img src={Bhe} className="icon__big" alt="vegetable" />}
                            {el.name==='kathal with cutting' && <img src={jackcut} className="icon__big" alt="vegetable" />}
                            {el.name==='kathal' && <img src={jack} className="icon__big" alt="vegetable" />}
                            {el.name==='kundru' && <img src={kundru} className="icon__big" alt="vegetable" />}
                            {el.name==='shakrgandi' && <img src={sweetpot} className="icon__big" alt="vegetable" />}
                            {el.name==='methi' && <img src={methi} className="icon__big" alt="vegetable" />}
                            {el.name==='parmal' && <img src={parmal} className="icon__big" alt="vegetable" />}
                            {el.name==='raw mango' && <img src={rawmango} className="icon__big" alt="vegetable" />}
                            {el.name==='bathu' && <img src={bathu} className="icon__big" alt="vegetable" />}
                            {el.name==='petha' && <img src={petha} className="icon__big" alt="vegetable" />}
                            {el.name==='raw banana' && <img src={rawbanana} className="icon__big" alt="vegetable" />}
                            {el.name==='salad patta' && <img src={saladpatta} className="icon__big" alt="vegetable" />}
                            {el.name==='red salad patta' && <img src={redpatta} className="icon__big" alt="vegetable" />}
                            {el.name==='yellow cabbage' && <img src={noimg} className="icon__big" alt="vegetable" />}
                            {el.name==='turi' && <img src={tori} className="icon__big" alt="vegetable" />}
                            {el.name==='desi tomato' && <img src={desitomato} className="icon__big" alt="vegetable" />}
                            {el.name==='hybrid tomato' && <img src={tomato} className="icon__big" alt="vegetable" />}
                            {el.name==='baby corn' && <img src={corn} className="icon__big" alt="vegetable" />}
                            {el.name==='basil' && <img src={basil} className="icon__big" alt="vegetable" />}
                            {el.name==='brockley' && <img src={broccli} className="icon__big" alt="vegetable" />}
                            {el.name==='cherry tomato' && <img src={cherryTomato} className="icon__big" alt="vegetable" />}
                            {el.name==='celery' && <img src={celery} className="icon__big" alt="vegetable" />}
                            {el.name==='china cabbage' && <img src={chinacabbage} className="icon__big" alt="vegetable" />}
                            {el.name==='ice berg' && <img src={iceberg} className="icon__big" alt="vegetable" />}
                            {el.name==='lettuce' && <img src={noimg} className="icon__big" alt="vegetable" />}
                            {el.name==='parsley' && <img src={parsley} className="icon__big" alt="vegetable" />}
                            {el.name==='rocekt leaves' && <img src={rocket} className="icon__big" alt="vegetable" />}
                            {el.name==='micro green' && <img src={micro} className="icon__big" alt="vegetable" />}
                            {el.name==='thime' && <img src={thime} className="icon__big" alt="vegetable" />}
                            {el.name==='rosemerry' && <img src={rosemerry} className="icon__big" alt="vegetable" />}
                            {el.name==='drum stick' && <img src={drumstick} className="icon__big" alt="vegetable" />}
                            {el.name==='curry leaves' && <img src={curry} className="icon__big" alt="vegetable" />}
                            {el.name==='pckchey' && <img src={pokchey} className="icon__big" alt="vegetable" />}
                            {el.name==='peeled garlic' && <img src={peel} className="icon__big" alt="vegetable" />}
                            {el.name==='red capsicum' && <img src={redcap} className="icon__big" alt="vegetable" />}
                            {el.name==='yellow capsicum' && <img src={yellowcap} className="icon__big" alt="vegetable" />}
                            {el.name==='red cabbage' && <img src={redcabbage} className="icon__big" alt="vegetable" />}
                            {el.name==='green zucchini' && <img src={gzuc} className="icon__big" alt="vegetable" />}
                            {el.name==='yellow zucchini' && <img src={yzuc} className="icon__big" alt="vegetable" />}
                            {el.name==='kacchi haldi' && <img src={haldi} className="icon__big" alt="vegetable" />}
                            {el.name==='avacado' && <img src={avacado} className="icon__big" alt="vegetable" />}
                            {el.name==='sweet corn' && <img src={corn1} className="icon__big" alt="vegetable" />}
                            {el.name==='thai ginger' && <img src={thaiginger} className="icon__big" alt="vegetable" />}
                            {el.name==='lemon grass' && <img src={lemonguass} className="icon__big" alt="vegetable" />}
                            {el.name==='kashmiri apple' && <img src={kapple} className="icon__big" alt="vegetable" />}
                            {el.name==='washington apple' && <img src={wapple} className="icon__big" alt="vegetable" />}
                            {el.name==='green apple' && <img src={gapple} className="icon__big" alt="vegetable" />}
                            {el.name==='royal gala apple' && <img src={galapple} className="icon__big" alt="vegetable" />}
                            {el.name==='anar' && <img src={anar} className="icon__big" alt="vegetable" />}
                            {el.name==='desi amrood' && <img src={desiamrood} className="icon__big" alt="vegetable" />}
                            {el.name==='imported amrood' && <img src={impamrood} className="icon__big" alt="vegetable" />}
                            {el.name==='banana' && <img src={kela} className="icon__big" alt="vegetable" />}
                            {el.name==='imported babbu gosha' && <img src={babbu} className="icon__big" alt="vegetable" />}
                            {el.name==='green grapes' && <img src={ggrapes} className="icon__big" alt="vegetable" />}
                            {el.name==='black grapes' && <img src={bgrapes} className="icon__big" alt="vegetable" />}
                            {el.name==='kharbooja' && <img src={kerbooja} className="icon__big" alt="vegetable" />}
                            {el.name==='kiwi' && <img src={kiwi} className="icon__big" alt="vegetable" />}
                            {el.name==='safeda mango' && <img src={safeda} className="icon__big" alt="vegetable" />}
                            {el.name==='mausmi' && <img src={mousmi} className="icon__big" alt="vegetable" />}
                            {el.name==='orange' && <img src={orange} className="icon__big" alt="vegetable" />}
                            {el.name==='pineapple' && <img src={rawpine} className="icon__big" alt="vegetable" />}
                            {el.name==='rani pineapple' && <img src={ranipine} className="icon__big" alt="vegetable" />}
                            {el.name==='papaya' && <img src={papaya} className="icon__big" alt="vegetable" />}
                            {el.name==='beet root' && <img src={beetroot} className="icon__big" alt="vegetable" />}
                            {el.name==='watermelon' && <img src={watermelon} className="icon__big" alt="vegetable" />}
                            {el.name==='chikoo' && <img src={chikoo} className="icon__big" alt="vegetable" />}
                            {el.name==='dragon fruit' && <img src={dragon} className="icon__big" alt="vegetable" />}
                            {el.name==='allo bhukhara' && <img src={allobuk} className="icon__big" alt="vegetable" />}
                            {el.name==='french fries' && <img src={mcamfries} className="icon__big" alt="vegetable" />}
                            {el.name==='soya chaap' && <img src={soyachaap} className="icon__big" alt="vegetable" />}
                            {/* {el.name==='sweet corn' && <img src={corn} className="icon__big" alt="vegetable" />} */}
                            {el.name==='boiled noddles' && <img src={noodles} className="icon__big" alt="vegetable" />}
                            {el.name==='coconut brown' && <img src={bcoco} className="icon__big" alt="vegetable" />}
                            {el.name==='coconut green' && <img src={gcoco} className="icon__big" alt="vegetable" />}
                            {el.name==='shardha' && <img src={shardha} className="icon__big" alt="vegetable" />}
                            {el.name==='imported malta' && <img src={noimg} className="icon__big" alt="vegetable" />}
                            {el.name==='mcam french fries' && <img src={mcamfries} className="icon__big" alt="vegetable" />}
                            {el.name==='masala fries' && <img src={masalafries} className="icon__big" alt="vegetable" />}
                            {el.name==='amul french fries' && <img src={amulfries} className="icon__big" alt="vegetable" />}
                            {el.name==='safal frozen mattar' && <img src={safal} className="icon__big" alt="vegetable" />}
                            {el.name==='sweet corn frozen' && <img src={safalcorn} className="icon__big" alt="vegetable" />}
                            {el.name==='allo tikki' && <img src={tikki} className="icon__big" alt="vegetable" />}
                            {el.name==='blue berry' && <img src={blue} className="icon__big" alt="vegetable" />}
                            {el.name==='thai guava' && <img src={thaiguava} className="icon__big" alt="vegetable" />}
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

                {(productStore.addedprods.length === 0 && !load) && 
                    <div className='notfound flex flex-2 flex-dir gap16'>
                        <img src={cross} className='icon__big' alt='404 image'/>
                        <p className='notfoundname'>Product not found</p>
                    </div>
                }
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