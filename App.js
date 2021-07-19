let appBtn=document.getElementById('app-btn');
let showcontent=document.querySelector('.show-content');
let tl=gsap.timeline()
gsap.registerPlugin(ScrollTrigger);
isShow=true
let showitem=()=>{
    tl.to((".show-content"),{
y:0,
duration:.5,
ease: "power2.out"
    })
appBtn.classList.replace("uil-apps","uil-times-circle")
isShow=false;
}
let hideitem=()=>{
    tl.to((".show-content"),{
        y:"20rem",
        duration:.5,
        ease: "power2.out"
            })
            appBtn.classList.replace("uil-times-circle","uil-apps")
            isShow=true
}
appBtn.addEventListener('click',()=>{
 if(isShow){
     showitem()
 }
 else{
     hideitem()
 }
})

// Drop down start..................................................................................
let fdropdown=document.getElementById('fbtn');
let sdropdown=document.getElementById('secbtn');
let tdropdown=document.getElementById('thbtn');
fdropdown.addEventListener('click',()=>{
    if(fdropdown.classList.contains("fa-chevron-down")){
        tl.to(".sbox1",{
            duration:0.5,
            ease: "power2.out",
            height:"24rem",
        })
        fdropdown.classList.replace('fa-chevron-down','fa-chevron-up')
    }
    else{
tl.to(".sbox1",{
            duration:0.5,
            ease: "power2.out",
            height:"5rem",
        })
        fdropdown.classList.replace('fa-chevron-up','fa-chevron-down')
    }
})
sdropdown.addEventListener('click',()=>{
    if(sdropdown.classList.contains("fa-chevron-down")){
        tl.to(".sbox2",{
           ease: "power2.out",
            height:"24rem",
        })
        sdropdown.classList.replace('fa-chevron-down','fa-chevron-up')
    }
    else{
        tl.to(".sbox2",{
            ease: "power2.out",
            height:"5rem",
        })
        sdropdown.classList.replace('fa-chevron-up','fa-chevron-down')
    }
})
tdropdown.addEventListener('click',()=>{
    if(tdropdown.classList.contains("fa-chevron-down")){
        tl.to(".sbox3",{
            ease: "power2.out",
            height:"24rem",
        })
        tdropdown.classList.replace('fa-chevron-down','fa-chevron-up')
    }
    else{
        tl.to(".sbox3",{
            ease: "power2.out",
            height:"5rem",
        })
        tdropdown.classList.replace('fa-chevron-up','fa-chevron-down')
    }
})


// Pin arow Button ..........................................
gsap.from("#arrowup",{
  scrollTrigger:{
 trigger:"#arrowup",
  start:"top center",
   end:"+=1000",
  pinSpacing:false,
     scrub:1,
       pin:true,
     }
})


// Overlay Starting ............

let viewmore1=document.getElementById('viewmore1');
let viewmore2=document.getElementById('viewmore2');
let viewmore3=document.getElementById('viewmore3');
let overnone = document.getElementById('overnone');
let skillheding = document.getElementById('skill-heading');
let overlay = document.querySelector(".overlay");



viewmore1.addEventListener("click" ,()=> {
    overlay.style.display = "flex";
    skillheding.innerHTML= "UI/UX <br> Designer";

});

viewmore2.addEventListener("click" ,()=> {
    overlay.style.display = "flex";
    skillheding.innerHTML= "FrontEnd <br> Developer";

});


viewmore3.addEventListener("click" ,()=> {
    alert("woieo");
    overlay.style.display = "flex";
    skillheding.innerHTML= "Branding <br> Designer";
    

});


overnone.addEventListener("click", ()=>{
    overlay.style.display = "none";
})


//Slider Start.................
let previous =  document.getElementById("previous");
let next =  document.getElementById("next");
let images = document.getElementById("img");
let sliderTitle =  document.getElementById("sliderTitle");
let dot1= document.getElementById("dot1");
let dot2 = document.getElementById("dot2");
let dot3 = document.getElementById("dot3");
let data = [
    {
        image: "./image/slider1.jpg",
        h1Text: "Modern Website",
        dotcolor1: "#6C55E0",
        dotcolor2: "rgba(0,0,0, 0.473)",
        dotcolor3: "rgba(0,0,0, 0.473)",


    },
    {
        image: "./image/slider2.jpg",
        h1Text: "Brand Design",    
        dotcolor1: "rgba(0,0,0, 0.473)",
        dotcolor2: "#6C55E0",        
        dotcolor3: "rgba(0,0,0, 0.473)",
        

    },
    {
        image: "./image/slider3.jpeg",
        h1Text: "Online store",
        dotcolor1: "rgba(0,0,0, 0.473)",      
        dotcolor2: "rgba(0,0,0, 0.473)",
        dotcolor3: "#6C55E0",
        
    }


]

function changeData(data){
    images.src = data.image;   
    sliderTitle.innerHTML = data.h1Text;
    dot1.style.backgroundColor= data.dotcolor1
    dot2.style.backgroundColor=data.dotcolor2
    dot3.style.backgroundColor=data.dotcolor3

}

let index = 0;
next.addEventListener("click", ()=>{
    gsap.from(".slid-but", { 
        x:"-100", duration: .4, ease: "power1.out", 
    })
    index=(index+1)%data.length;
    changeData(data[index]);
})

previous.addEventListener("click", ()=>{
    gsap.from(".slid-but", { 
        x:"100", duration: .4, ease: "power1.out", 
    })
    index=(index-1  + data.length)%data.length;
    changeData(data[index]);
})


