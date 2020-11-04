import Axios from 'axios';
// 创建实例时设置配置的默认值
let axios = Axios.create({
  timeout: 10000
});

export default axios;