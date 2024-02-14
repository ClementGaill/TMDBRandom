const blob = document.querySelector('.blob');

let isDragging = false;

blob.addEventListener('mousedown', startDrag);
blob.addEventListener('mouseup', stopDrag);
blob.addEventListener('mouseleave', stopDrag);
blob.addEventListener('mousemove', drag);

function startDrag(e) {
    isDragging = true;
}

function stopDrag(e) {
    isDragging = false;
}

function drag(e) {
    if (!isDragging) return;
    blob.style.left = e.clientX - blob.clientWidth / 2 + 'px';
    blob.style.top = e.clientY - blob.clientHeight / 2 + 'px';
}