// ......................Form validation ........................
let Name = document.getElementById("name");
let Email = document.getElementById("email");
let project = document.getElementById("project");
let message = document.getElementById("message");
let messageBtn = document.getElementById("btn");

messageBtn.addEventListener("click", ()=> {
  if(Name.value ==="" || Email.value === "" || project.value === "" || message.value ===""){
  alert("All field must be filled");

  }else if(Email.value.indexOf("@")<3){
  alert("Please wirte a valid email");
  }else{
  alert(Name.value + " Thanks for sending");
  }
})

// -----------Dark mode------------

let moon = document.getElementById("moon");
let header =  document.querySelector(".header");
let darkmode = true;
let overLaycontent=document.querySelector(".overlay-content");
let overLaydata=document.querySelector(".overlay");
let footer = document.getElementById("footer");
let navdata = document.getElementById("ul-box").children

moon.addEventListener("click", function(){
  
  if(darkmode){
   
      moon.classList.replace("fa-moon", "fa-sun")
      darkmode = false;
      document.body.style.backgroundColor= "#1A1525"
       
      document.body.style.color="#FAFAFD";
      header.style.backgroundColor ="#1A1525";

      
      navdata[0].style.color = "#FAFAFD";
      navdata[1].style.color = "#FAFAFD";
      navdata[2].style.color = "#FAFAFD";
      navdata[3].style.color = "#FAFAFD";
      navdata[4].style.color = "#FAFAFD";
      navdata[5].style.color = "#FAFAFD";

    //   overlay
    overLaydata.style.backgroundColor="#1a15259d";
    overLaycontent.style.backgroundColor="#201d34";

     footer.style.backgroundColor="#0e0e1d";

  }
  else{
      moon.classList.replace("fa-sun", "fa-moon")
      darkmode = true
      document.body.style.backgroundColor= "#FAFAFD"     
      document.body.style.color="#1A1525";
      header.style.backgroundColor ="#FAFAFD";
      navdata[0].style.color = "#25242cd5";
      navdata[1].style.color = "#25242cd5";
      navdata[2].style.color = "#25242cd5";
      navdata[3].style.color = "#25242cd5";
      navdata[4].style.color = "#25242cd5";
      navdata[5].style.color = "#25242cd5";

      overLaydata.style.backgroundColor="rgba(0, 0, 0, 0.719)";
      overLaycontent.style.backgroundColor="#FAFAFD";
     
      footer.style.backgroundColor="#6C55E0";
  }
})


//Mobile Nav bar    
let mobbar=document.querySelector(".bar-content");
let showdata=document.querySelector(".show-content")
let mobilemoon=document.getElementById("mobile-moon")
let mhome=document.getElementById("box1").children
let mabout=document.getElementById("box2").children
let mskill=document.getElementById("box3").children
let mserv=document.getElementById("box4").children
let mport=document.getElementById("box5").children
let mcont=document.getElementById("box6").children
mobilemoon.addEventListener("click",function(){
   alert("oinfie0");
    if(darkmode){
        mobilemoon.classList.replace("fa-moon","fa-sun")
        darkmode=false
        document.body.style.backgroundColor="#1a1525"
        mobbar.style.backgroundColor="#1a1525";
        showdata.style.backgroundColor="#0e0e1d";
        mobbar.style.color="#FAFAFD";
        mhome[0].style.color="#FAFAFD";
        mhome[1].style.color="#FAFAFD";
        mabout[0].style.color="#FAFAFD";
        mabout[1].style.color="#FAFAFD";
        mskill[0].style.color="#FAFAFD";
        mskill[1].style.color="#FAFAFD";
        mserv[0].style.color="#FAFAFD";
        mserv[1].style.color="#FAFAFD";
        mport[0].style.color="#FAFAFD";
        mport[1].style.color="#FAFAFD";
        mcont[0].style.color="#FAFAFD";
        mcont[1].style.color="#FAFAFD";
        document.body.style.color="#FAFAFD";
        overLaydata.style.backgroundColor="#1a15259d";
        footer.style.backgroundColor="#0e0e1d";
        overLaycontent.style.backgroundColor="#201d34";
        pcontent.style.color="#FAFAFD";
}
    else{
        mobilemoon.classList.replace("fa-sun","fa-moon")
        darkmode=true
        document.body.style.backgroundColor="#FAFAFD"
        mobbar.style.backgroundColor="#FAFAFD";
        mobbar.style.color="black";
        document.body.style.color="black";
        footer.style.backgroundColor="#6C55E0";
        overLaydata.style.backgroundColor="rgba(0, 0, 0, 0.719)";
        overLaycontent.style.backgroundColor="#FAFAFD";
        pcontent.style.color="rgba(0, 0, 0, 0.651)";
        mhome[0].style.color="#25242cd5";
        mhome[1].style.color="#25242cd5";
        mabout[0].style.color="#25242cd5";
        mabout[1].style.color="#25242cd5";
        mskill[0].style.color="#25242cd5";
        mskill[1].style.color="#25242cd5";
        mserv[0].style.color="#25242cd5";
        mserv[1].style.color="#25242cd5";
        mport[0].style.color="#25242cd5";
        mport[1].style.color="#25242cd5";
        mcont[0].style.color="#25242cd5";
        mcont[1].style.color="#25242cd5";
        mobbar.style.backgroundColor="#FAFAFD";
        showdata.style.backgroundColor="#FAFAFD";
        mobbar.style.color="black";
    }
})

