var CustomLogger = require('../'),
    log = new CustomLogger({
      prefix: 'Test Server'
    }),
    log2 = new CustomLogger({
      colorize: false
    });

console.log('Demo:\n');

log.log('Basic text.');
log.info('Important information.');
log.warn('Watch out!');
log.error('Uh oh! Something is awry.');

console.log('\n===========================\n');

log2.log('Basic text.');
log2.info('Important information.');
log2.warn('Watch out!');
log2.error('Uh oh! Something is awry.');
