Vue.component('dish-item', {
    template: `
    <li>
    {{ title }} - {{selected}}
    <button id="remove-button" class="button" v-on:click="$emit('remove')">Remove</button>
<!--<button id="missing-button" class="button" v-on:click="$emit('toggleclass')">Missing ingredient</button>-->
     <hr class="line">
</li>
    `,
    props: ['title', 'selected']
})

new Vue({
    el: '#add-to-menu',
    data: {
        newDishText: '',
        selectedDay: '',
        color: '',
        isActive: true,
        rateText: '',
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

new Vue({
    el: '#comment-section',
    data: {
        rateText: '',
        message: '',
        feedback: false,
        text: '',
        returntext: '',
    },
    methods: {

        addRating: function (){
            if (this.rateText === '5'){
                {{this.message='Tack för det fina betyget!'}}
            }else{
                this.message='Vad kan vi förbättra?'
                this.feedback= true;
            }
        },
        message2: function (){
            this.returntext='Tack!'
        }
    }
})