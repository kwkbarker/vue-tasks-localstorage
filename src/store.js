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
            this.dispatch('tasks/save')
        },

        editTask(state, task) {
            state.all[task.id-1] = task
            this.dispatch('tasks/save')
        },

        deleteTask(state, taskId) {
            state.all.splice([taskId-1], 1)
            this.dispatch('tasks/save')
        }

    },

    actions: {

        // fetch
        fetch(ctx) {
            var str_data =  localStorage.getItem('tasks')
            var arr = JSON.parse(str_data)
            ctx.commit('setTasks', arr)
        },

        save(ctx) {
            const parsed = JSON.stringify(ctx.state.all)
            localStorage.setItem('tasks', parsed)
        }
    },

    getters: {
        count(state) {
            return state.all.length
        }
    }
}

export const store = createStore({
    modules: {
        tasks
    }
})