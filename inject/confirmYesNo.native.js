import {Alert} from 'react-native';

export default function (message, func1 = ()=>{}, func2=()=>{}) {
    let buttons = [{text:'No', onPress: func2},
        { text: 'Yes', onPress: func1 }];
    Alert.alert('', message, buttons);
}
