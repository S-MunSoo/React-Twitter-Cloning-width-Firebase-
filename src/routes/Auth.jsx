// import { async } from "@firebase/util";
import { authService } from "fbase";
import React, { useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GithubAuthProvider,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newAcount, setNewAcount] = useState(true);
  const [error, setError] = useState("");

  console.log(process.env.REACT_APP_API_KEY);

  const onChangeHandler = (e) => {
    const {
      target: { name, value },
    } = e;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      let data;
      if (newAcount) {
        // create account
        // firebase 에서 제공하는 사용자 계정 생성을 도와주는  createUserWithEmailAndPassword / signInWithEamilAndPassword
        data = await createUserWithEmailAndPassword(
          authService,
          email,
          password
        );
      } else {
        // login
        data = await signInWithEmailAndPassword(authService, email, password);
      }
      console.log(data);
    } catch (error) {
      setError(error.message);
    }
  };
  const toggleAcount = () => setNewAcount((prev) => !prev);

  // 구글&깃허브 로그인 함수
  const onSocialClick = async (e) => {
    const {
      target: { name },
    } = e;
    let provider;
    if (name === "google") {
      // 9버전은 auth 대신 new
      provider = new GoogleAuthProvider();
    } else if (name === "github") {
      provider = new GithubAuthProvider();
    }
    const data = await signInWithPopup(authService, provider);
    console.log(data);
  };

  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        <input
          name="email"
          type="text"
          placeholder="Email"
          value={email}
          onChange={onChangeHandler}
          required
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          value={password}
          onChange={onChangeHandler}
          required
        />
        <input type="submit" value={newAcount ? "Create Account" : "Log-In"} />
        {error}
      </form>
      <span onClick={toggleAcount}>
        {newAcount ? "Log in" : "Create Acount"}
      </span>
      <div>
        <button name="google" onClick={onSocialClick}>
          Continue with Google
        </button>
        <button name="github" onClick={onSocialClick}>
          Continue with Github
        </button>
      </div>
    </div>
  );
};

export default Auth;
