gsap.registerPlugin(ScrollTrigger);

let tl=gsap.timeline({duration:1});
tl.to('#ops',{y:0});
tl.to('#ops',{x:-1000,duration:1},'+=2');
tl.to('#im',{x:0,duration:1},'-=1');
tl.to('#im',{y:-1000,duration:1},'+=2');
tl.to('#ima',{y:0,duration:1},'-=1');
tl.to('#ima',{x:-1000,duration:1},'+=2');

setTimeout(()=>{
  // document.querySelector('.anime').style.transform="scaleY(0%)"
  document.querySelector('.anime').style.height="0vh"
}, 9000);

gsap.to('#main',{
  y:-5500,
  scrollTrigger:{
    trigger:".scroller",
    scrub:2,
    markers:true,
    start:"top -2%",
    end:'bottom 102%',
  }
})

gsap.to('.h11',{
  x:0,
  scrollTrigger:{
    // scroller:'#main',
    trigger:".about",
    scrub:1,
    // markers:true,
    start:"top 90%",
    end:'top 60%',
  }
})
gsap.to('.h12',{
  x:0,
  scrollTrigger:{
    // scroller:'#main',
    trigger:".about",
    scrub:1,
    // markers:true,
    start:"top 90%",
    end:'top 60%',
  }
})

gsap.from('.skill',{
  x:1000,
  rotation:180,
  stagger:0.5,
  scrollTrigger:{
    // scroller:'#main',
    trigger:"#workwell",
    scrub:2,
    // markers:true,
    start:"top 90%",
    end:'top 55%',
  }
})



// gsap.to('.slide',{
//   scrollTrigger:{
//     // scroller:'#main',
//     trigger:".end",
//     pin:'.slide',
//     // pinSpacing:false,
//     markers:true,
//     start:"top bottom",
//     end:'top 50%',
//   }
// })
// const arr=[
//   {objv:"#page2video1",objd:'#p2b1'},
//   {objv:"#page2video2",objd:'#p2b2'},
//   {objv:"#page2video3",objd:'#p2b3'},
//   {objv:"#page2video4",objd:'#p2b4'},
//   {objv:"#page2video5",objd:'#p2b5'},
//   {objv:"#page2video6",objd:'#p2b6'},
//   {objv:"#page2video7",objd:'#p2b7'},
//   {objv:"#page2video8",objd:'#p2b8'}
// ]
const arr=[ "#v1","#v2","#v3","#v4"]

arr.forEach(function(elem){
  document.querySelector(elem).addEventListener("mouseover", function (e) {
    document.querySelector(elem).play();
  })
  document.querySelector(elem).addEventListener("mouseout", function (e) {
    document.querySelector(elem).pause();
  })
})

// document.querySelector('').addEventListener("mouseover", function (e) {
//   document.querySelector(elem).play();