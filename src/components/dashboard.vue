<template>
<div id='dashboard'>
    <ul class="collection with-header">
        <li class="collection-header">
            <h4>Team Members</h4>
        </li>
           <li class="collection-item" v-for="employee in employees" v-bind:key="employee.id">
         <div class="chip">{{employee.dept}}</div>{{employee.employee_id}} : {{employee.name}}
            
            <router-link class="secondary-content" v-bind:to="{
                name:'viewemployee', params:{employee_id: employee.employee_id}
            }">
                <i class="fa fa-eye"></i>
             </router-link> 
            </li>
    </ul>



    <div class="fixed-action-btn">
        <router-link to="/new" class="btn-floating btn-large deep-purple darken-4">
        <i class="fa fa-plus" />
        </router-link>
    </div>
</div>
</template>

<script>
import db from "./firebaseinit"
export default {
    name:'Dashboard',
    data (){
        return{
            employees:[]
        }
    },
    created (){
        db.collection('employees').orderBy('dept').get().then(
            querySnapshot =>{
                querySnapshot.forEach(doc => {
                    const data={
                        'id':doc.id,
                        'employee_id':doc.data().employee_id,
                        'name':doc.data().name,
                        'dept':doc.data().dept,
                        'position':doc.data().position
                    }
                    this.employees.push(data)
                })
            }
        )
    }

}
</script>

<style>

</style>
