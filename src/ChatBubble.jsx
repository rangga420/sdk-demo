import { useState, useEffect } from 'preact/hooks'

const ChatBubble = ({ config = {} }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    { id: 1, text: "Hi there! How can I help you today?", sender: 'bot' }
  ])
  const [inputValue, setInputValue] = useState('')

  const toggleChat = () => {
    setIsOpen(!isOpen)
  }

  const sendMessage = () => {
    if (!inputValue.trim()) return

    const newMessage = {
      id: Date.now(),
      text: inputValue,
      sender: 'user'
    }

    setMessages(prev => [...prev, newMessage])
    setInputValue('')

    // Simulate bot response
    setTimeout(() => {
      const botResponse = {
        id: Date.now() + 1,
        text: "Thanks for your message! This is a demo response.",
        sender: 'bot'
      }
      setMessages(prev => [...prev, botResponse])
    }, 1000)
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      sendMessage()
    }
  }

  const getPositionStyles = () => {
    const position = config.position || 'bottom-right';
    const styles = {};
    
    if (position.includes('bottom')) {
      styles.bottom = '20px';
    } else if (position.includes('top')) {
      styles.top = '20px';
    }
    
    if (position.includes('right')) {
      styles.right = '20px';
    } else if (position.includes('left')) {
      styles.left = '20px';
    }
    
    return styles;
  };

  return (
    <div className={`simple-chat-container ${config.position || 'bottom-right'}`}>
    {/* Chat Panel */}
      <div className={`simple-chat-panel ${isOpen ? 'open' : ''}`}>
        {/* Header */}
        <div className="simple-chat-header">
          <span>{config.title || 'Chat Support'}</span>
          <button className="simple-chat-close" onClick={toggleChat}>
            ×
          </button>
        </div>

        {/* Messages */}
        <div className="simple-chat-messages">
          {messages.map(message => (
            <div 
              key={message.id} 
              className={`simple-chat-message ${message.sender}`}
            >
              {message.text}
            </div>
          ))}
        </div>

        {/* Input */}
        <div className="simple-chat-input-container">
          <input
            type="text"
            className="simple-chat-input"
            placeholder="Type your message..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
          />
          <button 
            className="simple-chat-send"
            onClick={sendMessage}
            disabled={!inputValue.trim()}
          >
            Send
          </button>
        </div>
      </div>

      {/* Chat Bubble */}
      <button className="simple-chat-bubble" onClick={toggleChat}>
        {isOpen ? '×' : '💬'}
      </button>
    </div>
  )
}

export default ChatBubble