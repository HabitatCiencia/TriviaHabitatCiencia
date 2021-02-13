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
{
category: 'Generales.',
question: 'Menciona al menos 2 sustancias que se segregan en el cerebro al estar enamorado.',
difficulty: '1',
answers: [
{ text: 'A) Totalmente correcto', correct: true },
{ text: 'B) No es así del todo :(', correct: false }
]
},
{
category: 'Generales.',
question: 'Estos animales se caracterizan por ser muy fieles cuando encuentran una pareja.',
difficulty: '1',
answers: [
{ text: 'A) Pingüinos', correct: true },
{ text: 'B) Ser humano', correct: false },
{ text: 'C) Gatos', correct: false },
{ text: 'D) Osos', correct: false },
]
}
];

const questionsG2=
[
{
category: 'Generales.',
question: '¿Cuántos músculos de la cara se utilizan al besar?',
difficulty: '2',
answers: [
{ text: 'A) Aproximadamente 168 músculos', correct: false },
{ text: 'B) Aproximadamente 68 músculos', correct: false },
{ text: 'C) Aproximadamente 34 músculos', correct: true },
{ text: 'D) Aproximadamente 134 músculos', correct: false },
]
},
{
category: 'Generales.',
question: 'Según el antropólogo Robin Dunbar,el número máximo de relaciones personales que somos capaces de tolerar son tan solo 50.',
difficulty: '2',
answers: [
{ text: 'A) Verdadero', correct: true },
{ text: 'B) Falso', correct: false }
]
}
];

const questionsG3=
[
{
category: 'Generales.',
question: 'Es una sensación estomacal que sientes cuando ves a tu pareja, estás nervioso (en medicina es denominada como el "deber de zacear tu hambre',
difficulty: '3',
answers: [
{ text: 'A) Verdadero', correct: true },
{ text: 'B) Falso', correct: false }
]
},
{
category: 'Generales.',
question: '¿Dónde se produce la oxitocina?',
difficulty: '3',
answers: [
{ text: 'A) Totalmente correcto', correct: true },
{ text: 'B) No es así del todo :(', correct: false }
]
}

];


// #FF0000                   Publicaciones    Check
const questionsP1=
[
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
question: '¿Cuál fue el primer antibiótico?',
difficulty:'1',
answers: [
{ text: 'A) Verdadero', correct: true },
{ text: 'B) Falso', correct: false }
]
}
];

const questionsP2=
[
{
category: 'Publicaciones',
question: '¿Cómo se le denomina al conjunto de bacterias que habitan en la piel y mucosas del cuerpo humano?',
difficulty:'1',
answers: [
{ text: 'A) Verdadero', correct: true },
{ text: 'B) Falso', correct: false }
]
},
{
category: 'Publicaciones',
question: 'Es la hormona causante de nuestra reacción al ver o interactuar con la persona que nos gusta. Provoca, por ejemplo, que el corazón se acelere, la boca se seque y las manos comiencen a sudar: ',
difficulty:'1',
answers: [
{ text: 'A) Leptina', correct: false },
{ text: 'B) Glucagón', correct: false },
{ text: 'C) Adrenalina', correct: true },
{ text: 'D) Aldosterona', correct: false }
]
}
];

const questionsP3=
[
{
category: 'Publicaciones',
question: '¿Cuál de las siguientes NO es una causa de resistencia a antibióticos? ',
difficulty:'3',
answers: [
{ text: 'A) Dejar a medias un tratamiento con antibióticos.', correct: false },
{ text: 'B) Consumir alimentos transgénicos.', correct: true },
{ text: 'C) Automedicación ', correct: false },
{ text: 'D) Comerciar antibióticos falsificados y de mala calidad.', correct: false }
]
},
{
category: 'Publicaciones',
question: '¿Qué tienen en común el amor y las drogas?',
difficulty:'3',
answers: [
{ text: 'A) Verdadero', correct: true },
{ text: 'B) Falso', correct: false }
]
}
];

// #FF0000                      Química   Check
const questionsC1=
[
{
category: 'Química',
question: '¿Cuál de estos elementos es considerado como un halógeno?',
difficulty: '1',
answers: [
{ text: 'A) Yodo', correct: true },
{ text: 'B) Oxígeno', correct: false },
{ text: 'C) Carbón', correct: false },
{ text: 'D) Potasio', correct: false }
]
},
{
category: 'Química',
question: '¿Cuál de estos se conoce como el elemento más electronegativo de la tabla periódica?',
difficulty: '1',
answers: [
{ text: 'A) Flúor', correct: true },
{ text: 'B) Cloro', correct: false },
{ text: 'C) Yodo', correct: false },
{ text: 'D) Nitrógeno', correct: false }
]
}
];

