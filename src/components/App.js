import VideoCard from './VideoCard/VideoCard';
import Header from './Header/Header';
import videosData from '../videos.json';
import StyledVideoCard from './StyledVideoCard/StyledVideoCard';
// import FriendList from './FriendList';
// import Statistics from './Statistics';

function App() {
  return (
    <>
      {/* <FriendList />
      <Statistics /> */}

      <Header filmCount={2}></Header>
      <h5 className="title">Test title</h5>

      {videosData.map((video) => (
        <StyledVideoCard
          key={video.id}
          imageUrl={video.poster_path}
          title={video.title}
          description={video.overview}
          isFavorite={video.isFavorite}
        />
      ))}
    </>
  );
}

export default App;
