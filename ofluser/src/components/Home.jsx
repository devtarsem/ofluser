import './../styles/home.css'
import Search from './search'
import Menu from './menu'
import veg from './../icons/veg.jpg'
import des1 from './../icons/des1.jpeg'
import fruits from './../icons/fruits.jpg'
import Alias from './alias'
import ComboAlias from './comboAlias'
function Home(){
    return(
        <div className="home ">
            <div className='top pad16'>
                <div className='designCircle'>
                </div>
                <div className='topcontent'>
                    <h3 className='head3'>Hello sir!</h3>
                    <h1 className='head1'>Discover now</h1>
                    <h1 className='head1'>Vegetables and fruits</h1>
                    <div className='searchPanel'>
                        <Search/>
                    </div>
                </div>
            </div>
            <div className='middle pad16'>
                <div className='catagory flex flex-2 gap48'>
                    <div className='cover flex flex-2 flex-dir gap8'>
                        <p className='cataName'>Vegetables</p>
                        <img src={veg} className='cataImg' alt='catagory'/>
                    </div>
                    <div className='cover flex flex-2 flex-dir gap8'>
                        <p className='cataName'>Fruits</p>
                        <img src={fruits} className='cataImg' alt='catagory'/>
                    </div>
                    <div className='cover flex flex-2 flex-dir gap8'>
                        <p className='cataName'>Frozens</p>
                        <img src={veg} className='cataImg' alt='catagory'/>
                    </div>
                </div>
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
                <div className='alias'>
                    <Alias/>
                </div>
                <div className='alia'>
                    <ComboAlias/>
                </div>

            </div>
            <div className='bottom'>
                <Menu/>
            </div>
        </div>
    )
}


export default Home