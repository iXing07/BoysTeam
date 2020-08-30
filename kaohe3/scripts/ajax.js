var ajax = {
  url:"dataBase"
}


var indexHtml = Mock.mock('dataBase/index', 'get',{
  "info|10": [{
    "indexImgUrl|+1": ["images/img0.jpg", "images/img1.jpg", "images/img2.jpg", "images/img3.jpg", "images/img4.jpg", "images/img5.jpg", "images/img6.jpg", "images/img7.jpg", "images/img8.jpg", "images/img9.jpg", "images/img10.jpg"],
    "indexTitle|+1": ["美妆洗护", "居家日用", "运动户外", "酒零水果", "教育教材", "母婴奶粉", "鞋包装饰", "保健营养", "手机家电", "温州特产"],
    indexHtmlUrl: ["sort.html"]

  }]
})

var sortHtml = Mock.mock('dataBase/sort', 'get',{
  "all|15": [{
  "sortAllLi|+1": ["手表", "男士包装", "男鞋", "家用小电器", "保健品", "计生用品", "内衣内裤", "哺乳喂养", "奶粉", "洗发沐浴", "卤味", "时令水果", "红酒", "洋酒", "咖啡"],
  "sortSportLi|+1": ["球", "运动器材", "运动服饰"],
  sortImgUrl: ["images/6.png"],
  sortHtmlUrl:["comList.html"]
  }],
  "btn|11":[{
    "sortBtn|+1": ["全部", "美妆洗护", "居家日用", "户外运动", "酒零水果", "数码家电", "母婴奶粉", "鞋包服饰", "保健营养", "教育培训", "品牌专区"],
    "sortAllId|+1":["all","mzxh","jjry",'hwyd','jlsg','smjd','mynf','xbfs','bjyy','jypx','ppzq'],
  }],
  "mzxh|9":[{
    "sortAllLi|1": ["手表", "男士包装", "男鞋", "家用小电器", "保健品", "计生用品", "内衣内裤", "哺乳喂养", "奶粉", "洗发沐浴", "卤味", "时令水果", "红酒", "洋酒", "咖啡"],
    "sortSportLi|1": ["球", "运动器材", "运动服饰"],
    sortImgUrl: ["images/6.png"],
    sortHtmlUrl:["comList.html"]
  }],
  "jjry|3":[{
    "sortAllLi|1": ["手表", "男士包装", "男鞋", "家用小电器", "保健品", "计生用品", "内衣内裤", "哺乳喂养", "奶粉", "洗发沐浴", "卤味", "时令水果", "红酒", "洋酒", "咖啡"],
    "sortSportLi|1": ["球", "运动器材", "运动服饰"],
    sortImgUrl: ["images/6.png"],
    sortHtmlUrl:["comList.html"]
  }],
  "hwyd|4":[{
    "sortAllLi|1": ["手表", "男士包装", "男鞋", "家用小电器", "保健品", "计生用品", "内衣内裤", "哺乳喂养", "奶粉", "洗发沐浴", "卤味", "时令水果", "红酒", "洋酒", "咖啡"],
    "sortSportLi|1": ["球", "运动器材", "运动服饰"],
    sortImgUrl: ["images/6.png"],
    sortHtmlUrl:["comList.html"]
  }],
  "jlsg|6":[{
    "sortAllLi|1": ["手表", "男士包装", "男鞋", "家用小电器", "保健品", "计生用品", "内衣内裤", "哺乳喂养", "奶粉", "洗发沐浴", "卤味", "时令水果", "红酒", "洋酒", "咖啡"],
    "sortSportLi|1": ["球", "运动器材", "运动服饰"],
    sortImgUrl: ["images/6.png"],
    sortHtmlUrl:["comList.html"]
  }],
  "smjd|6":[{
    "sortAllLi|1": ["手表", "男士包装", "男鞋", "家用小电器", "保健品", "计生用品", "内衣内裤", "哺乳喂养", "奶粉", "洗发沐浴", "卤味", "时令水果", "红酒", "洋酒", "咖啡"],
    "sortSportLi|1": ["球", "运动器材", "运动服饰"],
    sortImgUrl: ["images/6.png"],
    sortHtmlUrl:["comList.html"]
  }],
  "mynf|2":[{
    "sortAllLi|1": ["手表", "男士包装", "男鞋", "家用小电器", "保健品", "计生用品", "内衣内裤", "哺乳喂养", "奶粉", "洗发沐浴", "卤味", "时令水果", "红酒", "洋酒", "咖啡"],
    "sortSportLi|1": ["球", "运动器材", "运动服饰"],
    sortImgUrl: ["images/6.png"],
    sortHtmlUrl:["comList.html"]
  }],
  "xbfs|7":[{
    "sortAllLi|1": ["手表", "男士包装", "男鞋", "家用小电器", "保健品", "计生用品", "内衣内裤", "哺乳喂养", "奶粉", "洗发沐浴", "卤味", "时令水果", "红酒", "洋酒", "咖啡"],
    "sortSportLi|1": ["球", "运动器材", "运动服饰"],
    sortImgUrl: ["images/6.png"],
    sortHtmlUrl:["comList.html"]
  }],
  "bjyy|8":[{
    "sortAllLi|1": ["手表", "男士包装", "男鞋", "家用小电器", "保健品", "计生用品", "内衣内裤", "哺乳喂养", "奶粉", "洗发沐浴", "卤味", "时令水果", "红酒", "洋酒", "咖啡"],
    "sortSportLi|1": ["球", "运动器材", "运动服饰"],
    sortImgUrl: ["images/6.png"],
    sortHtmlUrl:["comList.html"]
  }],
  "jypx|6":[{
    "sortAllLi|1": ["手表", "男士包装", "男鞋", "家用小电器", "保健品", "计生用品", "内衣内裤", "哺乳喂养", "奶粉", "洗发沐浴", "卤味", "时令水果", "红酒", "洋酒", "咖啡"],
    "sortSportLi|1": ["球", "运动器材", "运动服饰"],
    sortImgUrl: ["images/6.png"],
    sortHtmlUrl:["comList.html"]
  }],
  "ppzq|4":[{
    "sortAllLi|1": ["手表", "男士包装", "男鞋", "家用小电器", "保健品", "计生用品", "内衣内裤", "哺乳喂养", "奶粉", "洗发沐浴", "卤味", "时令水果", "红酒", "洋酒", "咖啡"],
    "sortSportLi|1": ["球", "运动器材", "运动服饰"],
    sortImgUrl: ["images/6.png"],
    sortHtmlUrl:["comList.html"]
  }],
})

