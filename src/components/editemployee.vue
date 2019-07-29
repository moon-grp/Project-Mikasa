<template>
    <div id="editemployee">
    <h6>Edit Details</h6>
<div class="row">
    <form @submit.prevent="updateemployee" class="col s12">
    <div class="row">
    <div class="input-field col s12">
    <input disabled type="text" v-model="employee_id" required>
    </div>
    </div>
<div class="row">
    <div class="row">
    <div class="input-field col s12">
    <input type="text" v-model="name" required>
    </div>
    </div>
</div>
<div class="row">
    <div class="row">
    <div class="input-field col s12">
    <input type="text" v-model="dept" required>
    </div>
    </div>
</div>
<div class="row">
    <div class="row">
    <div class="input-field col s12">
    <input type="text" v-model="position" required>
    </div>
    </div>
</div>
    <button type="submit" class="btn">Submit</button>
    <router-link to="/" class="btn grey">Cancel</router-link>
    </form>
</div>
</div>
</template>

<script>
import db from './firebaseinit'
export default {
    name:'Editemployee',
    data(){
        return{
            employee_id:null,
            name:null,
            position:null,
            dept:null
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
        updateemployee(){
            db.collection('employees').where('employee_id','==', this.$route.params.employee_id)
            .get()
            .then(
                querySnapshot=>{
                    querySnapshot.forEach(
                        doc=>{
                            doc.ref.update({
                                employee_id:this.employee_id,
                                name:this.name,
                                position:this.position,
                                dept:this.dept
                            })
                            .then(()=>{
                                this.$router.push({name:"viewemployee", params:{employee_id: this.employee_id}})
                            })

                        }
                    )
                }
            )
        }
  
    }

}
</script>

<style>

</style>
