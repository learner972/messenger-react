import styled from 'styled-components';

const ChatWindowContainer = styled.div`
    flex: 1;
    padding: 0rem;
    overflow-y: auto;
    border-bottom: 1px solid #ccc;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 2rem;
}
`;

const Message = styled.div<{ isMe: boolean }>`
    margin: 3rem 3rem 0 0;
    padding: 1.5rem;
    border-radius: .5rem;
    display: flex;
    font-size:1.4rem;
    background-color: ${({ isMe }) => (isMe ? '#DCF8C6' : '#FFF')};
    justify-content: ${({ isMe }) => (isMe ? 'flex-end' : 'flex-start')};
`;

const MyProfile = styled.img`
    width: 2rem;
    height: 2rem;
    margin-right: 1rem;
    border-radius: 50%;
`;

const ChatWindow = ({ messages }: { messages: Array<{ from: string, text: string }> }) => {
    console.log('test', messages)
    return (
        <ChatWindowContainer>
            {messages.map((message, index) => (
                <>
                <Message key={index} isMe={message.from === 'Me'} >
                <MyProfile src='https://www.w3schools.com/howto/img_avatar.png' alt='user'></MyProfile>  <span>{message.text}</span>
                </Message>
                </>
            ))}
        </ChatWindowContainer>
    );
};

export default ChatWindow;