const questionsC2=
[
{
category: 'Química',
question: '¿Cuál de las siguientes sustancias tiene mayor punto de fusión?',
difficulty: '2',
answers: [
{ text: 'A) CH4', correct: false },
{ text: 'B) KBr', correct: true },
{ text: 'C) I2', correct: false },
{ text: 'D) HCl', correct: false }
]
},
{
category: 'Química',
question: 'El compuesto Nitrato de Sodio (NaNO3) es muy soluble en:',
difficulty: '2',
answers: [
{ text: 'A) Sulfuro de carbono', correct: false },
{ text: 'B) Etanol', correct: false },
{ text: 'C) Agua', correct: true },
{ text: 'D) Ninguna de las anteriores', correct: false }
]
},
{
category: 'Química',
question: 'De los siguientes compuestos, ¿cuál de ellos es iónico?',
difficulty: '2',
answers: [
{ text: 'A) Amoniaco', correct: false },
{ text: 'B) Dióxido de carbono', correct: false },
{ text: 'C) Óxido de sodio', correct: true },
{ text: 'D) Metano', correct: false }
]
}
];

const questionsC3=
[
{
category: 'Química',
question: 'Se sabe que el nitrato de plata es soluble en agua, explica a qué se debe esto.',
difficulty: '3',
answers: [
{ text: 'A) Totalmente correcto', correct: true },
{ text: 'B) No es así del todo :(', correct: false }
]
},
{
category: 'Química',
question: '¿Qué compuesto de los siguientes contiene todos sus átomos de carbono con una hibridación sp^2?',
difficulty: '3',
answers: [
{ text: 'A) C2H2', correct: false },
{ text: 'B) C4H10', correct: false },
{ text: 'C) C3H8', correct: false },
{ text: 'D) C2H4', correct: true }
]
}
];

// #FF0000                   Biología    Check
const questionsB1=
[
{
category: 'Biología',
question: '¿Cuál de los siguientes animales no es un polinizador?',
difficulty: '1',
answers: [
{ text: 'A) Abejas. ', correct: false },
{ text: 'B) Arañeros. ', correct: false },
{ text: 'C) Moscas.', correct: false },
{ text: 'D) Todos los anteriores son polinizadores.', correct: true }
]
},
{
category: 'Biología',
question: '¿Cómo se llaman los vasos diminutos que conectan las arterias con las venas?',
difficulty: '1',
answers: [
{ text: 'A) Vacuolas. ', correct: false },
{ text: 'B) Capilares. ', correct: true },
{ text: 'C) Centriolos.', correct: false },
{ text: 'D) Arteriolos.', correct: false }
]
}
];

const questionsB2=
[
{
category: 'Biología',
question: '¿Cuál es el proceso evolutivo que propuso Charles Darwin en su libro "El Origen De Las Especies?',
difficulty: '2',
answers: [
{ text: 'A) Selección natural', correct: true },
{ text: 'B) Evolución saltacionista', correct: false },
{ text: 'C) Creacionista', correct: false },
{ text: 'D) Selección sexual', correct: false }
]
},
{
category: 'Biología',
question: 'Son los 5 tipos de reinos de la naturaleza...',
difficulty: '2',
answers: [
{ text: 'A) Totalmente correcto', correct: true },
{ text: 'B) No es así del todo :(', correct: false }
]
}

];

const questionsB3=
[
{
category: 'Biología',
question: '¿Cuál es el concepto que introduce James Hutton?',
difficulty: '3',
answers: [
{ text: 'A) Tiempo profundo', correct: true },
{ text: 'B) Deriva génica', correct: false },
{ text: 'C) Gradualismo', correct: false },
{ text: 'D) Evolución', correct: false }
]
},
{
category: 'Biología',
question: '¿Cuál es la forma correcta de expresar la relación entre el ADN de humanos y chimpancés?',
difficulty: '3',
answers: [
{ text: 'A) Entre el humano y el chimpancé la secuencia de ADN que puede compararse directamente es idéntica en un 99%. ', correct: true },
{ text: 'B) El ADN del chimpancé y del humano son idénticos en un 99%.', correct: false },
{ text: 'C) Entre el humano y el chimpancé la secuencia de ADN que puede compararse directamente es idéntica en un 79%. ', correct: false },
{ text: 'D) El ADN del chimpancé y del humano son idénticos en un 79%.', correct: false }
]
},
{
category: 'Biología',
question: 'También llamados osos de agua, son animales microscópicos, multicelulares y una de las formas de vida más duraderas en el planeta Tierra. ',
difficulty: '3',
answers: [
{ text: 'A) Tardígrados', correct: true },
{ text: 'B) Escherichia coli', correct: false },
{ text: 'C) Protozoos', correct: false },
{ text: 'D) Coronavirus', correct: false }
]
}
];

