const app = Vue.createApp({
    data() {
        return {
            BoxAselected: false,
            BoxBselected: false,
            BoxCselected: false
        };
    },
    computed: {
        BoxBclass() {
            return { active: this.boxBselected };
        }
    },
    methods: {
        BoxSelected(box) {
            if (box === 'A') {
                this.BoxAselected = !this.BoxAselected;
            } else if (box === 'B') {
                this.BoxBselectced = !this.BoxBselected;
            } else if (box === 'C') {
                this.BoxCselected = !this.BoxCselected;
            }
        },
    }
});


app.mount("#styling_App");