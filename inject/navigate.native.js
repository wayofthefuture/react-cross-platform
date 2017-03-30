import lodash from 'lodash';


export default function (page, props = {}, passProps = {}) {
    if (!props.navigator) {
        console.log('error: for native 2nd argument must be this.props - for react navigator');
        console.log('https://facebook.github.io/react-native/docs/navigator.html');
    } else {
    	let obj = lodash.assignIn({title: page}, passProps);
        props.navigator.replace(obj);
    }
}
