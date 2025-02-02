import { useParams } from "react-router";
import Menu from "./menu";
import './../styles/detail.css'
import orange from './../icons/orange.jpg'
import { useEffect, useState } from "react";
import { AddToCartCreator } from "../slices/productslice";
import { useSelector, useDispatch } from 'react-redux';


function Detail(){

    const params = useParams()
    console.log(params.item)
    const dispatch = useDispatch()
    const [buttonState, setButtonState] = useState(false)
    const [itemCovered, setitemCovered] = useState([])

    useEffect(el=>{
        const items = JSON.parse(localStorage.getItem('prepcart'))
        console.log(items)
        items.forEach(e=>{
            if(e.name === params.item){
                if(e.addedValue === 0){
                    setButtonState(buttonState=> true)
                    setitemCovered(itemCovered=> e)
                }else{
                    console.log(e)
                    setitemCovered(itemCovered=> e)
                }
            }
        })
    }, [])

    function addTocart(){
        console.log(itemCovered)
        const newElement = [params.item,itemCovered.min]

        dispatch(AddToCartCreator(newElement, JSON.parse(localStorage.getItem('prepcart'))))
        setButtonState(buttonState=> false)
    }


    return(
        <div className="detail">
            <div className="topComp">
                <div className="topimg flex flex-2">
                    <h2 className="namee__detail">{params.item}</h2>
                </div>
                <div className="addoptions flex flex-1 pad16">
                    {buttonState ?
                        <button onClick={addTocart} className="addtocart addtocart_small">Add + </button>
                     : 
                        <div className='addless addlesPanel flex flex-1 gap8'>
                            <button  className=' addBtn'>+</button>
                            <p className='addedunits'>{itemCovered.addedValue}{itemCovered.units}</p>
                            <button className=' addBtn'>-</button>
                        </div>
                    }
                </div>
                <div className="detailsItem pad16 flex">
                    <p className="detailcontent">&quot; Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, ducimus incidunt. Nostrum fugit possimus quas deleniti ratione laboriosam natus veniam iure nulla repudiandae eius provident aperiam, optio minus expedita quam. &quot;</p>
                </div>
            </div>
            <div className="menu">
                <Menu/>
            </div>
        </div>
    )
}

export default Detail;