const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: 'a9b6b0bd993c436f151fe14a58378827',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;