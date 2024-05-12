import * as React from 'react';
import { useState, useRef, useEffect } from 'react';
import styles from './styles.module.css';
import { FaRobot } from '@react-icons/all-files/fa/FaRobot';

export const ChatBotControlButton: React.FC = () => {
  const [showChatBot, setShowChatBot] = useState(false);
  const [messages, setMessages] = useState<string[]>([]);
  const [newMessage, setNewMessage] = useState('');
  const messageContainerRef = useRef<HTMLDivElement>(null);

  const toggleChatBot = () => {
    setShowChatBot(!showChatBot);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewMessage(event.target.value);
  };

  const handleSendMessage = () => {
    if (newMessage.trim() !== '') {
      setMessages([...messages, newMessage]);
      setNewMessage('');
    }
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSendMessage();
    }
  };

  useEffect(() => {
    // 滚动消息显示区域到底部
    if (messageContainerRef.current) {
      messageContainerRef.current.scrollTop = messageContainerRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <>
      <button
        className={styles.chatBotButton}
        onClick={toggleChatBot}
        aria-label={showChatBot ? 'Close ChatBot' : 'Open ChatBot'}
        style={{ display: 'none' }} // 隐藏默认按钮
      >
        {showChatBot ? 'Close ChatBot' : 'Open ChatBot'}
      </button>

      <div className={styles.chatBotIconContainer} style={{ position: 'fixed', bottom: '200px', right: '200px' }}>
        <FaRobot
          className={styles.chatBotIcon}
          onClick={toggleChatBot}
          aria-label={showChatBot ? 'Close ChatBot' : 'Open ChatBot'}
          size={100} // 修改图标显示大小
          color="#4169E1" // 修改图标颜色，这里以红色为例  #87CEEB  #00ff00  #00ff00
        />
      </div>

      {showChatBot && (
        <div className={styles.chatBotContainer}>
          <div className={styles.inputContainer}>
            {/* 输入框 */}
            <input
              type='text'
              className={styles.input}
              placeholder='Type your message...'
              value={newMessage}
              onChange={handleInputChange}
              onKeyPress={handleKeyPress}
            />
            {/* 发送按钮 */}
            <button className={styles.sendButton} onClick={handleSendMessage}>
              Send
            </button>
          </div>

          <div className={styles.messageContainer} ref={messageContainerRef}>
            {/* 消息显示区域 */}
            {messages.map((message, index) => (
              <div key={index} className={styles.message}>
                {message}
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};
