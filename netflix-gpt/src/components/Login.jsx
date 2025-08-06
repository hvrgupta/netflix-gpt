import { useState } from "react";
import Header from "./Header"

const Login = () => {

  const [isSignIn, setIsSignIn] = useState(true);

    return(
        <div>
        <Header />
        <div className="absolute">
          <img src="https://assets.nflxext.com/ffe/siteui/vlv3/258d0f77-2241-4282-b613-8354a7675d1a/web/US-en-20250721-TRIFECTA-perspective_6d968797-b773-4ec4-aa69-2a9c2e41ae94_small.jpg" alt="background" />
        </div>
        <div className="absolute w-full">
          <form className="p-8 w-3/12 relative bg-black/80 mx-auto my-36">
            <h1 className="text-3xl py-6 text-white">{isSignIn ? "Sign In" : "Sign Up"}</h1>
            {!isSignIn && (
              <input className="p-4 my-4 w-full bg-gray-700 text-white rounded-sm" type="text" placeholder="Enter Name" />
            )}
            <input className="p-4 my-4 w-full bg-gray-700 text-white rounded-sm" type="email" placeholder="Email or phone number" />
            <input className="p-4 my-4 w-full bg-gray-700 text-white rounded-sm" type="password" placeholder="Password" />
            <button className="p-4 my-4 w-full bg-red-700 text-white rounded-sm">{isSignIn ? "Sign In" : "Sign Up"}</button>
            <p className="py-4 text-white">{isSignIn ? "New to Netflix?" : "Already registered!"} <a onClick={() => setIsSignIn(!isSignIn)} className="text-blue-500" href="#">{isSignIn ? "Sign Up Now!" : "Sign In Now!"}</a></p>
          </form>
        </div>
      </div>
      )
}

export default Login