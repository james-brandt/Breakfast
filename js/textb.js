var textPath = document.querySelector('#btext-path');

var textContainer =
    document.querySelector('#btext-container');

var path = document.querySelector( textPath.getAttribute('href'))

var pathLength = path.getTotalLength();
console.log(pathLength);

function updateTextPathOffset(offset){
    textPath.setAttribute('startOffset', offset);

}

updateTextPathOffset(pathLength);

function onScroll(){
    requestAnimationFrame(function(){
        var rect = textContainer.getBoundingClientRect();
        var scrollPercent = rect.y /
            window.innerHeight *.3;
        console.log(scrollPercent);
   updateTextPathOffset( scrollPercent * 5 * pathLength);
    });
}
window.addEventListener('scroll',onScroll);