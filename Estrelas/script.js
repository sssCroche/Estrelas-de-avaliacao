let stars = document.querySelectorAll('.star-icon');

document.addEventListener('click', function (e) {
    
    if (e.target.classList.contains('star-icon')) {
        let rating = e.target.getAttribute('data-avaliacao');
        
        stars.forEach(star => star.classList.remove('ativo'));
        
        stars.forEach(star => {
            if (star.getAttribute('data-avaliacao') <= rating) {
                star.classList.add('ativo');
            }
        });
        
        console.log(rating);
    }
});