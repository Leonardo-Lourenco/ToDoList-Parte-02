import { createStore } from 'vuex'

export default createStore({
  state: {  // São os dados que temos, por exemplo: Objetos, Array e etc

    tarefas: [], loading: false

  },

  mutations: {  // Funções sincronas

    addTarefa(state, payload){

      state.tarefas.push(payload)
      

    },

    setLoading(state, payload){
      state.loading = payload
    },

    toggleTarefa(state, payload) {

      const index = state.tarefas.findIndex(item => item.id === payload.id)
          if (index > -1){
            const checked = !state.tarefas[index].checked;
            //this.$set(this.tarefas, index, { ...this.tarefas[index], checked });
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
    toggleLista(state, tarefaId){

      const tarefas = state.tarefas.map( i => {

        return tarefaId.includes(i.id) ? { ...i, checked: !i.checked}: i
      })

      state.tarefas = tarefas

    },

    // Remover  todas as TAREFAS
    removeLista(state, tarefaId) {

      const tarefas = state.tarefas.filter( item => !tarefaId.includes(item.id))
      state.tarefas = tarefas

    }






  },

  actions: {  //OBS: Funções assincronas, ou seja pode ser promises  e etc

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

    toggleTarefa({ commit }, tarefa ){

      commit('toggleTarefa', tarefa)

    },

    removeTarefa({ commit }, tarefa){

      commit('removeTarefa', tarefa)


    },

    // Cocluir todas as TAREFAS
    checkTodas({ commit, state }){

      const uncheckedsId = state.tarefas.filter( i => !i.checked).map(i => i.id);
      commit('toggleLista', uncheckedsId)



    },

    //Desmarcar TODAS
    uncheckTodas({ commit, state }){

      const checkeds = state.tarefas.filter( i => i.checked).map(i => i.id);
      commit('toggleLista',checkeds )



    },

    removeTodas({ commit, state }){

      const checkeds = state.tarefas.filter( i => i.checked).map(i => i.id);
      commit('removeLista', checkeds)  
    },





  },

  modules: {
  },

  getters: {

    uncheckends ( state ){

      return  state.tarefas.filter(tarefa => tarefa.checked === false )

    },

    checkeds(state){

      return  state.tarefas.filter(tarefa => tarefa.checked)

    }
  }




})
