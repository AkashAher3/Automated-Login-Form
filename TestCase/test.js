import { Selector } from 'testcafe';

fixture('Login Test')
    .page('http://127.0.0.1:5500/TestCase/login.html');

test('User Login', async t => {
    await t
        .typeText('[name="username"]', 'Akash Aher')
        .typeText('[name="password"]', 'Akash@123')
        .click('[type="submit"]')

        // .expect(Selector('.success-message').withExactText('Your Login Success').exists).ok(); 

    
});
