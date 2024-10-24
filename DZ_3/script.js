document.addEventListener('DOMContentLoaded', () => {
    productsName();

    const addBtn = document.getElementById('btn-add');
        
    addBtn.addEventListener('click', () => {
        const productName = document.getElementById('product_name').value;
        const reviewText = document.getElementById('product_text').value; 

        if (productName && reviewText) {
            let reviews = JSON.parse(localStorage.getItem('reviews')) || {};
            if (!Array.isArray(reviews[productName])) {
                reviews[productName] = [];
            }      
            reviews[productName].push(reviewText)
            localStorage.setItem('reviews', JSON.stringify(reviews))
            productsName()
        }
    })

    function productsName() {
        const productItem = document.getElementById('item');
        productItem.innerHTML = '';
        const reviews = JSON.parse(localStorage.getItem('reviews')) || {}; 
        for (let product in reviews) {
            const item = document.createElement('li');
            item.textContent = product;
            item.addEventListener ('click', () => {
                deleteProducts(product, reviews[product])
            })
            productItem.appendChild(item);
        }
    }
    function deleteProducts(product, productReviews) {
        const containerBox = document.getElementById('box');
        containerBox.innerHTML = `<h3> Отзывы на "${product}"</h3>`;
        productReviews.forEach((review, index) => {
            const textP = document.createElement('p');
            textP.textContent = `${index + 1}. ${review}`;
            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Удалить отзыв';
            deleteButton.addEventListener('click', () => {
                productReviews.splice(index, 1);
                const reviews = JSON.parse(localStorage.getItem('reviews'));
                reviews[product] = productReviews;
                localStorage.setItem('reviews', JSON.stringify(reviews));
                deleteProducts(product, productReviews);
            });
            textP.appendChild(deleteButton);
            containerBox.appendChild(textP);
        })
    }
})
