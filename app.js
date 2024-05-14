
let arr =["QR Code 1👨‍🏫", "QR Code 2👨‍💻", "QR Code 3👩‍💻",  "QR Code 4🙋‍♀️"];
i = 0;
setInterval(function(){
    if(i<arr.length){
        document.title= arr[i]; i++;  
    }else{
        i=0,
        document.title= arr[i];
    }
},1000)

let qrImage = document.querySelector(".qrImage");
let btn = document.querySelector(".btn")
let qrText = document.querySelector(".qrText");
btn.addEventListener("click", function(qrText){
    let result = qrText.value;
    qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value;
})


