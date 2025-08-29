import { render } from 'preact'
import ChatBubble from './ChatBubble.jsx'
import { injectChatStyles } from './styles.js'

class SimpleChatSDK {
  constructor(config = {}) {
    this.config = {
      containerId: config.containerId || 'simple-chat-widget',
      title: config.title || 'Chat Support',
      position: config.position || 'bottom-right',
      ...config
    }
    this.isInitialized = false
  }

  init() {
    if (this.isInitialized) {
      console.warn('SimpleChatSDK already initialized')
      return
    }

    injectChatStyles()
    this.createContainer()
    this.renderWidget()
    this.isInitialized = true
  }

  createContainer() {
    let container = document.getElementById(this.config.containerId)
    
    if (!container) {
      container = document.createElement('div')
      container.id = this.config.containerId
      document.body.appendChild(container)
    }

    this.container = container
  }

  renderWidget() {
    render(
      <ChatBubble config={this.config} />,
      this.container
    )
  }

  destroy() {
    if (this.container) {
      this.container.remove()
    }
    
    const styles = document.getElementById('simple-chat-styles')
    if (styles) {
      styles.remove()
    }

    this.isInitialized = false
  }
}

// PENTING: Export untuk IIFE - pastikan tersedia di window
if (typeof window !== 'undefined') {
  window.SimpleChatSDK = SimpleChatSDK
}

// Export default untuk module
export default SimpleChatSDK