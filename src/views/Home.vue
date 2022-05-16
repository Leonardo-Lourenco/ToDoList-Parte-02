
<template>
  
   <div class="container grid-xs py-2">
      
     

      <form @submit.prevent="addTarefa(tarefa)">

        <div class="input-group">
          
          <input type="text" v-model="tarefa.description" class="form-input" placeholder="Adicionar Tarefa">
          <button class="btn btn-success input-group-btn "  :class="{ loading }"><i class="icon icon-arrow-right"></i> Adicionar </button>
          
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

        return { tarefa: { checked: false } };

      },

      computed: {

        tarefas() {
          return this.$store.state.tarefas;
        },

        loading() {
          return this.$store.state.loading;
        }

      },

      methods: {

        async addTarefa(tarefa) {

          await this.$store.dispatch("addTarefa", tarefa);
          this.tarefa = { checked: false };

        },

        toggleTarefa (tarefa) {

          this.$store.dispatch("toggleTarefa", tarefa);

        },

        removeTarefa(tarefa) {

          this.$store.dispatch("removeTarefa", tarefa);
          
        }

      }

    };

</script>



<style scoped>


    .tarefa-list {
      padding-top: 2rem;
    }

  
</style>