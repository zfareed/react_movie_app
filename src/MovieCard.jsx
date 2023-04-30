import './MovieCard.css'

const MovieCard = (props) => {
  return (
    <>
      <div className="movie-card">
        <img src={props.poster !== 'N/A' ? props.poster : 'https://via.placeholder.com/400'} alt={props.title} />
        <div className="movie-info">
          <h3>{props.title}</h3>
          <p>{props.year}</p>
          <p>{props.type}</p>
        </div>
      </div>
    </>
  );
};

export default MovieCard;
