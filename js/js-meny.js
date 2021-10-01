Vue.component('dish-item', {
    template: `
    <li>
    {{ title }} - {{selected}}
    <button v-on:click="$emit('remove')">Remove</button>
    <button v-on:click="$emit('missi')">Missing ingredient</button>
</li>
    `,
    props: ['title', 'selected',]
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
                selected: this.selectedDay

            })
            this.newDishText = ''

        },
        miss: function (){
            this.newDishText.toUpperCase()
        }

    }
})