var comListHtml = Mock.mock('dataBase/comList', 'get',{
  "info|6": [{
    searchHtmlUrl:["details.html"],
    searchImg:["images/9.png"],
    "searchH6|1":["红双喜乒乓球三星级赛顶3星有缝比赛乒乓球白黄色10只装新材料D40+","正品红双喜排球5号充气软式中考学生比赛用成人男女排球考试训练","李宁篮球成人青少年7号5号室内外水泥街头中小学生比赛训练球耐磨","红双喜4号5号足球正品3号儿童中小学体育标准学校训练耐磨足球","斯伯丁篮球74-604Y正品室内外水泥地防滑耐磨NBA比赛用球7号学生"],
    searchSmall:["99.00"],
    "searchSpan|1":["5","3","4","6","7","9"]
  }]
})

var searchHtml = Mock.mock('dataBase/search', 'get',{
  "info|3": [{
    searchHtmlUrl:["details.html"],
    searchImg:["images/9.png"],
    "searchH6|1":["红双喜乒乓球三星级赛顶3星有缝比赛乒乓球白黄色10只装新材料D40+","正品红双喜排球5号充气软式中考学生比赛用成人男女排球考试训练","李宁篮球成人青少年7号5号室内外水泥街头中小学生比赛训练球耐磨","红双喜4号5号足球正品3号儿童中小学体育标准学校训练耐磨足球","斯伯丁篮球74-604Y正品室内外水泥地防滑耐磨NBA比赛用球7号学生"],
    searchSmall:["99.00"],
    "searchSpan|1":["5","3","4"]
  }]
})


//     ,""

