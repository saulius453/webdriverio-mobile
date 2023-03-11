describe('Open application', () => {
    it('Open and wait', async () => {
        const logo = await $(`android=new UiSelector().resourceId("logoTestID")`);
        logo.waitForEnabled();

        const loginButton = await $('~onboarding:loginButton:TestID')
        loginButton.waitForEnabled();
        await new Promise((resolve) => {setTimeout(resolve, 5000)});
    });
});
