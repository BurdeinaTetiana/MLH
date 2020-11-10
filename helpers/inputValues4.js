const selectors = require('../data/selectors.json');

function  inputValues4(nameHero,genderHero,ageHero,storyTypeHero){
    $(selectors.name).setValue(nameHero);
    $$(selectors.gender)[genderHero].click();
    $(selectors.age).setValue(ageHero);
    $(selectors.storyClick).click();
    $$(selectors.storyType)[storyTypeHero].click();

}

module.exports = inputValues4;