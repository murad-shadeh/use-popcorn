import WatchedMovie from "./WatchedMovie";
const WatchedMovieList = ({ watched, handleDeleteWatched }) => {
  return (
    <ul className="list">
      {watched.map((movie) => (
        <WatchedMovie
          movie={movie}
          key={movie.imdbID}
          handleDeleteWatched={handleDeleteWatched}
        />
      ))}
    </ul>
  );
};
export default WatchedMovieList;
