function setThumbnail(event) { 
    var reader = new FileReader();
    reader.onload = function(event) { 
        var img = document.createElement("img");
        img.style.width = "350px";
        img.style.height = "350px";
        img.style.borderRadius = "500px"
        img.setAttribute("src", event.target.result);
        document.querySelector("div#image_container").appendChild(img);
    };
    reader.readAsDataURL(event.target.files[0]);
}