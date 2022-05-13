<template>
  
    
  <div class="" id="app">

     <div class="container grid-xs py-2">

        <header class="navbar">

              <section class="navbar-section">
              <router-link to="/" class="btn btn-link "> Home </router-link>
              <router-link to="/display" class="btn btn-link"> Tarefas </router-link>
              <img class="img-responsive" src="@/assets/task.png" alt="CoffeeTagTodo">
              <a href="#" class="btn btn-link"> GitHub </a>
              <a href="#" class="btn btn-link"> YouTube </a>

            </section>
          
            
        </header>

      </div>

   <router-view />

  </div>

</template>

<script>

 


</script>


<style scoped>

    img {

      max-width: 100px; 
      margin: 0 auto;

    }

   
  
</style>


