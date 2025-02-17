import './../styles/home.css'
import Search from './search'
import Menu from './menu'
import veg from './../icon/veg.jpg'
import des1 from './../icon/des1.jpeg'
import fruits from './../icon/fruits.jpg'
import Alias from './alias'
import ComboAlias from './comboAlias'
import SetLocation from './setLocation'
import io from "socket.io-client";
// const socket = io.connect("http://localhost:6000");
const socket = io("http://localhost:4000", { transports: ["websocket"] })
import { useEffect, useState } from 'react'
import FlashCart from './flashcart'
import { HomeVegetableAlias, aliasAddItems } from '../slices/productslice'
import { useSelector, useDispatch } from 'react-redux';


function Home(){


    useEffect(el=>{
        socket.on("connect", (data) => {
          console.log(data)
        });
    
    }, [])
    const aliasHome = useSelector(store=> store.product.aliasHome)
    const dispatch = useDispatch()

    const [vege , setveg] = useState(false);
    const [fru , setfru] = useState(false);
    const [fro , setfro] = useState(false);

    useEffect(el=>{
        dispatch(HomeVegetableAlias('vegetables'))
        setveg(vege=> true);
        setfru(fru=> false);
        setfro(fro=> false);
    }, [])

    function VegetablesList(){
        dispatch(HomeVegetableAlias('vegetables'))
        setveg(vege=> true);
        setfru(fru=> false);
        setfro(fro=> false);
    }
    function FrutsList(){
        dispatch(HomeVegetableAlias('fruits'))
        setveg(vege=> false);
        setfru(fru=> true);
        setfro(fro=> false);
    }
    function FrozenList(){
        dispatch(HomeVegetableAlias('frozen'))
        setveg(vege=> false);
        setfru(fru=> false);
        setfro(fro=> true);
    }
      
    

    return(
        <div className="home ">

            {/* <SetLocation/> */}

            <div className='top pad16'>
                <div className='designCircle'>
                </div>
                <div className='topcontent'>
                    <h3 className='head3'>Hello sir!</h3>
                    <h1 className='head1'>Discover fresh</h1>
                    <h1 className='head1'>Vegetables and fruits</h1>
                    <div className='searchPanel'>
                        {/* <Search/> */}
                        <FlashCart/>
                    </div>
                </div>
            </div>
            <div className='middle pad16'>
                <div className='offfercont grid grid-5-col gap8'>
                    <div className='offerdesw pad16 flex flex-2 flex-dir gap8'>
                        <p className='offerdes'>We have best</p>
                        <p className='offerdes'><span>&quot;vegetables&quot;</span> for you</p>
                    </div>
                    <div className='offerdesw fruitback pad16 flex flex-2 flex-dir gap8'>
                        <p className='offerdes blackt'>We have best</p>
                        <p className='offerdes blackt'><span>&quot;vegetables&quot;</span> for you</p>
                    </div>
                    <div className='offerdesw pad16 flex flex-2 flex-dir gap8'>
                        <p className='offerdes'>We have best</p>
                        <p className='offerdes'><span>&quot;vegetables&quot;</span> for you</p>
                    </div>
                    <div className='offerdesw pad16 flex flex-2 flex-dir gap8'>
                        <p className='offerdes'>We have best</p>
                        <p className='offerdes'><span>&quot;vegetables&quot;</span> for you</p>
                    </div>
                    <div className='offerdesw pad16 flex flex-2 flex-dir gap8'>
                        <p className='offerdes'>We have best</p>
                        <p className='offerdes'><span>&quot;vegetables&quot;</span> for you</p>
                    </div>
                </div>
                <div className='catagory flex flex-2 gap48'>
                    <button onClick={VegetablesList} className={vege ?  'aliasbtn backfill cover flex flex-2 flex-dir gap8': 'aliasbtn cover flex flex-2 flex-dir gap8' }>
                        <p className='cataName'>Vegetables</p>
                        <img src={veg} className='cataImg' alt='catagory'/>
                    </button>
                    <button onClick={FrutsList} className={fru ?  'aliasbtn backfill cover flex flex-2 flex-dir gap8': 'aliasbtn cover flex flex-2 flex-dir gap8' }>
                        <p className='cataName'>Fruits</p>
                        <img src={fruits} className='cataImg' alt='catagory'/>
                    </button>
                    <button onClick={FrozenList} className={fro ?  'aliasbtn backfill cover flex flex-2 flex-dir gap8': 'aliasbtn cover flex flex-2 flex-dir gap8' }>
                        <p className='cataName'>Frozens</p>
                        <img src={veg} className='cataImg' alt='catagory'/>
                    </button>
                </div>
                <div className='alias'>
                    <Alias  />
                </div>
                {/* <div className='alia'>
                    <ComboAlias/>
                </div> */}

            </div>
            <div className='bottom'>
                <Menu/>
            </div>
        </div>
    )
}


export default Home