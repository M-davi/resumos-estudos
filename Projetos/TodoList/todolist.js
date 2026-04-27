    //Falta documenta para jogar no github
//entender cada parte do código.

const btnAdd = document.getElementById('addTask');
const entradaTarefas = document.getElementById('entradaTarefas');
const listaTarefas = document.getElementById('listaTarefas');
const dados = localStorage.getItem('tasks');
//o código abaixo tenta recuperar a lista de tarefas armazenada no localStorage do navegador 
// usando a chave "tasks". Se houver dados armazenados, ele os analisa de volta para um array 
// de objetos usando JSON.parse e os atribui à variável tasks. Caso contrário, se não houver 
// dados armazenados, a variável tasks é inicializada como um array vazio ([]), permitindo que
//  o aplicativo funcione normalmente mesmo sem tarefas pré-existentes.
const tasks = dados ? JSON.parse(dados): [];

//keydown é um evento que ocorre quando uma tecla é pressionada, nesse caso, 
// quando o usuário pressiona a tecla "Enter" enquanto está focado no campo 
// de entrada de tarefas, o código simula um clique no botão de adicionar tarefa (btnAdd), 
// o que aciona a função associada ao evento de clique do botão, permitindo que o usuário 
// adicione uma nova tarefa à lista sem precisar clicar manualmente no botão.
entradaTarefas.addEventListener("keydown",function(event){
    if (event.key === "Enter"){
        btnAdd.click();
    }
});

/*A função salvarTasks é responsável por salvar a lista de tarefas (tasks) no armazenamento
 local do navegador (localStorage). Ela converte a lista de tarefas em uma string JSON usando
 JSON.stringify e a armazena com a chave "tasks". Isso permite que as tarefas sejam persistidas
 mesmo após o usuário fechar ou recarregar a página, garantindo que as tarefas adicionadas 
 sejam mantidas para futuras visitas ao aplicativo.*/
function salvarTasks(){
    localStorage.setItem("tasks",JSON.stringify(tasks));
}


btnAdd.addEventListener("click",function(){
    const valor = entradaTarefas.value.trim(); //trim para retirar os espaços em branco no início e no final 
    // do texto digitado pelo usuário. Isso ajuda a evitar que tarefas sejam adicionadas com espaços extras, 
    // o que pode causar confusão ou dificultar a leitura da lista de tarefas.

    // O método some() é usado para verificar se já existe uma tarefa com o mesmo texto na lista de
    //  tarefas (tasks). Ele percorre cada tarefa na lista e retorna true se encontrar uma tarefa cujo 
    // texto seja igual ao valor que o usuário está tentando adicionar. Se alguma tarefa já tiver o mesmo
    //  texto, a função exibe um alerta informando que a tarefa já existe e não adiciona a nova tarefa à
    //  lista. Caso contrário, a nova tarefa é adicionada normalmente.
    if (tasks.some(tarefas => tarefas.texto === valor)){
        alert('Essa tarefa já existe.')
    }else{
        tasks.push({
            texto: valor,
            concluido:false
        });
        entradaTarefas.value='';//redefine o valor do campo de entrada para uma string vazia, limpando o campo após a adição de uma nova tarefa.
        salvarTasks();
        Renderizador(tasks);  
    }
});


// A função Renderizador é responsável por atualizar a interface do usuário para refletir a lista de tarefas atual. Ela começa limpando o conteúdo
//  da lista de tarefas (listaTarefas.innerHTML = '') para garantir que a lista seja reconstruída do zero. Em seguida, ela percorre cada tarefa na
//  lista de tarefas (tasks) e cria elementos HTML correspondentes para exibir cada tarefa, incluindo uma caixa de seleção para marcar a tarefa como
//  concluída, um span para mostrar o texto da tarefa e um botão para remover a tarefa. A função também adiciona event listeners para lidar com as
//  interações do usuário, como marcar uma tarefa como concluída ou remover uma tarefa da lista. Por fim, os elementos criados são adicionados à 
// lista de tarefas na interface do usuário.    
function Renderizador(tasks){
    listaTarefas.innerHTML=''; //limpa a lista 
    for (let i=0; i < tasks.length;i++){
        const li = document.createElement('li');

        const checkBox = document.createElement('input');
        checkBox.type = "checkbox";//define o tipo do elemento como checkbox, permitindo que ele seja usado para marcar ou desmarcar uma tarefa como concluída.
        checkBox.checked = tasks[i].concluido; //define o estado inicial da caixa de seleção com base na propriedade "concluido" da tarefa correspondente. Se a tarefa estiver marcada como concluída, a caixa de seleção será marcada; caso contrário, ela ficará desmarcada. 
        checkBox.addEventListener("change",(event)=>{
            tasks[i].concluido = event.target.checked;//atualiza a propriedade "concluido" da tarefa correspondente com base no estado atual da caixa de 
            // seleção. Se a caixa de seleção for marcada, a tarefa será marcada como concluída; se for desmarcada, a tarefa será marcada como não concluída. 
            Renderizador(tasks);
            salvarTasks();
        });
        
    
        const spanText = document.createElement('span');
        spanText.textContent = tasks[i].texto;
        if (tasks[i].concluido){
                spanText.style.textDecoration = "line-through";
            }else{
                spanText.style.textDecoration = 'none';
                
            }
        const btnRemove = document.createElement('button');
        btnRemove.textContent = "remover tarefa";

        btnRemove.addEventListener('click',function(){
            tasks.splice(i,1);
            Renderizador(tasks);
            salvarTasks();// chamei a atualização dentro dela mesma, mas ela ocorre depois do for já ter sido feito, ou seja ela tecnica não é feita enquanto o loop está rolando.
        });
        

        // O método forEach é usado para iterar sobre um array de elementos (checkBox, spanText, btnRemove) e executar uma função para cada elemento.
        [checkBox,spanText,btnRemove].forEach(element => {
            li.appendChild(element);
        });
        listaTarefas.appendChild(li);
    }
}
//adicionar tasks dentro da lista
Renderizador(tasks);
