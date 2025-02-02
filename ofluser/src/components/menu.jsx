import {Link} from 'react-router-dom'
import home from './../icons/home.png'
import combo from './../icons/combo.png'
import cart from './../icons/carrt.png'
import order from './../icons/order.png'
import user from './../icons/user.png'


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
            <Link to={'/'} className='link linkoo'>
                <img src={order} className='icon__' alt='cart'/>
            </Link>
            <Link to={'/'} className='link linkoo'>
                <img src={user} className='icon__' alt='cart'/>
            </Link>
        </div>
    )
}

export default Menu;