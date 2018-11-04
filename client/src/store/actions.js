import axios from 'axios';

export const loadData = ({commit}) => {
    axios.get('/data')
        .then(({data}) => {
            if (data) {
                const stocks = data.stocks;
                const funds = data.funds;
                const stockPortfolio = data.stockPortfolio;
                
                const portfolio = {
                    stockPortfolio,
                    funds
                };
                
                commit('SET_STOCKS', stocks);
                commit('SET_PORTFOLIO', portfolio);
            }
        })
}