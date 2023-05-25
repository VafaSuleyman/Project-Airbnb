// Seçilmiş otel dataların localstoge-dən alınması
function loadHotelInfo() {
    let hotelInfo = localStorage.getItem("selectedHotel");
    if (hotelInfo) {
        let selectedHotel = JSON.parse(hotelInfo);
        document.getElementById("hostName").innerText = selectedHotel.host;
        document.getElementById("hotelCountry").innerText = selectedHotel.location;
        document.getElementById("hotelPrice").innerText = selectedHotel.price;
        document.getElementById("hotelPuan").innerText = selectedHotel.puan;
        document.getElementById("Image1").innerText = selectedHotel.img1;
        document.getElementById("Image2").innerText = selectedHotel.img2;
        document.getElementById("Image3").innerText = selectedHotel.img3;
        document.getElementById("Image4").innerText = selectedHotel.img4;
        document.getElementById("Image5").innerText = selectedHotel.img5;
    } else {
        console.log("Yadda saxlanılan məlumat tapılmadı.");
    }
}

window.onload = loadHotelInfo;
