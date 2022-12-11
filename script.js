const div = document.getElementsByTagName("div")[0];

var numAle = Math.ceil(Math.random()) * 8;
console.log(numAle);

div.innerHTML = `<p>O número gerado aleatoriamente foi: ${numAle}</p>`;