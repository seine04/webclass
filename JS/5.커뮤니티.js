// 샘플 더미 데이터 (처음 아무것도 없을 때 보여줄 기본 글)
const defaultPosts = [
    { num: 1, title: "인디 게임 추천 카테고리 업데이트", author: "관리자", date: "2026-05-24" }
];

document.addEventListener('DOMContentLoaded', () => {
    initBoard();
});

function initBoard() {
    let posts = JSON.parse(localStorage.getItem('communityPosts'));
    if (!posts) {
        posts = defaultPosts;
        localStorage.setItem('communityPosts', JSON.stringify(posts));
    }
    renderPosts(posts);
}

function renderPosts(posts) {
    const tbody = document.getElementById('board-content');
    tbody.innerHTML = '';

    if (posts.length === 0) {
        tbody.innerHTML = '<tr><td colspan="4" style="text-align:center; color:#556772; padding:30px;">등록된 게시글이 없습니다.</td></tr>';
        return;
    }

    posts.forEach(post => {
        const trHtml = `
            <tr>
                <td class="td-num">${post.num}</td>
                <td class="td-title">
                    ${post.title}
                    <button class="post-delete-btn" onclick="deletePost(${post.num}, event)">X</button>
                </td>
                <td>${post.author}</td>
                <td class="td-date">${post.date}</td>
            </tr>
        `;
        tbody.innerHTML += trHtml;
    });
}


function deletePost(postNum, event) {
    event.stopPropagation();

    if (confirm("이 게시글을 삭제하시겠습니까?")) {
        let posts = JSON.parse(localStorage.getItem('communityPosts')) || [];
        posts = posts.filter(post => post.num !== postNum);

        localStorage.setItem('communityPosts', JSON.stringify(posts));
        renderPosts(posts);
    }
}


function openModal() { document.getElementById('write-modal').classList.remove('hidden'); }
function closeModal() { document.getElementById('write-modal').classList.add('hidden'); }

function submitPost() {
    const title = document.getElementById('post-title').value.trim();
    const author = document.getElementById('post-author').value.trim();
    const content = document.getElementById('post-content').value.trim();

    if (!title || !author) {
        alert("제목과 작성자를 입력해주세요!");
        return;
    }

    let posts = JSON.parse(localStorage.getItem('communityPosts')) || [];
    
    const newNum = posts.length > 0 ? Math.max(...posts.map(p => p.num)) + 1 : 1;
    const today = new Date().toISOString().split('T')[0];
    const newPost = { num: newNum, title: title, author: author, date: today };
    
    posts.unshift(newPost);
    localStorage.setItem('communityPosts', JSON.stringify(posts));

    renderPosts(posts);
    closeModal();
    
    document.getElementById('post-title').value = '';
    document.getElementById('post-author').value = '';
    document.getElementById('post-content').value = '';
}