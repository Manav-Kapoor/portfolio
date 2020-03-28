import {combineReducers} from 'redux';
import {Education} from './Education';
import {Details} from './Details';
import {Skills} from './Skills';
import {Experience} from './Experience';

export default combineReducers({
    Education,
    Details,
    Skills,
    Experience
})