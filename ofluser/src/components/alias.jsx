import lassan from './../icons/lassan.jpg'
import carrot from './../icons/carot.jpg'
import shalgam from './../icons/shalgam.jpg'
import orange from './../icons/orange.jpg'
import lichi from './../icons/lichi.jpg'
import apple from './../icons/kapple.jpg'

function Alias(){
    return(
        <div className="alias flex flex-dir gap32">
            <h4 className="head4">We have best products for you</h4>
            <div className="grid grid-3-col gap16">
                <div className='cover flex flex-2 flex-dir gap8'>
                    <img src={lassan} className='iconeg' alt='vegeable'/>
                    <button className='addtocart'>Add+</button>
                </div>
                <div className='cover flex flex-2 flex-dir gap8'>
                    <img src={carrot} className='iconeg' alt='vegeable'/>
                    <button className='addtocart'>Add+</button>
                </div>
                <div className='cover flex flex-2 flex-dir gap8'>
                    <img src={shalgam} className='iconeg' alt='vegeable'/>
                    <button className='addtocart'>Add+</button>
                </div>
            </div>
            <div className="grid grid-3-col gap16">
                <div className='cover flex flex-2 flex-dir gap8'>
                    <img src={orange} className='iconeg' alt='vegeable'/>
                    <button className='addtocart'>Add+</button>
                </div>
                <div className='cover flex flex-2 flex-dir gap8'>
                    <img src={lichi} className='iconeg' alt='vegeable'/>
                    <button className='addtocart'>Add+</button>
                </div>
                <div className='cover flex flex-2 flex-dir gap8'>
                    <img src={apple} className='iconeg' alt='vegeable'/>
                    <button className='addtocart'>Add+</button>
                </div>
            </div>
        </div>
    )
}

export default Alias;