document.addEventListener('DOMContentLoaded', function() {
    displayWishlist();
});

function displayWishlist() {
    const wishlistContainer = document.getElementById('wishlist-list');
    if (!wishlistContainer) return;

    // 1. localStorage에서 ID 목록 가져오기
    const wishlistIds = JSON.parse(localStorage.getItem('myWishlist')) || [];

    // 2. 비어있을 때 처리
    if (wishlistIds.length === 0) {
        wishlistContainer.innerHTML = '<p style="color: #aaa; text-align: center; padding: 40px 0;">즐겨찾기에 추가된 게임이 없습니다.</p>';
        return;
    }

    wishlistContainer.innerHTML = '';

    // 3. 게임 ID를 순회하며 gameDatabase에서 정보 추출
    wishlistIds.forEach(function(gameId) {
        const game = gameDatabase[gameId]; // 데이터베이스에서 직접 참조

        if (!game) return; // 데이터에 없는 ID라면 건너뜀

        const cardHTML = `
            <div class="mini-card" onclick="location.href='./게임상세.html?id=${gameId}'" style="cursor: pointer;">
                <div class="card-img"><img src="${game.img}" alt="${game.title}"></div>
                <div class="card-info">
                    <div class="game-title">${game.title}</div>
                    <div class="game-genre">${game.tags}</div>
                </div>
                <div class="card-price-area">
                    <button class="wish-add-btn" style="background-color: #a32a2a !important;" onclick="removeFromWishlist('${gameId}', event)">제거</button>
                    <div class="price-box"><span class="final-price">${game.price}</span></div>
                </div>
            </div>
        `;
        wishlistContainer.innerHTML += cardHTML;
    });
}

// 삭제 함수는 그대로 사용
function removeFromWishlist(gameId, event) {
    if (event) event.stopPropagation();
    let wishlist = JSON.parse(localStorage.getItem('myWishlist')) || [];
    wishlist = wishlist.filter(id => id !== gameId);
    localStorage.setItem('myWishlist', JSON.stringify(wishlist));
    displayWishlist(); // 목록 새로고침
    alert('즐겨찾기에서 삭제되었습니다.');
}