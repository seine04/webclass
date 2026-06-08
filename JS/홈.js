document.addEventListener("DOMContentLoaded", () => {
    
    // 데이터베이스가 존재하는지 확인
    if (typeof gameDatabase === "undefined") {
        console.error("게임 데이터베이스를 찾을 수 없습니다.");
        return;
    }

    /**
     * 게임 정보를 화면에 업데이트하는 함수
     * @param {string} id - HTML 태그 ID의 접두사 (예: 'main', 'g2')
     * @param {object} game - 데이터베이스의 게임 객체
     */
    function updateGameInfo(id, game) {
        if (!game) return;

        const imgEl = document.getElementById(id + "-img");
        const titleEl = document.getElementById(id + "-title");
        const tagsEl = document.getElementById(id + "-tags");
        const priceEl = document.getElementById(id + "-price");

        // 이미지 경로 보정: 
        // 데이터베이스에는 '../img/'로 저장되어 있으므로, 
        // 홈 화면(루트)에서는 '../'를 제거하여 '/img/'로 변환합니다.
        if (imgEl) {
            imgEl.src = game.img.replace('../', '');
        }

        if (titleEl) titleEl.innerText = game.title;
        if (tagsEl) tagsEl.innerText = game.tags;
        if (priceEl) priceEl.innerText = game.price;
    }

    // 각 게임 카드에 데이터 매핑
    updateGameInfo("main", gameDatabase.game1);
    updateGameInfo("g2", gameDatabase.game2);
    updateGameInfo("g3", gameDatabase.game3);
    updateGameInfo("g4", gameDatabase.game4);
    updateGameInfo("g5", gameDatabase.game5);
    updateGameInfo("g6", gameDatabase.game6);
    updateGameInfo("g7", gameDatabase.game7);
});