const http=require("http")
const urlModule=require("url")
const sever=http.createServer()
sever.on('request',function(req,res){
    // const url = req.url;
    const {pathname:url, query }=urlModule.parse(req.url,true)
    if(url ==='/getscript'){
        //拼接一个合法的JS脚本，这里拼接的是一个方法的调用
        //通过res.end发送给客户端
        let data={
            name:"xjj",
            age:18,
            gender:"女孩子"
        }
        console.log(query.callback)
        let scriptStr=`${query.callback}(${JSON.stringify(data)})`
        res.end(scriptStr)
        console.log(scriptStr)
    }else{
        res.end('404')
    }
})
sever.listen(3000,'127.0.0.1')