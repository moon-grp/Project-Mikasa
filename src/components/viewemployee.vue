<template>
    <div id="view-employee">
        <ul class="collection with-header">
            <li class="collection-header"> <h4>{{name}}</h4></li>
            <li class="collection-item">Employee ID#: {{employee_id}}</li>
             <li class="collection-item">Department: {{dept}}</li>
              <li class="collection-item">Position: {{position}}</li>
        </ul>
        <router-link to="/" class="btn grey">Back</router-link>
        <button @click="deleteemployee" class="btn deep-purple darken-4">Delete</button>

         <div class="fixed-action-btn">
        <router-link v-bind:to="{name: 'editemployee', params:{employee_id: employee_id}}" class="btn-floating btn-large deep-purple darken-4">
        <i class="fa fa-pencil" />
        </router-link>
    </div>
    </div>
</template>

<script>
import db from './firebaseinit'
export default {
    name:'Viewemployee',
    data(){
        return{
            employee_id: null,
            name: null,
            dept: null,
            position: null,
        }
        },
    beforeRouteEnter (to, from, next) {
            db.collection('employees').where('employee_id', '==', to.params.employee_id)
            .get()
            .then(
                querySnapshot =>{
                querySnapshot.forEach(
                doc=>{
                    next(
                        vm=>{
                            vm.employee_id=doc.data().employee_id
                            vm.name=doc.data().name
                            vm.dept=doc.data().dept
                            vm.position=doc.data().position
                        }
                    )
                }
            
            )
      })},
    watch:{
        '$route': 'fetchdata'
    },
    methods:{
        fetchdata(){
            db.collection('employees').where('employee_id','==', this.$route.params.employee_id)
            .get()
            .then(
                querySnapshot=>{
                    querySnapshot.forEach(
                        doc=>{
                            this.employee_id=doc.data().employee_id
                            this.name=doc.data().name
                            this.dept=doc.data().dept
                            this.position=doc.data().position
                        }
                    )
                }
            )
        },
    deleteemployee(){
        if(confirm('Are you sure??')){
             db.collection('employees').where('employee_id','==', this.$route.params.employee_id)
            .get()
            .then(
                querySnapshot=>{
                    querySnapshot.forEach(
                        doc=>{
                           doc.ref.delete()
                           this.$router.push('/')
                        }
                    )
                }
            )
        }
    }
    }

}
</script>

<style>

</style>
