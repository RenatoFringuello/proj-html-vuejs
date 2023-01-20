<script>
import FooterContacts from './FooterContacts.vue';
import NewsLetterForm from './NewsLetterForm.vue';


    export default {
    name: "AppFooter",
    components: {
        NewsLetterForm,
        FooterContacts
    },
    data() {
        return {
            navs:[
                {
                    heading:'Address',
                    links:[
                        {href:'#',text:'382 NE 191st ST # 87394 Miami, FL 33179-3899',},//link
                        {href:'#',text:'+1(305)547-9909 (9am - 5pm EST, Monday - Friday)',},
                        {href:'mailto:support@maxcoach.com',text:'support@maxcoach.com'}
                    ]
                },
                {
                    heading:'Explore',
                    links:[
                        {href:'#',text:'Start here',},
                        {href:'#',text:'Success story',},
                        {href:'#',text:'Blog',},
                        {href:'#',text:'Courses',},
                        {href:'#',text:'Contact us',},
                    ]
                },
                {
                    heading:'Information',
                    links:[
                        {href:'#',text:'Membership',},
                        {href:'#',text:'Purchase guide',},
                        {href:'#',text:'Privacy policy',},
                        {href:'#',text:'Terms of services',},
                    ]
                },
            ]
        }
    },
}
</script>

<template>
    <footer>
        <NewsLetterForm />
        <FooterContacts :navs="navs"/>
    </footer>
</template>

<style lang="scss" scoped>
    
</style>