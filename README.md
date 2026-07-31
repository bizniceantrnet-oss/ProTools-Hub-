// مكتبة QR من الإنترنت

let qrImage=document.getElementById("qr");


function createQR(data){

let color=document.getElementById("color").value;


let url=
"https://api.qrserver.com/v1/create-qr-code/?size=300x300&color="
+
color.replace("#","")
+
"&data="
+
encodeURIComponent(data);



qrImage.src=url;



document.getElementById("download").href=url;


}



// نص أو رابط

function generateQR(){

let text=document.getElementById("text").value;


if(text==""){

alert("اكتب نص أو رابط");

return;

}


createQR(text);

}




// WiFi QR

function wifiQR(){


let name=document.getElementById("wifiName").value;

let pass=document.getElementById("wifiPass").value;


let wifi=
`WIFI:T:WPA;S:${name};P:${pass};;`;


createQR(wifi);


}




// WhatsApp QR

function whatsappQR(){


let phone=document.getElementById("phone").value;

let msg=document.getElementById("message").value;


let link=
"https://wa.me/"
+
phone
+
"?text="
+
encodeURIComponent(msg);



createQR(link);


}
