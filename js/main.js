import Vue from 'https://cdn.jsdelivr.net/npm/vue@2.6.11/dist/vue.esm.browser.js';

const myVM = (() => {
    let vue_vm = new Vue({
        data: {
            message: "Hello from Vue!",

            collection: [
                { name: "Mariam", role:"mom"},
                { name: "Mohsen", role:"dad"},
                { name: "Fares", role:"whiney son"},
                { name: "Amir", role:"the boss"}
            ]
        },

        methods: {
            logClicked() {
                console.log('clicked on an element!');
            }
        }
    }).$mount("#app");

})();