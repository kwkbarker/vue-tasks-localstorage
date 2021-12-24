import { createStore } from 'vuex'

// module: tasks
const tasks = {
    namespaced: true,

    state() {
        return {
            all: []
        }
    },

    mutations: {
        setTasks(state, tasks) {
            console.log(tasks)
            state.all = tasks
        }

    },

    actions: {

        // fetch
        fetch(ctx) {
            console.log('fetch')
            var str_data =  localStorage.getItem('tasks')
            var arr = JSON.parse(str_data)
            console.log(arr)

            // for (let i = 0; i < arr.length; i++) {
            //     ctx.commit(arr[i])
            // }
            ctx.commit('setTasks', arr)
        }
    },
}

export const store = createStore({
    modules: {
        tasks
    }
})