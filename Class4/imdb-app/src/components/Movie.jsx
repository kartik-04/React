const Movie = ({ movie, watchlist, setWatchlist }) => {
  const handleWatchListBtnClick = () => {
    const isInWatchlist = watchlist[movie.id];

    if (isInWatchlist) {
      // Remove from watchlist
      const updatedWatchlist = { ...watchlist };
      delete updatedWatchlist[movie.id];
      setWatchlist(updatedWatchlist);
    } else {
      // Add to watchlist
      setWatchlist({ ...watchlist, [movie.id]: movie });
    }
  };
  return (
    <div className="movie">
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
      />
      <div className="movie-info">
        <h3>{movie.title}</h3>
        <button onClick={handleWatchListBtnClick}>
          {watchlist[movie.id] ? "-" : "+"}watchList
        </button>
      </div>
    </div>
  );
};

export default Movie;
