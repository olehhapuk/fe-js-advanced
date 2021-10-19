import PropTypes from 'prop-types';

// import './VideoCard.css';
import styles from './VideoCard.module.css';

function VideoCard({ imageUrl, title, description, isFavorite }) {
  const titleClasses = [styles.title];
  if (isFavorite) {
    titleClasses.push(styles.title_orange);
  } else {
    titleClasses.push(styles.title_grey);
  }
  console.log(titleClasses);

  return (
    <div>
      <img src={imageUrl} alt={title} className={styles.img} />
      <h3
        // style={{
        //   textDecoration: 'underline',
        //   color: isFavorite ? 'orange' : 'grey',
        // }}
        className={titleClasses.join(' ')}
      >
        {title}
      </h3>
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
