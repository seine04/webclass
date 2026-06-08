document.addEventListener('DOMContentLoaded', function() {
    loadGameDetails();
});


function getGameId() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('id'); 
}

function loadGameDetails() {
    const gameId = getGameId();

    const currentGame = gameDatabase ? gameDatabase[gameId] : null;

    if (!currentGame) {
        alert("게임 정보를 찾을 수 없습니다.");
        return;
    }


    document.getElementById('detail-title').innerText = currentGame.title;
    document.getElementById('detail-desc').innerText = currentGame.desc;
    document.getElementById('detail-release').innerText = currentGame.release;
    document.getElementById('detail-developer').innerText = currentGame.developer;
    document.getElementById('detail-tags').innerText = currentGame.tags;
    document.getElementById('detail-price').innerText = currentGame.price;


    const imgElement = document.getElementById('detail-img');
    if (imgElement) {
        imgElement.src = currentGame.img;
        imgElement.onerror = function() {
            console.error("이미지 경로 오류: 파일을 찾을 수 없습니다.", this.src);
        };
    }

    const minList = document.getElementById('min-req-list');
    const reqList = document.getElementById('req-req-list');

    if (minList && reqList && currentGame.requirements) {
        const reqs = currentGame.requirements;
        minList.innerHTML = `
            <li><strong>운영체제:</strong> ${reqs.minimum.os}</li>
            <li><strong>프로세서:</strong> ${reqs.minimum.cpu}</li>
            <li><strong>메모리:</strong> ${reqs.minimum.memory}</li>
            <li><strong>그래픽:</strong> ${reqs.minimum.graphics}</li>
            <li><strong>저장공간:</strong> ${reqs.minimum.storage}</li>
        `;
        reqList.innerHTML = `
            <li><strong>운영체제:</strong> ${reqs.recommended.os}</li>
            <li><strong>프로세서:</strong> ${reqs.recommended.cpu}</li>
            <li><strong>메모리:</strong> ${reqs.recommended.memory}</li>
            <li><strong>그래픽:</strong> ${reqs.recommended.graphics}</li>
            <li><strong>저장공간:</strong> ${reqs.recommended.storage}</li>
        `;
    }


    checkWishlistStatus();
}

function toggleWishlist() {
    const gameId = getGameId();
    if (!gameId || !gameDatabase[gameId]) return;

    let wishlist = JSON.parse(localStorage.getItem('myWishlist')) || [];
    
    if (wishlist.includes(gameId)) {
        wishlist = wishlist.filter(id => id !== gameId);
        alert(`${gameDatabase[gameId].title}이(가) 즐겨찾기에서 제거되었습니다.`);
    } else {
        wishlist.push(gameId);
        alert(`${gameDatabase[gameId].title}이(가) 즐겨찾기에 추가되었습니다!`);
    }
    
    localStorage.setItem('myWishlist', JSON.stringify(wishlist));
    checkWishlistStatus();
}


function checkWishlistStatus() {
    const wishBtn = document.getElementById('wish-trigger');
    if (!wishBtn) return;
    
    const gameId = getGameId();
    let wishlist = JSON.parse(localStorage.getItem('myWishlist')) || [];
    
    if (wishlist.includes(gameId)) {
        wishBtn.innerText = "즐겨찾기 해제";
        wishBtn.classList.add('active');
    } else {
        wishBtn.innerText = "즐겨찾기 추가";
        wishBtn.classList.remove('active');
    }
}