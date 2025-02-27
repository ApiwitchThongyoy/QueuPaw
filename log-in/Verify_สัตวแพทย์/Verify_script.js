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

function validateLicense() {
    let inputLicense = document.getElementById("license");
    let errorLicense = document.getElementById("licenseError");
    if (inputLicense.value.trim() === "") {
        inputLicense.style.border = "2px solid red";
        errorLicense.innerText = "กรุณากรอกเลขที่ใบประกอบวิชาชีพ";
    } else {
        inputLicense.style.border = "1px solid green";
        errorLicense.innerText = "";
    }
}

function validateImageInput() {
    const imageInput = document.getElementById("image");
    const imageError = document.getElementById("imageError");

    if (imageInput.files.length > 0) {
        imageError.innerText = "";
    } else {
        imageError.innerText = "กรุณาอัพโหลดสำเนาใบประกอบวิชาชีพ";
    }
}

function validateImage2Input() {
    const image2Input = document.getElementById("image2");
    const image2Error = document.getElementById("image2Error");

    if (image2Input.files.length > 0) {
        image2Error.innerText = "";
    } else {
        image2Error.innerText = "กรุณาอัพโหลดเอกสารหลักฐานยืนยันการเข้าทำงานในสถานพยาบาลให้ถูกต้อง.";
    }
}

function register() {
    try {
        // Call validation functions
        validateWorking();
        validateLicense();
        validateImageInput();
        validateImage2Input();

        // Get field values and errors
        let license = document.getElementById("license")?.value?.trim() || "";
        let working = document.getElementById("working")?.value?.trim() || "";
        let image = document.getElementById("image")?.files?.[0] || null;
        let image2 = document.getElementById("image2")?.files?.[0] || null;
        let workingError = document.getElementById("workingError")?.innerText?.trim() || "";
        let imageError = document.getElementById("imageError")?.innerText?.trim() || "";
        let image2Error = document.getElementById("image2Error")?.innerText?.trim() || "";
        let licenseError = document.getElementById("licenseError")?.innerText?.trim() || "";

        // Log field values and errors
        console.log("working:", working);
        console.log("image:", image);
        console.log("image2:", image2);
        console.log("workingError:", workingError);
        console.log("imageError:", imageError);
        console.log("image2Error:", image2Error);
        console.log("license:", license);
        console.log("licenseError:", licenseError);

        // Check if any fields are empty
        if (!working || !image || !image2 || !license) {
            console.log("Some fields are empty");
            alert("กรุณากรอกข้อมูลหรืออัพโหลดเอกสารให้ครบถ้วน");
            return;
        }

        // Check if license number is correct
        if (license === "สพ.12345") {
            console.log("License number is correct");
            alert("การสมัครสำเร็จ");
            localStorage.setItem('workingName', working); // Save working name to local storage
            window.location.href = "../../สัตวแพทย์/Main/Main.html";
            return;
        }

        // Check if any fields have errors
        if (workingError || imageError || image2Error || licenseError) {
            console.log("Some fields have errors");
            alert("กรุณากรอกข้อมูลหรืออัพโหลดเอกสารให้ถูกต้อง");
            return;
        }

    } catch (error) {
        console.error("An error occurred during registration:", error);
        alert("เกิดข้อผิดพลาดขณะสมัคร");
    }
}

