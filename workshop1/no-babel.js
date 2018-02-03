class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
    // Getter
    get area() {
        return this.calcArea();
    }
    // Method
    calcArea() {
        return this.height * this.width;
    }
}
const square = new Rectangle(10, 10);
console.log(square.area);

//พิมพ์ node no-babel.js ที่ Command line ดูสิ ** ผลลัพธ์ 100 รันได้ปกติถูกมะ