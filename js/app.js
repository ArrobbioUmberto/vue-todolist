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
        inputValue: ''
        
    }
  },
  methods: {
      addTask() {
        let text = this.inputValue.trim()
        if (text == ''){
            return
        }
          const newTask = {
            text: this.inputValue,
            done: false,
          }
          this.tasks.push(newTask)
          this.inputValue = ''
          console.log(this.tasks)
      },
      removeTask(startIndex) {
          console.log(
              'elimino il task con indice:',
              startIndex,
              this.tasks[startIndex]
          )
          this.tasks.splice(startIndex, 1)
      },
      changeColor (startIndex){
         if(this.tasks[startIndex].done === true){
            this.tasks[startIndex].done = false
        } else {
            this.tasks[startIndex].done = true
        }
      }
  }
}).mount('#app')