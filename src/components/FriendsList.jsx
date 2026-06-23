import React, { useEffect, useState, useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';

export default function FriendsList() {
  const [friends, setFriends] = useState([]);
  const { authUserInfo } = useContext(AuthContext);

  useEffect(() => {
    fetch('https://nextgen-project.onrender.com/api/s11d2/friends', {
      headers: {
        authorization: authUserInfo?.token,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        // Eğer veri direkt dizi ise
        if (Array.isArray(data)) {
          setFriends(data);
        }
        // Eğer veri data içinde geliyorsa
        else if (Array.isArray(data.data)) {
          setFriends(data.data);
        }
      })
      .catch((err) => console.log(err));
  }, [authUserInfo]);

  return (
    <div className="friendListDiv">
      <h1>FRIENDS LIST</h1>

      {friends.map((friend) => (
        <div key={friend.id}>
          {`-${friend.name}-${friend.email}`}
        </div>
      ))}
    </div>
  );
}
