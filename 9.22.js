(function() {

    document.getElementById("pp").innerHTML = "蓝色，加粗";
    // document.getElementById("picture1").src= "../nonew/images/aaa.jpg";
    var btn = document.getElementById("changepicture");
    // var img = document.getElementById("picture1");
    // console.log(img);
    btn.onclick = function() {
      /* if (img.src.match("xxx.jpg")) {
            img.src = "../nonew/images/aaa.jpg";
        } else {
            img.src = "../nonew/images/xxx.jpg";
        }*/
/*
         if (img.style.visibility=="visible") {
            img.style.visibility = "hidden";
        } else {
            img.style.visibility = "visible";
        }
    }
    var listclick = document.getElementById("list1");
    listclick.onclick = function(){
        console.log("a");
    }  */

    
}
 var picture =  document.getElementById("picture1");
     picture.src= "../nonew/images/aaa.jpg";
     picture.onmouseover= function(){
      console.log("鼠标放上");
      document.getElementById("list1").innerText="aaa";
   }
    picture.onmouseout = function(){
      console.log("鼠标离开");
      document.getElementById("list1").innerText="111";
    }
    var aa = document.getElementById("div1");
    aa.onmouseup = function(){
      aa.style.backgroundColor ="blue";
    }
    console.log(aa);
    aa.onmousedown = function(){
      aa.style.backgroundColor ="black";
    }
    console.log(aa);


    var point = document.getElementById("inputtext1");
    point.onfocus = function(){
      point.value = "111";
    }
     point.onblur = function(){
      point.value = "222";
    }
}(window))
