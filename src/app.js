

import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
    new Vue({
        el:"#app",
        data: {
            allCurrencies: [],
            currencyFrom: '',
            currencyTo: '',
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



