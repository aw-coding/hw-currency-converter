

import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
    new Vue({
        el:"#app",
        data: {
            key: '',
            allCurrencies: [],
            allRates: [],
            amountToConvert: '',
            currencyFrom: {
                name: '',
                value: ''
            },
            currencyToArrayIndex: '',
            currencyTo: {
                name: '',
                value: ''
            },
        },
        mounted(){
            this.getCurrencies(),
            this.allRates = [this.allCurrencies.rates]
        },
        methods: {
            getCurrencies: function() {
                fetch("https://api.exchangeratesapi.io/latest")
                .then(response => response.json())
                .then((data) => this.allCurrencies = data)

            },
            getCurrencyToValue: function() {
                //filter by currencyToName?
                return this.allCurrencies.filter(() => {
                    if (this.allCurrencies.rates.index === this.currencyTo.name) 
                    {this.currencyTo.value = this.allCurrencies.rates.index.key}
                })
                
            }


            // getCurrencyTo: function() {
            //     this.currencyTo.value = 1
            // }

        },
    })
})



