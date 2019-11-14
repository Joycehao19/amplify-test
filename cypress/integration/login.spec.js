describe('Authenticator:', () => {
    // Step 1: setup the application state
    beforeEach(() => {
        cy.visit('/');
    });

    describe('Sign In:', () => {
        it('allows a user to sign-in', () => {
            // Step 2: Take an action (Sign in)
            cy.get(selectors.emailInput).type('stevensacks@gmail.com');
            cy.get(selectors.signInPasswordInput).type('testpassword');
            cy.get(selectors.signInSignInButton)
                .contains('Sign In')
                .click();

            // Step 3: Make an assertion (Check for sign-out text)
            cy.get(selectors.signOutButton).contains('Sign Out');
        });
    });
});

const selectors = {
    // Auth component classes
    emailInput: '[data-test="email-input"]',
    signInPasswordInput: '[data-test="sign-in-password-input"]',
    signInSignInButton: '[data-test="sign-in-sign-in-button"]',
    signOutButton: '.sign-out-link',
};
