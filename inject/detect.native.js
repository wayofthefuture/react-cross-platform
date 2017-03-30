import {Platform} from 'react-native';

let name = Platform.OS;

export default {
    web:     false,
    native:  (name === 'ios' || name === 'android'),
    ios:     (name === 'ios'),
    android: (name === 'android')
};
