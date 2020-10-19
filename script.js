const startGeneral1 = document.getElementById('easy-General')
const startGeneral2 = document.getElementById('medium-General')
const startGeneral3 = document.getElementById('hard-General')

const startPublications1 = document.getElementById('easy-Publications')
const startPublications2 = document.getElementById('medium-Publications')
const startPublications3 = document.getElementById('hard-Publications')

const startChemistry1 = document.getElementById('easy-Chemistry')
const startChemistry2 = document.getElementById('medium-Chemistry')
const startChemistry3 = document.getElementById('hard-Chemistry')

const startBiology1 = document.getElementById('easy-Biology')
const startBiology2 = document.getElementById('medium-Biology')
const startBiology3 = document.getElementById('hard-Biology')

const startPhysics1 = document.getElementById('easy-Physics')
const startPhysics2 = document.getElementById('medium-Physics')
const startPhysics3 = document.getElementById('hard-Physics')

const startMath1 = document.getElementById('easy-Math')
const startMath2 = document.getElementById('medium-Math')
const startMath3 = document.getElementById('hard-Math')

const startMedicine1 = document.getElementById('easy-Medicine')
const startMedicine2 = document.getElementById('medium-Medicine')
const startMedicine3 = document.getElementById('hard-Medicine')

const startGeography1 = document.getElementById('easy-Geography')
const startGeography2 = document.getElementById('medium-Geography')
const startGeography3 = document.getElementById('hard-Geography')

const restartButton = document.getElementById('restart-btn')
const newRoundButton= document.getElementById('new-round-btn')
const nextButton = document.getElementById('next-btn')
const quizAreaElement = document.getElementById('quizArea')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

const scoreButton1=document.getElementById('score1')
const scoreButton2=document.getElementById('score2')
const scoreButton1r=document.getElementById('score1r')
const scoreButton2r=document.getElementById('score2r')

let score1=0;
let score1valued=0;
let score2=0;
let score2valued=0;
let counterInRound=0;
let counterOfRound=0;
let value;
let timeInterval;
let time=25;
var audio=new Audio('audio/reloj-tic-tac.mp3');
audio.loop=true;

let shuffledQuestions, currentQuestionIndex
startGeneral1.addEventListener('click', function(){startGame(questionsG1),startGeneral1.parentNode.removeChild(startGeneral1)})
startGeneral2.addEventListener('click', function(){startGame(questionsG2),startGeneral2.parentNode.removeChild(startGeneral2)})
startGeneral3.addEventListener('click', function(){startGame(questionsG3),startGeneral3.parentNode.removeChild(startGeneral3)})

startPublications1.addEventListener('click', function(){startGame(questionsP1),startPublications1.parentNode.removeChild(startPublications1)})
startPublications2.addEventListener('click', function(){startGame(questionsP2),startPublications2.parentNode.removeChild(startPublications2)})
startPublications3.addEventListener('click', function(){startGame(questionsP3),startPublications3.parentNode.removeChild(startPublications3)})

startChemistry1.addEventListener('click', function(){startGame(questionsC1),startChemistry1.parentNode.removeChild(startChemistry1)})
startChemistry2.addEventListener('click', function(){startGame(questionsC2),startChemistry2.parentNode.removeChild(startChemistry2)})
startChemistry3.addEventListener('click', function(){startGame(questionsC3),startChemistry3.parentNode.removeChild(startChemistry3)})

startBiology1.addEventListener('click', function(){startGame(questionsB1),startBiology1.parentNode.removeChild(startBiology1)})
startBiology2.addEventListener('click', function(){startGame(questionsB2),startBiology2.parentNode.removeChild(startBiology2)})
startBiology3.addEventListener('click', function(){startGame(questionsB3),startBiology3.parentNode.removeChild(startBiology3)})

startPhysics1.addEventListener('click', function(){startGame(questionsPhy1),startPhysics1.parentNode.removeChild(startPhysics1)})
startPhysics2.addEventListener('click', function(){startGame(questionsPhy2),startPhysics2.parentNode.removeChild(startPhysics2)})
startPhysics3.addEventListener('click', function(){startGame(questionsPhy3),startPhysics3.parentNode.removeChild(startPhysics3)})

