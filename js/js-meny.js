Vue.component('dish-item', {
    template: `
    <li>
    {{ title }} - {{selectedDay}}
    <button v-on:click="$emit('remove')">Remove</button>
</li>
    `,
    props: ['title']
})

new Vue({
    el: '#add-to-menu',
    data: {
        newDishText: '',
        selectedDay: '',
        dishes: [
            {
                id: 1,
                title: 'Potatisgratäng',
                selected: 'monday'
            }
        ],
        nextDishId: 2
    },
    methods: {
        addDish: function () {
            this.dishes.push({
                id: this.nextDishId++,
                title: this.newDishText,
            })
            this.newDishText = ''

        }
    }
})