// #FF0000                      Física

const questionsPhy1=
[
{
category: 'Física',
question: '¿Qué físico es famoso por la leyenda que dice que al realizar un descubrimiento salió desnudo a la calle gritando "Eureka"? ',
difficulty:'1',
answers: [
{ text: 'A) Newton', correct: false },
{ text: 'B) Pitágoras', correct: false },
{ text: 'C) Arquímedes', correct: true },
{ text: 'D) Boltzmann', correct: false }
]
},
{
category: 'Física',
question: '¿Cuál de las siguientes es una magnitud vectorial? ',
difficulty:'1',
answers: [
{ text: 'A) Peso', correct: true },
{ text: 'B) Temperatura', correct: false },
{ text: 'C) Carga', correct: false },
{ text: 'D) Masa', correct: false }
]
}
];

const questionsPhy2=
[
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
},
{
category: 'Física',
question: '¿A quién se le atribuye el término "agujero negro"?',
difficulty: '2',
answers: [
{ text: 'A) John Wheeler ', correct: true },
{ text: 'B) Stephen Hawking ', correct: false },
{ text: 'C) Albert Einstein', correct: false },
{ text: 'D) Robert Oppenheimer ', correct: false }
]
}
];

const questionsPhy3=
[
{
category: 'Física',
question: '¿Cuántas ecuaciones de Maxwell hay y cuántas formas tienen?',
difficulty: '3',
answers: [
{ text: 'A) Totalmente correcto', correct: true },
{ text: 'B) No es así del todo :(', correct: false }
]
},
{
category: 'Física',
question: 'Si un campo vectorial actúa como f(x,y) = xi+ yj, ¿podemos asegurar que este es un campo conservativo? (existe una única función potencial bien definida asociada a f)',
difficulty: '3',
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
category: 'Matemáticas',
question: '¿Quién inventó el plano cartesiano?',
difficulty: '1',
answers: [
{ text: 'A) Totalmente correcto', correct: true },
{ text: 'B) No es así del todo :(', correct: false }
]
},
{
category: 'Matemáticas',
question: '¿Cuáles son los dos matemáticos a los que se les atribuye el descubrimiento/invención del Cálculo?',
difficulty: '1',
answers: [
{ text: 'A) Totalmente correcto', correct: true },
{ text: 'B) No es así del todo :(', correct: false }
]
}
];

const questionsM2=
[
{
category: 'Matemáticas',
question: '¿Un cono se puede expresar con una función escalar con solo una constante en coordenadas esféricas?',
difficulty: '2',
answers: [
{ text: 'A) "Sí"', correct: true },
{ text: 'B) "No"', correct: false },
]
},
{
category: 'Matemáticas',
question: 'El último año en el que pudimos tomar clases de manera presencial fue el 2019, todos pensamos en este año con nostalgia, ¿sabes cómo se escribe 2019 en binario?',
difficulty: '2',
answers: [
{ text: 'A) 11111100110', correct: false },
{ text: 'B) 11111100011', correct: true },
{ text: 'C) 111111000110', correct: false },
{ text: 'D) 111111000011', correct: false }
]
},
{
category: 'Matemáticas',
question: 'Considera una función polinómica definida por f(x)=x^n+x^m+x^o, con n>m>o. ¿Cuál es la n+1 ésima derivada de f?',
difficulty: '2',
answers: [
{ text: 'A) Totalmente correcto', correct: true },
{ text: 'B) No es así del todo :(', correct: false }
]
},


];
const questionsM3=
[
{
category: 'Matemáticas',
question: '¿De manera simple, qué representa el gradiente de una función escalar?',
difficulty:'3',
answers: [
{ text: 'A) Totalmente correcto', correct: true },
{ text: 'B) No es así del todo :(', correct: false}
]
},
{
category: 'Matemáticas',
question: '¿Qué definición de la integral es más general, la formulada por Riemann o la de Lebesgue?',
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
category: 'Medicina',
question: '¿Cuántas costillas tiene el ser humano?',
difficulty: '1',
answers: [
{ text: 'A) Totalmente correcto', correct: true },
{ text: 'B) No es así del todo :(', correct: false }
]
},
{
category: 'Medicina',
question: 'Describe qué significa el término "narcosis"',
difficulty: '1',
answers: [
{ text: 'A) Totalmente correcto', correct: true },
{ text: 'B) No es así del todo :(', correct: false }
]
}
];

