function introduction(name){
    return(`Hi, my name is ${name}.`)
}

function introductionWithLanguage(name, lang){
    return(`Hi, my name is ${name} and I am learning to program in ${lang}.`)
}

function introductionWithLanguageOptional(name, lang){
    if(lang === undefined){
        return(`Hi, my name is ${name} and I am learning to program in JavaScript.`)
    }
    return(`Hi, my name is ${name} and I am learning to program in ${lang}.`)
}