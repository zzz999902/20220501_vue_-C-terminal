import Axios from 'axios';
import baseURL, { URLs } from './URLS';

const appkey = 'dd_1597654682810';
const instance = Axios.create({
  baseURL,
  params: {
    appkey,
  },
});

const likeSearch = (value) => instance.get(
  URLs.likeSearch, { params: { likeValue: value } },
);
// 侧边栏
const getSideList = (value) => instance.get(
  URLs.getSide, { params: { type: value } },
);
// 侧边栏的数据
const getGoodsList = (value, page, size, sort = 'all') => instance.get(
  URLs.getGoodsList, {
    params: {
      type: value,
      page,
      size,
      sort,
    },
  },
);
const Search = (value, page, size) => instance.get(
  URLs.search, { params: { type: value, page, size } },
);
const getGoodsByIds = (value) => instance.get(
  URLs.getGoodsByIds, { params: { value } },
);
export default {
  likeSearch,
  getSideList,
  getGoodsList,
  Search,
  getGoodsByIds,
};
