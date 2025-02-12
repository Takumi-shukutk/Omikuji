let fortune=["大吉","吉","中吉","小吉","凶","大凶"]
let color=["red","blue","yellow","green","black","bad"]

let $button=document.querySelector(".button");
let $result=document.querySelector(".result");
$button.addEventListener("click", function () {
    for(let i=0;i<color.length;i++){
        $result.classList.remove(color[i])
    }
    let randomnumber=Math.floor(Math.random()*color.length)
    $result.innerHTML=fortune[randomnumber];
    $result.classList.add(color[randomnumber]);
});
