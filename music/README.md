移动端点击延迟事件 
1. 移动端浏览器在派发点击事件的时候，通常会出现300ms左右的延迟

2. 原因: 移动端的双击会缩放导致click判断延迟


1. 禁用缩放   `<meta name = "viewport" content="user-scalable=no" > `    缺点: 网页无法缩放
2.  更改默认视口宽度    `<meta name="viewport" content="width=device-width">`    缺点: 需要浏览器的支持
3. 
 css touch-action    touch-action的默为 auto，将其置为 none 即可移除目标元素的 300 毫秒延迟    缺点: 新属性，可能存在浏览器兼容问题
4. tap事件    zepto的tap事件, 利用touchstart和touchend来模拟click事件    缺点: 点击穿透
5. fastclick    原理: 在检测到touchend事件的时候，会通过DOM自定义事件立即出发模拟一个click事件，并把浏览器在300ms之后真正的click事件阻止掉    缺点: 脚本相对较大    使用:    ```JS    // 引入   <script type='application/javascript' src='/path/to/fastclick.js'></script>    // 使用了jquery的时候    $(function() {        FastClick.attach(document.body);    });    // 没使用jquery的时候    if ('addEventListener' in document) {        document.addEventListener('DOMContentLoaded', function() {            FastClick.attach(document.body);        }, false);    }    ```    在vue中使用    ```js    // 安装    npm install fastclick -S    // 引入    import FastClick from 'fastclick'    // 使用    FastClick.attach(document.body);    ```

。