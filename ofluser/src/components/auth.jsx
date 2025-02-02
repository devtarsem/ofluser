import './../styles/auth.css'
import SignUp from './signup'
function Auth(){
    return(
        <div className="auth">
            <div className='authTop flex flex-2'>
                <h2 className='authHead'>Open your account</h2>
            </div>
            <div className='authMiddle'>
                <SignUp/>
            </div>
        </div>
    )
}

export default Auth