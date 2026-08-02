// ===============================
// عداد الكلمات
// ===============================

const lyrics = document.getElementById("lyrics");
const count = document.getElementById("count");

lyrics.addEventListener("input", function(){

    let text = lyrics.value.trim();

    if(text === ""){

        count.innerHTML = 0;

    } else {

        count.innerHTML = text.split(/\s+/).length;

    }

});



// ===============================
// اختيار نوع الأغنية
// ===============================

const options = document.querySelectorAll(".option");

options.forEach(function(button){

    button.addEventListener("click", function(){

        options.forEach(function(btn){

            btn.classList.remove("active");

        });

        button.classList.add("active");

    });

});




// ===============================
// اختيار الصوت
// ===============================

const voices = document.querySelectorAll(".voice");

voices.forEach(function(button){

    button.addEventListener("click", function(){

        voices.forEach(function(btn){

            btn.classList.remove("active");

        });

        button.classList.add("active");

    });

});




// ===============================
// إنشاء الأغنية وربط السيرفر
// ===============================

const createButton = document.getElementById("create-song");

const energy = document.querySelector(".energy-circle");


createButton.addEventListener("click", async function(){


    energy.classList.add("active");


    createButton.innerHTML = "🎵 Mixing Beat...";
    createButton.disabled = true;



    const selectedStyle = document.querySelector(".option.active");
    const selectedVoice = document.querySelector(".voice.active");



    const songData = {

        lyrics: lyrics.value,

        style: selectedStyle 
        ? selectedStyle.innerText 
        : "Pop",

        voice: selectedVoice 
        ? selectedVoice.innerText 
        : "AI Voice"

    };



    try{


        const response = await fetch(

            "https://ai-music-server.onrender.com/create-song",

            {

                method:"POST",

                headers:{

                    "Content-Type":"application/json"

                },

                body:JSON.stringify(songData)

            }

        );



        const result = await response.json();



        console.log(result);



        createButton.innerHTML = "✨ Song Ready";



    }


    catch(error){


        console.log(error);


        createButton.innerHTML = "❌ Server Error";


    }



    setTimeout(function(){

        energy.classList.remove("active");

        createButton.disabled = false;


    },3000);



});
