(function() {

    document.getElementById("pp").innerHTML = "蓝色，加粗";
    // document.getElementById("picture1").src= "../nonew/images/aaa.jpg";
    var btn = document.getElementById("changepicture");
    var img = document.getElementById("picture1");
    console.log(img);
    btn.onclick = function() {
      /* if (img.src.match("xxx.jpg")) {
            img.src = "../nonew/images/aaa.jpg";
        } else {
            img.src = "../nonew/images/xxx.jpg";
        }*/

         if (img.style.visibility=="visible") {
            img.style.visibility = "hidden";
        } else {
            img.style.visibility = "visible";
        }
    }
    var listclick = document.getElementById("list1");
    listclick.onclick = function(){
        console.log("a");
    }





}(window))
