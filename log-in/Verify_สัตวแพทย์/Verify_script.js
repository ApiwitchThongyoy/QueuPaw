function validateWorking() {
    let inputWorking = document.getElementById("working");
    let errorWorking = document.getElementById("workingError");
    let WorkingPattern = /^(?! )[a-zA-Z0-9ก-ฮ๑-๙ ]{4,}(?<! )$/;
    if (WorkingPattern.test(inputWorking.value) || inputWorking.value === "") {
        inputWorking.style.border = "1px solid green";
        errorWorking.innerText = "";
    } else {
        inputWorking.style.border = "2px solid red";
        errorWorking.innerText = "กรุณากรอกชื่อโรงพยาบาลหรือคลินิกให้ถูกต้อง";
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
function validateLicense() {
    let inputLicense = document.getElementById("license");
    let errorLicense = document.getElementById("licenseError");
    let licensePattern = /^[0-9]{10}$/;
    if (licensePattern.test(inputLicense.value) || inputLicense.value === "") {
        inputLicense.style.border = "1px solid green";
        errorLicense.innerText = "";
    } else {
        inputLicense.style.border = "2px solid red";
        errorLicense.innerText = "กรุณากรอกเลขที่ใบประกอบวิชาชีพให้ถูกต้อง";
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
    try {
        let working = document.getElementById("working")?.value?.trim() || "";
        let address = document.getElementById("address")?.value?.trim() || "";
        let image = document.getElementById("image")?.files?.[0] || null;
        let image2 = document.getElementById("image2")?.files?.[0] || null;
        let workingError = document.getElementById("workingError")?.innerText?.trim() || "";
        let addressError = document.getElementById("addressError")?.innerText?.trim() || "";
        let imageError = document.getElementById("imageError")?.innerText?.trim() || "";
        let image2Error = document.getElementById("image2Error")?.innerText?.trim() || "";

        console.log("working:", working);
        console.log("address:", address);
        console.log("image:", image);
        console.log("image2:", image2);
        console.log("workingError:", workingError);
        console.log("addressError:", addressError);
        console.log("imageError:", imageError);
        console.log("image2Error:", image2Error);

        if (!working || !address || !image || !image2) {
            console.log("Some fields are empty");
            alert("กรุณากรอกข้อมูลหรืออัพโหลดเอกสารให้ครบถ้วน");
            return;
        }
        
        if (workingError || addressError || imageError || image2Error) {
            console.log("Some fields have errors");
            alert("กรุณากรอกข้อมูลหรืออัพโหลดเอกสารให้ถูกต้อง");
            return;
        }

        console.log("All fields are valid");
        alert("สมัครสําเร็จ");
        window.location.href = "../../สัตวแพทย์/Main/Main.html";
    } catch (error) {
        console.error("An error occurred during registration:", error);
        alert("เกิดข้อผิดพลาดขณะสมัคร");
    }
}
