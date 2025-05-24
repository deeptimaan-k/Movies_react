# 🎬 Radiant Movies React App

A modern, responsive movie and TV show discovery application built with React. Browse trending movies, top-rated content, search for your favorites, and watch trailers - all powered by The Movie Database (TMDB) API.

![Movies React App](https://img.shields.io/badge/React-18.x-blue.svg)
![TMDB API](https://img.shields.io/badge/TMDB-API-green.svg)
![License](https://img.shields.io/badge/License-MIT-yellow.svg)

## ✨ Features

### 🎥 Core Features
- **Hero Slider**: Dynamic carousel showcasing popular movies with trailers
- **Movie Discovery**: Browse trending, popular, and top-rated movies
- **TV Shows**: Explore popular and top-rated TV series
- **Advanced Search**: Search movies and TV shows by title
- **Detailed Views**: Comprehensive movie/show details with cast information
- **Trailer Integration**: Watch trailers directly in the app
- **Similar Content**: Discover related movies and shows

### 🎨 User Experience
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Smooth Animations**: Swiper-powered carousels and transitions
- **Modern UI**: Clean, intuitive interface with SCSS styling
- **Fast Navigation**: React Router for seamless page transitions
- **Loading States**: Smooth content loading with proper error handling

## 🚀 Demo

[Live Demo](https://radiantmovies.netlify.app/) | [Screenshots](#screenshots)

## 🛠️ Technologies Used

### Frontend
- **React** (18.x) - UI library
- **React Router DOM** - Client-side routing
- **Swiper** - Touch slider component
- **SCSS** - Enhanced CSS with variables and mixins
- **Axios** - HTTP client for API requests

### APIs & Services
- **TMDB API** - Movie and TV show data
- **YouTube** - Trailer embedding

### Development Tools
- **Create React App** - Project bootstrapping
- **Boxicons** - Icon library
- **PropTypes** - Runtime type checking

## 📦 Installation

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- TMDB API key

### Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/deeptimaan-k/movies-react-app.git
   cd movies-react-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Configure TMDB API**
   - Visit [TMDB](https://www.themoviedb.org/settings/api) to get your API key
   - Create/update `src/api/apiConfig.js`:
   ```javascript
   const apiConfig = {
       baseUrl: 'https://api.themoviedb.org/3/',
       apiKey: 'YOUR_TMDB_API_KEY_HERE',
       originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/$\{imgPath}`,
       w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/$\{imgPath}`
   }
   
   export default apiConfig;
   ```

4. **Start the development server**
   ```bash
   npm start
   # or
   yarn start
   ```

5. **Open your browser**
   Navigate to `http://localhost:3000`

## 🏗️ Project Structure

```
src/
├── api/                    # API configuration and services
│   ├── apiConfig.js       # TMDB API configuration
│   ├── axiosClient.js     # Axios instance setup
│   └── tmdbApi.js         # TMDB API endpoints
├── assets/                # Static assets
│   ├── boxicons-2.0.7/   # Icon fonts
│   ├── footer-bg.jpg     # Background images
│   └── tmovie.png        # Logo
├── components/            # Reusable components
│   ├── button/           # Button components
│   ├── footer/           # Footer component
│   ├── header/           # Header with navigation
│   ├── hero-slide/       # Hero carousel
│   ├── input/            # Input components
│   ├── modal/            # Modal components
│   ├── movie-card/       # Movie/TV show cards
│   ├── movie-grid/       # Grid layout for movies
│   ├── movie-list/       # Horizontal movie lists
│   └── page-header/      # Page headers
├── config/               # App configuration
│   └── Routes.jsx        # Route definitions
├── pages/                # Page components
│   ├── detail/           # Movie/TV detail pages
│   ├── Catalog.jsx       # Movies/TV catalog
│   └── Home.jsx          # Homepage
├── scss/                 # Global styles
│   ├── _breakpoint.scss  # Responsive breakpoints
│   ├── _mixin.scss       # SCSS mixins
│   └── _variables.scss   # SCSS variables
├── App.js                # Main app component
├── App.scss              # Global app styles
└── index.js              # App entry point
```

## 🎯 Usage

### Navigation
- **Home**: Browse trending and top-rated content
- **Movies**: Dedicated movie catalog with search
- **TV Shows**: TV series catalog with search
- **Search**: Use the search bar to find specific content

### Features Guide
1. **Browse Content**: Scroll through different categories on the homepage
2. **Search**: Use the search functionality on catalog pages
3. **View Details**: Click on any movie/show card for detailed information
4. **Watch Trailers**: Click "Watch Trailer" on hero slides or detail pages
5. **Discover Similar**: Find related content on detail pages

## 🔧 Configuration

### API Configuration
Update `src/api/apiConfig.js` with your TMDB API credentials:

```javascript
const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: 'your_api_key_here',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/$\{imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/$\{imgPath}`
}
```

### Styling Customization
Modify SCSS variables in `src/scss/_variables.scss`:

```scss
// Colors
$main-color: #ff6b6b;
$body-bg: #0f0f0f;
$box-bg: #1e1e1e;
$txt-color: #ffffff;

// Responsive breakpoints
$mobile-width: 600px;
$tablet-width: 768px;
$desktop-width: 1024px;
```

## 📱 Screenshots

### Homepage
![Homepage](screenshots/homepage.png)

### Movie Details
![Movie Details](screenshots/movie-details.png)

### Search Results
![Search Results](screenshots/search-results.png)

### Mobile View
![Mobile View](screenshots/mobile-view.png)

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Commit your changes**
   ```bash
   git commit -m 'Add some amazing feature'
   ```
4. **Push to the branch**
   ```bash
   git push origin feature/amazing-feature
   ```
5. **Open a Pull Request**

### Development Guidelines
- Follow React best practices
- Use functional components with hooks
- Maintain consistent code formatting
- Add PropTypes for component props
- Write meaningful commit messages
- Test your changes thoroughly

## 🐛 Known Issues

- Trailer modal may not work for movies without available trailers
- Some images might not load due to TMDB API limitations
- Search functionality requires exact or partial title matches

## 🔮 Future Enhancements

- [ ] User authentication and favorites
- [ ] Watchlist functionality
- [ ] Movie ratings and reviews
- [ ] Advanced filtering options
- [ ] Dark/light theme toggle
- [ ] Offline support with PWA
- [ ] Social sharing features
- [ ] Recommendation engine

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [The Movie Database (TMDB)](https://www.themoviedb.org/) for providing the movie data API
- [Swiper](https://swiperjs.com/) for the carousel component
- [Boxicons](https://boxicons.com/) for the icon library
- [React](https://reactjs.org/) team for the amazing framework

## 📞 Support

If you have any questions or need help with setup, please:

1. Check the [Issues](https://github.com/deeptimaan-k/movies-react-app/issues) page
2. Create a new issue if your problem isn't already reported
3. Contact the maintainers

---

**Made with ❤️ by [Your Name](https://github.com/deeptimaan-k)**

⭐ Star this repository if you found it helpful!
```

This README provides comprehensive documentation for your Movies React application, including setup instructions, project structure, features, and contribution guidelines. Make sure to:

1. Replace placeholder URLs and usernames with your actual information
2. Add your TMDB API key setup instructions
3. Include actual screenshots in a `screenshots/` folder
4. Update the license section if you're using a different license
5. Add your contact information and social links

The README follows best practices with clear sections, proper formatting, and helpful badges that make it professional and user-friendly.
