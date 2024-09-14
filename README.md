PDF to HTML Converter using Google Generative AI

Project Overview

This project is a simple **PDF to HTML Converter** web application. It allows users to upload a PDF file, extracts the text using Google's **Generative AI** (Gemini API), and returns the content as HTML. The application uses **Express** for the backend, **Multer** for handling file uploads, and **Google Generative AI** to process the text.

  Features

- Upload a PDF file.
- Extract the content and convert it to HTML using Google's Gemini API.
- Display the original extracted text and the AI-generated HTML output.



Table of Contents

1. [Setup Instructions](#setup-instructions)
2. [How It Works](#how-it-works)
3. [Code Explanation](#code-explanation)
    - [HTML (`index.html`)](#html-file)
    - [Client-side Script (`app.js`)](#client-side-javascript-appjs)
    - [Server-side Code (`server.mjs`)](#server-side-code-servermjs)
    - [Gemini API Logic (`gemini.js`)](#gemini-api-logic-geminijs)
4. [Dependencies](#dependencies)
5. [Running the Application](#running-the-application)



Setup Instructions

1. Clone this repository to your local machine.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the server:
   ```bash
   node server.mjs
   ```
4. Access the frontend on local host and upload a PDF to convert it into HTML.



How It Works

1. Upload a PDF: The user uploads a PDF file through a web form.
2. PDF Sent to Server: The PDF file is sent to the server using a POST request.
3. Text Extraction: The server reads the content from the PDF and passes it to the Google Gemini AI.
4. AI Processing: The AI processes the text and converts it into HTML.
5. Result Display: The extracted text and the generated HTML are returned and displayed on the web page.

---

Code Explanation

HTML Code

Explanation:
- This is the web page where users can upload a PDF file.
- The form uses `enctype="multipart/form-data"` to handle file uploads.
- An `input` field of type "file" accepts only PDF files.
- A submit button triggers the JavaScript to send the file to the server.
- A `<textarea>` is used to display the original extracted text and the AI-generated HTML.

 Client-side JavaScript (`app.js`)



Explanation:
- This JavaScript file handles the form submission.
- It listens for the `submit` event, prevents the default behavior, and creates a `FormData` object with the PDF file.
- The PDF is sent to the server via a `POST` request.
- The response (original text and HTML) is displayed in the textarea on the web page.

 Server-side Code (`server.mjs`)


Explanation:
- Multer is used to handle file uploads. It stores the file in memory for easy access.
- The server reads the file buffer, converts it to a UTF-8 string, and sends it to the Google Generative AI API to generate HTML content.
- The extracted text and generated HTML are sent back to the client as a JSON response.


Dependencies

- Express: For server-side functionality and routing.
- Multer: For handling file uploads in the backend.
- Cors: To enable CORS for communication between the frontend and backend.
- Google Generative AI: To interact with the Gemini model for text generation.


Running the Application

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the server:
   ```bash
   node server.mjs
   ```



Upload a PDF file, and the server will process it using the Gemini API, extract the text, and return the AI-generated HTML!
