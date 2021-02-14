const app = Vue.createApp({
    data() {
        return {
            goals: [],
            AddNewGoal: ''
        };
    },
    methods: {
        AddGoal() {
            this.goals.push(this.AddNewGoal);
        },

        removeGoal(index) {
            this.goals.splice(index, 1);
        }
    }
});
app.mount('#user-goals');