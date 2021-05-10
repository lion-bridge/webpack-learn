import './css/index.css'
import phone_img from './images/switch.png'
import btnClick from './js/btnClick'

const root = document.getElementById('root');

const p = document.createElement('p')
p.innerHTML = '文本'
root.appendChild(p)

const img = document.createElement('img');
img.src = phone_img;
img.className = 'img_phone'
root.appendChild(img);

const divBg = document.createElement('div');
divBg.className = "div_bg";
root.appendChild(divBg);

const btn = document.createElement('button');
btn.innerHTML = '观察者';
btn.addEventListener('click', btnClick);
root.appendChild(btn);