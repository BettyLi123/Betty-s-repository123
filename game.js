console.log(alert("这是一个心理测试能准确测出你是怎么样的人"));
console.log(alert("放心我不会泄露你的隐私"));
console.log(confirm("准备好了就开始吧!"));
console.log(prompt("你希望别人能记住你是因为你的性格、长相、还是成绩？"));
console.log(prompt("你更倾向于阅读的书是小说、散文、诗歌还是杂志？"));
console.log(prompt("如果一定要选一个，你更喜欢跳舞、唱歌、还是画画？"));
console.log(prompt("当你难过的时候你会选择自己消化、向朋友倾诉还是找老师家长帮助你？"));
console.log(alert("接下来是一道情景题能更准确分析出你"));
console.log(prompt("你的生日party上有三个陌生人来敬酒，应该是你朋友带来的。他们分别是：长发文艺青年、女汉子、光膀子少年，但你的酒量只能再喝一杯了，你会选谁？"));
let a = "可乐";
let b = "雪碧";
let c = "芬达";
let choice = "";
choice = prompt("你喜欢" + a + "、" + b + "、" + "还是" + c); //用choice把用户答案存起来
alert("测试完成！来看看结果吧");
if(choice == a){
    alert("你是一个喜欢喝可乐的人");
} else if(choice == b){
    alert("你是一个喜欢喝雪碧的人");
} else {
    alert("你是一个喜欢喝芬达的人");
}
