import PropTypes from 'prop-types';

import styles from './VideoCard.module.css';

function VideoCard({ imageUrl, title, description, isFavorite }) {
  let titleClass = '';
  if (isFavorite) {
    titleClass = styles.title_orange;
  } else {
    titleClass = styles.title_grey;
  }
  console.log(titleClass);

  return (
    <div>
      <img src={imageUrl} alt={title} className={styles.img} />
      <h3 className={titleClass}>{title}</h3>
      <p>{description}</p>
      {!isFavorite && (
        <button type="button" className="video-card__button">
          +
        </button>
      )}
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
