export function initState(vm){
    const opts = vm.$options; //获取所有选项
    if(opts.data){
        initData(vm);
    }
}

function initData(vm) {
    let data = vm.$options.data; // data 可能是函数和对象

    console.log(typeof data === 'function');
    data = typeof data === 'function'?data.call(vm):data;
    
    console.log(data);
}