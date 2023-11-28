describe('Listar Boards', () => {
    it('Listar e imprimir boards existentes', () => {
      // Realizar a requisição GET para obter todos os boards
      cy.request({
        method: 'GET',
        url: 'https://api.trello.com/1/members/me/boards',
        qs: {
          key: '128b1c2811e9a9d886cd0b251eadf15c',
          token: 'ATTA021ba7e7992ca9473ce2757e7e85cb3b95bb8938116cb0c3dfbdd25fe10a2daf922FB088',
        },
      }).then((response) => {
        expect(response.status).to.eq(200);
  
        // Imprimir resposta completa no console do Cypress de forma "pretty"
        cy.log('Resposta completa:');
        cy.log(response.body);
  
        // Imprimir informações dos boards existentes
        cy.log('Boards existentes:');
        response.body.forEach((board) => {
          cy.log(`- Board Name: ${board.name}, ID: ${board.id}, URL: ${board.url}, Desc: ${board.desc}`);
        });
      });
    });
  });
  