while (true) {

    let a = prompt(`Mời bạn nhập vào số a`);
    if (a === null) {
        alert("Thao tác đã được hủy bỏ!");
        break;
    }
    let b = prompt(`Mời bạn nhập vào số b`);
    if (b === null) {
        alert("Thao tác đã được hủy bỏ!");
        break;
    }
    let operation = prompt(`Mời bạn nhập vào các phép tính (+, -, *, /)`);
    if (operation === null) {
        alert("Thao tác đã được hủy bỏ!");
        break;
    }
    
    let numberValid = isNaN(a) || isNaN(b) || a.trim() === "" || b.trim() === "";
    let opValid = operation !== "+" && operation !== "-" && operation !== "*" && operation !== "/";
    if (numberValid || opValid) {
        alert("Dữ liệu nhập vào hoặc phép tính không hợp lệ");
        continue;
    }

    let numA = Number(a);
    let numB = Number(b);
    let result;
    switch(operation){
        case "+": result = numA + numB; break;
        case "-": result = numA - numB; break;
        case "*": result = numA * numB; break;
        case "/":
            if (numB === 0){
                alert(`Không chia được cho 0`);
                break;
            } else {
                result = numA / numB;
            } break;
    }
    console.log(`Kết quả của phép tính trên: ${a} ${operation} ${b} = ${result}`)
    break
}