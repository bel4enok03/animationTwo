let colors = ["green","red","pink","blue",]
gsap.to('.box',{rotation:230, x:400,duration:3,delay:0.4,stagger:1,backgroundColor:function(i){
    return colors [i%4]
} })
