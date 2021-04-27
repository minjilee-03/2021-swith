// function setThumbnail(event) {
//     var reader = new FileReader();
//     reader.onload = function (event) {
//         var img = document.createElement("img");
//         img.style.width = "350px";
//         img.style.height = "350px";
//         img.style.borderRadius = "500px"
//         img.setAttribute("src", event.target.result);
//         document.querySelector("div#image_container").appendChild(img);
//     };
//     reader.readAsDataURL(event.target.files[0]);
// }

var sel_file;
$(document).ready(function () {
    $("#input_img").on("change", handleImgFileSelect);
});

function handleImgFileSelect(e) {
    var files = e.target.files;
    var filesArr = Array.prototype.slice.call(files);

    filesArr.forEach(function (f) {
        if (!f.type.match("image.*")) {
            return;
        }
        sel_file = f;

        var img = document.querySelector("#img");
        img.style.width = "350px";
        img.style.height = "350px";
        img.style.borderRadius = "500px"

        var reader = new FileReader();
        reader.onload = function (e) {
            $("#img").attr("src", e.target.result);
        }
        reader.readAsDataURL(f);
    });
}