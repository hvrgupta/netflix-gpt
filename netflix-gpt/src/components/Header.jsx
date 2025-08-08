import { onAuthStateChanged, signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addUser, removeUser } from "../utils/userSlice";
import { useEffect } from "react";
import { auth } from "../utils/firebase";
import { logo } from "../utils/constants";

const Header = () => {

  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignout = () => {
    signOut(auth).then(() => {
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

  return (
      <div className="absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-full flex justify-between">
        <img className="w-40" src={logo} alt="logo" />
        {user && <button className="font-bold text-white" onClick={handleSignout}>Sign out</button>}
      </div>
  )
}

export default Header