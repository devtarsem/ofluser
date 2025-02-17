import {Link} from 'react-router-dom'
import home from './../icon/home1.png'
import combo from './../icon/combo.png'
import cart from './../icon/carrt.png'
import order from './../icon/order.png'
import user from './../icon/user1.png'


function Menu(){
    return(
        <div className="menu flex flex-1 pad16">
            <div className='centre flex flex-2'>
                <Link to={'/products'} className='link'>
                    <img src={cart} className='icon' alt='cart'/>
                </Link>
            </div>
            <Link to={'/'} className='link linkoo'>
                <img src={home} className='icon__' alt='cart'/>
            </Link>
            <Link to={'/'} className='link linkoo'>
                <img src={combo} className='icon__ combo' alt='cart'/>
            </Link>
            <Link to={'/track-all'} className='link linkoo'>
                <img src={order} className='icon__' alt='cart'/>
            </Link>
            <Link to={'/'} className='link linkoo'>
                <img src={user} className='icon__' alt='cart'/>
            </Link>
        </div>
    )
}

export default Menu;