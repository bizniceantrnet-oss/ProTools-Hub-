// اختيار لغة الزائر تلقائيا

const userLanguage = navigator.language.slice(0,2);


// إذا كانت اللغة غير موجودة نجعل العربية افتراضية

const currentLanguage = translations[userLanguage]
    ? userLanguage
    : "ar";



// تطبيق الترجمة على العناصر

document.querySelectorAll("[data-lang]").forEach(function(element){

    const key = element.getAttribute("data-lang");

    if(translations[currentLanguage][key]){

        element.innerHTML = translations[currentLanguage][key];

    }

});