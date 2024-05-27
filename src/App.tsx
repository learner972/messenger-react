import { useState } from 'react';
import styled from 'styled-components';

import ChatWindow from './components/ChatWindow';
import InputMessage from './components/InputMessage';
import FriendList from './components/FriendList';

const AppWrapper = styled.div`
  display: flex;
  height: 100vh;
`;

const ChatWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const DefaultView = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  font-size: 2rem;
  justify-content: center;
  align-items: center;
`;

const App = () => {
  /** List of users can be fetched from constant/API layer */
  const friends: Array<string> = ['Sheldon', 'Amy', 'Penny', 'Raj', 'Howard'];
  const [activeFriend, setActiveFriend] = useState<string | null>(null);
  const [messages, setMessages] = useState<any>({
    Sheldon: [],
    Amy: [],
    Penny: [],
    Raj: [],
    Howard: []
  });

  const handleSendMessage = (message: string) => {
    if (activeFriend) {
      setMessages((prevMessages: any) => ({
        ...prevMessages,
        [activeFriend]: [...prevMessages[activeFriend], { from: 'Me', text: message , id: activeFriend }]
      }));
    }
  };

  const handleSetActiveFriend = (message: string) => {
    setActiveFriend(message);
  };


  return (
    <AppWrapper>
      <FriendList friends={friends} setActiveFriend={handleSetActiveFriend} /> {/* Add the FriendList component */}
      <ChatWrapper>
        {!activeFriend &&
          <DefaultView> Select User to Chat Now</DefaultView>}
          {
            activeFriend && (
              <>
              <ChatWindow messages={messages[activeFriend] || []} />
              <InputMessage onSendMessage={handleSendMessage} />
              </>
            )
          }
      </ChatWrapper>
    </AppWrapper>
  );
};

export default App;
