document.addEventListener('DOMContentLoaded', () => {
    const piles = document.querySelectorAll('.pile');
    const mainItem = document.querySelector('.selected-container .main-item');
    const topSubItems = document.querySelector('.selected-container .top-sub-items');
    const bottomSubItems = document.querySelector('.selected-container .bottom-sub-items');
    let currentPile = null;

    piles.forEach(pile => {
        pile.addEventListener('click', () => {
            const subItems = pile.getAttribute('data-sub-items').split(',');

            if (currentPile) {
                currentPile.style.opacity = '1';
            }

            // Hide the clicked pile from the cube
            pile.style.opacity = '0';

            // Move the main item to the left
            mainItem.style.opacity = '0';
            mainItem.style.transform = 'translateX(-100px)';
            setTimeout(() => {
                mainItem.textContent = pile.textContent;
                mainItem.style.opacity = '1';
                mainItem.style.transform = 'translateX(0)';
            }, 500);

            // Clear previous sub-items
            topSubItems.innerHTML = '';
            bottomSubItems.innerHTML = '';

            // Add new sub-items with animation
            subItems.forEach((subItem, index) => {
                const subItemElement = document.createElement('div');
                subItemElement.textContent = subItem;
                subItemElement.classList.add('sub-item');

                setTimeout(() => {
                    subItemElement.classList.add('show');
                }, index * 300);

                if (index % 2 === 0) {
                    topSubItems.appendChild(subItemElement);
                } else {
                    bottomSubItems.appendChild(subItemElement);
                }
            });

            // Show sub-items with a delay
            setTimeout(() => {
                topSubItems.style.opacity = '1';
                bottomSubItems.style.opacity = '1';
            }, 500);

            // Store the current pile as the previous pile
            currentPile = pile;
        });
    });
});
