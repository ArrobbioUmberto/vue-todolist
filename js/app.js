console.log('ciao')


const { createApp } = Vue

createApp({
  data() {
    return {
            tasks:[ 
                {
                text:'Fare la spesa',
                done: true,
            },
            {
                text: 'Pulire i pavimenti',
                done: true,
            },
            {
                text: 'Lavare i piatti',
                done: true,
            },
            {
                text: 'Pagare assicurazione',
                done: false,
            },
            {
                text: 'Leggere le mail',
                done: false,
            },
            {
                text: 'Andare dal parrucchiere',
                done: false,
            },
            {
                text: 'Aggiornare PC',
                done: false,
            },

        ],
        nuovaTask:{
            text: '',
            done: false,
        },
        
    }
  },
  methods: {
    addTask () {
      console.log('add tasks:', this.nuovaTask) 
      const newTask = this.nuovaTask
      this.tasks.push(newTask)
      console.log(this.tasks)
    },
      removeTask(startIndex) {
          console.log(
              'elimino il task con indice:',
              startIndex,
              this.tasks[startIndex]
          )
          this.tasks.splice(startIndex, 1)
      }
}
}).mount('#app')