/**
 * 将查询字符串转成参数对象
 * @param {string} str 查询字符串
 * @returns {Object}
 */
export function urlParams2Object(str){
    //str:?str=1232&name=asd 是url协议的 参数部分
    console.log(str);
    if(!str){
        return null;
    }
    str = str.slice(1);
    let pareArr = str.split('&');
    let result = {};
    pareArr.forEach(item => {
        let keyValueArr = item.split('=');
        result[keyValueArr[0]] = keyValueArr[1];
    })
    return result;
}

export function formatDate2String(date){
    return `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
}