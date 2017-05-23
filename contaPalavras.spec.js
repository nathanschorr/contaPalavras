const Lab = require('lab');
const lab = exports.lab = Lab.script();

const { expect } = require('code');

const { contaPalavras } = require('./contaPalavras');


  lab.experiment('Quando informa a frase', () => {
  lab.test('deve retornar o numero de palavras', (done) => {
      expect(contaPalavras('Meu nome é Nathan')).to.equal(4);
      done();
    });
  });
