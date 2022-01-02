<template>
    <div
        v-if="editShow"
    >
            <task-input
                :edit="edit"
                :title="task.title"
                :description="task.description"
                v-model:newTitle="newTask.newTitle"
                v-model:newDescription="newTask.newDesc"
                v-model:danger="danger"
                v-model:warning="warning"
                v-model:secondary="secondary"
            />
            <button @click="editTask">
                Submit
            </button>
        
    </div>
    
</template>

<script>
import TaskInput from './TaskInput.vue'
export default {
    emits: ['editTask'],
    components: {
        TaskInput
    },

    props: {
        editShow: {
            type: Boolean
        },
        task: {
            title: String,
            description: String
        },
    },

    data() {
        return {
            newTask: {
                newTitle: null,
                newDesc: null,
                newImport: null
            },
            danger: null,
            warning: null,
            secondary: null,

            edit: true
        }
    },

    methods: {
        editTask() {

            if (this.danger) {
                this.newTask.newImport = "danger"
            } else if (this.warning) {
                this.newTask.newImport = "warning"
            } else if (this.secondary) {
                this.newTask.newImport = "secondary"
            }
            this.$emit('editTask', {
                title: this.newTask.newTitle,
                description: this.newTask.newDesc,
                importance: this.newTask.newImport
            })
        },
    }
    
}
</script>

<style scoped>

</style>