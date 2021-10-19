import VideoCard from './VideoCard';
import Header from './Header';
import videosData from '../videos.json';

console.log(videosData);

function App() {
  return (
    <>
      <Header filmCount={2}></Header>

      {/* <VideoCard
        imageUrl="https://image.tmdb.org/t/p/w500/xmbU4JTUm8rsdtn7Y3Fcm30GpeT.jpg"
        title="Free Guy"
        description="A bank teller called Guy realizes he is a background character in an open world video game called Free City that will soon go offline."
        isFavorite={false}
      /> */}
      {videosData.map((video) => (
        <VideoCard
          key={video.id}
          // key={1} Не унікальний
          // key={new Date().toDateString()} Не стабільний
          imageUrl={video.poster_path}
          title={video.title}
          description={video.overview}
          isFavorite={false}
          // {...video}
        />
      ))}

      {/* {videosData.map((video) => (
        <div key={}>
          <p>{video.title}</p>
        </div>
      ))} */}
    </>
  );
}

export default App;
