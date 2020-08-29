var that;
var str;
var num;
var imgbj;
var img1;
var img2;
var len;
var sd = true;
var cd = false;

function getId(id) {
    return document.getElementById(id)
}

class Fun {
    constructor() {
        that = this

        this.nums = getId('num')
        this.manage = getId('management')
        this.pop = getId('pop')
        this.txt = getId('poptext')
        this.queding = getId('qued')
        this.gb2 = getId('guanbi2')
        this.minte = getId('minte')
        this.del = document.getElementById('del')
        this.folls = document.getElementsByClassName('foll')
        this.chu = document.getElementsByClassName('chu')
        this.ying = document.getElementsByClassName('ying')
        this.spana = document.getElementsByClassName('statistics')[0]
        this.init()
    }

    init() {
            this.manage.onclick = this.changeGan
                // this.del.onclick = this.removeLi
            this.del.onclick = this.changePop
            this.queding.onclick = this.removeLi
            this.gb2.onclick = this.hidePop
            this.minte.onclick = this.showMin
                //遍历选项圈
            for (let i = 0; i < this.folls.length; i++) {
                this.folls[i].num = i
                imgbj = ""
                this.folls[i].onclick = function() {
                    imgbj = that.folls[this.num].style.backgroundImage
                    img1 = 'url("./img/weixuan.png")'
                    img2 = 'url("./img/yixuan.png")'
                    imgbj.toString()
                    if (imgbj !== img2) {
                        that.folls[this.num].style.backgroundImage = img2
                        that.folls[this.num].parentNode.classList.add('chu')
                        cd = true
                    } else {
                        that.folls[this.num].style.backgroundImage = img1
                        that.folls[this.num].parentNode.classList.remove('chu')
                        cd = false
                    }

                }
            }
        }
        //管理=>完成,完成=>管理
    changeGan() {
        str = that.manage.innerHTML
        window.getSelection ? window.getSelection().removeAllRanges() : document.getSelection.empty()
        if (sd) {
            if (str === "管理") {
                that.manage.innerHTML = "完成"
                that.showCard()

            } else {
                that.manage.innerHTML = "管理"
                that.hideCard()
            }
        }

    }
    changePop() {
        if (cd) {

            that.txt.innerHTML = "你确定要删除该收藏记录吗？"
            that.pop.style.display = "block"
        }
    }
    hidePop() {
        that.pop.style.display = "none"
    }

    //选项卡选取
    showFoll() {
        console.log(that.num);
        that.folls[that.i].style.background = "background: url(../img/yixuan.png);"
    }

    //选项卡出现
    showCard() {
            for (let i = 0; i < that.folls.length; i++) {
                that.folls[i].style.display = "block"
            }
            that.del.style.display = "block"
        }
        //选项卡消失
    hideCard() {
            for (let i = 0; i < that.folls.length; i++) {
                that.folls[i].style.display = "none"
            }
            that.del.style.display = "none"

        }
        //删除功能
    removeLi() {
        for (let i = 0; i < that.chu.length; i++) {
            that.chu[i].classList.add('ying')
        }
        len = that.ying.length
        if (len === 1) {
            that.nums.innerHTML = '1'
        }
        if (len === 2) {
            that.del.style.display = "none"
            that.spana.style.display = 'none'
            that.changeGan()
            that.showMin()
            sd = false
        }
        that.hidePop()
    }
    showMin() {
        that.minte.style.display = "block"
    }
    hideMin() {
        that.minte.style.display = "none"
    }
}

new Fun()