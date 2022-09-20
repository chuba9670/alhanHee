
var i = 0;
// var heeUrt = document.querySelector(".hee");

document.querySelector(".hee__btn").addEventListener("click", function () {
      
        var heeUrt = document.getElementById("hee__urt").value;
        

        for(i=0; i < heeUrt; i++){
            const img = document.createElement("img");
            img.src = "hee.jpg";
            document.body.appendChild(img);
        }

    });
