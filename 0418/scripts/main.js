// 更改標題內容
// var myHeading = document.querySelector('h1');
// myHeading.textContent = 'Hello world!';

// 彈出
// alert('hello!');


// 換圖片
var myImage = document.querySelector('img');

myImage.onclick = function () {
  let mySrc = myImage.getAttribute('src');
  if (mySrc === 'images/cat.jpg') {
    myImage.setAttribute('src', 'images/cat02.jpeg');
  } else {
    myImage.setAttribute('src', 'images/cat.jpg');
  }
}


// 客製化歡迎訊息
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.innerHTML = 'Mozilla is cool, ' + myName;
}

if (!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'Mozilla is cool, ' + storedName;
}

myButton.onclick = function () {
  setUserName();
}

