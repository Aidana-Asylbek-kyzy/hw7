const HIGHT = document.getElementById('night')
HIGHT.style.cssText = `

    `
 
const btnModal = document.createElement('button')
HIGHT.append(btnModal)
btnModal.textContent = 'SHOW MODAL';
btnModal.style.cssText = `
    background-color: white;
    font-size: 1rem;
    margin: 0 auto;
    margin-left: 20px;
    display: block;
    padding: 8px 10px;
    border-radius: 5px;
    cursor: pointer;    
`

const h1 = document.createElement('h1');
h1.textContent = 'Warning!'
const modalWindow = document.createElement('div')
modalWindow.style.cssText = `
    position: relative;
    width: 500px;
    height: 250px;
    background-color: #fff;
    padding: 20px;
    font-size: 1.3rem;
    border-radius: 8%;
    gap: 20px;
    margin-top: 50px;
    box-shadow: 16px 14px 8px 0px rgba(34, 60, 80, 0.2);
    `

const p = document.createElement('p');

p.textContent = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur, hic qui excepturi assumenda illum possimus eaque eius architecto facere vitae!Lorem ipsum dolor sit amet.'

modalWindow.appendChild(h1)
modalWindow.appendChild(p);

const modal = document.createElement('div')
modal.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: #55555545;
    display: flex;
    justify-content: center;
    align-items: center;
    `
    
    modal.append(modalWindow)

btnModal.addEventListener('click', () => {
    HIGHT.append(modal)
})

const closeModel = document.createElement('button')
closeModel.textContent = 'x'
modalWindow.append(closeModel)
closeModel.style.cssText = `
    position: absolute;
    top: 10px;
    right: 10px;
    background-color: white;
    width: 50px;
    height: 50px;
    border: none;
    `

closeModel.addEventListener('click', () => {
    modal.remove()
})

modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.remove()
    }
})

const button = document.createElement('button');
const button1 = document.createElement('button');

button.textContent = 'Accept';
button1.textContent = 'Decline';

modalWindow.appendChild(button)
modalWindow.appendChild(button1)
button.style.cssText = `
    background-color: green;
    width: 90px;
    height: 30px;
    border: 1px solid black; 
    border-radius: 10px;
    margin-right: 10px;
    margin-top: 30px;
    `
button1.style.cssText = `
    background-color: red;
    width: 90px;
    height: 30px;
    border: 1px solid black; 
    border-radius: 10px;
    `

const sun = document.createElement('button');
const moon = document.createElement('button');
const moonImg = document.createElement('img');
const sunImg = document.createElement('img');
moonImg.src = './imj/moon-phase-black-crescent-shape_icon-icons.com_72982.png'

moonImg.style.cssText = `
    height: 40px;
    width: 40px;
    top: 10%;
    bottom: 90%;
    left: 80%;
    right: 20%;
    position: absolute;
`

moon.style.cssText = `
    background: none;
    border: none;
`

sun.style.cssText = `
    background: none;
    border: none;
`


sunImg.style.cssText = `
    height: 40px;
    width: 40px;
    top: 10%;
    bottom: 90%;
    left: 80%;
    right: 20%;
    position: absolute;

`
sunImg.src = './imj/1164954.png'
sun.appendChild(sunImg);
moon.addEventListener('click', () => {
    document.body.style.cssText = `
        background-color: black;
    `
    moon.remove();
    document.body.appendChild(sun)
})
moon.appendChild(moonImg);
document.body.appendChild(moon);

sun.addEventListener('click', () => {
    document.body.style.cssText = `
        background-color: white;
    `
    sun.remove();
    document.body.appendChild(moon)
})