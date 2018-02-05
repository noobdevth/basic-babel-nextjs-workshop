function fn(_value) {
    return function (_classPrint) {

        console.log("... ก่อนจะพิมพ์ชื่อ")

        console.log(_value)

        console.log(new _classPrint().showName())

        console.log(_value)

        console.log("... หลังพิมพ์ชื่อ")
    }
}

@fn(" >>> ใช้ค่าที่ส่งจาก @fn()")
class Print {
    showName() {
        return "Chanon Panpila"
    }
} 


