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

    describe('GET /quotes', () => {
        it('should return 200', async () => {
            Quotes.getAll.mockResolvedValue([]);
            const res = await request(server).get('/quotes');
            const quotesLength = Quotes.getAll.mock.calls.length;
            expect(res.status).toBe(200);
            expect(res.body.length).toBe(0);
            expect(quotesLength).toBe(1);
        });
    }); // end of describe (GET /quotes)

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
    }); // end of describe('GET /quotes/:id')

    describe('POST /quotes', () => {
        it('should return 201', async () => {
            const res = await request(server).post('/quotes')
            expect(res.status).toBe(201);
        });

        it('should return 400 when missing required fields', async () => {
            const mockAdd = {
                id: 111,
                author: "Seneca",
                source: "To Nero",
                quote: "What have you done?"
            };
            Quotes.create.mockResolvedValue({ mockAdd });
            const res = await request(server).post('/quotes').send(mockAdd);
            expect(res.body.mockAdd.id).not.toBe(999);
            expect(res.body.mockAdd.author).not.toBe("Epicurus");
            expect(res.body.mockAdd.source).not.toBe("The Garden");
            expect(res.body.mockAdd.quote).not.toBe("Death does not exist.");
        });
    }); // end of describe('POST /quotes')

    describe('DELETE /quotes/:id', () => {
        it('should return 204', async () => {
            Quotes.remove.mockResolvedValue({});
            const res = await request(server).delete('/quotes/111');
            expect(res.status).toBe(204);
        });
    }); // end of describe('DELETE /quotes/:id')

    describe('PUT /quotes/:id', () => {
        it('should return 200', async () => {
            Quotes.updateById.mockResolvedValue({});
            const res = await request(server).put('/quotes/111');
            expect(res.status).toBe(200);
        });

        it('should allow data to be updated', async () => {
            const obj = {
                id: 111,
                author: "Seneca",
                source: "To Nero",
                quote: "What have you done?"
            };
            Quotes.updateById.mockResolvedValue({
                id: 86,
                author: "Changed name",
                source: "Changed source",
                quote: "Changed quote"
            });
            const res = await request(server).put('/quotes/111').send(obj);
            console.log('@@@@@@@@@@@@@', res.body.id);
            expect(res.body.id).toBe(86);
        });
    }); // end of describe('PUT /quotes/:id')

}); // end of parent test suite









// _______________________________________________________________
// For future reference:
// A quick way to check GET "/"

// const request = require("supertest");
// const app = require("../api/app"); // only for the GET"/" route.
// // only for the GET"/" route.
// describe("Test the root path", () => {
//     test("It should response the GET method", async () => {
//         const response = await request(app).get("/");
//         expect(response.statusCode).toBe(200);
//     });
// });