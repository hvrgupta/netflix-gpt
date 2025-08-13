import { onAuthStateChanged, signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addUser, removeUser } from "../utils/userSlice";
import { useEffect } from "react";
import { auth } from "../utils/firebase";
import { logo } from "../utils/constants";
import { toggle } from "../utils/gptsearchslice";

const Header = () => {

  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignout = () => {
    signOut(auth).then(() => {
      dispatch(removeUser());
    }).catch((error) => {
      navigate("/error");
    });
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if(user) {
        const {uid, email, displayName} = user;
        dispatch(addUser({
          uid: uid,
          email: email,
          displayName: displayName
        }));
        navigate("/browse");
      }else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe();
  },[]);

  const handleGPTSearch = () => {
    dispatch(toggle());
  }

  return (
      <div className="absolute px-4 sm:px-8 py-2 sm:py-4 bg-gradient-to-b from-black z-20 w-full flex justify-between items-center">
        <img className="w-20 sm:w-32 md:w-40" src={logo} alt="logo" />
        {user && (
          <div className="flex items-center gap-1 sm:gap-2 md:gap-4">
            <button className="py-1 px-1 sm:px-2 m-1 sm:m-2 text-white text-xs sm:text-sm font-bold bg-red-600 rounded-md hover:bg-red-700 transition-colors" onClick={handleGPTSearch}>GPT Search</button>
            <span className="text-white text-xs sm:text-sm hidden sm:block">{user.email}</span>
            <button 
              className="bg-red-600 hover:bg-red-700 text-white px-2 sm:px-4 py-1 sm:py-2 rounded-md font-semibold transition-colors duration-200 text-xs sm:text-sm"
              onClick={handleSignout}
            >
              Sign out
            </button>
          </div>
        )}
      </div>
  )
}

export default Header