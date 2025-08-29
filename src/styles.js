const chatStyles = `
  .simple-chat-container {
    position: fixed;
    z-index: 9999;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  }

  .simple-chat-container.bottom-right {
    bottom: 20px;
    right: 20px;
  }

  .simple-chat-container.bottom-left {
    bottom: 20px;
    left: 20px;
  }

  .simple-chat-container.top-right {
    top: 20px;
    right: 20px;
  }

  .simple-chat-container.top-left {
    top: 20px;
    left: 20px;
  }

  .simple-chat-bubble {
    width: 60px;
    height: 60px;
    background: #007bff;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    box-shadow: 0 4px 12px rgba(0, 123, 255, 0.3);
    transition: all 0.3s ease;
    border: none;
    color: white;
  }

  .simple-chat-bubble:hover {
    transform: scale(1.1);
    box-shadow: 0 6px 20px rgba(0, 123, 255, 0.4);
  }

  .simple-chat-panel {
    position: absolute;
    bottom: 80px;
    right: 0;
    width: 350px;
    height: 500px;
    background: white;
    border-radius: 12px;
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
    display: flex;
    flex-direction: column;
    overflow: hidden;
    transform: scale(0.8) translateY(20px);
    opacity: 0;
    pointer-events: none;
    transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  }

  .simple-chat-panel.open {
    transform: scale(1) translateY(0);
    opacity: 1;
    pointer-events: auto;
  }

  .simple-chat-header {
    background: #007bff;
    color: white;
    padding: 16px;
    font-weight: 600;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .simple-chat-close {
    background: none;
    border: none;
    color: white;
    font-size: 18px;
    cursor: pointer;
    padding: 4px;
    border-radius: 4px;
  }

  .simple-chat-close:hover {
    background: rgba(255, 255, 255, 0.1);
  }

  .simple-chat-messages {
    flex: 1;
    padding: 16px;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .simple-chat-message {
    max-width: 80%;
    padding: 12px 16px;
    border-radius: 18px;
    font-size: 14px;
    line-height: 1.4;
  }

  .simple-chat-message.user {
    background: #007bff;
    color: white;
    align-self: flex-end;
    border-bottom-right-radius: 4px;
  }

  .simple-chat-message.bot {
    background: #f1f3f5;
    color: #333;
    align-self: flex-start;
    border-bottom-left-radius: 4px;
  }

  .simple-chat-input-container {
    padding: 16px;
    border-top: 1px solid #e9ecef;
    display: flex;
    gap: 8px;
  }

  .simple-chat-input {
    flex: 1;
    padding: 12px 16px;
    border: 1px solid #dee2e6;
    border-radius: 24px;
    outline: none;
    font-size: 14px;
  }

  .simple-chat-input:focus {
    border-color: #007bff;
    box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.1);
  }

  .simple-chat-send {
    padding: 12px 20px;
    background: #007bff;
    color: white;
    border: none;
    border-radius: 24px;
    cursor: pointer;
    font-size: 14px;
    font-weight: 500;
    transition: background 0.2s;
  }

  .simple-chat-send:hover {
    background: #0056b3;
  }

  .simple-chat-send:disabled {
    background: #6c757d;
    cursor: not-allowed;
  }
`;

export const injectChatStyles = () => {
  if (document.getElementById('simple-chat-styles')) return;
  
  const styleElement = document.createElement('style');
  styleElement.id = 'simple-chat-styles';
  styleElement.textContent = chatStyles;
  document.head.appendChild(styleElement);
};