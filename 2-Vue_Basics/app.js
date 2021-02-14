const app = Vue.createApp({
    data() {
        return {
            counter: 0,
            name: '',
            secondname: '',
            // fullname: '',
        };
    },

    watch: {

        // counter(value) {
        //     if (value > 50) {
        //         this.counter = 0;
        //     }
        // }
        // name(value) {
        //     if (value === '') {
        //         this.fullname = '';
        //     } else {
        //         this.fullname = value + ' ' + 'hassan';
        //     }
        // },
        // // Watch propertis accepts Two vulues
        // secondname(value) {
        //     if (value === '') {
        //         this.fullname = '';
        //     } else {
        //         this.fullname = this.name + ' ' + value;
        //     }
        // }

    },

    // we Creaate computed when we want to call Vulue , while Methods for Function
    computed: {
        fullname() {
            console.log("Runing Again!");
            if (this.name === '' || this.secondname === '') {
                return '';
            }
            return this.name + ' ' + this.secondname;
        },

    },


    methods: {
        add() {
            this.counter = this.counter + 2
        },
        remove(num) {
            this.counter = this.counter - num;
        },

        // OutputFullname() {

        //     if (this.name === '') {
        //         return '';
        //     }
        //     return this.name + ' ' + 'Mata';
        // },

        resetInput() {
            this.name = '';
            this.fullname = '';
        },

        Submitform(event) {
            //event.preventDefault();
            alert("Submitted!");

        }
    }
});

app.mount('#events');