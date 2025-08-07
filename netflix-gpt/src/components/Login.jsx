import { useRef, useState } from "react";
import Header from "./Header"
import { checkValidData } from "../utils/validate";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateCurrentUser, updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {

  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMsg, setErrorMsg] = useState(null);

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const navigate = useNavigate(); 
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
                  navigate("/browse");
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
            navigate("/browse");
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
          <img src="https://assets.nflxext.com/ffe/siteui/vlv3/258d0f77-2241-4282-b613-8354a7675d1a/web/US-en-20250721-TRIFECTA-perspective_6d968797-b773-4ec4-aa69-2a9c2e41ae94_small.jpg" alt="background" />
        </div>
        <div className="absolute w-full">
          <form onSubmit={(e) => e.preventDefault()} className="p-8 w-3/12 relative bg-black/80 mx-auto my-36">
            <h1 className="text-3xl py-6 text-white">{isSignIn ? "Sign In" : "Sign Up"}</h1>
            {!isSignIn && (
              <input ref={name} className="p-4 my-4 w-full bg-gray-700 text-white rounded-sm" type="text" placeholder="Enter Name" />
            )}
            <input ref={email} className="p-4 my-4 w-full bg-gray-700 text-white rounded-sm" type="email" placeholder="Email or phone number" />
            <input ref={password} className="p-4 my-4 w-full bg-gray-700 text-white rounded-sm" type="password" placeholder="Password" />
            {setErrorMsg && (
              <p className="text-red-500 text-sm">{errorMsg}</p>
            )}
            <button className="p-4 my-4 w-full bg-red-700 text-white rounded-sm" onClick={handleBtnClick}>{isSignIn ? "Sign In" : "Sign Up"}</button>
            <p className="py-4 text-white">{isSignIn ? "New to Netflix?" : "Already registered!"} <a onClick={() => setIsSignIn(!isSignIn)} className="text-blue-500" href="#">{isSignIn ? "Sign Up Now!" : "Sign In Now!"}</a></p>
          </form>
        </div>
      </div>
    )
}

export default Login