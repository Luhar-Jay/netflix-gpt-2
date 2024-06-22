import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, SUPPORTED_LANGUAGES } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  const handleSignout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browes");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);

  const handleGptSearchClick = () => {
    // Toggle GPT Search
    dispatch(toggleGptSearchView());
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <div className="absolute w-screen bg-gradient-to-b from-gray-400 px-8 py-2 z-10 flex flex-col md:flex-row justify-between">
      <img className="w-48 mx-auto md:mx-0 " src={LOGO} alt="Logo" />
      {user && (
        <div className="flex items-center justify-between">
          {showGptSearch && (
            <select
              className="p-2 bg-gray-900  m-2 text-white rounded-lg "
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}
          <button
            className="py-2 px-4 bg-purple-600 mx-4 my-4 rounded-lg text-white font-medium"
            onClick={handleGptSearchClick}
          >
            {showGptSearch ? "Home Page" : " GPT Serach"}
          </button>
          <img
            className="w-12 h-12 rounded-md hidden md:inline-block"
            alt="usericon"
            src={user?.photoURL}
          />
          <button
            className="text-center p-1 px-2 bg-red-600 rounded-lg m-1 font-bold text-white"
            onClick={handleSignout}
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