const questionsMed2=
[
{
category: 'Medicina',
question: 'Se les denomina así a los hongos que afectan la piel y sus anexos (uñas y pelos), son los que causas onicomicosis, pie de atleta, tiña de la cabeza, etc.',
difficulty: '2',
answers: [
{ text: 'A) Dermatofitos ', correct: true },
{ text: 'B) Hongos alucinógenos ', correct: false },
{ text: 'C) Treponema pallidum', correct: false },
{ text: 'D) Aspergillus flavus ', correct: false }
]
},
{
category: 'Medicina',
question: 'Es más comúnmente conocido como el síndrome del corazón roto.',
difficulty: '2',
answers: [
  { text: 'A) Miocardiopatía de Shitsuren ', correct: false },
  { text: 'B) Miocardiopatía de Sasuke ', correct: false },
  { text: 'C) Miocardiopatía de Takotsubo', correct: true },
  { text: 'D) Miocardiopatía de Greenwich ', correct: false }
]
}


];

const questionsMed3=
[
{
category: 'Medicina',
question: 'Es conocido por ser una de las bacterias más comunes causantes de generar infecciones en la garganta, como faringitis.',
difficulty: '3',
answers: [
{ text: 'A) Covid-19', correct: false },
{ text: 'B) Streptococcus pyogenes', correct: true },
{ text: 'C) Candida albicans', correct: false },
{ text: 'D) Aspergillus flavus', correct: false }
]
},
{
category: 'Medicina',
question: 'Es la capa germinal (capa embrionaria) que da origen al sistema nervioso ',
difficulty: '3',
answers: [
{ text: 'A) Endodérmica ', correct: false },
{ text: 'B) Mesodérmica ', correct: false },
{ text: 'C) Ectodérmica  ', correct: true },
{ text: 'D) Placenta ', correct: false }
]
}

];

// #FF0000                     Geografía
const questionsGeo1=
[
{
category: 'Geografía',
question: '¿Qué es una cordillera? ',
difficulty:'1',
answers: [
{ text: 'A) Es un conjunto de montañas dentro de otro conjunto más grande', correct: false },
{ text: 'B) Es una llanura entre montañas o alturas, una depresión de la superficie terrestre entre dos vertientes, con forma inclinada y alargada, que conforma una cuenca hidrográfica en cuyo fondo se aloja un curso fluvial ', correct: false },
{ text: 'C) Una sucesión de montañas enlazadas entre sí. Constituyen zonas plegadas o en fase de plegamiento.', correct: true },
{ text: 'D) Es una gran extensión de tierra plana o con ligeras ondulaciones ', correct: false }
]
},
{
category: 'Geografía',
question: '¿Cuál es la capa más gruesa de la tierra? ',
difficulty:'1',
answers: [
{ text: 'A) Núcleo externo', correct: false },
{ text: 'B) Núcleo interno ', correct: false },
{ text: 'C) Corteza ', correct: false },
{ text: 'D) Manto ', correct: true }
]
}
];

const questionsGeo2=
[
{
category: 'Geografía',
question: '¿Cuál de los siguientes países cuenta con mayor costa?',
difficulty:'2',
answers: [
{ text: 'A) México', correct: false },
{ text: 'B) Canadá', correct: true },
{ text: 'C) Reino unido', correct: false },
{ text: 'D) España', correct: false }
]
},
{
category: 'Geografía',
question: '¿Dónde tiene lugar el punto más profundo del mar mediterráneo?',
difficulty:'2',
answers: [
{ text: 'A) En la Fosa de las Marinas', correct: false },
{ text: 'B) En la Fosa de Calipso ', correct: true },
{ text: 'C) En la Fosa de las sándwich del sur', correct: false },
{ text: 'D) En la Fosa de Perú-Chile', correct: false }
]
}
];

const questionsGeo3=
[
{
category: 'Geografía',
question: 'Menciona el nombre del estrecho que conecta al océano atlántico con el mar mediterráneo',
difficulty:'3',
answers: [
{ text: 'A) Estrecho de Gibraltar', correct: true },
{ text: 'B) Estrecho de Mesina', correct: false },
{ text: 'C) Canal de la Mancha', correct: false },
{ text: 'D) Estrecho de los Dardanelos', correct: false }
]
},
{
category: 'Geografía',
question: '¿Cuál es el lago más profundo del mundo?',
difficulty:'3',
answers: [
{ text: 'A) Lago de Cuitzeo', correct: false },
{ text: 'B) Lago de Pátzcuaro', correct: false },
{ text: 'C) Lago Hurón ', correct: false },
{ text: 'D) Lago Baikal', correct: true }
]
}
];
