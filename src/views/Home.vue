
<template>
  
   <div class="container grid-xs py-2">
      
     

      <form @submit.prevent="addTarefa(tarefa)">

        <div class="input-group">
          
          <input type="text" v-model="tarefa.description" class="form-input" placeholder="Adicionar Tarefa">
          <button class="btn btn-success input-group-btn "><i class="icon icon-arrow-right"></i> Adicionar </button>
          
        </div>

        
        <ul class="step">

            <li class="step-item active ">
              <a href="#" class="tooltip" data-tooltip="Step 1">Step 1</a>
            </li>

            <li class="step-item">
              <a href="#" class="tooltip" data-tooltip="Step 2">Step 2</a>
            </li>

            <li class="step-item">
              <a href="#" class="tooltip" data-tooltip="Step 3">Step 3</a>
             </li>

            <li class="step-item">
              <a href="#" class="tooltip" data-tooltip="Step 4">Step 4</a>
            </li>

        </ul>

      </form>


       <div class="tarefa-list" >
          
       <tarefa v-for="t in tarefas" :key="t.id" @toggle="toggleTarefa" @remove="removeTarefa" :tarefa="t"/>
       

       </div>

  </div>



</template>




<script>

   import Tarefa from '@/components/Tarefa'
  

    export default {

      name: 'App',

      components: { 
        
        Tarefa 
        
      },

      data() {
        return { tarefas: [], tarefa: { checked: false } };

      },

      methods: {

        addTarefa(tarefa) {
        tarefa.id = Date.now();
        this.tarefas.push(tarefa);
        this.tarefa = { checked: false };
        },

        toggleTarefa (tarefa) {

          const index = this.tarefas.findIndex(item => item.id === tarefa.id)
          if (index > -1){
            const checked = !this.tarefas[index].checked;
            //this.$set(this.tarefas, index, { ...this.tarefas[index], checked });
            this.tarefas[index].checked = checked;
            

          }

        },

        removeTarefa(tarefa) {

          const index = this.tarefas.findIndex(item => item.id === tarefa.id)

          if(index > -1) {

             this.tarefas.splice(index, 1);
            
          }

        }

      }

    };

</script>



<style scoped>


    .tarefa-list {
      padding-top: 2rem;
    }

  
</style>