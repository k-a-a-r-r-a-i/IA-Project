const expect = require('expect');
const requset = require('supertest');

const app = require('./../server');
const { user } = require('./../modules//user');

beforeEach((done) => {
    user.remove({}).then(() => done());
});

describe("POST /user", () => {
    it("should create new column", (done) => {

        var email = "omarrasmy@yahoo.com";
        requset(app).post('/user').send({ email }).expect(200).expect((res) => {
            expect(res.body.email).toBe(email);
        }).end((err, res) => {
            if (err) {
                return done(err);
            }
            user.find().then((doc) => {
                expect(doc.length).toBe(1);
                expect(doc.email).toBe(email);
                done();
            }).catch((e) => {
                done(e);
            });
        });

    });
});