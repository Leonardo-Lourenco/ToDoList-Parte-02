<template>

    <ul class="step">

            <li class="step-item ">
              <a href="#" class="tooltip" data-tooltip="Step 1">Step 1</a>
            </li>

            <li class="step-item active">
              <a href="#" class="tooltip" data-tooltip="Step 2">Step 2</a>
            </li>

            <li class="step-item">
              <a href="#" class="tooltip" data-tooltip="Step 3">Step 3</a>
             </li>

            

        </ul>


        <div class="container-board">

            <div class="columns">


                <!-- SEÇÃO A FAZER  -->

                <div class="column col-4">

                    <div class="panel">

                            <div class="panel-header">
                                <div class="panel-title"> A fazer</div>
                            </div>

                            <div class="panel-nav">
                                <!-- navigation components: tabs, breadcrumbs or pagination -->
                            </div>

                            <div class="panel-body">
                                <!-- contents -->

                                <tarefa v-for="tarefa in  uncheckends"  :tarefa="tarefa"  @toggle="toggleTarefa" @remove="removeTarefa" :key="tarefa.id" />



                            </div>

                            <div class="panel-footer">
                                <!-- buttons or inputs -->

                                <button @click="checkTodas" 
                                v-if="uncheckends.length > 0"
                                class="btn btn-success"> Concluir Todas </button>
                            </div>

                    </div>
                </div>


                 <!-- SEÇÃO CONCLUÍDO   -->

                 <div class="column col-4">
                    
                    <div class="panel">

                            <div class="panel-header">
                                <div class="panel-title"> Concluído </div>
                            </div>

                            <div class="panel-nav">
                                <!-- navigation components: tabs, breadcrumbs or pagination -->
                            </div>

                            <div class="panel-body">
                                <!-- contents -->

                                <tarefa v-for="tarefa in checkeds"  :tarefa="tarefa"  @toggle="toggleTarefa" @remove="removeTarefa" :key="tarefa.id" />

                            </div>

                            <div class="panel-footer">
                                <!-- buttons or inputs -->


                                <button @click="uncheckTodas" 
                                v-if="checkeds.length > 0"
                                class="btn btn-success"> Desmarcar Todas </button>

                                <button @click="removeTodas" 
                                v-if="checkeds.length > 0"
                                class="btn btn-error"> Remover Todas </button>


                            </div>

                    </div>
                </div>


                 <!-- SEÇÃO OBSERVAÇÕES   -->

                <div class="column col-4">
                    
                    <div class="panel">

                            <div class="panel-header">
                                <div class="panel-title"> Observações  </div>
                            </div>

                            <div class="panel-nav">
                                <!-- navigation components: tabs, breadcrumbs or pagination -->

                                <div class="input-group">
          
                                        <input type="text" class="form-input" placeholder="Adicionar Lembrete">
                                        <button class="btn btn-success input-group-btn " >
                                        <i class="icon icon-arrow-right"></i> Adicionar </button>
                        
                                </div>


                            </div>

                            <div class="panel-body">
                                <!-- contents -->
                            </div>

                            <div class="panel-footer">
                                <!-- buttons or inputs -->
                            </div>

                    </div>
                </div>




                </div>



        </div>


   
</template>

<script>

    import Tarefa from '@/components/Tarefa';
    import { mapGetters, mapActions } from 'vuex';

    export default { 

        name: 'App',

        components: { 
            
            Tarefa 
            
        },
        
            
        computed: {
            
            ...mapGetters(['uncheckends', 'checkeds']),
        },

        methods : {

            ...mapActions(['removeTarefa', 'toggleTarefa', 'checkTodas', 'uncheckTodas' , 'removeTodas']),
        }



    };

</script>





<style scoped>

    .container-board{
        height: calc(100vh - 100px);
        padding: 15px;
        margin: 0px 100px 0px 100px;
    }

    .columns{
        height: 100%;
    }

    .columns .column .panel {
        height: 100%;
        border: 0px;
        box-shadow: 0 0.25rem 1rem rgba(63, 127, 191, 1);
    }

    .input-group {
        padding: 0px 10px 0px 10px;
    }
   

</style>
