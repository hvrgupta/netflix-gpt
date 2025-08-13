# 🎬 Netflix GPT - AI-Powered Movie Recommendation App

A modern, responsive Netflix clone with AI-powered movie recommendations using GPT-4. Built with React, Redux, and Firebase for authentication.

![Netflix GPT](https://img.shields.io/badge/React-18.2.0-blue?style=for-the-badge&logo=react)
![Redux](https://img.shields.io/badge/Redux-Toolkit-purple?style=for-the-badge&logo=redux)
![Firebase](https://img.shields.io/badge/Firebase-Auth-orange?style=for-the-badge&logo=firebase)
![OpenAI](https://img.shields.io/badge/OpenAI-GPT--4-green?style=for-the-badge&logo=openai)
![Tailwind](https://img.shields.io/badge/Tailwind-CSS-38B2AC?style=for-the-badge&logo=tailwind-css)

## ✨ Features

### 🎯 Core Features
- **AI-Powered Movie Recommendations** - Get personalized movie suggestions using GPT-4
- **Netflix-like UI/UX** - Familiar interface with modern design
- **User Authentication** - Secure sign-up/sign-in with Firebase
- **Movie Browsing** - Browse Now Playing, Popular, Top Rated, and Upcoming movies
- **Responsive Design** - Optimized for all devices (mobile, tablet, desktop)

### 🚀 Advanced Features
- **Real-time Movie Data** - Powered by TMDB API
- **Smart Caching** - Efficient data management with Redux
- **Smooth Animations** - Hover effects and transitions
- **Horizontal Scrolling** - Netflix-style movie carousels
- **Search Functionality** - AI-powered movie search

## 🛠️ Tech Stack

### Frontend
- **React 18** - Modern React with hooks
- **Redux Toolkit** - State management
- **Tailwind CSS** - Utility-first CSS framework
- **Vite** - Fast build tool and dev server

### Backend & APIs
- **Firebase Authentication** - User management
- **OpenAI GPT-4** - AI movie recommendations
- **TMDB API** - Movie database and metadata
- **YouTube API** - Movie trailers

### Development Tools
- **ESLint** - Code linting
- **React Router** - Client-side routing
- **Custom Hooks** - Reusable logic

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- Firebase account
- OpenAI API key
- TMDB API key

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/netflix-gpt.git
   cd netflix-gpt
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   Create a `.env` file in the root directory:
   ```env
   VITE_OPENAI_API_KEY=your_openai_api_key
   VITE_TMDB_API_KEY=your_tmdb_api_key
   VITE_FIREBASE_API_KEY=your_firebase_api_key
   VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
   VITE_FIREBASE_PROJECT_ID=your_project_id
   VITE_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
   VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
   VITE_FIREBASE_APP_ID=your_app_id
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:5173`

## 🔧 Configuration

### Firebase Setup
1. Create a new Firebase project
2. Enable Authentication (Email/Password)
3. Get your Firebase config from Project Settings
4. Add the config to your environment variables

### OpenAI Setup
1. Create an OpenAI account
2. Generate an API key
3. Add the key to your environment variables

### TMDB Setup
1. Create a TMDB account
2. Generate an API key
3. Add the key to your environment variables

## 📁 Project Structure

```
netflix-gpt/
├── public/
├── src/
│   ├── components/          # React components
│   │   ├── Header.jsx       # Navigation header
│   │   ├── Login.jsx        # Authentication
│   │   ├── Browse.jsx       # Main browsing page
│   │   ├── MainContainer.jsx # Featured movie section
│   │   ├── VideoBackground.jsx # Movie trailers
│   │   ├── VideoTitle.jsx   # Movie title overlay
│   │   ├── MovieList.jsx    # Movie carousel
│   │   ├── MovieCard.jsx    # Individual movie card
│   │   ├── GPTSearch.jsx    # AI search page
│   │   ├── GptSearchBar.jsx # Search input
│   │   └── GptMovieSuggestion.jsx # AI results
│   ├── hooks/               # Custom React hooks
│   │   ├── useNowPlayingMovies.js
│   │   ├── usePopularMovies.js
│   │   ├── useTopratedMovies.js
│   │   ├── useUpcomingMovies.js
│   │   └── useMovieVideo.js
│   ├── utils/               # Utilities and Redux slices
│   │   ├── appstore.js      # Redux store
│   │   ├── moviesSlice.js   # Movie state management
│   │   ├── userSlice.js     # User state management
│   │   ├── gptsearchslice.js # GPT search state
│   │   ├── constants.js     # API endpoints
│   │   ├── firebase.js      # Firebase config
│   │   ├── openai.js        # OpenAI config
│   │   └── validate.js      # Form validation
│   ├── App.jsx              # Main app component
│   ├── main.jsx             # App entry point
│   └── index.css            # Global styles
├── package.json
├── vite.config.js
└── README.md
```

## 🎮 Usage

### Authentication
1. **Sign Up**: Create a new account with email and password
2. **Sign In**: Use your credentials to access the app
3. **Sign Out**: Click the sign-out button in the header

### Browsing Movies
1. **Featured Movie**: Watch the main featured movie with trailer
2. **Categories**: Browse different movie categories
3. **Horizontal Scroll**: Swipe or scroll through movie lists
4. **Movie Cards**: Hover for details and click for more info

### AI Movie Search
1. **Access GPT Search**: Click "GPT Search" in the header
2. **Enter Query**: Describe what you want to watch
3. **Get Recommendations**: Receive AI-powered movie suggestions
4. **Browse Results**: View recommended movies with details

## 🔒 Security Features

- **Firebase Authentication** - Secure user management
- **Environment Variables** - Protected API keys
- **Input Validation** - Form data validation
- **Error Handling** - Graceful error management

## 🎨 Design Features

### Responsive Design
- **Mobile-first approach**
- **Breakpoints**: sm (640px), md (768px), lg (1024px), xl (1280px)
- **Touch-friendly interactions**
- **Adaptive layouts**

### UI/UX Elements
- **Netflix-inspired design**
- **Smooth animations and transitions**
- **Hover effects**
- **Loading states**
- **Error handling**

## 🚀 Performance Optimizations

- **Redux caching** - Prevents unnecessary API calls
- **Lazy loading** - Efficient component loading
- **Responsive images** - Adaptive image sizing
- **Smooth scrolling** - Enhanced user experience

## 🧪 Testing

```bash
# Run tests (if configured)
npm test

# Run linting
npm run lint

# Build for production
npm run build
```

## 📦 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Add environment variables in Vercel dashboard
3. Deploy automatically on push

### Netlify
1. Connect your repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Add environment variables

### Firebase Hosting
```bash
npm run build
firebase deploy
```
---

**Note**: This is an educational project and is not affiliated with or endorsed by Netflix.