startMath1.addEventListener('click', function(){startGame(questionsM1),startMath1.parentNode.removeChild(startMath1)})
startMath2.addEventListener('click', function(){startGame(questionsM2),startMath2.parentNode.removeChild(startMath2)})
startMath3.addEventListener('click', function(){startGame(questionsM3),startMath3.parentNode.removeChild(startMath3)})

startMedicine1.addEventListener('click', function(){startGame(questionsMed1),startMedicine1.parentNode.removeChild(startMedicine1)})
startMedicine2.addEventListener('click', function(){startGame(questionsMed2),startMedicine2.parentNode.removeChild(startMedicine2)})
startMedicine3.addEventListener('click', function(){startGame(questionsMed3),startMedicine3.parentNode.removeChild(startMedicine3)})

startGeography1.addEventListener('click', function(){startGame(questionsGeo1),startGeography1.parentNode.removeChild(startGeography1)})
startGeography2.addEventListener('click', function(){startGame(questionsGeo2),startGeography2.parentNode.removeChild(startGeography2)})
startGeography3.addEventListener('click', function(){startGame(questionsGeo3),startGeography3.parentNode.removeChild(startGeography3)})

restartButton.addEventListener('click',restarter)
newRoundButton.addEventListener('click',newRound)
clock.addEventListener('click',temporizer)

nextButton.addEventListener('click', () => {
  document.getElementById('answer-buttons').classList.remove('no-click');
  Timer.innerText=25;
  Timer.classList.add('hide')
  Timer.style.color='black';
  clock.classList.remove('hide')
  currentQuestionIndex++
  setNextQuestion()
})

