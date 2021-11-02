Vue.config.devtools = true;

window.addEventListener("DOMContentLoaded", function (){
    const app = new Vue ({
        el :"#vueapp",
        data:{
            taskToDo:[{
                text:"prendi il pane",
                controllo: false,
                color: "#cb3234" ,
            },
            {
                text:"prendi le mele",
                controllo: false,
                color: "#cb3234"
            },
            {
                text:"prendi il sugo",
                controllo: false,
                color:"#cb3234"
            }],

            newTask:"",
            newColor:""
        },

        methods:{

            generateNewElement(){

                if(this.newTask ===""){
                    return
                }

                let result = this.taskToDo.some((elemento) =>{
                    return elemento.text.toLowerCase() === this.newTask.trim().toLowerCase()
                })
                if (result){
                    return
                }
                this.taskToDo.push({ 
                    text:this.newTask.toLowerCase(),
                    color:this.newColor,
                
                })
                this.newTask = "";
                
            },

            deleteElement(indiceElementi){
                this.taskToDo.splice(indiceElementi, 1);

            }

        }

    })


})