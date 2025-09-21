// Create a container for the chat bubble
const chatBubbleContainer = document.createElement('div');
chatBubbleContainer.id = 'chatbot-bubble-container';

// Create the chat bubble element
const chatBubble = document.createElement('div');
chatBubble.id = 'chatbot-bubble';
chatBubble.innerHTML = '<span>?</span>'; // You can use an icon here

// Append the chat bubble to its container
chatBubbleContainer.appendChild(chatBubble);

// Append the container to the body
document.body.appendChild(chatBubbleContainer);

// Create the chat window container
const chatWindowContainer = document.createElement('div');
chatWindowContainer.id = 'chatbot-window-container';
chatWindowContainer.style.display = 'none'; // Initially hidden

// Create the chat window header
const chatWindowHeader = document.createElement('div');
chatWindowHeader.id = 'chatbot-window-header';
chatWindowHeader.innerHTML = '<h3>Chat with us!</h3><span id="close-chatbot">-</span>';

// Create the chat window body
const chatWindowBody = document.createElement('div');
chatWindowBody.id = 'chatbot-window-body';

// Create the chat window footer
const chatWindowFooter = document.createElement('div');
chatWindowFooter.id = 'chatbot-window-footer';
chatWindowFooter.innerHTML = '<input type="text" id="chatbot-input" placeholder="Type your message..."><button id="chatbot-send">Send</button>';

// Append header, body, and footer to the chat window
chatWindowContainer.appendChild(chatWindowHeader);
chatWindowContainer.appendChild(chatWindowBody);
chatWindowContainer.appendChild(chatWindowFooter);

// Append the chat window to the body
document.body.appendChild(chatWindowContainer);

// Toggle chat window visibility
chatBubble.addEventListener('click', () => {
    chatWindowContainer.style.display = chatWindowContainer.style.display === 'none' ? 'block' : 'none';
});

// Close chat window
document.getElementById('close-chatbot').addEventListener('click', () => {
    chatWindowContainer.style.display = 'none';
});

// Handle sending messages
document.getElementById('chatbot-send').addEventListener('click', async () => {
    const input = document.getElementById('chatbot-input');
    const message = input.value.trim();
    if (message) {
        // Display user message
        const userMessageElement = document.createElement('div');
        userMessageElement.className = 'chat-message user-message';
        userMessageElement.textContent = message;
        chatWindowBody.appendChild(userMessageElement);

        // Clear input
        input.value = '';

        // Scroll to the bottom
        chatWindowBody.scrollTop = chatWindowBody.scrollHeight;

        // Send message to n8n webhook
        const webhookUrl = 'YOUR_N8N_WEBHOOK_URL'; // Placeholder
        try {
            const response = await fetch(webhookUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ message }),
            });
            const data = await response.json();

            // Display bot response
            const botMessageElement = document.createElement('div');
            botMessageElement.className = 'chat-message bot-message';
            botMessageElement.textContent = data.reply;
            chatWindowBody.appendChild(botMessageElement);

            // Scroll to the bottom
            chatWindowBody.scrollTop = chatWindowBody.scrollHeight;
        } catch (error) {
            console.error('Error sending message to chatbot:', error);
            const errorMessageElement = document.createElement('div');
            errorMessageElement.className = 'chat-message bot-message';
            errorMessageElement.textContent = 'Sorry, I am having trouble connecting. Please try again later.';
            chatWindowBody.appendChild(errorMessageElement);

            // Scroll to the bottom
            chatWindowBody.scrollTop = chatWindowBody.scrollHeight;
        }
    }
});

// Add some basic styling
const style = document.createElement('style');
style.innerHTML = `
    #chatbot-bubble-container {
        position: fixed;
        bottom: 20px;
        right: 20px;
        z-index: 1000;
    }
    #chatbot-bubble {
        width: 60px;
        height: 60px;
        background-color: #007bff;
        color: white;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 24px;
        cursor: pointer;
        box-shadow: 0 4px 8px rgba(0,0,0,0.2);
    }
    #chatbot-window-container {
        position: fixed;
        bottom: 100px;
        right: 20px;
        width: 350px;
        height: 500px;
        background-color: white;
        border-radius: 10px;
        box-shadow: 0 4px 8px rgba(0,0,0,0.2);
        display: flex;
        flex-direction: column;
        z-index: 1000;
    }
    #chatbot-window-header {
        padding: 10px;
        background-color: #007bff;
        color: white;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    #close-chatbot {
        cursor: pointer;
    }
    #chatbot-window-body {
        flex-grow: 1;
        padding: 10px;
        overflow-y: auto;
    }
    #chatbot-window-footer {
        padding: 10px;
        border-top: 1px solid #ccc;
        display: flex;
    }
    #chatbot-input {
        flex-grow: 1;
        border: 1px solid #ccc;
        border-radius: 5px;
        padding: 5px;
    }
    #chatbot-send {
        margin-left: 10px;
        padding: 5px 10px;
        border: none;
        background-color: #007bff;
        color: white;
        border-radius: 5px;
        cursor: pointer;
    }
    .chat-message {
        margin-bottom: 10px;
        padding: 8px;
        border-radius: 5px;
    }
    .user-message {
        background-color: #f1f1f1;
        text-align: right;
    }
    .bot-message {
        background-color: #e1f5fe;
    }
`;
document.head.appendChild(style);
