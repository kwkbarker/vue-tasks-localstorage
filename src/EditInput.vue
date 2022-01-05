<template>
    <div :id="editWindowName" class="modal fade">
        <div class='modal-dialog modal-lg'>
            <div class="modal-content">
                <div class='modal-header'>
                    <h4 style="color: black;">Edit Task</h4>
                    <button type="button" class="close" data-bs-dismiss='modal'>
                        &times;
                    </button>
                </div>

                <div class='modal-body'>
                    <task-input
                        :edit="edit"
                        :task="task"
                        v-model:title="newTask.newTitle"
                        v-model:description="newTask.newDesc"
                        v-model:danger="danger"
                        v-model:warning="warning"
                        v-model:secondary="secondary"
                    />
                
                    <button
                        data-bs-dismiss="modal"
                        @click="editTask"
                    >
                        Submit
                    </button>
                </div>
            </div>
        </div>
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
                console.log('danger')
                this.newTask.newImport = "danger"
            } else if (this.warning) {
                console.log('warning')
                this.newTask.newImport = "warning"
            } else if (this.secondary) {
                console.log('secondary')
                this.newTask.newImport = "secondary"
            }
            this.$emit('editTask', {
                title: this.newTask.newTitle,
                description: this.newTask.newDesc,
                importance: this.newTask.newImport
            })
        },
    },

    computed: {
        editWindowName() {
            return "editWindow" + this.task.id
        }
    }
    
}
</script>

<style scoped>

</style>