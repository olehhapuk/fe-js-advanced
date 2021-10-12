import ReactDOM from 'react-dom';

import App from './components/App';

ReactDOM.render(<App />, document.querySelector('#root'));

// const imageUrl =
//   'https://images.unsplash.com/photo-1616440347437-b1c73416efc2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80';

// const titleElem = React.createElement(
//   'h1',
//   {
//     className: 'title',
//   },
//   'Hello, World!'
// );

// const titleElem = <h1 className="title">Hello, World!</h1>;

// const imageElem = React.createElement('img', {
//   src: imageUrl,
//   alt: 'PC Setup',
//   width: 500,
// });

// const imageElem = <img src={imageUrl} alt="PC Setup" width={500} />;

// const cardElem = React.createElement('div', null, imageElem, titleElem);
// const cardElem = (
//   <div>
//     <h1 className="title">Hello, World!</h1>
//     <img src={imageUrl} alt="PC Setup" width={500} />
//   </div>
// );
