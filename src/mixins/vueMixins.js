export default {
    data(){
        return{
            value:"我是mixins中的值"
        }
    },
    methods:{
        show(){
            console.log("我是mixins中的方法");
        }
    },
    created(){
        console.log("我是mixins中的created");
    },
    mounted(){
        console.log("我是mixins中的mounted");
    }
}