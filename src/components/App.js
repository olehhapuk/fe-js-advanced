import Card from './Card';

const imageUrl1 =
  'https://images.unsplash.com/photo-1616440347437-b1c73416efc2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80';

const imageUrl2 =
  'https://images.unsplash.com/photo-1614624532983-4ce03382d63d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1631&q=80';

const imageUrl3 =
  'https://images.unsplash.com/photo-1603025832572-c5ba1fb6be8b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=765&q=80';

function App() {
  return (
    <>
      <Card title="PC 1" image={imageUrl1} />
      <Card title="PC 1" image={imageUrl2} />
      <Card title="PC 1" image={imageUrl3} />
    </>
  );
}

export default App;
