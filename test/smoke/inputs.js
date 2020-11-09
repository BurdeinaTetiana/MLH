const selectors = require('../../data/selectors.json');
const expected = require('../../data/expected.json');


describe('Inputs', function () {

    describe('Inputs are displayed', function () {

        it('TC-014 Name ', function () {
            browser.url('https://qa-apps.netlify.app/app_my_hero');
            const name =$(selectors.name).isDisplayed();
            expect(name).toEqual(true);
        });

        it('TC-015 Gender "he"', function () {
            const gender = $$(selectors.gender)[0].isDisplayed();
            expect(gender).toEqual(true);
        });

        it('TC-016 Gender "she"', function () {
            const gender = $$(selectors.gender)[1].isDisplayed();
            expect(gender).toEqual(true);
        });

        it('TC-017 Gender "it"', function () {
            const gender = $$(selectors.gender)[2].isDisplayed();
            expect(gender).toEqual(true);
        });

        it('TC-018 Age', function () {
            const age = $(selectors.age).isDisplayed();
            expect(age).toEqual(true);
        });

        it('TC-019 Story', function () {
            const story = $(selectors.story).isDisplayed();
            expect(story).toEqual(true);
        });

        it('TC-020 Create', function () {
            const create = $(selectors.label)[3].isDisplayed();
            expect(create).toEqual(true);
        });

    });
});