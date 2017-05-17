const Lab = require('lab');
const lab = exports.lab = Lab.script();

const { expect } = require('code');

const { contaPalavras } = require('../app/contaPalavras');


  lab.test('deve retornar o numero de palavras', (done) => {
      expect(contaPalavras()).to.equal({resultado: [6]});
      done();
    });
