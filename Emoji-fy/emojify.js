const text = document.querySelector('#textarea');
const emojifyBtn = document.getElementById('replaceBtn');
const reloadBtn = document.getElementById('reloadBtn');
const container = document.querySelector('#container');
const form = document.querySelector('#form');
let strArr;
//function to replace all occurrences of '!' and '?'
const switchero = (str) => {
    let eMark = str.replaceAll('!','😲');
    let qMark = eMark.replaceAll('?','🤔');
    return qMark;
}
//event listener for emoji-fy button
emojifyBtn.addEventListener('click', ()=>{
    if(textarea.value != ""){
        strArr = text.value.trim();
        let newStr = switchero(strArr);
        let newP = document.createElement('p');
        newP.setAttribute('id', 'newP');
        let textNode = document.createTextNode(newStr);
        //add the new text with emojis to the new <p>
        newP.appendChild(textNode);
        //add the new <p> after the replace button
        container.insertBefore(newP,form.lastChild.nextSibling);    
    }
});
//event listener to reload the page
reloadBtn.addEventListener('click',()=>{
    window.location.reload(true);
});
textarea.value = ""; //clears textarea on page reload



