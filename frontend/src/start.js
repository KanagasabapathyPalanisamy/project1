

let textArea = document.getElementById('text-area');
let gameButton = document.getElementById('game-button');
let modifyButton = document.getElementById('modify-button');
let teamButton = document.getElementById('team-button');

//first show only the start game button alone

modifyButton.style.display='none';
teamButton.style.display='none';

//after clicking the start button display the modify and add button

gameButton.addEventListener('click',function() 
{
gameButton.style.display='none';
modifyButton.style.display='inline';
teamButton.style.display='inline';
});