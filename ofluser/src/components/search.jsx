import { searchproductCreator } from "../slices/productslice";
import { useDispatch } from "react-redux";
function Search(){
    const dispatch = useDispatch()
    function seachThing(el){
        console.log(el.target.value)
        dispatch(searchproductCreator(el.target.value.toLowerCase()))
    }


    return(
        <div className="search">
            <input onChange={seachThing} className="inp" placeholder="Search" type="text"/>
        </div>
    )
}

export default Search;