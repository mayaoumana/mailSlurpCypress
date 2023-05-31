// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

const { MailSlurp } = require('mailslurp-client');

const apiKey = '0aa61416172412897df56adacf9afe0939a0a820d5c030b8449bf419802a0c77'; // Replace with your MailSlurp API key
const mailslurp = new MailSlurp({ apiKey });

Cypress.Commands.add('waitForLatestEmail', () => {
  return mailslurp.waitForLatestEmail('70844370-80b7-4c32-873d-d3d58cafe1c8');
});

Cypress.Commands.add('getLatestEmail', () => {
  return mailslurp.getEmails('70844370-80b7-4c32-873d-d3d58cafe1c8').then((emails) => {
    return emails.items[0];
  });
});
