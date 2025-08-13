import { useRef, useState } from "react";
import Header from "./Header"
import { checkValidData } from "../utils/validate";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateCurrentUser, updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { netflix_bg } from "../utils/constants";

const Login = () => {

  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMsg, setErrorMsg] = useState(null);

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const dispatch = useDispatch();

  const handleBtnClick = () => {
    // Validate the form data
    const msg = checkValidData(email.current.value , password.current.value);
    setErrorMsg(msg);
    if(msg) return;

    if(msg === null) {
      // sign in or sign up here
      if(!isSignIn) {
        // Sign up logic
          createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
              // Signed up 
              const user = userCredential.user;
              updateProfile(auth.currentUser, {
                displayName: name.current.value
              }).then(() => {
                  const { uid, email, displayName } = auth.currentUser;
                  dispatch(
                    addUser({
                      uid: uid,
                      email: email,
                      displayName: displayName
                  }))
              }).catch((err) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMsg(errorCode + " "  + errorMessage);
              });
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              setErrorMsg(errorCode + " "  + errorMessage);
            });
      }else {
        // Sign in logic
        signInWithEmailAndPassword(auth, email.current.value, password.current.value)
          .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrorMsg(errorCode + " "  + errorMessage);
          });
      }
    }
  }

  return(
        <div>
        <Header />
        <div className="absolute">
          <img src={netflix_bg} alt="background" className="w-full h-screen object-cover" />
        </div>
        <div className="absolute w-full">
          <form onSubmit={(e) => e.preventDefault()} className="p-4 sm:p-6 md:p-8 w-11/12 sm:w-4/5 md:w-3/5 lg:w-3/12 relative bg-black/80 mx-auto my-16 sm:my-24 md:my-36">
            <h1 className="text-2xl sm:text-3xl py-4 sm:py-6 text-white">{isSignIn ? "Sign In" : "Sign Up"}</h1>
            {!isSignIn && (
              <input ref={name} className="p-3 sm:p-4 my-2 sm:my-4 w-full bg-gray-700 text-white rounded-sm text-sm sm:text-base" type="text" placeholder="Enter Name" />
            )}
            <input ref={email} className="p-3 sm:p-4 my-2 sm:my-4 w-full bg-gray-700 text-white rounded-sm text-sm sm:text-base" type="email" placeholder="Email or phone number" />
            <input ref={password} className="p-3 sm:p-4 my-2 sm:my-4 w-full bg-gray-700 text-white rounded-sm text-sm sm:text-base" type="password" placeholder="Password" />
            {setErrorMsg && (
              <p className="text-red-500 text-xs sm:text-sm">{errorMsg}</p>
            )}
            <button className="p-3 sm:p-4 my-2 sm:my-4 w-full bg-red-700 text-white rounded-sm text-sm sm:text-base hover:bg-red-800 transition-colors" onClick={handleBtnClick}>{isSignIn ? "Sign In" : "Sign Up"}</button>
            <p className="py-2 sm:py-4 text-white text-sm sm:text-base">{isSignIn ? "New User?" : "Already registered!"} <a onClick={() => setIsSignIn(!isSignIn)} className="text-blue-500 cursor-pointer" href="#">{isSignIn ? "Sign Up Now!" : "Sign In Now!"}</a></p>
          
            <p className="mt-2 sm:mt-4 text-xs text-gray-400 text-center font-bold">
              This site is an educational project and is not affiliated with or endorsed by Netflix.
            </p>
          </form>
        </div>
      </div>
    )
}

export default Login