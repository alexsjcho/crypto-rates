class CyrptoAPI {
    //Query the REST API with a currency and a cryptocurrency
    async queryAPI(currency, cryptocurrency) {
        //Query the URL
        const url = await fetch(`https://api.coinmarketcap.com/v1/ticker/${cryptocurrency}/?convert=${currency}`);
       
        //Return as JSON
        const result = await url.json();

        //Return the object
        return {
            result
        }
    }

    //Get all the cryptocurrencies
    async getCyrptopCurrenciesList(){
        const url = await fetch('https://api.coinmarketcap.com/v1/ticker');

        //Return this as a json
        const cryptoCurrencies = await url.json();

        //Return the object
        return {
            cryptoCurrencies
        }
    }
}