function setEventListener(){
    const $BtnBox=document.querySelector('.BtnBox');
    const $closeBox=document.querySelector('.closeBtn');
    if($BtnBox==null){
        return;
    }
    $BtnBox.addEventListener('click',(event)=>{
        const value=event.target.dataset.value;
        handleBtnClick(value);
    })
    $closeBox?.addEventListener('click',()=>{
        handleModalClose();
    })
}
function handleModalClose(){
    const $modalbg=document.querySelector('.Modalbg').style.display='none';
    const $modal=document.querySelector('.Modal').style.display='none';
    const $media=document.querySelector('.media').style.display='none';
    const $text=document.querySelector('.text').style.display='none';
}
function handleBtnClick(value:string){
    console.log(value);
    if(value==null){
        return;
    }

    const $modalbg=document.querySelector('.Modalbg');
    const $modal=document.querySelector('.Modal');
    const $media=document.querySelector('.media');
    const $text=document.querySelector('.text');
    if($modalbg==null || $modal==null){
        return;
    }
    $modalbg.style.display="block";
    $modal.style.display="block";

    if(value==='img' || value==='video'){
        $media.style.display="block";
    }
    else{
        $text.style.display="block";
    }
}
(function main(){
    setEventListener();
})();