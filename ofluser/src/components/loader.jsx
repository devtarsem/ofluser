import './../styles/loader.css'

function Loader(){
    return(
        <div className='flex flex-dir flex-2 gap16'>
            <div className='loader'></div>
            <p className='loading'>Loading</p>
        </div>
    )

}

export default Loader;