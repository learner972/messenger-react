import { useState } from 'react';
import styled from 'styled-components';

const FriendListWrapper = styled.div`
  width: 25rem;
  border-right: 1px solid var(--color-grey);
  border-bottom: 1px solid var(--color-grey);
`;

const FriendItem = styled.div`
  padding: 1rem;
  font-size: 1.4rem;
  border-bottom: 1px solid var(--color-grey);
  cursor: pointer;
  &:hover {
    background-color: var(--color-primary) !important;
  }
`;

const FriendList = ({ friends, setActiveFriend }: { friends: string[], setActiveFriend: (arg0: any) => void }) => {
  const [state, setState] = useState(-1);
  function handleBgColorChange(friend: string, index: number) {
    setState(index);
    setActiveFriend(friend);
  }
  return (
    <FriendListWrapper>
      {friends.map((friend, index) => (
        <FriendItem key={friend} onClick={() => handleBgColorChange(friend, index)}
          style={{
            background: state === index ? 'var(--color-primary)' : 'var(--color-white)'
          }}>
          {friend}
        </FriendItem>
      ))}
    </FriendListWrapper>
  );
};

export default FriendList;
