var img = document.getElementById("image")
var btn_on = document.getElementById("btn_1")
var btn_off = document.getElementById("btn_2")
var main = document.getElementById("main")


btn_on.addEventListener("click",function() {
   
   img.src =   "https://media3.giphy.com/media/zFYBSCgt56lQSQyOU8/giphy.webp?cid=ecf05e47anv3fe2ebqsukmzgmk0be3ylyh5ehbsa4np7dx96&ep=v1_gifs_search&rid=giphy.webp&ct=g" 

  main.style.backgroundColor = "black"
  

});


btn_off.addEventListener("click", function(){
    
    img.src  = "https://media.istockphoto.com/id/185206958/photo/light-bulb.webp?b=1&s=170667a&w=0&k=20&c=Xg0kt3V3GdG2KvZL2u78HSemMSShpYgugHS4QfiytpU="
    
    main.style.backgroundColor = "white"
    

})