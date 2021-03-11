"use strict";
function setEventListener() {
    var $BtnBox = document.querySelector('.BtnBox');
    var $closeBox = document.querySelector('.closeBtn');
    if ($BtnBox == null) {
        return;
    }
    $BtnBox.addEventListener('click', function (event) {
        var value = event.target.dataset.value;
        handleBtnClick(value);
    });
    $closeBox === null || $closeBox === void 0 ? void 0 : $closeBox.addEventListener('click', function () {
        handleModalClose();
    });
}
function handleModalClose() {
    var $modalbg = document.querySelector('.Modalbg').style.display = 'none';
    var $modal = document.querySelector('.Modal').style.display = 'none';
    var $media = document.querySelector('.media').style.display = 'none';
    var $text = document.querySelector('.text').style.display = 'none';
}
function handleBtnClick(value) {
    console.log(value);
    if (value == null) {
        return;
    }
    var $modalbg = document.querySelector('.Modalbg');
    var $modal = document.querySelector('.Modal');
    var $media = document.querySelector('.media');
    var $text = document.querySelector('.text');
    if ($modalbg == null || $modal == null) {
        return;
    }
    $modalbg.style.display = "block";
    $modal.style.display = "block";
    if (value === 'img' || value === 'video') {
        $media.style.display = "block";
    }
    else {
        $text.style.display = "block";
    }
}
(function main() {
    setEventListener();
})();
