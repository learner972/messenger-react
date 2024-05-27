import React, { useState } from 'react';
import styled from 'styled-components';

const MessageWrapper = styled.div`
  padding: 10px;
  display: flex;
`;

const TextInput = styled.input`
  flex: 1;
  padding: 1rem;
  border: 1px solid var(--color-grey);
  border-radius: 5px;
  margin-right: 1rem;
`;

const SendButton = styled.button`
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: var(--color-primary);
  cursor: pointer;
`;

const InputMessage = ({ onSendMessage }: { onSendMessage: (message: string) => void }) => {
    const [message, setMessage] = useState('');

    const handleSend = () => {
        if (message.trim()) {
            onSendMessage(message);
            setMessage('');
        }
    };

    return (
        <MessageWrapper>
            <TextInput
                type="text"
                value={message}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setMessage(e.target.value)}
                placeholder="Type a message"
                onKeyDownCapture={(e: React.KeyboardEvent<HTMLInputElement>) => {
                    if (e.key === 'Enter') {
                        handleSend();
                    }
                }}
            />
            <SendButton onClick={handleSend}>Send</SendButton>
        </MessageWrapper>
    );
};

export default InputMessage;
