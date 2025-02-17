import { createRef, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { OpenAccountCreator } from "../slices/productslice";
import { useNavigate } from "react-router";

function SignUp(){
    const dispatch = useDispatch()
    const username = createRef()
    const phone = createRef()
    const house = createRef()
    const street = createRef()
    const society = createRef()
    const password = createRef()
    const confirm_password = createRef()
    const navigate = useNavigate()
    const store = useSelector(store=> store.product)

    function OpenAccount(el){
        const acc = {
            name : username.current.value,
            phone : phone.current.value,
            password : password.current.value,
            address : `${house.current.value}, ${street.current.value}, ${society.current.value},`,
        }
        dispatch(OpenAccountCreator(acc))
    }

    useEffect(el=>{
        navigate('/products')
    }, [store.account])

    return(
        <div className="signup pad16 flex flex-dir gap16">
            <div className="flex flex-dir gap8">
                <label className="label">Username</label>
                <input ref={username} className="inp inp__update" placeholder="name" type="text"/>
            </div>
            <div className="flex flex-dir gap8">
                <label className="label">Phone</label>
                <input ref={phone} className="inp inp__update" placeholder="78376-XXXXX" type="number"/>
            </div>
            <div className="flex flex-dir gap8">
                <label className="label">Password</label>
                <input ref={password} className="inp inp__update" placeholder="**********" type="password"/>
            </div>
            <div className="flex flex-dir gap8">
                <label className="label">Confirm password</label>
                <input className="inp inp__update" placeholder="**********" type="password"/>
            </div>
            <div className="grid grid-2-col gap16">
                <div className="flex flex-dir gap8">
                    <label className="label">House no.</label>
                    <input ref={house} className="inp inp__update" placeholder="14586" type="text"/>
                </div>
                <div className="flex flex-dir gap8">
                    <label className="label">Street no.</label>
                    <input ref={street} className="inp inp__update" placeholder="2A" type="text"/>
                </div>
                <div className="flex flex-dir gap8">
                    <label className="label">Society</label>
                    <input ref={society} className="inp inp__update" placeholder="jyoti chock" type="text"/>
                </div>
                <div className="flex flex-dir gap8">
                    <label className="label">City</label>
                    <input disabled className="inp inp__update" value='Jalandhar' placeholder="jyoti chock" type="text"/>
                </div>
            </div>
            <button onClick={OpenAccount} className="openAccBtn">Open your account</button>
        </div>
    )
}

export default SignUp;