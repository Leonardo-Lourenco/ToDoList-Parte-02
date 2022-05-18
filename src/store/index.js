import { createStore } from 'vuex'


export default createStore({

  state: {   // São so dados que temos, por exemplo: Objeto , Arrays e etc 
    
    tarefas: [], loading: false


  },
  mutations: {  // OBS: Funções sincronas

    addTarefa(state, payload){

      state.tarefas.push(payload)

    },

    setLoading(state, payload){

      state.loading = payload

    },

    toggleTarefa(state, payload){

      const index = state.tarefas.findIndex(item => item.id === payload.id)
          if (index > -1){
            const checked = !state.tarefas[index].checked;
            //this.$set(this.tarefas, index, { ...this.tarefas[index], checked });
            //this.tarefas[index].checked = checked;
            state.tarefas[index].checked = checked;

          }
    },

    removeTarefa(state, payload){

      const index = state.tarefas.findIndex(item => item.id === payload.id)

      if(index > -1) {

         state.tarefas.splice(index, 1);
        
      }



    },

    // Concluir todas as TAREFAS
    toggleLista(state, tarefaId) {

      const tarefas = state.tarefas.map( i => {

        return tarefaId.includes(i.id) ? { ...i, checked: !i.checked }: i

      })

      state.tarefas = tarefas

      },

      // Remove todas as tarefas da Tela de concluído
      removeLista(state, tarefaId) {

        const tarefas = state.tarefas.filter( item => !tarefaId.includes(item.id))
        state.tarefas = tarefas


      },

    


  },
  actions: {  // OBS: Funções assincronas, ou seja promises e etc 

    addTarefa({ commit }, tarefa ) {

      commit('setLoading', true)
      return new Promise( resolve => {
        setTimeout(() => {
          tarefa.id = Date.now()
          commit('addTarefa', tarefa)
          commit('setLoading', false)
          resolve(tarefa)
        }, 500)
      })

    },

    toggleTarefa({ commit }, tarefa){

      commit('toggleTarefa', tarefa)
      
    },

    removeTarefa({ commit }, tarefa){

      commit('removeTarefa', tarefa)
      
    },

    // Concluir todas as TAREFAS obs: tem mutation
    checkTodas({ commit, state }){

      const uncheckedsId = state.tarefas.filter(i => !i.checked).map(i => i.id);
      commit('toggleLista', uncheckedsId)  // Aqui estamos fazendo o commit da mutation que criamos acima

     

    },

     // Desmarcar  todas as TAREFAS
     uncheckTodas({ commit, state }){

      const checkeds = state.tarefas.filter( i => i.checked).map(i => i.id);
      commit('toggleLista', checkeds)  

    },

    // Remover todas as tarefas painel de concluído  obs: tem mutation
    removeTodas({ commit, state }){

      const checkeds = state.tarefas.filter( i => i.checked).map(i => i.id);
      commit('removeLista', checkeds)  
    },

  },

  modules: {
  },


  // Aqui estamos trabalhando o nosso PAINEL do component Tarefa.vue
  getters : {

    // O s caras que não foram marcados como concluído
    uncheckends ( state ){

      return  state.tarefas.filter(tarefa => tarefa.checked === false )

    },

    // Os caras que marcamos como concluído
    checkeds(state){

      return  state.tarefas.filter(tarefa => tarefa.checked)

    }


  }






})

