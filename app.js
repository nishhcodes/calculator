const modal = document.getElementById('modal');
let display = 0;

function hideShow() {
    if (display ==1 ) {
        modal.style.display = 'block';
        display = 0;
    } else {
        modal.style.display = 'none';
        display = 1;
    }
}

// const modal = document.getElementById('modal');
// const btn = document.getElementById('hideShow');

// btn.addEventListener('click', (e) => {
//     modal.style.display = 'flex';
// })