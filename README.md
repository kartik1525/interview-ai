# Interview AI

An AI-powered interview preparation and evaluation platform.

## Architecture

- **Backend**: Node.js & Express API with MongoDB, JWT Authentication, and Google Gemini Generative AI integration.
- **Frontend**: Vite + React single-page application with SCSS styling.

## Getting Started

### Prerequisites

- Node.js (v18+)
- MongoDB connection URI
- Google Gemini API Key

### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd Backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Configure environment variables in `.env`:
   ```env
   MONGO_URI=your_mongodb_uri
   PORT=3000
   JWT_SECRET=your_jwt_secret
   GOOGLE_GENAI_API_KEY=your_gemini_api_key
   ```
4. Start the backend server:
   ```bash
   npm run dev
   ```

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd Frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
