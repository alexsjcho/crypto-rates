//Instantiate the classes

const cryptoAPI = new cryptoAPI();
const ui = new UI();

//Create the variables

const form = document.getElementById('form');


//Add event listner
form.addEventListener('submit', (e) => {
    e.preventDefault();

    //read currency
    const currencySelect = document.getElementById('currency').value;

    //read cryptocurrency
    const cryptoCurrencySelect = document.getElementById('cryptocurrency').value;

    //Validate that the selects have something
    if(currentSelect === '' || cyrptoCurrencySelect === '' ){
        //display an error
        ui.printMessage('All the fields are mandatory', 'deep-orange darken-4 card-panel');
        console.log('error');
    } else {
        //Query the REST API
        cryptoAPI.queryAPI(currencySelect, cryptoCurrencySelect)
            .then(data => {
                ui.displayResult(data.result[0], currencySelect);
            });
    }

});
