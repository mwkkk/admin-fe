//请求数据
class MUtil {
    request(param){
        return new Promise((resolve, reject)=>{
            $.ajax({
                type        : param.type        || 'get',
                url         : param.url         || '',
                dataType    : param.dataType    || 'json',
                data        : param.data        || null,
                success     : (res) => {
                    if(0 === res.status){
                        typeof resolve === 'function' && resolve(res.data, res.msg);
                    }else if(10 === res.status){
                        this.doLogin(); 
                    }else{
                        typeof reject === 'function' && reject(res.msg);
                    }
                },
                error       : (err) =>{
                    typeof reject === 'function' && reject(err.statusText);
                }
            })
        })
    }
    doLogin(){
        window.location.href = '/login?redirect=' + encodeURIComponent(window.location.pathname);
    }
    errorTips(errMsg){
        alert(errMsg || '好像哪里不对了~');
    }
    //获取Url参数 www.baidu.com/login?redirect=/22233&admin=1233
    getUrlParam(name){
        let queryString     = window.location.search.split('?')[1] || '',
            reg             = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"),
            result          = queryString.match(reg);
        return result? decodeURIComponent(result[2]) : null;
    }
    //设置本地存储
    setStorage(name, data){
        let dataType = typeof data;
        if(dataType === 'object'){
            window.localStorage.setItem(name, JSON.stringify(data));
        }
        else if(['number','boolean','string'].indexOf(dataType) >= 0){
            window.localStorage.setItem(name, data);
        }
        else{
            alert('该类型不能用于本地存储');
        }
    }
    //获取本地存储
    getStorage(name){
        let data = window.localStorage.getItem(name);
        if(data){
            return JSON.parse(data);
        }else{
            return '';
        }
    }
    //删除本地存储
    removeStorage(name){
        window.localStorage.removeItem(name);
    }
}

export default MUtil;