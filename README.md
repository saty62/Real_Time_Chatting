# Sebsockets

A simple real-time chat application built with Node.js, Express, and Socket.IO.

## Features

- Real-time connection between clients and server
- Send and receive messages instantly
- Message history is kept for connected clients
- Simple browser-based chat interface

## Project Structure

- `index.js` - Server setup and Socket.IO event handling
- `public/index.html` - Client-side chat UI and socket connection
- `package.json` - Project dependencies and scripts

## Installation

1. Open the project folder:
   ```bash
   cd Sebsockets
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Run the Project

Start the server:

```bash
npm start
```

Then open your browser and visit:

```text
http://localhost:3000
```

## Technologies Used

- Node.js
- Express
- Socket.IO

## Notes

This project is a basic example of a real-time chat app and can be expanded with features like:

- user names
- private messaging
- message timestamps
- better styling
