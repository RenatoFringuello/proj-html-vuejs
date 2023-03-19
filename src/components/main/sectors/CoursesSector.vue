<script>
    import AppTitle from '../../prefabs/AppTitle.vue';
    import CourseCard from '../cards/CourseCard.vue';
    export default {
        name:'CoursesSector',
        components: {
            AppTitle,
            CourseCard
        },
        data() {
            return {
                courses:[
                    {price:22.00,title:'The Colored Pencil Drawing Course',nLessons:6,nStudents:50},
                    {price:25.00,title:'The Art & Science of Drawing',nLessons:4,nStudents:50},
                    {price:19.00,title:'Mastering Watercolor Painting from Beginner',nLessons:9,nStudents:50},
                    {price:19.00,title:'Portrait Drawing The Smart Way',nLessons:2,nStudents:50},
                    {price:35.00,title:'Ultimate Guide to Digital Sketching for Beginner',nLessons:14,nStudents:50},
                    {price:19.00,title:'The Color Theory for Digital Artist',nLessons:7,nStudents:50},
                    {price:21.00,title:'Drawing and shading: Complete Course',nLessons:14,nStudents:50},
                    {price:18.00,title:'The Acrylic Painting Academy',nLessons:4,nStudents:50},
                ]
            }
        },
        methods: {
        },
        computed:{
            getIndex(){
                return (direction, index) => (direction > 0)? index+1 :(this.courses.length) - index;
            }
        }
    }
</script>

<template>
    <div id="courses">
        <div class="title-container">
            <AppTitle text="Artist coaching" font-size="2rem" className="birthstone-bounce-ft"/>
            <AppTitle text="Latest Online Courses" font-size="1.4rem" className="quote"/>
        </div>
        <div class="cards-container">
            <CourseCard v-for="course,i in courses.slice().reverse()"
                        :index="getIndex(-1,i)"
                        :price="course.price"
                        :title="course.title"
                        :nLessons="course.nLessons"
                        :nStudents="course.nStudents"/>
        </div>
        <div class="btn-container">
            <button class="btn btn-big light-orange">Get started today</button>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    @use '../../../style/general.scss' as *;
    // @use '../../../style/partials/variables' as *;
    #courses{
        @include container($header-max-w, auto);
        padding:0 2.5rem 4rem;
        .title-container{
            @include container(50%,auto);
            text-align: center;
        }
        .cards-container{
            @include flex(flex-start, space-between, wrap);
            padding-top:.5rem;
        }
        div.btn-container{
            text-align: center;
        }
    }
</style>