import { useState } from 'react';
import styled from 'styled-components';

const FriendListContainer = styled.div`
  width: 25rem;
  border-right: 1px solid #ccc;
  border-bottom: 1px solid #bab8b2;
`;

const FriendItem = styled.div`
  padding: 1rem;
  font-size: 1.4rem;
  border-bottom: 1px solid #bab8b2;
  cursor: pointer;
  &:hover {
    background-color: #f0f0f0;
  }
`;

const FriendList = ({ friends, setActiveFriend }: { friends: string[], setActiveFriend: (arg0: any) => void }) => {
  const [state, setState] = useState(-1);
  function handleBgColorChange(friend: string, index: number) {
    setState(index);
    setActiveFriend(friend);
  }
  return (
    <FriendListContainer>
      {friends.map((friend, index) => (
        <FriendItem key={friend} onClick={() => handleBgColorChange(friend, index)}
          style={{
            background: state === index ? '#00e6dc' : 'white'
          }}>
          {friend}
        </FriendItem>
      ))}
    </FriendListContainer>
  );
};

export default FriendList;
