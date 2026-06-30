const contenair = document.querySelector('.langProg');
const grpe = document.querySelectorAll('.grpe');

let activeGrpe = 0;

function defilerMesgrpe() {
    activeGrpe++;
    if (activeGrpe >= grpe.length) {
        activeGrpe = 0;
    }

    grpe.forEach((g) => {
        g.style.transform = `translateX(-${activeGrpe * 100}%)`;
    });
}

setInterval(defilerMesgrpe, 6500);