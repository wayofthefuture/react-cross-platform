import {Alert} from 'react-native';

export default function (message, func1 = ()=>{}, func2=()=>{}) {
    let buttons = [{text:'cancel', onPress: func2},
        { text: 'OK', onPress: func1 }];
    Alert.alert('', message, buttons);
}
