const canvas = document.querySelector('canvas');

const c = canvas.getContext('2d');

//16:9 aspect ratio
canvas.width = 1024//px
canvas.height = 576//px

console.log(c);

c.fillRect(0, 0, canvas.width, canvas.height);