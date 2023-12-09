import './editor';

const heading = () => {
  const element = document.createElement('h1');
  element.innerText = 'TinyMCE Vite demo';
  return element;
};

const parent = document.createElement('p');
const editor = document.createElement('a-editor');
parent.appendChild(editor);


document.body.appendChild(heading());
document.body.appendChild(parent);
