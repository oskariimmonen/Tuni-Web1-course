// See https://www.npmjs.com/package/chai
const chai = require('chai');
// See https://www.npmjs.com/package/chai-http
const chaiHttp = require('chai-http');
// Your server implementation
const server = require('../index.js');
// Using 'should' style, see: https://www.chaijs.com/guide/styles/#should
const should = chai.should();
const fs = require('fs');

// Read the files that the server responses should be equal to
const index = fs.readFileSync('index.html').toString();
const homer = fs.readFileSync('homer.html').toString();
const bradbury = fs.readFileSync('bradbury.html').toString();

// Tell Chai to use the chai-http middleware (or plugin in Chai's own vocabulary)
chai.use(chaiHttp);

describe('Going through the routes', () => {
    /*
    * Test GET random route, should receive an empty 404 response
    */
    describe('GET random path', () => {
        // TODO modify the it statement to use the function that has been 
        // commented out below.
        // You also need to uncomment the needed parts.
        // As the result the status of the test should go from 'pending' to 'passing'
        // Even thou just leaving the function inside <em>end</em> method will pass,
        //  you must write the tests as described in the TODO inside the end method.
        it('it should receive a 404 response', (done) => {
                chai.request(server)
                    .get('/just_an_example_random_path_to_get_a_404')
                    .end((err, res) => {
                        if ((res.status == '404') && (res.text == '')) {
                            done();
                        }
                        // TODO: test hat 
                        // a) the response should have HTTP response status of 404, and 
                        // b) that the response body is empty, so response text should equal an empty string  
                        
                    });
        });
    });

    /*
    * Test the / route, should receive index.html
    */
    describe('GET / path', () => {
        // TODO modify the it statement to use the function that has been 
        // commented out below.
        // You also need to uncomment the needed parts.
        // As the result the status of the test should go from 'pending' to 'passing'
        // Even thou just leaving the function inside <em>end</em> method will pass,
        //  you must write the tests as described in the TODO inside the end method.
        it('it should GET the index.html', (done) => {
             chai.request(server)
                 .get('/')
                 .end((err, res) => {
                     var dat = res.header['content-type'];
                     if ((res.status == '200') && (res.text == index) && (dat == 'text/html')) {
                         done();
                     }
                     // TODO: test that 
                     // a) the response should have HTTP response status of 200, and
                     // b) that the response is in HTML form, and
                     // c) that the text of the response is equal to index.html, so here the response text should be equal to const index
                 });
         });
    });

    /*
    * Test the /classical route, should receive homer.html
    */
    describe('GET /classical path', () => {
        // TODO modify the it statement to use the function that has been 
        // commented out below.
        // You also need to uncomment the needed parts.
        // As the result the status of the test should go from 'pending' to 'passing'
        // Even thou just leaving the function inside <em>end</em> method will pass,
        //  you must write the tests as described in the TODO inside the end method.
        it('it should GET the homer.html', (done) => {
             chai.request(server)
                 .get('/classical')
                 .end((err, res) => {
                     var dat = res.header['content-type'];
                     if ((res.status == '200') && (res.text == homer) && (dat == 'text/html')) {
                         done();
                     }
                     // TODO: test that 
                     // a) the response should have HTTP response status of 200, and
                     // b) that the response is in HTML form, and
                     // c) that the text of the response is equal to homer.html, so here the response text should be equal to const 
                 });
         });
    });

    /*
    * Test the /modern route, should receive bradbury.html
    */
    describe('GET /modern path', () => {
        // TODO modify the it statement to use the function that has been 
        // commented out below.
        // You also need to uncomment the needed parts.
        // As the result the status of the test should go from 'pending' to 'passing'
        // Even thou just leaving the function inside <em>end</em> method will pass,
        //  you must write the tests as described in the TODO inside the end method.
        it('it should GET the bradbury.html', (done) => {
                 chai.request(server)
                     .get('/modern')
                     .end((err, res) => {
                         var dat = res.header['content-type'];
                         if ((res.status == '200') && (res.text == bradbury) && (dat == 'text/html')) {
                             done();
                         }
                         // TODO: test that 
                         // a) the response should have HTTP response status of 200, 
                         // b) that the response is in HTML form
                         // c) the text of the response is equal to bradbury.html,  so here the response text should be equal to const bradbury
                     });
             });
    });
});