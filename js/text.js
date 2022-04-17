var textPath = document.querySelector('#text-path');

var textContainer =
    document.querySelector('#text-container');

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
            window.innerHeight *.35;
        console.log(scrollPercent);
   updateTextPathOffset( scrollPercent * 5 * pathLength);
    });
}
window.addEventListener('scroll',onScroll);