alert("这是一个画图游戏");
let s = "正方形";
let t = "三角形";
let d = "菱形";
let choice = "";

choice = prompt("你要选择" + s + "还是" + t + "还是" + d,"菱形");
while(true){
    if(choice != s && choice != t && choice != d){
        choice = prompt("请重新选择：正方形/三角形/菱形","菱形");
    } else {
        break;
    }
}

let symbol = "";
if(choice == t || choice == s){
    while(true){
    let a = prompt("现在请选择你想要的符号","+");
    if(a == false){
        a = prompt("请重新输入符号");
    }
    if(a == null){
        break;
    } else {
        symbol += a;
        }
    }
}
if(choice == d){
    symbol = prompt("现在请选择你想要的符号");
}


    let length;
    length = prompt("请选择你想要的长度","7");
    while(true){
        if(choice == d && length % 2 ==0){
            length = prompt("请输入单数");
        } else {
            break;
        }
    }
    
   alert("图生成好了，点击查看");

   result = "";
if(choice == t){
    let count = 0;
    for(var index = 0; index < length; index++){
        for(var index1 = 0; index1 < index + 1; index1++){
                result += symbol.substring(count % symbol.length, count % symbol.length +1);
                count++;
        }
        result += ("\n");
    }
}
    
if (choice == s){
    let count = 0;
    for(let index = 0; index < length; index++){
        for(let index1 = 0; index1 < length; index1++){
            result += symbol.substring(count % symbol.length, count % symbol.length + 1);
            count++;
        }
        result += ("\n");
    }
}

let maxspacenum = length/2;
let minspacenum =1;
if(choice == d){
    for(let line =0; line <= length/2; line++){ //上半部分行数
        for(let spacenum = maxspacenum; spacenum > 0; spacenum--){
            result += "  ";
        }
        for(let symbolnum = 0; symbolnum <= length-2*maxspacenum; symbolnum++){ //已经打的symbol数
            result += symbol;
        }
        result += ("\n");
        maxspacenum --;
    }
    for(let l = length/2-1; l >=0 ; l--){ //下半部分行数
        for(let spacenum = minspacenum+1; spacenum > 0; spacenum--){
            result += "  ";
        }
        for(let symbolcount = length-2*minspacenum; symbolcount > 0; symbolcount--){
            result += symbol;
        }
        result += ("\n");
        minspacenum++;
    }
}

alert(result); 
