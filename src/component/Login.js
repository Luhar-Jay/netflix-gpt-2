import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidation } from "../utils/validation";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { addUser } from "../utils/userSlice";
import { useDispatch } from "react-redux";
import { BG_URL, USER_AVATAR } from "../utils/constants";

const Login = () => {
  const [isSingInForm, setIsSingInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    // Validate to the form data
    const message = checkValidation(
      email.current.value,
      password.current.value
    );

    setErrorMessage(message);

    if (message) return;

    if (!isSingInForm) {
      // Sign up Logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: USER_AVATAR,
          })
            .then(() => {
              // Profile updated!
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              // An error occurred
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      // Sign In logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;

          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };

  const toggleSignInForm = () => {
    setIsSingInForm(!isSingInForm);
  };
  return (
    <div>
      <Header />

      <div className="absolute bg-black">
        <img
          className="opacity-60 h-screen object-cover"
          src={BG_URL}
          alt="bgImg"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute md:w-3/12 p-12 bg-black bg-opacity-80 my-36 mx-auto left-0 right-0 text-white justify-start"
      >
        <h1 className="font-bold text-3xl py-4">
          {isSingInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSingInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-transparent border border-gray-200 rounded"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email address"
          className="p-4 my-4 w-full bg-transparent border border-gray-200 rounded"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password "
          className="p-4 my-4 w-full bg-transparent border border-gray-200 rounded"
        />

        <p className="text-red-500 font-bold py-2"> {errorMessage} </p>
        <button
          className="p-4 my-6 bg-red-700 w-full rounded-lg"
          onClick={handleButtonClick}
        >
          {isSingInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
          {isSingInForm
            ? "New to Netflix? Sign up now."
            : "Already registered? Sign In Now."}
        </p>
      </form>
    </div>
  );
};

export default Login;
