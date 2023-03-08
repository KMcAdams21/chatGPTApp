const axios = require('axios');
const readline = require('readline-sync')

// Getting question from user
let question = readline.question("Please give me a question: ");
console.log(question);

// Getting API call to openai ready
const apiKey = process.env.OPENAI_API_KEY;

const endpointUrl = "https://api.openai.com/v1/chat/completions";

const request = {
    "model": "gpt-3.5-turbo",
    "messages": [{"role": "user", "content": `${question}`}]
};

const requestHeader = {
    "Content-Type": "application/json",
    "Authorization": `Bearer ${apiKey}`
};

// Sending API call
axios.post(endpointUrl, request, { headers: requestHeader })
    .then(response => {
        console.log(response.data.choices[0].message.content.trim());
    })
    .catch(error => {
        console.log(error);
    });