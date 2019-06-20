//封装toast组件
let Toast = {}
// key:value
Toast.install = function(Vue,options){
  let opt = {
    //报错时的操作
    defaultType:'center', //默认显示的位置
    duration:'1500', //报错时持续的时间

  }
  // let A of Array 循环数组
  // let A in json  循环对象
  for(let property in options){
    // options[property] 获取对象里的每一项 相当于json.a
    opt[property] = options[property]
  }
  Vue.prototype.$toast = (tips,type)=>{
    if(type){
      opt.defaultType = type
    }
    if(document.getElementsByClassName('vue-toast').length){//说明页面上存在有这样的类名 返回一个数组，所以用.length
      return  //如果toast此时在页面上出现状态时，则不再执行
    }
    let toastTpl = Vue.extend({
      template: '<div class="vue-toast toast-' + opt.defaultType +'">' + tips + '</div>'

    })
    let tpl = new toastTpl.$mount().$el
    document.body.appendChild(tpl)
    setTimeout(()=>{
    document.body.removeChild(tpl)
    },opt.duration)

  }
  ['bottom','center','top'].forEach(type=>{
    Vue.prototype.$toast[type] = (tips)=>{
      return Vue.prototype.$toast(tips,type)
    }
  })
}


//封装hideloading组件
let loading = {}
loading.install = function(Vue){  //一个参数来控制它展示或者不展示
  let tpl
  Vue.prototype.$showLoading = () => {
    if(document.getElementsByClassName('vue-loading').length){
      return
    }
    let loadingTpl = Vue.extend({  //创建构造器 定义好提示信息的模板
      template:'<div class="vue-loading"></div>'
    })
    tpl = new loadingTpl().$mount.$el
    document.body.appendChild(tpl)
  }
  Vue.prototype.$hideLoading = () => {
    if(document.getElementsByClassName('vue-loading').length){
      document.body.removeChild(tpl)
    }
  }
}

export {
  Toast,
  loading
}