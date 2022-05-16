<template>

    <div class="tile flex-centured" :class="{ checked: tarefa.checked}">

        <dir class="tile-content">

            <div class="tile-subtitle">  {{ tarefa.description }}</div>
            

        </dir>

        <div class="tile-action">

            <button @click="$emit('toggle', tarefa)" class="btn btn-primary"> 
                <span v-if="tarefa.checked"> Desmarcar </span>
                <span v-else> Concluido </span>
                
                
            </button>

            <button @click="$emit('remove', tarefa)" class="btn btn-error"> Remover  </button>




        </div>


    </div>
    
</template>


<script>
    export default {
        name: "Tarefa",
        props: {
            tarefa: { type: Object, required: true}
        }
    };
</script>


<style scoped>

    .checked {
        text-decoration: line-through;
        color: lightslategray;
    }

</style>