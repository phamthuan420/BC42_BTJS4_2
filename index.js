/********* BÀI TẬP 1 : Xuất 3 số theo thứ tự tăng dần
*input: 3 số nguyên num1, num2, num3
*Process: (pseudo code)
    1. input (user interface) UI
    2. kiểm tra a có lớn hơn num2 và num3, sau đó kiêm tra num2 có lớn a => sắp xếp(if else)
    3. kiểm tra b có lớn hơn num1 và num3, sau đó kiêm tra num1 có lớn b => sắp xếp(if else)
    4. kiểm tra c  có lớn hơn num2 và num1, sau đó kiêm tra num2 có lớn c => sắp xếp(if else)
*Output: 3 số theo thứ tự tăng dần.
*/
document.getElementById("sapXep").onclick = function () {
    let a = +document.getElementById("a").value;
    let b = +document.getElementById("b").value;
    let c = +document.getElementById("c").value;
    let kq1 = document.getElementById("kq1");

    if (a > b && a > c) {
        if (b > c) {
            kq1.value = c + "," + b + "," + a;
        }
        else {
            kq1.value = b + "," + c + "," + a;
        }
    } else if (b > c && b > a) {
        if (a > c) {
            kq1.value = c + "," + a + "," + b;
        }
        else {
        kq1.value = c + "," + a + "," + b;
        }
    } else if (c > a && c > b) {
        if (a > b) {
            kq1.value = b + "," + a + "," + c;
        }
        else {
            kq1.value = a + "," + b + "," + c;
        }
    }
}

/********* BÀI TẬP 2 : Chương trình "Chào hỏi"
*input: Chọn thành viên (thẻ option)
*Process: (pseudo code)
    1. input (user interface) UI
    2. tạo các thành viên cần gửi lời chào bằng thẻ option
    3. dùng switch case để gán lời chào cho các thành viên được chọn.
*Output: xuất ra lời chào :"Xin chào ... !"
*/
document.getElementById("hi").onclick = function () {
    let sayHi = document.getElementById("sayHi").value;
    let result2 = document.getElementById("resultBai2");
    switch (sayHi) {
        case "B":
            result2.value = "Hi !! Bố!";
            break;
        case "M":
            result2.value = "Hi !! Mẹ!";
            break;
        case "A":
            result2.value = "Hi !! Anh trai!";
            break;
        case "E":
            result2.value = "Hi !! Em gái!";
            break;
        default:
            result2.value = "Chào Bạn!!"
            break;
    }
}

/********* BÀI TẬP 3 : Đếm số chẳn lẻ
*input: nhập 3 số nguyên
*Process: (pseudo code)
    1. input (user interface) UI
    2. khai báo các biến
    3. kiểm tra số đó có chia hết cho 2 không? nếu chia hết cho 2 thì là số chẳn, ngược lại là số lẽ.
    4. tính có bao nhiêu số là số chẳn , số lẻ đã được lọc ra.
*Output: xuất có bao nhiêu số chẳn, báo nhiêu sô lẻ
*/
document.getElementById("countNum").onclick = function () {
    let so1 = +document.getElementById("so1").value;
    let so2 = +document.getElementById("so2").value;
    let so3 = +document.getElementById("so3").value;
    let soChan = 0;
    let soLe = 0;
    let result3 = document.getElementById("resultBai3");
    if (so1 % 2 === 0) {
        soChan++;
    } else {
        soLe++;
    }
    if (so2 % 2 === 0) {
        soChan++;
    } else {
        soLe++;
    }
    if (so3 % 2 === 0) {
        soChan++;
    } else {
        soLe++;
    }
    result3.value = `Có ${soChan} số chẳn và ${soLe} số lẻ`;
}
document.getElementById("reset3").onclick = function () {
    document.getElementById("so1").value = '';
    document.getElementById("so2").value = '';
    document.getElementById("so3").value = '';
    document.getElementById("resultBai3").value = '';
}

/********* BÀI TẬP 4 : Đoán hình tam giác
*input: nhập 3 độ dài cạnh
*Process: (pseudo code)
    1. input (user interface) UI
    2. khai báo các biến: độ dài cạnh 1, 2, 3 (a,b,c)
    - kiểm điều kiện 3 cạnh có phải là hình tam giác không : a+b>c,a+c>b; b+c>a nếu thỏa điều kiện thì là không phải tam giác.
    3. kiểm tra, phân loại các loại tam giác:
    - Tam giác cân nếu 2 cạnh có độ dài bằng nhau
    - tam giác đều nếu 3 cạnh có đọ dài bằng nhau
    - Tam giác vuông nếu bình phương của cạnh huyền bằng tổng các bình phương của hai cạnh góc vuông.
    - không phải 3 trường hợp trên là tam giác thường.
*Output: xuất có bao nhiêu số chẳn, báo nhiêu sô lẻ
*/

document.getElementById("duDoan").onclick = function () {
    let h = +document.getElementById("m").value;
    let g = +document.getElementById("n").value;
    let k = +document.getElementById("k").value;
    let induDoan = document.getElementById("induDoan");
    if (m + n > k && m + k > n & k + n > m) {
        if (m === n && n === k) {
            induDoan.innerHTML = "Tam giác đều.";
        }
        else if (m === n || n === k || m === k) {
            induDoan.innerHTML = "Tam giác cân.";
        }
        else if (Math.pow(m, 2) === Math.pow(n, 2) + Math.pow(k, 2) ||
            Math.pow(n, 2) === Math.pow(m, 2) + Math.pow(k, 2) ||
            Math.pow(k, 2) === Math.pow(n, 2) + Math.pow(m, 2)) {
            induDoan.innerHTML = "Tam giác vuông.";
        }
        else {
            induDoan.value = "Một loại tam giác khác.";
        }
    }
    else {
        induDoan.innerHTML = "KHÔNG PHẢI HÌNH TAM GIÁC!";
    }
}

