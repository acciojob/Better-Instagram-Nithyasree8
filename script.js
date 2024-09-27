//your code here
const images = document.querySelectorAll('.image');

images.forEach(image => {
    image.addEventListener('dragstart', dragStart);
    image.addEventListener('dragover', dragOver);
    image.addEventListener('drop', drop);
    image.addEventListener('dragleave', dragLeave);
});

let draggedElement = null;

function dragStart(event) {
    draggedElement = this;
    setTimeout(() => {
        this.style.display = 'none';
    }, 0);
}

function dragOver(event) {
    event.preventDefault();
}

function drop(event) {
    event.preventDefault();
    if (draggedElement) {
        // Swap the content
        const currentElement = this;
        const tempContent = currentElement.innerHTML;

        currentElement.innerHTML = draggedElement.innerHTML;
        draggedElement.innerHTML = tempContent;

        // Show the dragged element
        draggedElement.style.display = 'flex';
    }
}

function dragLeave() {
    this.style.border = '';
}
