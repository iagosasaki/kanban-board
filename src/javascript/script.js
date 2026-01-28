document.querySelectorAll('.kanban-card').forEach(card => {
    card.addEventListener('dragstart', e => {
        e.currentTarget.classList.add('dragging');
    })

    card.addEventListener('dragend', e => {
        e.currentTarget.classList.remove('dragging');
    })
})

let originalColumn = null;

document.querySelectorAll('.kanban-column').forEach(column => {
    column.addEventListener('dragover', e => {
        e.preventDefault();
        
        const cardContainer = column.querySelector('.kanban-cards');
        const draggingCard = document.querySelector('.dragging');

        e.currentTarget.classList.add('dragging-column');
        cardContainer.appendChild(draggingCard);
    });

    column.addEventListener('dragend', e => {
        e.currentTarget.classList.remove('dragging-column');
    });

    column.addEventListener('dragleave', e => {
        e.currentTarget.classList.remove('dragging-column');
    });
});