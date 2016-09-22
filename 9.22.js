(function() {

    document.getElementById("pp").innerHTML = "蓝色，加粗";
    // document.getElementById("picture1").src= "../nonew/images/aaa.jpg";
    var btn = document.getElementById("changepicture");
    var img = document.getElementById("picture1");
    btn.onclick = function() {
        if (img.src.match("xxx.jpg")) {
            img.src = "../nonew/images/aaa.jpg";
        } else {
            img.src = "../nonew/images/xxx.jpg";
        }
    }






}(window))
