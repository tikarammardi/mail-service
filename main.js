const { mail } = require('./mail')

async function main() {
    try {
        const result = await mail();
        console.log('RESULT IS', result);
    } catch (error) {
        console.log('in catch handler', error);
    }
}

main();