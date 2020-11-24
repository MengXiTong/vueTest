import { Iterator } from '../helper/Iterator';
// import { types } from "../types/types";
import config from '../../config/index';
// import axios from 'axios';

let testIterator = Iterator({
  url: config.dossierApi,
  listKey: 'datas',
  pageSize: 5
});

export default {
  namespaced: true,
  ...testIterator
};
