
setInterval(() => {

    let time = new Date();

    document.getElementById('hrs').innerHTML = time.getHours();
    document.getElementById('min').innerHTML = time.getMinutes();
    document.getElementById('sec').innerHTML = time.getSeconds();

}, 1000)

