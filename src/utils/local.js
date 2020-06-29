const local = {
    set(key,value,isadmin){      //设置
          if(key.length==0||value.length == 0){
              return false;
          }
          const data = (isadmin == true?JSON.stringify(value):value)
          localStorage.setItem(key,data)
    },
    get(key,isadmin){   //获取
        if(key.length==0){
            return false;
        }
         const data =localStorage.getItem(key)
        return isadmin == true ? JSON.parse(data):data
    },
    remove(key){     //删除
        if(key.length==0){
            return false;
        }
        localStorage.removeItem(key)
    }
}

export default local;