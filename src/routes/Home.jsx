import { dbService } from "fbase";
import React, { useEffect, useState } from "react";
import {
  collection,
  addDoc,
  serverTimestamp,
  getDocs,
  onSnapshot,
} from "firebase/firestore";

const Home = ({ userObj }) => {
  const [nweet, setNweet] = useState("");
  const [nweets, setNweets] = useState([]);

  // outdated 방식
  // const getNweets = async () => {
  //   const dbNweets = await getDocs(collection(dbService, "nweets"));
  //   dbNweets.forEach((doc) => {
  //     const nweetObject = {
  //       ...doc.data(),
  //       id: doc.id,
  //     };
  //     setNweets((prev) => [nweetObject, ...prev]);
  //   });
  // };
  // 제출
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const docRef = await addDoc(collection(dbService, "nweets"), {
      text: nweet,
      createdAt: Date.now(),
      creatorId: userObj.uid,
    });

    console.log("Document", docRef.id);
    setNweet("");
  };
  // 추가
  const onChangeHandler = (e) => {
    const { value } = e.target;
    setNweet(value);
  };
  console.log(nweets);
  useEffect(() => {
    // 실시간으로 데이터베이스에서 데이터 가져오기
    onSnapshot(collection(dbService, "nweets"), (shapshot) => {
      const nweetArray = shapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setNweets(nweetArray);
    });
  }, []);

  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        <input
          type="text"
          placeholder="Whah's on your mind?"
          value={nweet}
          onChange={onChangeHandler}
          maxLength={120}
        />
        <input type="submit" value="Nweet" />
      </form>
      <div>
        {nweets.map((nweet, id) => (
          <div key={id}>
            <h4>{nweet.text}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
