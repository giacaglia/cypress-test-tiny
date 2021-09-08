/// <reference types="cypress" />
describe("page", () => {
	const arrayValues = [...Array(33).keys()];
	before(() => {
		console.log("before");
	});

	beforeEach(() => {
		console.log("Before each");
	});

	arrayValues.forEach((value) => {
		it(`Localhost - ${value}`, () => {
			cy.visit("localhost:3000");
		});

		it(`Localhost test - ${value}`, () => {
			cy.visit("localhost:3000/test");
		});

		it(`Localhost test2 - ${value}`, () => {
			cy.visit("localhost:3000/test2");
		});
	});
});
