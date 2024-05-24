import { useState } from 'react';
import styled from 'styled-components';
import ChatWindow from './components/ChatWindow';
import MessageInput from './components/MessageInput';
import FriendList from './components/FriendList';

const AppContainer = styled.div`
  display: flex;
  height: 100vh;
`;

const ChatContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const NoFriendSelection = styled.div`
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
        [activeFriend]: [...prevMessages[activeFriend], { from: 'Me', text: message }]
      }));
    }
  };

  const handleSetActiveFriend = (message: string) => {
    setActiveFriend(message);
  };


  return (
    <AppContainer>
      <FriendList friends={friends} setActiveFriend={handleSetActiveFriend} /> {/* Add the FriendList component */}
      <ChatContainer>
        {!activeFriend &&
          <NoFriendSelection> Select User to Chat Now</NoFriendSelection>}
          {activeFriend && <ChatWindow messages={messages[activeFriend] || []} />}
        {activeFriend && <MessageInput onSendMessage={handleSendMessage} />}
      </ChatContainer>
    </AppContainer>
  );
};

export default App;
