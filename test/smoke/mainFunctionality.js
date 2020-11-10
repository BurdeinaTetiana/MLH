const selectors = require('../../data/selectors.json');
const data = require('../../data/testData.json');
const inputValues4 = require('../../helpers/inputValues4');
const inputValues4Click = require('../../helpers/inputValues4Click');

describe('Checkin the main functionality', function () {

    describe('Happy path', function () {

        it('TC-021 Create button is clickable after 1-4 are filled in with functional ', function () {
            browser.url('');
            inputValues4(data.nameHero,data.genderHero.she,data.ageHero,data.storyTypeHero);
            const create = $(selectors.create).isEnabled();
            browser.pause(3000);
            expect(create).toEqual(true);

        });


    });


    describe('Other paths', function () {

        it('TC-022 gender he is working ', function () {
            browser.url('');
            inputValues4Click(data.nameHero,data.genderHero.he,data.ageHero,data.storyTypeHero);
            const btnTryAgain = $(selectors.tryAgain).isDisplayed();
            expect(btnTryAgain).toEqual(true);

        });


    });

});