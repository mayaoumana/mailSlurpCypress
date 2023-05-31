// <reference types="cypress" />
describe('Testing Email with MailSlurp', () => {
 
  
    it('should receive an email', () => {
      
      cy.intercept('POST','https://preprod.backmarket.fr/bm/lost-password').as('lostPassword');
      cy.visit('https://preprod.backmarket.fr/fr-fr/password-reset');
      cy.get('[data-qa="accept-cta"]').click();
      cy.get('#email').type('70844370-80b7-4c32-873d-d3d58cafe1c8@mailslurp.com');
      cy.get('[data-test="password-reset-submit-button"]').click();
        
      cy.wait('@lostPassword');
      cy.waitForLatestEmail().then((email) => {
        const expectedSubject = "Nouveau mot de passe ";
        const expectedSender = "email@update.backmarket.com";
  
        expect(email.subject).to.equal(expectedSubject);
        expect(email.from).contains(expectedSender);

      });
    });
  });
  



    



    
