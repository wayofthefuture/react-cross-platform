import { browserHistory } from 'react-router';
import lodash from 'lodash';

export default function (page, props = {}, passProps = {}) {
    let obj = lodash.assignIn({pathname: page}, passProps);
    browserHistory.push(obj);
}
