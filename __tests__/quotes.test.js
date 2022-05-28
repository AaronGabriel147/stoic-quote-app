const request = require("supertest");
const express = require('express');
const Quotes = require("../api/quotes/quotes-model");
const quotesRouter = require("../api/quotes/quotes-router");
const server = express();
server.use(express.json());


jest.mock('../api/quotes/quotes-model');

// Parent test suite:
describe('quotes router endpoints', () => {
    beforeAll(() => {
        server.use('/quotes', quotesRouter);
        jest.clearAllMocks();
    });

    // describe('GET /quotes', () => {
    //     it('should return 200', async () => {
    //         Quotes.getAll.mockResolvedValue([]);
    //         const res = await request(server).get('/quotes');
    //         const quotesLength = Quotes.getAll.mock.calls.length;
    //         expect(res.status).toBe(200);
    //         expect(res.body.length).toBe(0);
    //         expect(quotesLength).toBe(1);
    //     });
    // });

    describe('GET /quotes/:id', () => {
        it('should return 200', async () => {
            Quotes.findById.mockResolvedValue({});
            const res = await request(server).get('/quotes/144');
            expect(res.status).toBe(200);
        });
        it('should return 404 when story not found', async () => {
            Quotes.findById.mockResolvedValue();
            const res = await request(server).get('/quotes/99');
            expect(res.status).toBe(404);
        });
        it('should return 500 when error', async () => {
            Quotes.findById.mockRejectedValue({}); // Note "mockRejectedValue"
            const res = await request(server).get('/quotes/144');
            expect(res.status).toBe(500);
        });

        it('should have keys = id, author, source, quote', async () => {
            Quotes.findById.mockResolvedValue({
                id: 1,
                author: 'mocked author',
                source: 'mocked source',
                quote: 'mocked quote'
            });
            const res = await request(server).get('/quotes/144');
            // keys
            expect(res.body).toHaveProperty('id');
            expect(res.body).toHaveProperty('author');
            expect(res.body).toHaveProperty('source');
            expect(res.body).toHaveProperty('quote');
            // values
            expect(res.body.id).toBe(1);
            expect(res.body.author).toBe('mocked author');
            expect(res.body.source).toBe('mocked source');
            expect(res.body.quote).toBe('mocked quote');
        });




    }); // End of describe('GET /quotes/:id')
}); // end of parent test suite























// _______________________________________________________________

// A quick wat to check GET "/"

// const request = require("supertest");
// const app = require("../api/app"); // only for the GET"/" route.
// // only for the GET"/" route.
// describe("Test the root path", () => {
//     test("It should response the GET method", async () => {
//         const response = await request(app).get("/");
//         expect(response.statusCode).toBe(200);
//     });
// });