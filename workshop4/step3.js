
function fn() {
    return function (_classPrint) {

        console.log("... ก่อนจะพิมพ์ชื่อ")

        console.log(new _classPrint().showName())

        console.log("... หลังพิมพ์ชื่อ")
    }
}

@fn()
class Print {
    showName() {
        return "Chanon Panpila"
    }
}


















// export default function () {
//     return function (Child) {
//         console.log(`> layout.js : ${Child}`);
//         return class FromLAYOUT extends Component {
//             constructor(props) {
//                 super(props);
//             }
//             render() {
//                 return (
//                     <div>
//                         <h2> this is layout </h2>
//                         <Child />
//                     </div>
//                 );
//             }
//         };
//     };
// }