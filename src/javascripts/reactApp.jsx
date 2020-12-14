import ReactDom from 'react-dom';
import * as React from 'react';

// Reactのコンポーネントの定義
const App = (props) => {
  return (
    <div>
      Hello, React App!
    </div>
  );
};

const reactRoot = document.getElementById('react-root');
if (reactRoot) {
  ReactDom.render(<App />, reactRoot);// #react-rootあれば、上で定義したAppをマウントする
} else {
  console.log("No root element found");
}
