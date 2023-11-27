export function menu() {
    const headerToggle = document.getElementById("headerToggle");
    const headerNav = document.querySelector(".header__nav");
    // 모바일 헤더토글 버튼요소를 가리킴
    // 네비게이션 메뉴요소

    if(headerToggle){
        headerToggle.addEventListener("click", () => {
            headerNav.classList.toggle("show");
    
            headerToggle.getAttribute("aria-expanded") === "true" 
            ? headerToggle.setAttribute("aria-expanded", "false") 
            : headerToggle.setAttribute("aria-expanded", "true");
        });
    }
}

//헤더토글이 존재하는 경우에만 이후 코드블록 실행(오류방지)
    //addEventListener=모바일 토글버튼 클릭시 동작2
    //headerNav.classList.toggle("show") = show를 토글링 /있으면제거 없으면 추가