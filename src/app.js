

import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
    new Vue({
        el:"#app",
        data: {
            allCurrencies: [],
            amountToConvert: '',
            currencyFrom: {
                name: '',
                value: ''
            },
            currencyTo: {
                name: '',
                value: ''
            },
        },
        mounted(){
            this.getCurrencies()
        },
        methods: {
            getCurrencies: function() {
                fetch("https://api.exchangeratesapi.io/latest")
                .then(response => response.json())
                .then((data) => this.allCurrencies = data)

            },

        },
    })
})



