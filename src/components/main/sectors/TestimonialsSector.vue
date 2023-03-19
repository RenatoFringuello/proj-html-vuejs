<script>
    import AppTitle from '../../prefabs/AppTitle.vue';
    import TestimonialCard from '../cards/TestimonialCard.vue';
    export default {
        name:'TestimonialsSector',
        components: {
            AppTitle,
            TestimonialCard
        },
        data() {
            return {
                testimonials:[
                    {firstname:'Madley',lastname:'Pondor',role:'IT Specialist',title:'Professional team of specialist and passionate mentors at reach', info: 'I need to get a certification for English proficiency and MaxCoach is my best choice. Theri tutors are smart and professional when deadling with students.'},
                    {firstname:'Florence',lastname:'Themes',role:'Multimedia Admin',title:'It\'s a choice of quality for people with special needs', info: 'I\'m a very strict person so I require everything to be organized and neat. Then, I\'ll be able to make things right and shine. MaxCoach guys got me.'},
                    {firstname:'Luvic',lastname:'Dubble',role:'Private Tutor',title:'The MaxCoach team works really hard to ensure high quality', info: 'I am happy with their arrangement of lessons and subjects. They reflect a scientific investigation into effective methods to be adopted for learners of all levels.'},
                    {firstname:'Mina',lastname:'Hollace',role:'Freelancer',title:'High level of efficiency and scientific teaching methods', info: 'I am free to learn at my own pace, follow my own schedule and choose the subject I want to learn from the syllabus. Great study portal for people like me.'},
                ],
                activeSlide:0,
            }
        },
        methods: {
            isVisible(index){
                const length = this.testimonials.length-1;
                return (index -length === this.activeSlide || 
                        index +length === this.activeSlide || 
                        index +1 === this.activeSlide || 
                        index === this.activeSlide || 
                        index -1 === this.activeSlide);
            }
        },
        computed:{
            getFullName(){
                return (firstname, lastname) => `${firstname} ${lastname}`;
            },
            getRole(){
                return (role) => `/ ${role}`;
            }
        }
    }
</script>

<template>
    <div id="testimonials">
        <div class="title-container">
            <AppTitle text="Testimonials" font-size="2rem" className="birthstone-bounce-ft"/>
            <AppTitle text="Why do people love me?" font-size="1.4rem" className="quote"/>
        </div>
        <div class="cards-container carousel">
            <TestimonialCard v-show="(isVisible(i))" class="card" v-for="testimonial,i in testimonials" 
            :class="activeSlide !== i ? 'disabled':''"
            @click="activeSlide = i"
            :index="i+1" 
            :fullname="getFullName(testimonial.firstname, testimonial.lastname)" 
            :role="getRole(testimonial.role)"
            :title="testimonial.title" 
            :info="testimonial.info"/>
        </div>
        <div class="carousel-dots">
            <div v-for="i in testimonials.length" 
                 class="dot" :class="activeSlide === i-1 ? 'active' : ''"
                 @click="activeSlide = i-1"></div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    @use '../../../style/general.scss' as *;
    // @use '../../../style/partials/variables' as *;
    #testimonials{
        padding:0 2.5rem 2rem;
        .title-container{
            @include container(50%,auto);
            text-align: center;
        }
        .cards-container{
            @include flex(flex-start, space-between);
            padding-top:.5rem;
        }
        .carousel-dots{
            @include flex(center, space-between);
            @include container(80px, auto);
            padding: 2.5rem 0;

            .dot{
                cursor: pointer;
                width:  7px;
                height: 7px;
                border-radius: 50%;
                background-color: $cube-boulder;
                &.active{
                    width:  10px;
                    height: 10px;
                    background-color: $cube-cod-gray;
                }
            }

        }
    }
</style>