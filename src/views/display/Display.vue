<template>
    

     <ul class="step">

            <li class="step-item">
              <a href="#" class="tooltip" data-tooltip="Step 1">Step 1</a>
            </li>

            <li class="step-item active ">
              <a href="#" class="tooltip" data-tooltip="Step 2">Step 2</a>
            </li>

            <li class="step-item">
              <a href="#" class="tooltip" data-tooltip="Step 3">Step 3</a>
             </li>

            

     </ul>

    <div class="container-board ">

    

        <div class="columns">


             <!-- SEÇÃO A FAZER -->

            <div class="column col-4">

                 <div class="panel">

                        <div class="panel-header">
                            <div class="panel-title">A Fazer</div>
                        </div>

                        <div class="panel-nav">
                            <!-- navigation components: tabs, breadcrumbs or pagination -->
                        </div>

                        <div class="panel-body">
                            <!-- contents -->
                        </div>

                        <div class="panel-footer">
                            <!-- buttons or inputs -->
                        </div>

               </div>



            </div>

            
             <!-- SEÇÃO CONCLUÍDO -->

            <div class="column col-4">

                 <div class="panel">

                        <div class="panel-header">
                            <div class="panel-title">Concluído</div>
                        </div>

                        <div class="panel-nav">
                            <!-- navigation components: tabs, breadcrumbs or pagination -->
                        </div>

                        <div class="panel-body">
                            <!-- contents -->
                        </div>

                        <div class="panel-footer">
                            <!-- buttons or inputs -->
                        </div>

               </div>



            </div>

            
              <!-- SEÇÃO OBS -->

             <div class="column col-4">

                 <div class="panel">

                        <div class="panel-header">
                            <div class="panel-title"> Observações</div>
                        </div>

                        <div class="panel-nav">
                            <!-- navigation components: tabs, breadcrumbs or pagination -->

                             <div class="input-group">
          
                                <input type="text"  class="form-input" placeholder="Adicionar Lembrete">
                                <button class="btn btn-success input-group-btn ">
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


export default {

    


};
   
</script>


<style scoped>

    .container-board {
        height: calc( 100vh - 100px);
        padding: 15px;
        margin: 0px 100px 0px 100px; /* topo | direita | inferior | esquerda */
    }

    .columns{
        height: 100%;
    }

    .columns .column .panel {

        height: 100%;
        border: 0px;
        box-shadow: 0 0.25rem 1rem rgba(63, 127 , 191, 1);
    }

    .input-group {
        padding: 0px 10px 0px 10px; /* topo | direita | inferior | esquerda */
    }

    

</style>
