(function() {

    // document.getElementById("pp").innerHTML = "蓝色，加粗";
    // document.getElementById("picture1").src= "../nonew/images/aaa.jpg";
    // var btn = document.getElementById("changepicture");
    // var img = document.getElementById("picture1");
    // console.log(img);
    // btn.onclick = function() {
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

/*    
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
    console.log(aa);*/

/*
    var point = document.getElementById("inputtext1");
    point.onfocus = function(){
      point.value = "111";
    }
     point.onblur = function(){
      point.value = "222";
    }*/
/*var textinput1 = document.getElementById("inputtext1");
textinput1.onfocus = function (){
  textinput1.style.color ="yellow";
}
textinput1.onblur = function (){
  textinput1.style.color ="blue";
  textinput1.style.backgroundColor ="green";
}
var textinput2 = document.getElementById("inputtext2");
textinput2.onfocus = function (){
  textinput2.style.color = "yellow";
}
textinput2.onblur = function (){
  textinput2.style.color ="blue";
  textinput2.style.backgroundColor ="green";
}
var textinput3 = document.getElementById("inputtext3");
textinput3.onfocus = function (){
  textinput3.style.color = "yellow";
}
textinput3.onblur = function (){
  textinput3.style.color ="blue";
  textinput3.style.backgroundColor ="green";

}
var btn11= document.getElementById("btn1");
btn11.onclick = function(){
  alert("姓名："+textinput1.value+"   "+"性别："+textinput2.value+"   "+"年龄"+textinput3.value);
}
var btn22 = document.getElementById("btn2");
btn22.onclick = function(){
  textinput1.value="";
  textinput2.value="";
  textinput3.value="";
  textinput1.style.backgroundColor="white";
  textinput2.style.backgroundColor="white";
  textinput3.style.backgroundColor="white";

}*/
/*var btn = document.getElementById("btn3");
 
btn.addEventListener("click",function(){
  console.log(123);
});
btn.addEventListener("click",function(){
  console.log(11111);
});
var d1 = document.getElementById("div1");
d1.addEventListener("click", function() {
            console.log(66666);
});
var btn = document.getElementById("btn3");
btn.onclick = function(){
  console.log(789);

}*/

/*document.getElementById("p1").addEventListener("click",function(){
  alert("你点击了p1");
},false);
document.getElementById("div1").addEventListener("click",function(){
  alert("你点击了div1");
},false);
document.getElementById("p2").addEventListener("click",function(){
  alert("你点击了p2");
},true);
document.getElementById("div2").addEventListener("click",function(){
  alert("你点击了div2");
},true);*/

/*var btn11 = document.getElementById("btn1");
function myFunction(){
  console.log(123);
}
btn11.addEventListener("click",function(){
   document.getElementById("div1").addEventListener("mousemove",myFunction);
});
var  btn22 = document.getElementById("btn2");
btn22.addEventListener("click",function(){
   document.getElementById("div1").removeEventListener("mousemove",myFunction);
 });*/
var para = document.createElement("p");
var node = document.createTextNode("这是一个段落");
para.appendChild(node);
var div11 = document.getElementById("div1");
div11.appendChild(para);
var parent = document.getElementById("div1");
var child = document.getElementById("p1");
parent.removeChild(child);

}(window))
