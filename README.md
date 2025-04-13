# JWT Editor Tool

This is a simple web tool for **decoding**, **editing**, and **encoding** JWT (JSON Web Tokens). The tool allows users to decode the JWT, modify the header and payload, and re-encode it into a valid JWT.

## Features

- Decode JWTs (Header, Payload, and Signature)
- Edit the Header and Payload
- Re-encode the modified JWT
- Visualize the changes in real-time
- Based on **React** and **Vite**

## Tech Stack

- **React**: Frontend UI
- **Vite**: Development and Build Tool
- **JWT**: Decode and re-encode functionality for JSON Web Tokens

## Getting Started

To run this project locally, you have two options: running it with Docker or directly using Node.js.

### Option 1: Running with Docker

1. Ensure that you have **Docker** and **Docker Compose** installed.
2. In your terminal, navigate to the project directory.
3. Run the following command to start the Docker container:

   ```bash
   docker-compose up --build
   ```
4. Access the tool by going to http://localhost:3000 in your web browser.

### Option 2: Running Locally without Docker

1. Ensure that Node.js (version 18+ or 20+) and npm are installed.
2. Clone the repository or download the ZIP file.
3. Install dependencies:

   ```bash
   npm install
   ```
4. Start the development server:

  ```bash
  npm run dev
  ```

5. Open your web browser and go to http://localhost:5173 to use the tool.

## Using the Tool

1. Decode a JWT:
   - Paste the JWT in the "Paste JWT here" textarea.
   - Click Decode to see the decoded Header and Payload.

2. Edit the Header and Payload:
   - Modify the JSON in the Header and Payload text areas as needed.

3. Re-encode the JWT:
   - Click Re-encode to generate the modified JWT.
   - The re-encoded JWT will appear in the "Modified JWT" textarea.
