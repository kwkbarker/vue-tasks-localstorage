import { looseIndexOf } from '@vue/shared'
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

        editTask(state, newTask) {
            console.log(newTask)
            console.log(state.all[newTask.id-1])
            state.all[newTask.id-1] = newTask
        },

        deleteTask(state, taskId) {
            state.all.splice([taskId-1], 1)
        },

        fixIds(state) {
            for (var i = 0; i < state.all.length; i++){
                state.all[i].id = i + 1
            }
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
        },

        lastNum(state) {
            if (state.all.length > 0) {
                return state.all[state.all.length - 1].id
            } else {
                return 0
            }
        }
    }
}

export const store = createStore({
    modules: {
        tasks
    }
})