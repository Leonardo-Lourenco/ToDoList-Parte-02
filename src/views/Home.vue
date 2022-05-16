
<template>
  
   <div class="container grid-xs py-2">
      
     

      <form @submit.prevent="incluirTarefa(tarefa)">

        <div class="input-group">
          
          <input type="text" v-model="tarefa.description" class="form-input" placeholder="Adicionar Tarefa">
          <button class="btn btn-success input-group-btn " :class="{ loading }"><i class="icon icon-arrow-right"></i> Adicionar </button>
          
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
   import { mapActions, mapState  } from 'vuex';
  

    export default {

      name: 'App',

      components: { 
        
        Tarefa 
        
      },

      data() {

        return { tarefa: { checked: false } };

      },

      computed: {

         ...mapState(['tarefas', 'loading']),
 

      },

      methods: {

        ...mapActions(['addTarefa', 'toggleTarefa', 'removeTarefa']),

        // OBS: Este método fizemos ele lá no VUEEX
        async incluirTarefa(tarefa) {

          await this.addTarefa(tarefa);
          this.tarefa = { checked: false }; // alteração no estado local
 
        },

      

      }

    };

</script>



<style scoped>


    .tarefa-list {
      padding-top: 2rem;
    }

  
</style>