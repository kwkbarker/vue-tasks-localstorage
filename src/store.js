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
            state.all = tasks
        },

        addTask(state, task) {
            state.all.push(task)
        },

        editTask(state, task) {
            post = state.all.find(x => {
                return x.id === task.id
            })
            post = task
        },

    },

    actions: {

        // fetch
        fetch(ctx) {
            var str_data =  localStorage.getItem('tasks')
            var arr = JSON.parse(str_data)
            ctx.commit('setTasks', arr)
        },

        save(ctx) {
            const parsed = JSON.stringify(ctx.all)
            localStorage.setItem('tasks', parsed)
        }
    },

    getters: {
        count: state => {
            return state.all.length
        }
    }
}

export const store = createStore({
    modules: {
        tasks
    }
})