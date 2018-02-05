// ทวน Higher Order กันก่อน

const fn = () => console.log('ใช้ fn()')

function print(step1) {
    console.log("Chanon")
    fn()
    console.log("Panpila")
    console.log(step1)

    return function (step2) {
        fn()
        console.log(step2)
        return function (step3) {
            fn()
            console.log(step3)
            console.log(step2)
            console.log(step1)
        }
    }
}

print("...ใช้ Step1")("...ใช้ Step2")("...ใช้ Step3")

//ใครดูแล้วงง ดูอันล่าง เอา comment ออกแล้วรันครับ

// function print2(step1) {
//     
//     console.log("Chanon Panpila")
//     console.log(step1)
//     
//     return function (step2) {
//         console.log(step2)
//     }
// }

// print2("...ใช้ Step1")("...ใช้ Step2")