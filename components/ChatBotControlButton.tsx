import * as React from 'react';
import { useState } from 'react';
import { FaRobot } from '@react-icons/all-files/fa/FaRobot';

export const ChatBotControlButton: React.FC = () => {
  const [showChatBot, setShowChatBot] = useState(false);

  interface ChatBotControlButtonProps {
    iconSize?: number;
    iconColor?: string;
  }

  const toggleChatBot = () => {
    setShowChatBot(!showChatBot);
  };

  const defaultProps: ChatBotControlButtonProps = {
    iconSize: 100,
    iconColor: "#4169E1"
  };

  return (
    <div style={{ position: 'fixed', bottom: '200px', right: '200px' }}>
      <a
        href='https://chatbot-website-kits.vercel.app/'
        target='_blank'
        rel='noopener noreferrer'
        onClick={toggleChatBot}
        aria-label={showChatBot ? 'Close ChatBot' : 'Open ChatBot'}
      >
        <FaRobot size={defaultProps.iconSize} color={defaultProps.iconColor} />
      </a>
    </div>
  );
};
