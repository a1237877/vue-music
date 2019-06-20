import Vue from 'vue'
import axios from 'axios'

const vue = new Vue()

//axios 配置
axios.defaults.timeout = 10000  //最长请求时间
axios.defaults.baseURL = 'http://localhost:3000'

// 返回状态判断
//封装axios
axios.interceptors.response.use((res)=>{
  if(res.data.code !== 200){
    // toast hideLoading 不是vue自带api 要用vue的原型链上的方法来写
    // 不用this的原因是 此时this的作用域不是vue
    vue.$toast('网络异常')   //不用import的话就要用$
    vue.$hideLoading()
    return Promise.reject(res)
  }
  return res
},(error)=>{
  vue.$toast('网络异常')
  vue.$hideLoading()
  return Promise.reject(error)
})
export function fetchGet(url,param){
  return new Promise((resolve,reject)=>{
    //封装axios.get()方法
    axios.get(url,{
      params:param
    }).then(response => {
      resolve(response.data)
    },err => {
      reject(err)
    }).catch((error)=>{
      reject(error)
    })
  })
}
export default {
  //封装用户登录方法
  Login(params){
    return fetchGet('/login',params)
  },
  // banners
  BannerList(){
    return fetchGet('/banner')
  },
  //歌单
  DiscLists(params){
    return fetchGet('/top/playlist',params)
  },
  //歌单详情
  SongList(params){
    return fetchGet('/playlist/detail',params)
  }
}
