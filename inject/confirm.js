
export default function (message, func1 = ()=>{},func2 = () => {}) {
    alertify.confirm('', message, func1, func2);
}
