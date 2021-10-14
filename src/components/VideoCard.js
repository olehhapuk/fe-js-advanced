import PropTypes from 'prop-types';

// import moduleName from 'module' - imp
// import {  } from 'module' - imd
// function VideoCard() {
//   return (
//     <div>

//     </div>
//   )
// }

// export default VideoCard - _rfce

function VideoCard({ imageUrl, title, description, isFavorite }) {
  return (
    <div>
      <img src={imageUrl} alt={title} width="350" />
      <h3>{title}</h3>
      <p>{description}</p>
      {!isFavorite && <button type="button">+</button>}
      <hr />
    </div>
  );
}

VideoCard.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  isFavorite: PropTypes.bool.isRequired,
};

export default VideoCard;
