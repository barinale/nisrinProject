import * as ProductsJs from './dataJson.js'
const Gallery = document.querySelector("#Gallery")

ProductsJs.default.forEach((item, i) => {
  let div = document.createElement('div');
  let image = document.createElement('img');
  image.src=item.Info.imgUrl;
  div.appendChild(image);

  div.setAttribute("class","item")
  Gallery.appendChild(div)
  div.addEventListener("click",()=>{
    GetElamant(i);
  }
);
})

const divGallery = document.createElement("div");
const divImageInsideDivGallery = document.createElement("div");
const divArrow = document.createElement("div")
const ArrowLeft =document.createElement("div")
const AroowRight =document.createElement("div")
const imageLeft = document.createElement("img")
const imageRight = document.createElement("img")
imageLeft.src="../images/arrow.png"
imageRight.src="../images/arrow.png"
const divImage = document.createElement("div");
const image = document.createElement("img");
let Drop = false;
let position = 0;
divImage.appendChild(image)
divImageInsideDivGallery.appendChild(divImage)
divImage.setAttribute("class","ImageSection")
divArrow.setAttribute("class","arrows")
divImageInsideDivGallery.setAttribute("class","divImageInsideDivGallery");

divGallery.appendChild(divImageInsideDivGallery);
divImageInsideDivGallery.appendChild(divArrow)
divArrow.appendChild(ArrowLeft)
divArrow.appendChild(AroowRight)
ArrowLeft.setAttribute("class","ArrowLeft")
AroowRight.setAttribute("class","ArrowRight")
ArrowLeft.appendChild(imageLeft)
AroowRight.appendChild(imageRight)

divGallery.setAttribute("class","divGallery");

function GetElamant(i){
  if(!Drop){

    animation(Gallery.children[i].getBoundingClientRect())
    Gallery.appendChild(divGallery)
    image.src=ProductsJs.default[i].Info.imgUrl;
    position =i;

     setTimeout(()=>{
       Drop=true;

     }, 500);
  }

}
function animation(parent){

  divGallery.animate([
    // keyframes
    {
      opacity:"0",left:parent.left+"px",
    top:parent.top+"px" ,
    width:parent.right-parent.left+"px",
    height:parent.bottom-parent.top+"px",
  transform: "translate(0%,0%)"},

    {   left:"50%",
        top:"50%",
        width:'80vw',
        height:'80vh',
        transform: "translate(-50%,-50%)",
        opacity:"1"
      }
  ], {
    // timing options
    duration: 1000,
    fill : "forwards"
  });


}
ArrowLeft.addEventListener("click",()=>{
  moveLeft();
})
AroowRight.addEventListener("click",()=>{
  moveRight();
})
function moveLeft(){
  if(position==0)
    {
    position= ProductsJs.default.length-1;
    }
    else
      position --;
image.src= ProductsJs.default[position].Info.imgUrl;
}
function moveRight(){
  if(position ==ProductsJs.default.length-1){
    position =0;
  }else
  position ++;
  image.src= ProductsJs.default[position].Info.imgUrl;

}
Gallery.addEventListener("click",(e)=>{
  let dropStyle =false;
  let parentClick =e.target;
  let attribute = e.target.getAttribute("class")
while(parentClick.parentNode&&parentClick.getAttribute("id")!="Gallery"&&!dropStyle){
  // console.log(parentClick)
  // console.log(attribute)
  if(attribute =="divGallery")
    dropStyle=true
  parentClick =parentClick.parentNode;
  attribute = parentClick.getAttribute("class");

}
if(!dropStyle && Drop)
{
        Drop=false;

        divGallery.remove()
}
})
