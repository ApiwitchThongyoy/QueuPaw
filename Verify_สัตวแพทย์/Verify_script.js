function validateName() {
    let inputName = document.getElementById("name");
    let errorName = document.getElementById("nameError");
    let namePattern = /^(?! )[a-zA-Z0-9ก-ฮ๑-๙ ]{4,}(?<! )$/;
    if (namePattern.test(inputName.value) || inputName.value === "") {
        inputName.style.border = "1px solid green";
        errorName.innerText = "";
    } else {
        inputName.style.border = "2px solid red";
        errorName.innerText = "กรุณากรอกชื่อโรงพยาบาลหรือคลินิกให้ถูกต้อง";
    }
} 
function validateAddress() {
    let inputAddress = document.getElementById("address");
    let errorAddress = document.getElementById("addressError");
    let addressPattern = /^(?! )[a-zA-Z0-9ก-ฮ๑-๙ ]{4,}(?<! )$/;
    if (addressPattern.test(inputAddress.value) || inputAddress.value === "") {
        inputAddress.style.border = "1px solid green";
        errorAddress.innerText = "";
    } else {
        inputAddress.style.border = "2px solid red";
        errorAddress.innerText = "กรุณากรอกที่อยู่โรงพยาบาลหรือคลินิกให้ถูกต้อง";
    }
}
function validateImageInput() {
    const imageInput = document.getElementById("image");
    const imageError = document.getElementById("imageError");

    if (imageInput.files.length > 0) {
        imageInput.style.border = "1px solid green";
        imageError.innerText = "";
    } else {
        imageInput.style.border = "2px solid red";
        imageError.innerText = "กรุณาอัพโหลดเอกสารสำเนาใบประกอบวิชาชีพให้ถูกต้อง.";
    }
}
function validateImage2Input() {
    const image2Input = document.getElementById("image2");
    const image2Error = document.getElementById("image2Error");

    if (image2Input.files.length > 0) {
        image2Input.style.border = "1px solid green";
        image2Error.innerText = "";
    } else {
        image2Input.style.border = "2px solid red";
        image2Error.innerText = "กรุณาอัพโหลดเอกสารหลักฐานยืนยันการเข้าทำงานในสถานพยาบาลให้ถูกต้อง.";
    }
}
function register() {
    let name = document.getElementById("name")?.value?.trim();
    let address = document.getElementById("address")?.value?.trim();
    let image = document.getElementById("image")?.files?.[0];
    let image2 = document.getElementById("image2")?.files?.[0];
    let nameError = document.getElementById("nameError")?.innerText?.trim();
    let addressError = document.getElementById("addressError")?.innerText?.trim();
    let imageError = document.getElementById("imageError")?.innerText?.trim();
    let image2Error = document.getElementById("image2Error")?.innerText?.trim();

    console.log("name:", name);
    console.log("address:", address);
    console.log("image:", image);
    console.log("image2:", image2);
    console.log("nameError:", nameError);
    console.log("addressError:", addressError);
    console.log("imageError:", imageError);
    console.log("image2Error:", image2Error);

    if (!name || !address || !image || !image2) {
        console.log("Some fields are empty");
        alert("กรุณากรอกข้อมูลหรืออัพโหลดเอกสารให้ครบถ้วน");
    }
    else if (nameError || addressError || imageError || image2Error) {
        console.log("Some fields have errors");
        alert("กรุณากรอกข้อมูลหรืออัพโหลดเอกสารให้ถูกต้อง");
    } 
    else {
        console.log("All fields are valid");
        alert("สมัครสําเร็จ");
        try {
            window.location.href = "../Main_สัตวแพทย์/Main.html";
        } catch (error) {
            console.error("Error while redirecting to main page:", error);
        }
    }
}
