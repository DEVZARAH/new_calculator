let display = document.querySelector('.screen');

let buttons =Array.from(document.getElementsByTagName('button'));

buttons.map(button =>{
    button.addEventListener( 'click' ,(e) =>{
switch(e.target.innerText){
    case 'C':
        display.innerText = ''
        break;
        case 'D':
            display.innerText =display.innerText.slice(0,-1);

    default:
        display.innerText += e.target.innerText
}

    })
})