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

        ]
           }
  }
}).mount('#app')