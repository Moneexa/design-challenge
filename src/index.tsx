import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import DropDown from './DropDown';
import reportWebVitals from './reportWebVitals';


const items = {
  "category_1": [{ title: "hopper", text: "Grace Hopper was an American computer scienntist and a US navy admiral" }, { title: "holberton", text: "Grace Hopper was a US computer scienntist and a navy admiral" }],
  "category_2": [{ title: "antonelli", text: "Grace Hopper was a US computer scienntist and a navy admiral" }, { title: "bartik", text: "Grace Hopper was a US computer scienntist and a navy admiral" }, { title: "teitulbaum", text: "Grace Hopper was a US computer scienntist and a navy admiral" }, { title: "Bartik", text: "Grace Hopper was a US computer scienntist and a navy admiral" }]
  // "category_3": []
}

export default function ThemeContainer({ theme, children }: { theme: string, children: any }) {
  if(theme === 'dark') {
    require('./themes/dark/dark.scss')
  } else {
    require('./themes/light/light.scss')
  }
  return (children)
}


ReactDOM.render(
  <React.StrictMode>
    <ThemeContainer theme="dark">
      <DropDown detailedMenu={false} items={items}/>
    </ThemeContainer>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
