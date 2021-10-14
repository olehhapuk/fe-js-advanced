import VideoCard from './VideoCard';
import Header from './Header';

function App() {
  return (
    <>
      <Header filmCount={2}></Header>

      <VideoCard
        imageUrl="https://image.tmdb.org/t/p/w500/xmbU4JTUm8rsdtn7Y3Fcm30GpeT.jpg"
        title="Free Guy"
        description="A bank teller called Guy realizes he is a background character in an open world video game called Free City that will soon go offline."
        isFavorite={false}
      />
      <VideoCard
        imageUrl="https://image.tmdb.org/t/p/w500/3cUj0JRFcXmN7G2vBuWbRUQfjhw.jpg"
        title="Fever Dream"
        description="A woman named Amanda lies stricken, far from home. A young boy named David questions her, trying to make her remember. She's not his mother, he's not her son. As her time is running out, he helps her unravel a powerful, haunting story of obsessive jealousy, an invisible danger, and the power of a mother's love for her child."
        isFavorite={true}
      />
    </>
  );
}

export default App;
