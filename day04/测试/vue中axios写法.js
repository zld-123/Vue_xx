// 1. 创建新的axios实例并配置
import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://api.example.com',
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json'
    }
});

// 2. 设置请求拦截器
instance.interceptors.request.use(
    config => {
        // 处理请求前的操作，如添加公共参数、设置loading效果等
        return config;
    },
    error => {
        // 处理请求错误
        return Promise.reject(error);
    }
);

// 3. 设置响应拦截器
instance.interceptors.response.use(
    response => {
        // 处理响应数据，如关闭全局loading效果等
        return response.data;
    },
    error => {
        // 处理响应错误
        return Promise.reject(error);
    }
);

// 4. 封装具体API请求函数
export const getUserInfo = params => {
    return instance.get('/user/info', {params});
};

export const login = data => {
    return instance.post('/user/login', data);
};

// 5. 对API请求函数进行统一管理
// 在api/index.js中导入所有API请求函数并统一导出

// 6. 组件中使用API请求函数
// 在组件中引入需要使用的API请求函数，并在需要时调用

