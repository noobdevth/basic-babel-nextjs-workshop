export default "อิอิ ฉันจะ export คำ ๆ นี้ออกไปที่ไฟล์ with-babel"

/* export default คือเสมือนเราสร้างตัวแปรอ่ะ ส่วนที่ปลายทางที่เรา import เราสามารถตั้งชื่อตัวแปรได้อิสระ

example : 
const xxx = "อิอิ ฉันจะ export คำ ๆ นี้ออกไปที่ไฟล์ with-babel"
export default xxx

ที่ไฟล์ with-babel.js --> import ไฟล์ with-import เข้ามาแล้วตั้งชื่อว่า A

import A from './with-import' 

console.log(A)  ---> A ในที่นี้จะมีค่าเท่ากับ A = "อิอิ ฉันจะ export คำ ๆ นี้ออกไปที่ไฟล์ with-babel"


*/