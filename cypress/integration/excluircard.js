describe('Excluir um Card', () => {
    it('excluir um card existente', () => {
      cy.request({
        method: 'DELETE',
        url: 'https://api.trello.com/1/cards/wRvP4hlb',
        qs: {
          key: '128b1c2811e9a9d886cd0b251eadf15c',
          token: 'ATTA021ba7e7992ca9473ce2757e7e85cb3b95bb8938116cb0c3dfbdd25fe10a2daf922FB088',
        },
      }).then((response) => {
        expect(response.status).to.eq(200);
      });
    });
  });
  