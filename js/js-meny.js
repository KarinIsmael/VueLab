Vue.component('dish-item', {
    template: `
    <li>
    {{ title }} - {{selected}}
    <button id="remove-button" class="button" v-on:click="$emit('remove')">Remove</button>
<!--<button id="missing-button" class="button" v-on:click="$emit('toggleclass')">Missing ingredient</button>-->
     <hr class="line">
</li>
    `,
    props: ['title', 'selected', 'toggleClass']
})

new Vue({
    el: '#add-to-menu',
    data: {
        newDishText: '',
        selectedDay: '',
        color: '',
        isActive: true,
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
        toggle: function(){
            this.isActive = !this.isActive;
        }

    }
})