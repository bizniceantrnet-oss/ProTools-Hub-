// عداد الكلمات

const lyrics = document.getElementById("lyrics");
const count = document.getElementById("count");


lyrics.addEventListener("input", function(){

    let text = lyrics.value.trim();

    if(text === ""){

        count.innerHTML = 0;

    } else {

        let words = text.split(/\s+/);

        count.innerHTML = words.length;

    }

});





// اختيار نوع الأغنية

const options = document.querySelectorAll(".option");


options.forEach(function(button){

    button.addEventListener("click", function(){

        options.forEach(function(btn){

            btn.classList.remove("active");

        });


        button.classList.add("active");

    });

});





// اختيار الصوت

const voices = document.querySelectorAll(".voice");


voices.forEach(function(button){

    button.addEventListener("click", function(){

        voices.forEach(function(btn){

            btn.classList.remove("active");

        });


        button.classList.add("active");

    });

});





// زر إنشاء الأغنية

const createButton = document.getElementById("create-song");

const energy = document.querySelector(".energy-circle");



createButton.addEventListener("click", function(){


    // تشغيل تأثير الطاقة

    energy.classList.add("active");


    createButton.innerHTML = "🎵 Mixing Beat...";

    createButton.disabled = true;



    setTimeout(function(){

        createButton.innerHTML = "🎤 Recording Voice...";


    },2000);




    setTimeout(function(){


        createButton.innerHTML = "✨ Song Ready";


        energy.classList.remove("active");


        createButton.disabled = false;


    },5000);



});