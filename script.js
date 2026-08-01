// script.js

const nameInput = document.getElementById("name");
const decorateBtn = document.getElementById("decorateBtn");
const clearBtn = document.getElementById("clearBtn");
const result = document.getElementById("result");


// زخارف الحروف الإنجليزية
const englishStyles = [
{
a:"𝓐",b:"𝓑",c:"𝓒",d:"𝓓",e:"𝓔",f:"𝓕",g:"𝓖",
h:"𝓗",i:"𝓘",j:"𝓙",k:"𝓚",l:"𝓛",m:"𝓜",
n:"𝓝",o:"𝓞",p:"𝓟",q:"𝓠",r:"𝓡",
s:"𝓢",t:"𝓣",u:"𝓤",v:"𝓥",w:"𝓦",
x:"𝓧",y:"𝓨",z:"𝓩"
},

{
a:"𝔄",b:"𝔅",c:"ℭ",d:"𝔇",e:"𝔈",f:"𝔉",
g:"𝔊",h:"ℌ",i:"ℑ",j:"𝔍",k:"𝔎",
l:"𝔏",m:"𝔐",n:"𝔑",o:"𝔒",
p:"𝔓",q:"𝔔",r:"ℜ",s:"𝔖",
t:"𝔗",u:"𝔘",v:"𝔙",w:"𝔚",
x:"𝔛",y:"𝔜",z:"ℨ"
},

{
a:"α",b:"в",c:"¢",d:"∂",e:"є",f:"ƒ",
g:"g",h:"н",i:"ι",j:"נ",k:"к",
l:"ℓ",m:"м",n:"η",o:"σ",
p:"ρ",q:"զ",r:"я",s:"ѕ",
t:"т",u:"υ",v:"ν",w:"ω",
x:"χ",y:"у",z:"z"
},

{
a:"ᗩ",b:"ᗷ",c:"ᑕ",d:"ᗪ",e:"ᗴ",
f:"ᖴ",g:"ᘜ",h:"ᕼ",i:"I",
j:"ᒍ",k:"K",l:"ᒪ",m:"ᗰ",
n:"ᑎ",o:"O",p:"ᑭ",q:"ᑫ",
r:"ᖇ",s:"ᔕ",t:"T",u:"ᑌ",
v:"ᐯ",w:"ᗯ",x:"᙭",
y:"Y",z:"ᘔ"
}

];


// زخارف الحروف العربية
const arabicMarks = [
"ـ",
"̷",
"͠",
"ۧ",
"ٰ",
"ۢ",
"۪",
"ۭ",
"ٖ",
"ٗ",
"ّ",
"ْ",
"ٓ",
"̲",
"̅"
];


// زخارف حول الكلمات
const frames = [
"꧁༺ {x} ༻꧂",
"『 {x} 』",
"★彡 {x} 彡★",
"♛ {x} ♛",
"✿ {x} ✿",
"༒☬ {x} ☬༒",
"𓆩 {x} 𓆪",
"⚡ {x} ⚡",
"♡ {x} ♡",
"《 {x} 》"
];


// تحويل الحروف الإنجليزية
function makeEnglish(text){

let output=[];

englishStyles.forEach(style=>{

let newText="";

for(let letter of text.toLowerCase()){

newText += style[letter] || letter;

}

output.push(newText);

});

return output;

}


// تحويل الحروف العربية
function makeArabic(text){

let output=[];

arabicMarks.forEach(mark=>{

let newText="";

for(let letter of text){

newText += letter + mark;

}

output.push(newText);

});

return output;

}


// زر الزخرفة
decorateBtn.onclick=function(){

let name=nameInput.value.trim();


if(name===""){

result.innerHTML=
"<p class='empty'>اكتب الاسم أولا</p>";

return;

}


result.innerHTML="";


let styles=[];


// إذا كان إنجليزي
if(/[a-zA-Z]/.test(name)){

styles = makeEnglish(name);

}
// إذا كان عربي
else{

styles = makeArabic(name);

}


// إضافة الإطارات
frames.forEach(frame=>{

styles.push(
frame.replace("{x}",name)
);

});


// عرض النتائج
styles.forEach(text=>{


let box=document.createElement("div");

box.className="item";


box.innerHTML=`

<span>${text}</span>

<button onclick="copyText('${text}')">
نسخ
</button>

`;


result.appendChild(box);


});


};



// زر المسح
clearBtn.onclick=function(){

nameInput.value="";

result.innerHTML=
"<p class='empty'>اكتب الاسم ثم اضغط على زر زخرف.</p>";

};



// النسخ
function copyText(text){

navigator.clipboard.writeText(text);

alert("تم النسخ ✅");

}
// نوع QR المختار
let qrType="text";


// تغيير الخدمة
function showQR(type){

    qrType=type;

    let input=document.getElementById("qrInput");


    if(type==="text"){
        input.placeholder="اكتب كلمة أو جملة";
    }

    if(type==="url"){
        input.placeholder="ضع الرابط هنا";
    }

    if(type==="wifi"){
        input.placeholder="اسم الشبكة|كلمة السر";
    }

    if(type==="whatsapp"){
        input.placeholder="رقم واتساب مع رمز الدولة";
    }

    if(type==="location"){
        input.placeholder="خط العرض,خط الطول";
    }

}
