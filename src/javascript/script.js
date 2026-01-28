document.querySelectorAll('.kanban-card').forEach(card => {
    card.addEventListener('dragstart', e => {
        e.currentTarget.classList.add('dragging');
    })

    card.addEventListener('dragend', e => {
        e.currentTarget.classList.remove('dragging');
    })
})

document.querySelectorAll('.kanban-column').forEach(column => {
    column.addEventListener('dragover', e => {
        e.preventDefault();
        const draggingCard = document.querySelector('.kanban-card.dragging');
        e.currentTarget.appendChild(draggingCard);
    })
    
})