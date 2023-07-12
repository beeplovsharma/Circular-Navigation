var active = 3;

var minicircles = document.querySelectorAll(".mini-circle");
var members = document.querySelectorAll(".s-sec");
var pic = document.querySelectorAll(".member-pic");

minicircles.forEach(function(val,index){
    val.addEventListener("click",function(){
        gsap.to("#circle",{
            rotate:(3-index-1)*10,
            ease : Expo.easeInOut,
            duration : 1

        })
        greyout();
        gsap.to(this,{
            opacity:1
        })

        gsap.to(members[index],{
            opacity:1
        })
        
        gsap.to(pic[index],{
            opacity:1
        })
    })
})

// For Popping Out Only That Circle Which is Active
gsap.to(minicircles[active-1],{
    opacity:1
})

function greyout(){
    gsap.to(minicircles,{
        opacity:0.08
    })

    gsap.to(members,{
        opacity:0.3
    })

    gsap.to(pic,{
        opacity:0,
    })
}

gsap.to('#circle',{
    rotate:0,
    ease: Expo.easeInOut,
    duration:2
})

// Members Opacity

gsap.to(members[active-1],{
    opacity:1
})
gsap.to(pic[active-1],{
    opacity:1
})