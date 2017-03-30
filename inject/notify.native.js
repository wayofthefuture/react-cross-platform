import {Alert} from 'react-native';
import detect from './detect';

export default function (message, func = ()=> {}, options = {}) {
    let buttons = [{text: 'OK', onPress: func}];

    if (detect.ios) {
        Alert.alert('', message, buttons);
    } else {
        Alert.alert('', message, buttons, options);
    }
}
