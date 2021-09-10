/// <reference types="cypress" />

function getRandomInt(max) {
	return Math.floor(Math.random() * max);
}
describe("page", () => {
	const arrayValues = [...Array(100).keys()];
	before(() => {
		console.log("before");
	});

	beforeEach(() => {
		console.log("beforeEach");
		cy.wait(500);
	});

	arrayValues.forEach((value) => {
		it(`Visit react app - ${value}`, () => {
			const random = getRandomInt(150);
			cy.visit("localhost:3000");
			cy.get("button").click();
			cy.wait(800 + random);
		});
	});
	// beforeEach(() => {
	// 	console.log("Before each");
	// 	cy.visit("localhost:3000/test3");
	// });

	// arrayValues.forEach((value) => {
	// 	it(`Localhost - ${value}`, () => {
	// 		cy.visit("localhost:3000");
	// 	});

	// 	it(`Localhost test - ${value}`, () => {
	// 		cy.visit("localhost:3000/test");
	// 	});

	// 	it(`Localhost test2 - ${value}`, () => {
	// 		cy.visit("localhost:3000/test2");
	// 	});
	// });
});
