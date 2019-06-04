import { types } from '../types/types';
import axios from 'axios';
var compose = require('lodash/fp/compose');

export function Iterator({
  url,
  listKey = 'list',
  pageSize = 10,
  objInitiator
}) {
  return {
    state() {
      return {
        list: [],
        filter: {},
        pageSize: pageSize,
        pageNum: 1,
        hasNextPage: false,
        total: 0,
        pages: 0
      };
    },
    getters: {
      hasMore: state =>
        state.hasNextPage ? state.hasNextPage : state.pageNum <= state.pages
    },
    actions: {
      async refresh({ dispatch, commit }) {
        try {
          commit(types.RESET_PAGE_PARAM);
          await dispatch('selectPage');
          return;
        } catch (error) {
          console.log(error);
        }
      },
      async selectPage({ commit, state }) {
        try {
          const replacedUrl = url =>
            Object.entries(state.filter).reduce(
              (acc, [k, v]) =>
                acc.includes(':' + k) ? acc.replace(':' + k, v) : acc,
              url
            );

          const addParam = url =>
            url +
            '?' +
            Object.entries({
              ...state.filter,
              ...{
                pageNum: state.pageNum,
                pageSize: state.pageSize
              }
            })
              .map(([k, v]) => `${k + '=' + v}`)
              .join('&');

          let { data } = await axios.get(
            compose(
              addParam,
              replacedUrl
            )(url)
          );
          // data.list.forEach(element => {
          //   objInitiator(element);
          // });
          commit(types.UPDATE_PAGE_PARAM, data);
          return data[listKey];
        } catch (error) {
          console.log(error);
        }
      },
      async setFilter({ commit, dispatch }, { filter }) {
        try {
          commit(types.EMPTY_LIST);
          commit(types.UPDATE_FILTER, { filter });
          await dispatch('refresh');
          return;
        } catch (error) {
          console.log(error);
        }
      }
    },
    mutations: {
      [types.RESET_PAGE_PARAM](state) {
        state.pageNum = 1;
        state.hasNextPage = false;
        state.total = 0;
        state.pages = 0;
        state.list = [];
      },
      [types.UPDATE_PAGE_PARAM](state, data) {
        state.pageNum = data.pageNum;
        state.hasNextPage = data.hasNextPage;
        state.total = data.total;
        state.pages = data.pages;
        state.pageSize = data.pageSize;
        state.list = data[listKey];
      },
      [types.UPDATE_FILTER](state, { filter }) {
        state.filter = { ...filter };
      },
      [types.EMPTY_LIST](state) {
        state.list = [];
      }
    }
  };
}
