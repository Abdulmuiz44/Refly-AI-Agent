const axios = require('axios'); // Importing Axios

const apiKey = '5RdOMhZ2SVttJonCUdsPnkcbeKOg5ktj'; // Correct API key

async function getChatResponse() {
  try {
    const response = await axios.post(
      'https://codestral.mistral.ai/v1/chat/completions', // Correct API endpoint
      {
        agent_id: "ag:5b3c926e:20241231:refly:aebe5a2b", // Your Refly AI agent ID
        messages: [
          {
            role: 'system',
            content: 'You are Refly, an AI assistant that creates engaging marketing copy for referral programs, airdrops, and affiliate promotions. Your goal is to help users craft compelling, human-like content to drive conversions and grow their audience on platforms like Twitter, Telegram, and WhatsApp.'
          },
          {
            role: 'user',
            content: 'Can you help me create a promotion for a new Web3 airdrop?'
          }
        ]
      },
      {
        headers: {
          'Authorization': `Bearer ${apiKey}`, // Using the correct API key for authorization
          'Content-Type': 'application/json'  // Setting the content type to JSON
        }
      }
    );

    console.log('Chat Response:', response.data.choices[0].message.content);
  } catch (error) {
    console.error('Error:', error);
  }
}

// Call the function to get a response
getChatResponse();