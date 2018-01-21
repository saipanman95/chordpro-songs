function absLeft(el) {
     return (el.offsetParent)? 
     el.offsetLeft+absLeft(el.offsetParent) : el.offsetLeft;
  }

  function absTop(el) {
     return (el.offsetParent)? 
     el.offsetTop+absTop(el.offsetParent) : el.offsetTop;
  }
function showChord(obj,chord)
{
var img=document.getElementById('chordPopup');
img.src=chord;
// img is 100x130
img.style.left=(absLeft(obj)-50)+"px";
img.style.top=(absTop(obj)-140)+"px";
img.style.visibility = "visible";
}
function hideChord()
{
var img=document.getElementById('chordPopup');
img.style.visibility = "hidden";
}