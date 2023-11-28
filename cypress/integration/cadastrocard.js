describe('Cadastro de Card', () => {
    it('cadastro de novo card', () => {
      cy.request({
        method: 'POST',
        url: 'https://api.trello.com/1/cards',
        body: {
          name: 'Novo Card 4',
          idList: '65656bc30a5d5cfaf1ff04af',
          key: '128b1c2811e9a9d886cd0b251eadf15c',
          token: 'ATTA021ba7e7992ca9473ce2757e7e85cb3b95bb8938116cb0c3dfbdd25fe10a2daf922FB088',
        },
      }).then((response) => {
        expect(response.status).to.eq(200);
      });
    });
  });
  