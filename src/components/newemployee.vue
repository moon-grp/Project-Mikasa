<template>
<div id="newemployee">
    <h4>Add New Team Member</h4>
<div class="row">
    <form @submit.prevent="saveemployee" class="col s12">
    <div class="row">
    <div class="input-field col s12">
    <input type="text" v-model="employee_id" required>
    <label >Employee ID#</label>
    </div>
    </div>
<div class="row">
    <div class="row">
    <div class="input-field col s12">
    <input type="text" v-model="name" required>
    <label >Name</label>
    </div>
    </div>
</div>
<div class="row">
    <div class="row">
    <div class="input-field col s12">
    <input type="text" v-model="dept" required>
    <label >Department</label>
    </div>
    </div>
</div>
<div class="row">
    <div class="row">
    <div class="input-field col s12">
    <input type="text" v-model="position" required>
    <label >Position</label>
    </div>
    </div>
</div>
    <button type="submit" class="btn deep-purple darken-4">Submit</button>
    <router-link to="/" class="btn grey">Cancel</router-link>
    </form>
</div>
</div>
    
</template>

<script>
import db from "./firebaseinit"
export default {
    name: 'Newemployee',
    data(){
        return{
            employee_id:null,
            name:null,
            position:null,
            dept:null
        }
    },
    methods:{
        saveemployee(){
            db.collection('employees').add({
                employee_id:this.employee_id,
                name:this.name,
                dept:this.dept,
                position:this.position
            })
            .then(docref =>
                this.$router.push('/')
            )
            .catch(
                error=> console.log(error)
            )
        }
    }

}
</script>

<style>

</style>
