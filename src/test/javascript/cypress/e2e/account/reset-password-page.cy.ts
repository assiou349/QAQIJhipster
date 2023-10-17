import {
  usernameLoginSelector,
  forgetYourPasswordSelector,
  emailResetPasswordSelector,
  submitInitResetPasswordSelector,
  classInvalid,
  classValid,
} from '../../support/commands';
import GravityCollector from '@smartesting/gravity-data-collector/dist';

GravityCollector.init({
  authKey: 'b17c7643-e982-4453-b19f-53071505eed8',
});
describe('forgot your password', () => {
  const username = Cypress.env('E2E_USERNAME') ?? 'user';

  beforeEach(() => {
    cy.visit('');
    cy.clickOnLoginItem();
    cy.get(usernameLoginSelector).type(username);
    cy.get(forgetYourPasswordSelector).click();
  });

  beforeEach(() => {
    cy.intercept('POST', '/api/account/reset-password/init').as('initResetPassword');
  });

  it('requires email', () => {
    cy.get(emailResetPasswordSelector).should('have.class', classInvalid);
    cy.get(emailResetPasswordSelector).type('user@gmail.com');
    cy.get(emailResetPasswordSelector).should('have.class', classValid);
  });

  it('should be able to init reset password', () => {
    cy.get(emailResetPasswordSelector).type('user@gmail.com');
    cy.get(submitInitResetPasswordSelector).click({ force: true });
    cy.wait('@initResetPassword').then(({ response }) => expect(response.statusCode).to.equal(200));
  });
});
