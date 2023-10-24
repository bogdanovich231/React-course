export default interface IMovie {
    backdrop_path: string;
    title: string;
    overview: string;
    poster_path: string;
    release_date: string;
    vote_average: number;
}

export async function searchMovie() {
    try {
        const res = await fetch('https://api.themoviedb.org/3/trending/movie/day?language=en-US',
            {
                method: 'GET',
                headers: {
                    accept: 'application/json',
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNjA1YjRhODFjMjU2NDQxNmExNTc1YWEwOTI2ZmU3OSIsInN1YiI6IjY1MzdkODNiOTQ2MzE4MDBjNmI1Y2QxNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.oITUDrSa7ve95U8-sdoLOeBDix1lJSWuteg1ki3q3A8'
                }
            });
        const result = await res.json();
        console.log(result);
    } catch (error) {
        console.error('Error in search books: ', error)
    }
}

