let weight = Number(prompt(`Nhập cân nặng của bạn (kg)`));
let height = Number(prompt(`Nhập chiều cao của bạn (m)`));
let BMI = weight / height ** 2;
let type = prompt(`Bạn muốn phân loại theo WHO hay IDI & WPRO`);
if (BMI < 18.5) {
    alert(`Cân nặng thấp (gầy)`)
} else {
    if (type.toLowerCase() === `who`) {
        /* test
        if (BMI >= 18.5 && BMI < 25){
             alert(`Bình thường`)
         } else if (BMI >= 25 && BMI < 26){
             alert(`Thừa cân`)
         } else if (BMI >= 26 && BMI < 30){
             alert(`Tiền béo phì`)
         } else if (BMI >= 30 && BMI < 35){
             alert(`Béo phì độ I`)
         } else if (BMI >= 35 && BMI < 40){
             alert(`Béo phì độ II`)
         } else {
             alert(`Béo phì độ III`)
         } */
        switch (true) {
            case BMI >= 18.5 && BMI < 25:
                alert(`Bình thường`);
                break;
            case BMI >= 25 && BMI < 26:
                alert(`Thừa cân`);
                break;
            case BMI >= 26 && BMI < 30:
                alert(`Tiền béo phì`)
                break;
            case BMI >= 30 && BMI < 35:
                alert(`Béo phì độ I`);
                break;
            case BMI >= 35 && BMI < 40:
                alert(`Béo phì độ II`);
                break;
            case BMI >= 40:
                alert(`Béo phì độ III`)
        }
    } else if (type.toLowerCase() === `idi & wpro` || type.toLowerCase() === `idi` || type.toLowerCase() === `wpro`) {
        switch (true) {
            case BMI >= 18.5 && BMI < 23:
                alert(`Bình thường`);
                break;
            case BMI >= 23 && BMI < 24:
                alert(`Thừa cân`);
                break;
            case BMI >= 24 && BMI < 25:
                alert(`Tiền béo phì`)
                break;
            case BMI >= 25 && BMI < 30:
                alert(`Béo phì độ I`);
                break;
            case BMI >= 30 && BMI < 40:
                alert(`Béo phì độ II`);
                break;
            case BMI >= 40:
                alert(`Béo phì độ III`)
        }
    }
}