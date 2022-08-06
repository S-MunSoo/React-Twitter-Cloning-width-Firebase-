import "./App.css";
import { useEffect, useState } from "react";
import Router from "./components/Router";
import { authService } from "./fbase";

function App() {
  const [init, setInit] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // firebase 의 사용자의 로그인 상태 변화를 감지하는 함수
    authService.onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
      setInit(true);
    });
  }, []);
  return (
    <div>
      {init ? <Router isLoggedIn={isLoggedIn} /> : "Initializing..."}
      <footer>&copy; {new Date().getFullYear()} Twitter</footer>
    </div>
  );
}

export default App;
