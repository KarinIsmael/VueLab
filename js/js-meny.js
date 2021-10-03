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
        returnText: '',
    },
    methods: {

        addRating: function (){
            if (this.rateText === '5'){
                {{this.message='Allt gick bra denna vecka, bra jobbat!'}}
            }else{
                this.message='Vad kunde förbättras?'
                this.feedback= true;
            }
        },
        message2: function (){
            this.returnText='Tack!'
        }
    }
})

const d = new Date();
let year = d.getFullYear();
let mont = d.getMonth();
let day = d.getDate();
let thisDate = day + " / " +mont +" "+year;
document.getElementById("date").innerHTML = thisDate;