var data = Mock.mock('datazx','get',{
    'list|8':[{
        "number|1-300": 300,
        "title":'@ctitle(5,7)',
        "wold":'@ctitle(4)',
        "price|10-99": 99
    }]
})

function getdata(obj) {
    var xhr = new XMLHttpRequest();
    xhr.open(obj.type,obj.url,true)
    xhr.send(null);
    xhr.onreadystatechange = function() {
        if(this.status ===200 && this.readyState===4) {
            obj.success(JSON.parse(this.responseText))
        }
    }
}