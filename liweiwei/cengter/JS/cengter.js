//创建获取id
function getId(id) {
    return document.getElementById(id)
}
//初始化
var that;
var n = true;

// class构造函数
class Fun {
    constructor() {
        //将对象赋值给that
        that = this

        //获取id
        this.set = getId('set')
        this.list = getId('list')
        this.pop = getId('pop')
        this.gb1 = getId('guanbi1')
        this.gb2 = getId('guanbi2')
        this.txt = getId('poptext')

        //获取子集
        this.lis = this.list.querySelectorAll('ul li')

        //调用init函数
        this.init()
    }

    //创建init函数
    init() {
        //（初始化操作让相关的元素绑定事件）
        // this.updateNode()
        this.set.onclick = this.showDiv
        this.lis[0].onclick = this.changePop
        this.lis[2].onclick = this.cancelPop
        this.lis[4].onclick = this.retreatPop
        this.gb1.onclick = this.hidPop
        this.gb2.onclick = this.hidPop
    }


    //弹出功能
    showDiv() {
        //判断
        if (n) {
            that.list.style.display = "block"
            n = false
        } else {
            that.list.style.display = "none"
            n = true
        }
    }

    changePop() {
        that.txt.innerHTML = "确定更改密码吗？"
        that.pop.style.display = "block"
    }

    cancelPop() {
        that.txt.innerHTML = "确定注销账户吗？"
        that.pop.style.display = "block"

    }

    retreatPop() {
        that.txt.innerHTML = "确定退出登录吗？"
        that.pop.style.display = "block"
    }

    //关闭弹出
    hidPop() {
        that.pop.style.display = "none"
    }

}

new Fun()