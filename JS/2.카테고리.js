document.addEventListener("DOMContentLoaded", () => {
    const wishlist = JSON.parse(localStorage.getItem('myWishlist')) || [];
    
    document.querySelectorAll('.wish-add-btn').forEach(btn => {
        const onclickAttr = btn.getAttribute('onclick');
        const match = onclickAttr.match(/addToWishlist\s*\(\s*['"]([^'"]+)['"]/);
        
        if (match && match[1]) {
            const gameId = match[1];
            if (wishlist.includes(gameId)) {
                btn.classList.add('active');
            }
        }
    });
});

function filterGames(genre, event) {
    const categoryButtons = document.querySelectorAll('.category-item'); 
    categoryButtons.forEach(btn => btn.classList.remove('active'));
    
    if (event) {
        event.currentTarget.classList.add('active');
    }

    const cards = document.querySelectorAll('.mini-card');
    cards.forEach(card => {
        const cardGenre = card.getAttribute('data-genre');
        if (cardGenre && cardGenre.includes(genre)) {
            card.classList.remove('hidden');
        } else {
            card.classList.add('hidden');
        }
    });
}

function addToWishlist(gameId, gameTitle, event) {
    if (event) {
        event.stopPropagation(); 
        event.preventDefault();
    }

    let wishlist = JSON.parse(localStorage.getItem('myWishlist')) || [];

    if (wishlist.includes(gameId)) {
        alert("이미 즐겨찾기에 등록된 게임입니다.");
    } else {
        wishlist.push(gameId);
        localStorage.setItem('myWishlist', JSON.stringify(wishlist));
        alert(`${gameTitle}이(가) 즐겨찾기에 추가되었습니다!`);
        
        if (event) {
            event.currentTarget.classList.add('active');
        }
    }
}