function temporizer(){
  time=25;
  clock.classList.add('hide')
  Timer.classList.remove('hide')
  audio.play()
  timeInterval=setInterval(()=>{
    time--;
    Timer.innerText=time;
    if (time<=10){
      Timer.style.color='red';
    }
    if(time<=0){
      Timer.innerText='¡Contesta!';
    }
  },1000)
}
function startGame(database) {
  Timer.innerText=25;
  Team1r.value=Team1.value;
  Team2r.value=Team2.value;

  features.classList.add('hide')
  shuffledQuestions = database.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  quizAreaElement.classList.remove('hide')
  quizAreaElement.classList.add('flexi')
  if (database[0].difficulty==1){
    value=100;
  }
  if (database[0].difficulty==2){
    value=200;
  }
  if (database[0].difficulty==3){
    value=300;
  }
  setNextQuestion()
}
function restarter(){
  Timer.innerText=25;
  Timer.style.color='black';
  restartButton.classList.add('hide')
  quizAreaElement.classList.add('hide')
  quizAreaElement.classList.remove('flexi')
  features.classList.remove('hide')
  document.getElementById('answer-buttons').classList.remove('no-click');
  Timer.innerText=time;
  Timer.classList.add('hide')
  clock.classList.remove('hide')
  score1=0;
  score2=0;
  if (counterInRound==6){
    endOfRound()
  }
}
function endOfRound(){
  counterInRound=0;
  counterOfRound++;
  score1valued=0;
  score2valued=0;

  categoryArea.classList.add('hide')
  newRoundButton.classList.remove('hide')

}
function newRound(){
  categoryArea.classList.remove('hide')
  newRoundButton.classList.add('hide')
  scoreButton1.innerText=0;
  scoreButton1r.innerText=0;
  scoreButton2.innerText=0
  scoreButton2r.innerText=0;
  Team1.value="";
  Team2.value="";
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn-question')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.getElementById('quizArea'))
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.getElementById('quizArea'), correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (2 > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    if (shuffledQuestions.lengt > currentQuestionIndex + 1){
      restartButton.innerText = 'Restart'
    } else{
      restartButton.classList.remove('hide')
    }
  }
  if (selectedButton.dataset=correct && currentQuestionIndex==0){
    score1++;
    score1valued=score1valued+score1*value;
    scoreButton1r.innerText=score1valued;
    scoreButton1.innerText=score1valued;
  }
  if (selectedButton.dataset=correct && currentQuestionIndex==1){
    score2++;
    score2valued=score2valued+score2*value;
    scoreButton2r.innerText=score2valued;
    scoreButton2.innerText=score2valued;
  }
  document.getElementById('answer-buttons').classList.add('no-click');
  counterInRound++
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
  clearInterval(timeInterval);
  audio.pause()
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

// #FF0000                     Generales

const questionsG1=
[
// #FF0000                   Generales
{
category: 'Generales',
question: 'Es conocido como el padre del psicoanálisis',
difficulty:'1',
answers: [
{ text: 'A) Sigmund Freud', correct: true },
{ text: 'B) Pasteur', correct: false },
{ text: 'C) Whilhem Wundt', correct: false },
{ text: 'D) Moore', correct: false }
]
},
{
category: 'Generales',
question: '¿A que se debe que en nuestro planeta hay meses que son más frios?',
difficulty:'1',
answers: [
{ text: 'A) A las estaciones del año.', correct: false },
{ text: 'B) El invierno sucede cuando, la tierra está en el perihelio de su orbita hacia el sol, es decir en su punto más alejado.', correct: false },
{ text: "C) El invierno sucede cuando, la tierra está en el afelio de su orbita hacia el sol, es decir en su punto más alejado.", correct: false },
{ text: 'D) Debido a la inclinación del eje terrestre.', correct:true}
]
}
];
const questionsG2=
[
// #FF0000                   Generales Check
{
category: 'Generales',
question: ' ¿Cuáles son los cinco tipos de sabores primarios?',
difficulty:'2',
answers: [
{ text: 'A) Totalmente correcto', correct: true },
{ text: 'B) No es así del todo :(', correct: false }
]
},
{
category: 'Generales',
question: '¿Qué función tiene el Flúor en una pasta dental?',
difficulty:'2',
answers: [
{ text: 'A) Totalmente correcto', correct: true },
{ text: 'B) No es así del todo :(', correct: false }
]
},
{
category: 'Generales',
question: '¿Cuál es la diferencia entre una charla de ciencia y una charla de divulgación científica? (Pregunta abierta)',
difficulty:'2',
answers: [
  { text: 'A) Totalmente correcto', correct: true },
  { text: 'B) No es así del todo :(', correct: false }
]
}
];

const questionsG3=
[
// #FF0000                  Generales
{
category: 'Generales',
question: '¿Qué enfermedad padeció Stephen Hawking?',
difficulty:'3',
answers: [
{ text: 'A) Totalmente correcto', correct: true },
{ text: 'B) No es así del todo :(', correct: false }
]
},
{
category: 'Generales',
question: '¿Quién desarolló la primer vacuna en la Historia?',
difficulty:'3',
answers: [
{ text: 'A) Robert Koch', correct: false },
{ text: 'B) Louis Pasteur', correct: false },
{ text: 'C) Edward Jenner', correct: true },
{ text: 'D) Mendel', correct: false }
]
}
];


// #FF0000                   Publicaciones    Check
const questionsP1=
[
{
category: 'Publicaciones',
question: 'Son ejemplos de células',
difficulty:'1',
answers: [
{ text: 'A) Neuronas, espermatozoides y óvulos', correct: true },
{ text: 'B) Proteínas, carbohidratos y Vitaminas', correct: false },
{ text: 'C) Estrógenos, dopamina y melatonina', correct: false },
{ text: 'D) E.coli, Enterobacter aerogenes y Salmonella typhi', correct: false }
]
},
{
category: 'Publicaciones',
question: '¿Qué elementos descubrieron Marie y Pierre Curie?',
difficulty:'1',
answers: [
{ text: 'A) Polonio y Radio', correct: true },
{ text: 'B) Pierrio y Curio', correct: false },
{ text: 'C) Mercurio y Polonio', correct: false },
{ text: 'D) Uranio y Curio', correct: false }
]
},
{
category: 'Publicaciones',
question: 'Marie Curie ganó dos veces el premio Nobel, ¿en qué disciplinas?',
difficulty:'1',
answers: [
{ text: 'A) Ambos en física', correct: false },
{ text: 'B) En Física y Química', correct: true },
{ text: 'C) En Química y Medicina', correct: false },
{ text: 'D) En Física y Matemáticas', correct:false}
]
},
{
category: 'Publicaciones',
question: 'Menciona el nombre de un astronauta hispano de la NASA',
difficulty:'1',
answers: [
{ text: 'A) Totalmente correcto', correct: true },
{ text: 'B) No es así del todo :(', correct: false }
]
},
{
category: 'Publicaciones',
question: 'El genoma de un ajolote en longitud es…',
difficulty:'1',
answers: [
{ text: 'A) 10 veces más largo que el del ser humano', correct: false },
{ text: 'B) Una decima parte del genoma del ser humano', correct: false },
{ text: 'C) Igual al del ser humano', correct: false },
{ text: 'D) Pí veces la del ser humano', correct:false}
]
},
{
category: 'Publicaciones',
question: '¿Cuántos pares de bases tiene aproximadamente el genoma humano?',
difficulty:'1',
answers: [
{ text: 'A) 3,000,000', correct: false },
{ text: 'B) 30,000,000', correct: false },
{ text: 'C) 300,000,000', correct: false },
{ text: 'D) 3,000,000,000', correct:true}
]
},
{
category: 'Publicaciones',
question: 'El viagra fue formulado inicialmente para tratar:',
difficulty:'1',
answers: [
{ text: 'A) Colesterol', correct: false },
{ text: 'B) Asma', correct: false },
{ text: 'C) Hipertensión', correct: true },
{ text: 'D) Disfunción erectil', correct:false}
]
},
{
category: 'Publicaciones',
question: 'Nombre de la canción de los Bee Gees que tiene el ritmo adecuado para realizar un RCP (103 latidos por minuto)',
difficulty:'1',
answers: [
{ text: 'A) How deep is your love', correct: false },
{ text: 'B) Too much heaven', correct: false },
{ text: "C) Stayin' alive", correct: true },
{ text: 'D) To love somebody', correct:false}
]
}
];

const questionsP2=
[
{
category: 'Publicaciones',
question: 'Corresponde a la sucesión de Fibonacci:',
difficulty:'2',
answers: [
{ text: 'A) 1, 2, 4, 8, 16, 32, 64…', correct: false },
{ text: 'B) 1, 3, 6, 10, 15, 21, 28…', correct: false },
{ text: 'C) 0, 1, 1, 2, 3, 5, 8, 13…', correct: true },
{ text: 'D) 1, 4, 9, 16, 25, 36, 49…', correct: false }
]
},
{
category: 'Publicaciones',
question: '¿Cómo se construye la serie de Fibonacci?, además menciona un elemento natural o creación del ser humano donde podamos encontrarlos. (Pregunta abierta)',
difficulty:'2',
answers: [
  { text: 'A) Totalmente correcto', correct: true },
  { text: 'B) No es así del todo :(', correct: false }
]
},
{
category: 'Publicaciones',
question: '¿Qué es la biomimética?, además menciona alguna aplicación de esta. (Pregunta abierta)',
difficulty:'2',
answers: [
  { text: 'A) Totalmente correcto', correct: true },
  { text: 'B) No es así del todo :(', correct: false }
]
},
{
category: 'Publicaciones',
question: 'Menciona el nombre de tres coronavirus capaces de afectar a humanos. (Pregunta abierta)',
difficulty:'2',
answers: [
{ text: 'A) Totalmente correcto', correct: true },
{ text: 'B) No es así del todo :(', correct: false }
]
}
];

const questionsP3=
[
{
category: 'Publicaciones',
question: '¿Por qué existe polémica en cuanto a que si los virus están vivos o no? (Pregunta abierta)',
difficulty:'3',
answers: [
{ text: 'A) Totalmente correcto', correct: true },
{ text: 'B) No es así del todo :(', correct: false }
]
},
{
category: 'Publicaciones',
question: 'En células eucariotas el ADN tiene que salir del núcleo para sintetizar las proteínas',
difficulty:'3',
answers: [
{ text: 'A) Verdadero', correct: false },
{ text: 'B) Falso', correct: true }
]
}
];

// #FF0000                      Química   Check
const questionsC1=
[
{
category: 'Química',
question: '¿Cuáles son los elementos halógenos?',
difficulty:'1',
answers: [
{ text: 'A) He, Ne, Xe, Ar', correct: false },
{ text: 'B) Au, Cu, Ag, Fe', correct: false },
{ text: 'C) C, H, O, N', correct: false },
{ text: 'D) Cl, Br, I, F', correct: true}
]
},
{
category: 'Química',
question: '¿Cuál fue la primera reacción química controlada por los humanos? ',
difficulty:'1',
answers: [
{ text: 'A) REDOX', correct: false },
{ text: 'B) Combustión', correct: true },
{ text: 'C) Neutralización', correct: false },
{ text: 'D) Nucleares', correct:false}
]
},
{
category: 'Química',
question: '¿En qué estado de la materia se observa tensión superficial?',
difficulty:'1',
answers: [
{ text: 'A) Sólido', correct: false },
{ text: 'B) Líquido', correct: true },
{ text: 'C) Gaseoso', correct: false },
{ text: 'D) Plasma', correct:false}
]
},
{
category: 'Química',
question: '¿Los átomos del mismo elemento químico que tienen diferente masa atómica se conocen como?',
difficulty:'1',
answers: [
{ text: 'A) Isómero', correct: false },
{ text: 'B) Isótropo', correct: false },
{ text: 'C) Isósceles', correct: false },
{ text: 'D) Isótopo', correct: true}
]
}
];

const questionsC2=
[
{
category: 'Química',
question: '¿Cuál es el sistema de clasificación de los elementos químicos según su número atómico?',
difficulty:'2',
answers: [
{ text: 'A) Tabla de Electronegatividad', correct: false },
{ text: 'B) Números cuánticos', correct: false },
{ text: 'C) Tabla periodica', correct: true },
{ text: 'D) Escala de pH', correct:false}
]
},
{
category: 'Química',
question: '¿Para que se destilan algunas bebidas alcoholicas? (Pregunta abierta)',
difficulty:'2',
answers: [
  { text: 'A) Totalmente correcto', correct: true },
  { text: 'B) No es así del todo :(', correct: false }
]
}
];

const questionsC3=
[
{
category: 'Química',
question: '¿Por qué el jabón es usado para desinfectar las manos?',
difficulty:'3',
answers: [
{ text: 'A) El jabón, gracias a sus propiedades rompe la tensión superficial del agua, y hace que los gérmenes se resbalen de la piel.', correct: false },
{ text: 'B) Las micelas del jabón encapsulan a los gérmenes debido a que las colas hidrofóbicas interactúan con los gérmenes, las cabezas intentan evitar al agua, dentro de las micelas se disuelven los gérmenes.', correct: false },
{ text: "C) Las micelas del jabón interactúan con los gérmenes de nuestra piel, las colas hidrófobas de las moléculas del jabón se adhieren a los lípidos de la membrana y la abren a la fuerza, el agua entra y hace explotar a los gérmenes y bacterias.", correct: true },
{ text: 'D) Por su viscosidad, el jabón atrapa a los gérmenes, con ayuda del agua se deslizan de la piel, quedando atrapados en el jabón.', correct:false}
]
},
{
category: 'Química',
question: 'Calcular los gramos de hidróxido de sodio (NaOH) de 350 ml de disolución 2 M. (Pregunta abierta)',
difficulty:'3',
answers: [
  { text: 'A) Totalmente correcto', correct: true },
  { text: 'B) No es así del todo :(', correct: false }
]
},
{
category: 'Química',
question: 'Calcular los gramos de HCl que se requieren para preparar 500 ml de solución 0,5 M. (Pregunta abierta)',
difficulty:'3',
answers: [
  { text: 'A) Totalmente correcto', correct: true },
  { text: 'B) No es así del todo :(', correct: false }
]
}
];

// #FF0000                   Biología    Check
const questionsB1=
[
{
category: 'Biología',
question: '¿Cuál de las siguientes oraciones se refiere a la selección natural?',
difficulty:'1',
answers: [
{ text: 'A) Los organismos mutan para adaptarse a un ambiente cambiante.', correct: false },
{ text: 'B) Los organismos mutan al azar y si esta mutación favorece su supervivencia habrá mas descendientes que hereden esta mutación, hasta llegar a la evolución de la especie.', correct: true },
{ text: "C) Cuando todos los organismos de una especie mutan de la misma forma y al mismo tiempo, se dice que evolucionaron.", correct: false },
{ text: 'D) Sobrevive la especie más inteligente, el que entienda más la naturaleza', correct:false}
]
},
{
category: 'Biología',
question: '¿Cuál de los siguientes casos es un ejemplo de ingeniería genética?',
difficulty:'1',
answers: [
{ text: 'A) Unir la raíz de un tipo de planta al tallo de otro tipo de planta.', correct: false },
{ text: 'B) Encontrar las secuencias de las bases del ADN de un planta.', correct: false },
{ text: "C) Insertar un gen en plantas que las hace resistentes a los insectos.", correct: true },
{ text: 'D) Cultivar una planta a partir de una sola célula.', correct:false}
]
},
{
category: 'Biología',
question: '¿En qué partes de las células eucariotas encontramos ADN?',
difficulty:'1',
answers: [
{ text: 'A) En el núcleo y las vacuolas.', correct: false },
{ text: 'B) En el núcleo y las mitocondrias.', correct: true },
{ text: "C) En el núcleo y los lisosomas.", correct: false },
{ text: 'D) Solamente en el núcleo.', correct: false}
]
}
];

const questionsB2=
[
{
category: 'Biología',
question: 'Es la célula del tejido muscular: ',
difficulty:'2',
answers: [
{ text: 'A) Fibroblastos.', correct: false },
{ text: 'B) Adipocitos.', correct: false },
{ text: "C) Miocitos .", correct: true },
{ text: 'D) Neumocitos.', correct: false}
]
},
{
category: 'Biología',
question: ' Son células presentes en la piel: ',
difficulty:'2',
answers: [
{ text: 'A) Fibroblastos.', correct: false },
{ text: 'B) Queratinocitos.', correct: true },
{ text: "C) Miocitos .", correct: false },
{ text: 'D) Neumocitos.', correct: false}
]
},
{
category: 'Biología',
question: ' ¿Qué proteínas forman filamentos musculares? ',
difficulty:'2',
answers: [
{ text: 'A) Colágeno e Insulina.', correct: false },
{ text: 'B) Colágeno y actina.', correct: false },
{ text: "C) Colágeno y Albúmina.", correct: false },
{ text: 'D) Actina y miosina.', correct: true}
]
}
];

const questionsB3=
[
{
category: 'Biología',
question: '¿Cuántos puentes de hidrogeno se forman entre Adenina y Timina?',
difficulty:'3',
answers: [
{ text: 'A) Uno.', correct: false },
{ text: 'B) Dos.', correct: true },
{ text: "C) Tres.", correct: false },
{ text: 'D) Cuatro.', correct: false}
]
},
{
category: 'Biología',
question: 'El cuerpo humano de un adulto posee ______ de células',
difficulty:'3',
answers: [
{ text: 'A) 50 mil billones ', correct: false },
{ text: 'B) 1000 mil billones ', correct: false },
{ text: "C) 80 mil billones ", correct: false },
{ text: 'D) 100 mil billones', correct: true}
]
},
{
category: 'Biología',
question: 'Menciona al menos 7 estructuras que componen a una célula eucariota. (Pregunta abierta)',
difficulty:'3',
answers: [
  { text: 'A) Totalmente correcto', correct: true },
  { text: 'B) No es así del todo :(', correct: false }
]
}
];

// #FF0000                      Física

const questionsPhy1=
[
{
category: 'Física',
question: 'Podemos interpretarlo como el principio de conservación de la energía aplicado a un fluido moviéndose a lo largo de una línea de corriente',
difficulty:'1',
answers: [
{ text: 'A) Principio de ArquÍmedes', correct: false },
{ text: 'B) Principio de Torricelli', correct: false },
{ text: 'C) Principio de conservación de la energía en fluido', correct: false },
{ text: 'D) Principio de Bernoulli', correct: true }
]
},
{
category: 'Física',
question: '¿A que se debe el color azul del cielo y blanco de las nubes ? ',
difficulty:'1',
answers: [
{ text: 'A) A la dispersión de London', correct: false },
{ text: 'B) No se puede saber', correct: false },
{ text: 'C) A la dispersión de la luz conocido como fenómeno de refracción', correct: true },
{ text: 'D) Al reflejo del mar', correct: false }
]
},
{
category: 'Física',
question: '¿Cuánto volumen ocupan 8 Kg de un líquido cuya densidad es de 2 Kg/L?',
difficulty:'1',
answers: [
{ text: 'A) 0,2 L', correct: false },
{ text: 'B) 2 L', correct: false },
{ text: 'C) 4 L ', correct: true },
{ text: 'D) 1/4 L ', correct: false }
]
}
];

const questionsPhy2=
[
{
category: 'Física',
question: '¿Que es el momento lineal?',
difficulty:'2',
answers: [
{ text: 'A)tiempo que viaja un objeto en línea recta', correct: false },
{ text: 'B)cantidad vectorial que determina cuánto movimiento tiene un sistema', correct: true },
{ text: 'C) El momento en el que un objeto cambia su trayectoria a una lineal ', correct: false },
{ text: 'D)  Es la cantidad física escalar que determina cuanto movimiento tiene un sistema ', correct: false }
]
},
{
category: 'Física',
question: 'Lanzo una pelota a 10km/h en parábola desde mi mano a un metro del suelo (no hay rozamiento). ¿Qué velocidad lleva cuando cae a esa misma altura? ',
difficulty:'2',
answers: [
{ text: 'A) 10 Km/ h', correct: true },
{ text: 'B) No se puede saber', correct: false },
{ text: 'C) 0 Km/h', correct: false },
{ text: 'D) 20 Km/ h', correct: false }
]
}
];

const questionsPhy3=
[
{
category: 'Física',
question: 'Explica con física ¿Qué son los colores? (Pregunta abierta)',
difficulty:'3',
answers: [
{ text: 'A) Totalmente correcto', correct: true },
{ text: 'B) No es así del todo :(', correct: false }
]
},
{
category: 'Física',
question: '¿Qué es la “muerte térmica" del universo? (Pregunta abierta)',
difficulty:'3',
answers: [
{ text: 'A) Totalmente correcto', correct: true },
{ text: 'B) No es así del todo :(', correct: false }
]
}
];

// #FF0000                     Matemáticas

const questionsM1=
[
{
category: 'Matematicas',
question: 'Resuelve la siguiente operación: 3[8(10-8/2+2)]',
difficulty:'1',
answers: [
{ text: 'A) 72', correct: false },
{ text: 'B) 96', correct: false },
{ text: 'C) 129', correct: false },
{ text: 'D) 192 ', correct: true }
]
},
{
category: 'Matematicas',
question: '¿Cuál es el valor de x en la siguiente ecuación? x-8x=-22+8',
difficulty:'1',
answers: [
{ text: 'A) 2', correct: true },
{ text: 'B) 7', correct: false },
{ text: 'C) -2', correct: false },
{ text: 'D) -7', correct: false }
]
}
];

const questionsM2=
[
  {
  category: 'Matemáticas',
  question: '¿Qué son los números imaginarios? (Pregunta abierta)',
  difficulty:'2',
  answers: [
  { text: 'A) Totalmente correcto', correct: true },
  { text: 'B) No es así del todo :(', correct: false }
  ]
  },
  {
  category: 'Matematicas',
  question: 'La expresión: x²-8x+16 puede factorizarse como:',
  difficulty:'2',
  answers: [
  { text: 'A) (x+4)(x-4)', correct: false },
  { text: 'B) (x-2) (x+4)', correct: false },
  { text: 'C) (x-4)(x-4)', correct: true },
  { text: 'D) (x+4)²', correct: false }
  ]
  },
  {
  category: 'Matemáticas',
  question: '¿Qué son los números complejos? (Pregunta abierta)',
  difficulty:'2',
  answers: [
  { text: 'A) Totalmente correcto', correct: true },
  { text: 'B) No es así del todo :(', correct: false }
  ]
},
{
category: 'Matemáticas',
question: 'Con respecto al producto entre matrices, ¿Se cumple la propiedad conmutativa?',
difficulty:'2',
answers: [
{ text: 'A) Sí', correct: false },
{ text: 'B) No', correct: true }
]
}
];
const questionsM3=
[
{
category: 'Matemáticas',
question: '¿Si pensamos en dos puntos en el plano, P1 y P2, los cuales pertenecen a una función f(x), y en una recta secante que pasa por ambos puntos, cuándo podemos decir que la pendiente en P1 es igual a esta secante? (Pregunta abierta)',
difficulty:'3',
answers: [
{ text: 'A) Totalmente correcto', correct: true },
{ text: 'B) No es así del todo :(', correct: false }
]
},
{
category: 'Matemáticas',
question: '¿Qué es el efecto mariposa? (Pregunta abierta)',
difficulty:'3',
answers: [
{ text: 'A) Totalmente correcto', correct: true },
{ text: 'B) No es así del todo :(', correct: false }
]
},
{
category: 'Matemáticas',
question: '¿Qué definición de la integral es más general, la formulada por Riemann o la de Lebesgue? (Pregunta abierta)',
difficulty:'3',
answers: [
{ text: 'A) Totalmente correcto', correct: true },
{ text: 'B) No es así del todo :(', correct: false}
]
}
];

// #FF0000                Medicina o Cuerpo Humano  Check
const questionsMed1=
[
  {
    category: 'Cuerpo Humano',
    question: 'Son síntomas comunes de Covid-19',
    difficulty:'1',
    answers: [
      { text: 'A) Incapacidad para moverse, diarrea', correct: false },
      { text: 'B) Conjuntivitis y erupciones cutáneas', correct: false },
      { text: 'C) Fiebre, tos seca, delirio', correct: false },
      { text: 'D) Dolor de garganta, pérdida del olfato', correct: true }
    ]
  },
 {
  category: 'Cuerpo Humano',
  question: 'Es la unidad estructural del sistema nervioso',
  difficulty:'1',
  answers: [
    { text: 'A) Sinapsis', correct: false },
    { text: 'B) Neuronas', correct: true },
    { text: 'C) Cerebro', correct: false },
    { text: 'D) Células de Glia', correct: false }
  ]
},
];

const questionsMed2=
[
  {
    category: 'Cuerpo Humano',
    question: 'Es el órgano más grande del cuerpo humano',
    difficulty:'2',
    answers: [
      { text: 'A) Hígado', correct: false },
      { text: 'B) Cerebro', correct: false },
      { text: 'C) Piel', correct: true },
      { text: 'D) Corazón', correct: false}
    ]
  },
  {
  category: 'Cuerpo Humano',
  question: 'De los siguientes pares craneales, elige cual es el más desarrollado y extenso con un amplio territorio de distribución',
  difficulty:'2',
  answers: [
    { text: 'A) Trigemino', correct: true },
    { text: 'B) Abducems', correct: false },
    { text: 'C) Vestibulococlear', correct: false },
    { text: 'D) Troclear', correct: false }
  ]
}
];

const questionsMed3=
[
  {
    category: 'Cuerpo Humano',
    question: 'Es conocido por ser el hueso más pequeño del cuerpo humano ',
    difficulty:'3',
    answers: [
      { text: 'A) Martillo', correct: false },
      { text: 'B) Yunque', correct: false },
      { text: 'C) Estribo', correct: true },
      { text: 'D) Calcaneo', correct: false }
    ]
  },
  {
    category: 'Cuerpo Humano',
    question: 'El cuerpo consta de una columna vertebral, la cual está dividida en:',
    difficulty:'3',
    answers: [
      { text: 'A) C9, T10, L3, sacro y cóccix', correct: false },
      { text: 'B) C7, T12, L5, sacro y cóccix', correct: true },
      { text: 'C) C4, T16, L7, sacro y cóccix', correct: false },
      { text: 'D) C7, T12, L9, sacro y cóccix', correct: false }
    ]
  }
];

// #FF0000                     Geografía
const questionsGeo1=
[
{
category: 'Geografía',
question: '¿Qué país africano no tiene costa?',
difficulty:'1',
answers: [
{ text: 'A) Chad', correct: true },
{ text: 'B) Cabo verde', correct: false },
{ text: "C) Marruecos", correct: false },
{ text: 'D) Sudafrica', correct:false}
]
},
{
category: 'Geografía',
question: '¿Qué país africano no tiene costa?',
difficulty:'2',
answers: [
{ text: 'A) Chad', correct: true },
{ text: 'B) Cabo verde', correct: false },
{ text: "C) Marruecos", correct: false },
{ text: 'D) Sudafrica', correct:false}
]
}
];

const questionsGeo2=
[
{
category: 'Geografía',
question: '¿Qué país africano no tiene costa?',
difficulty:'2',
answers: [
{ text: 'A) Chad', correct: true },
{ text: 'B) Cabo verde', correct: false },
{ text: "C) Marruecos", correct: false },
{ text: 'D) Sudafrica', correct:false}
]
},
{
category: 'Geografía',
question: ' ¿Qué era Pangea',
difficulty:'2',
answers: [
{ text: 'A) Totalmente correcto', correct: true },
{ text: 'B) No es así del todo :(', correct: false }
]
}
];

const questionsGeo3=
[
{
category: 'Geografía',
question: ' ¿Qué se supone que pasó con el planeta Tea o Theia? ',
difficulty:'3',
answers: [
{ text: 'A) Totalmente correcto', correct: true },
{ text: 'B) No es así del todo :(', correct: false }
]
},
{
category: 'Geografía',
question: ' En teoría, ¿Qué forma tiene la tierra? ',
difficulty:'2',
answers: [
{ text: 'A) Circulo ', correct: false },
{ text: 'B) Esfera.', correct: false },
{ text: "C) Elipsoide.", correct: false },
{ text: 'D) Geoide.', correct: true}
]
}
];
