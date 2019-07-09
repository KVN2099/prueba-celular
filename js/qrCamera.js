const scanner = new Instascan.Scanner(
    {
        video: document.getElementById('webcam')
    }
);
scanner.addListener('scan', content => {  //  contenido del qr (objeto JSON)
    console.log(content);
});
Instascan.Camera.getCameras().then(cameras =>
{
    if(cameras.length > 0){
        scanner.start(cameras[0]);
    } else {
        console.error("Please enable Camera!");
    }
});
