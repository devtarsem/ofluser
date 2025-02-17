

function ComboAlias(){
    return(
        <div className="aliasss flex flex-dir gap32">
            <h4 className="head4">Let&lsquo;s try our Combos</h4>
            {[1,2,3].map(e=>
                <div className="combos flex flex-dir gap16 pad16" key={e} >
                    <h5 className="head5">Daily user pacakge</h5>
                    <div className='comboOff grid grid-3-col gap16'>
                        {[1,2,3,4,516,6].map(el=>
                            <div className='flex flex-dir flex-2 gap8' key={el} >
                                <p className='units'>1 Kg</p>
                            </div>
                        )}
                    </div>
                    <p className='comboofff'>₹299/-</p>
                    <button className='addtocart'>Add+</button>
                </div>
            )}
        </div>
    )
}

export default ComboAlias