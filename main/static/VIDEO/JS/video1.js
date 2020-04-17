const MOVE = "move";
const firstVideo = document.querySelector(".videoItem");
const lastVideo = document.querySelector(".last");
const nextButton = document.querySelector("#nextButton");
const beforButton = document.querySelector("#beforeButton");
        
function next(){
    const currentVideo = document.querySelector(`.${MOVE}`);
    if (currentVideo){
        currentVideo.classList.remove(MOVE);
        const nextVideo = currentVideo.nextElementSibling;
        if(nextVideo){
            nextVideo.classList.add(MOVE);
        }else{
            alert("다음 동영상을 기대해 주세요");
            lastVideo.classList.add(MOVE);
        }
    }else{
        firstVideo.classList.add(MOVE);
    }
}
function before(){
    const currentVideo = document.querySelector(`.${MOVE}`);
    if (currentVideo){
        const beforeVideo = currentVideo.previousElementSibling;
        currentVideo.classList.remove(MOVE);
        if(beforeVideo){
            if(beforeVideo.className == "videoItem"){
                beforeVideo.classList.add(MOVE);
            }else{
                alert("이전 비디오가 없어요");
                firstVideo.classList.add(MOVE);
            }
        }else{
            alert("이전 비디오가 없어요");
            firstVideo.classList.add(MOVE);
        }
    }else{
        firstVideo.classList.add(MOVE);
    }
}
nextButton.addEventListener('click', next);
beforButton.addEventListener('click', before);