// 페이지 로드 시 검색 실행
document.addEventListener('DOMContentLoaded', function() {
    performSearch();
});


function performSearch() {
    const query = document.getElementById('game-search-input').value.trim().toLowerCase();
    const resultsContainer = document.getElementById('search-results');
    const countContainer = document.getElementById('results-count');
    
    if (!resultsContainer) return;


    const gameList = typeof gameDatabase !== 'undefined' 
        ? Object.keys(gameDatabase).map(key => ({ id: key, ...gameDatabase[key] }))
        : [];


    const wishlist = JSON.parse(localStorage.getItem('myWishlist')) || [];
    const filteredGames = gameList.filter(game => game.title.toLowerCase().includes(query));


    resultsContainer.innerHTML = '';
    if (query === '') {
        if (countContainer) countContainer.innerText = "검색어를 입력해주세요.";
        return;
    }

    if (countContainer) countContainer.innerText = `총 ${filteredGames.length}개의 게임이 검색되었습니다.`;


    filteredGames.forEach(game => {

        const activeClass = wishlist.includes(game.id) ? 'active' : '';

        const cardHTML = `
            <div class="mini-card" onclick="location.href='./게임상세.html?id=${game.id}'" style="cursor: pointer;">
                <div class="card-img"><img src="${game.img}" alt="${game.id}"></div>
                <div class="card-info">
                    <div class="game-title">${game.title}</div>
                    <div class="game-genre">${game.genre}</div>
                </div>
                <div class="card-price-area">
                    <button class="wish-add-btn ${activeClass}" 
                            onclick="addToWishlist('${game.id}', '${game.title}', event)">
                        즐겨찾기
                    </button>
                    <div class="price-box"><span class="final-price">${game.price}</span></div>
                </div>
            </div>
        `;
        resultsContainer.innerHTML += cardHTML;
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