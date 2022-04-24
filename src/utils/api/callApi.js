import {BACK_END_CLONE_FB} from './Constants';
import axios  from 'axios';
 export default axios.create({
    baseURL: BACK_END_CLONE_FB
 });

