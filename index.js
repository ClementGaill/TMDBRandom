document.addEventListener('DOMContentLoaded', () => {
    const apiKey = '799bd62b937160f9b5703396b6a939bd';
    const generateBtn = document.getElementById('generate-btn');

    generateBtn.addEventListener('click', () => {
        fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}`)
            .then(response => response.json())
            .then(data => {
                const randomIndex = Math.floor(Math.random() * data.results.length);
                const randomMovie = data.results[randomIndex];

                document.getElementById('movie-title').textContent = randomMovie.title;
                document.getElementById('movie-director').textContent = 'To be fetched';
                document.getElementById('movie-overview').textContent = randomMovie.overview;
                document.getElementById('movie-poster').src = `https://image.tmdb.org/t/p/w500${randomMovie.poster_path}`;
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    });
});
