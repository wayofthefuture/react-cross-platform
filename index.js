import fetch from './inject/fetch';
import platform from './inject/platform';
import detect from './inject/detect';
import notify from './inject/notify';
import * as storage from './inject/storage';
import navigate from './inject/navigate';
import NativeModules from './inject/nativeModules';
import GoogleSignin from './inject/googleSignIn';
import Linking from './inject/linking';
import FCM from './inject/fcm';
import confirm from './inject/confirm';
import confirmYesNo from './inject/confirmYesNo';
import AppState from './inject/appstate';

export {
    navigate,
    fetch,
    storage,
    platform,
    detect,
    notify,
    NativeModules,
    GoogleSignin,
    Linking,
    FCM,
    confirm,
    confirmYesNo,
    AppState
};

//debug
require('./parallel/temp');
//window.storage = storage;
