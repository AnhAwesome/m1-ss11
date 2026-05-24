let number = Number(prompt(`Input the number`));
switch (number) {
    case 0:
        no = `Không`;
        break;
    case 1:
        no = `Một`;
        break;
    case 2:
        no = `Hai`;
        break;
    case 3:
        no = `Ba`;
        break;
    case 4:
        no = `Bốn`;
        break;
    case 5:
        no = `Năm`;
        break;
    case 6:
        no = `Sáu`;
        break;
    case 7:
        no = `Bảy`;
        break;
    case 8:
        no = `Tám`;
        break;
    case 9:
        no = `Chín`;
        break;
    default:
        no = `Khó quá! Không biêt đọc.`
}
console.log(no)