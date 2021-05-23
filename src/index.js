import './css/index.css'
import phone_img from './images/switch.png'
import btnClick from './js/btnClick'
// import {sum} from './js/sum';

async function init() {
    
    const root = document.getElementById('root');

    const p = document.createElement('p')
    p.innerHTML = '文本第一个还不错3333ss'
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

    // 求和按钮
    const btn1 = document.createElement('button')
    btn1.innerHTML = '两数求和'
    btn1.addEventListener('click', async e => {
        // 动态导入, 预获取/重命名chrunk，使用逗号分隔
        const {sum} = await import(/*webpackPreload: true, webpackChunkName: "sum" */'./js/sum');
        const num = sum(Math.round(Math.random()*10),Math.round(Math.random()*10))
        p.innerHTML = `两数求和=${num}`
    })
    root.append(btn1)
}
init()
