import React, { useState } from 'react';
import styled from 'styled-components';

const InputContainer = styled.div`
  padding: 10px;
  display: flex;
`;

const TextInput = styled.input`
  flex: 1;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-right: 10px;
`;

const SendButton = styled.button`
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: #007bff;
  color: white;
  cursor: pointer;
`;

const MessageInput = ({ onSendMessage }: { onSendMessage: (message: string) => void }) => {
    const [message, setMessage] = useState('');

    const handleSend = () => {
        if (message.trim()) {
            onSendMessage(message);
            setMessage('');
        }
    };

    return (
        <InputContainer>
            <TextInput
                type="text"
                value={message}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setMessage(e.target.value)}
                placeholder="Type a message..."
                onKeyPress={(e: React.KeyboardEvent<HTMLInputElement>) => {
                    if (e.key === 'Enter') {
                        handleSend();
                    }
                }}
            />
            <SendButton onClick={handleSend}>Send</SendButton>
        </InputContainer>
    );
};

export default MessageInput;
