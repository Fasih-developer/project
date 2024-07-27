document.querySelectorAll('.box').forEach(function(boxs){
    var rotate = 0;
    var diffrot = 0;
boxs.addEventListener('mouseleave', function(){
        gsap.to(boxs.querySelector('img') , {
            opacity:0,
            ease: Power3,
            duration: .5,
        });
    })
boxs.addEventListener('mousemove', function(dets){
    var diff = dets.clientY - boxs.getBoundingClientRect().top;
    diffrot = dets.clientX - rotate;
    rotate = dets.clientX;
    gsap.to(boxs.querySelector('img') , {
        opacity:1,
        ease: Power3,
        top :diff,
        left :dets.clientX,
        rotate :gsap.utils.clamp(-20, 20, diffrot*0.4),
    });
})
})