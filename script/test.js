 let xhr = new XMLHttpRequest();
 xhr.open("GET", "http://randomword.setgetgo.com/");
 xhr.onload = function () {
     if (this.status == 200 && word != "") {
         console.log(2)
     }
 }
 xhr.send();
 console.log(xhr);