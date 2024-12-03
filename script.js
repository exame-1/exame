let currentDiscipline = null; // Disciplina atual
let questions = []; // Lista de perguntas
let currentQuestionIndex = 0; // Índice da pergunta atual
let score = 0; // Pontuação do usuário
let timerInterval; // Intervalo do temporizador

// Perguntas de Música              
const musicQuestions = [

{
  text: "1. O som é?",
  options: [
    "Toda vibração percebida pelo ouvido",
    "Toda vibração que envolve instrumentos",
    "Algumas vibrações dos instrumentos musicais",
    "Alguns instrumentos musicais emitindo som",
    "Toda vibração que pode ser emitida por vozes sem instrumentos musicais"
  ],
  correct: 1
},

{
  "text": "2. Som musical é?",
  "options": [
    "Resultado de vibrações sonoras regulares",
    "Resultado de vibrações sonoras regulares e irregulares",
    "Resultado de vibrações sonoras instrumentais",
    "Resultado de vibrações sonoras vocais",
    "Nenhuma das opções está correta"
  ],
  "correct": 1
},
	
{
  "text": "3. O ouvido humano é capaz de perceber sons?",
  "options": [
    "Musicais",
    "Musicais e não musicais",
    "De instrumentos e vozes",
    "Produzidos a cappella",
    "Nenhuma das opções anteriores"
  ],
  "correct": 1
},

{
  "text": "4. Numericamente as propriedades de som são:",
  "options": [
    "3",
    "4",
    "5",
    "6",
    "7"
  ],
  "correct": 1
},

{
  "text": "5. A multiformidade organizada de durações (sons e silêncios) recebe o nome de:",
  "options": [
    "Durações",
    "Música",
    "Ritmo",
    "Tempo métrico",
    "Nenhuma das opções anteriores"
  ],
  "correct": 2
},

	{
  "text": "6. O agrupamento de durações de cinco em cinco tempos chama-se:",
  "options": [
    "Quinário",
    "Quintenário",
    "Quinto tempo",
    "Quinquagésimo",
    "Quinto de quinto"
  ],
  "correct": 1
},

	{
  "text": "7. Contratempo é:",
  "options": [
    "Execussão musical sobre tempos trocados",
    "Execussão musical fora de tempo",
    "Execussão musical sobre tempo fraco ou forte",
    "Execussão musical sobre tempo fraco ou fração do tempo fraco",
    "Execussão musical sobre tempo forte ou fração do tempo forte"
  ],
  "correct": 3
},

	{
  "text": "8. O termo 'anacrústico' é sinônimo de:",
  "options": [
    "A terra",
    "Tético",
    "Levare",
    "Tesis",
    "Nenhuma das opções anteriores"
  ],
  "correct": 4
},

	{
  "text": "9. Os ritmos com início anacrústico geram:",
  "options": [
    "Uma sensação de estabilidade",
    "Uma sensação de instabilidade",
    "Uma sensação neutra",
    "Uma sensação de melancolia",
    "Nenhuma das opções anteriores"
  ],
  "correct": 2
},

	{
  "text": "10. Nas durações, a ligadura é:",
  "options": [
    "Uma linha curva que se coloca apenas acima das notas musicais",
    "Uma linha curva que se coloca apenas abaixo das notas musicais",
    "Uma linha curva que se coloca apenas acima ou abaixo das notas musicais",
    "Uma linha curva que não se coloca apenas acima das notas musicais",
    "Nenhuma das opções anteriores"
  ],
  "correct": 3
},

	{
  "text": "11. Síncopa é:",
  "options": [
    "Um som que inicia no tempo fraco",
    "Um som que inicia no tempo forte",
    "Um som que inicia no tempo forte ou parte forte do tempo",
    "Um som que inicia no tempo fraco ou parte forte do tempo",
    "Um som que inicia no tempo fraco ou parte fraca do tempo"
  ],
  "correct": 4
},

	{
  "text": "12. Qual dos seguintes andamentos tem maior velocidade:",
  "options": [
    "Largo",
    "Andante",
    "Adágio",
    "Allegro",
    "Presto"
  ],
  "correct": 4
},

	{
  "text": "13. Qual dos seguintes andamentos tem uma velocidade situada entre 120 e 168 batimentos por minuto:",
  "options": [
    "Moderato",
    "Presto",
    "Adágio",
    "Larghetto",
    "Allegro"
  ],
  "correct": 4
},

	{
  "text": "14. O indicador usado para aumento de velocidade:",
  "options": [
    "Stretto",
    "Allargando",
    "Rilasciando",
    "Ritenuto",
    "Ad libitum"
  ],
  "correct": 1
},

	{
  "text": "15. O sinônimo de Tempo Rubato é:",
  "options": [
    "Afrettando",
    "Stringendo",
    "Rallentando",
    "Accelerando",
    "A piacere"
  ],
  "correct": 4
},

	{
  text: "16. Quiálteras são grupos alterados na quantidade de:",
  options: [
    "Sustenidos",
    "Bemóis",
    "Bequadros",
    "Notas",
    "Nenhuma das opções anteriores"
  ],
  correct: 3
},

	{
  text: "17. Numa canção, o sinal D.C. significa:",
  options: [
    "Usar alterações de clave",
    "Respeitar rigorosamente as pausas",
    "Tornar ao princípio",
    "Respeitar as intensidades",
    "Devagar no compasso"
  ],
  correct: 3
},

	{
  text: "18. Escala diatônica é:",
  options: [
    "Sucessão de 8 notas, contendo tons",
    "Sucessão de 8 notas, contendo semitons",
    "Sucessão de 8 notas, contendo tons e semitons",
    "Sucessão de 7 notas, contendo tons e semitons",
    "Sucessão de 8 notas, contendo tons maiores e menores bem organizados"
  ],
  correct: 3
},

	{
  text: "19. A tonalidade de Fá# Maior tem:",
  options: [
    "3 alterações na clave",
    "4 alterações na clave",
    "5 alterações na clave",
    "6 alterações na clave",
    "7 alterações na clave"
  ],
  correct: 4
},

	
{
  text: "20. Num acorde, a nota mais grave recebe sempre o nome de:",
  options: [
    "Fundamental",
    "Baixo",
    "Tónica",
    "Principal",
    "Nenhuma das opções anteriores"
  ],
  correct: 1
},
	
	{
  text: "21. Quando a nota mais grave de um acorde é a que gerou o acorde, este está:",
  options: [
    "No estado fundamental",
    "Na primeira inversão",
    "Na segunda inversão",
    "Na terceira inversão",
    "Nenhuma das opções anteriores"
  ],
  correct: 1
},

	{
  text: "22. Quando a nota mais grave de um acorde é a terça, este está:",
  options: [
    "No estado fundamental",
    "Na primeira inversão",
    "Na segunda inversão",
    "Na terceira inversão",
    "Nenhuma das opções anteriores"
  ],
  correct: 2
},

	{
  text: "23. A inversão de um intervalo de sétima dá uma:",
  options: [
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta"
  ],
  correct: 1
},

	{
  text: "24. As combinações matematicamente possíveis de uma terça maior e uma terça menor dão:",
  options: [
    "2 Tipos de tríades",
    "3 Tipos de tríades",
    "4 Tipos de tríades",
    "5 Tipos de tríades",
    "6 Tipos de tríades"
  ],
  correct: 2
},

	{
  text: "25. Numa tonalidade maior natural, as tríades maiores ficam nos graus:",
  options: [
    "I, II e III",
    "I, III e IV",
    "I, IV e V",
    "I, V e VI",
    "I, VI e VII"
  ],
  correct: 3
},

	{
  text: "26. O sétimo grau de uma escala menor harmônica é caracterizado por subir ao VIII grau por um intervalo de:",
  options: [
    "2 Menor",
    "2 Maior",
    "2 Diminuta",
    "2 Aumentada",
    "Nenhuma das opções anteriores"
  ],
  correct: 4
},

	{
  text: "27. O acorde dominante é:",
  options: [
    "X7M",
    "X7",
    "Xm7 (b5)",
    "X ͦ",
    "Xm7"
  ],
  correct: 1
},

	{
  text: "28. O acorde meio diminuto é:",
  options: [
    "Xm7 (b5)",
    "X ͦ",
    "Xm7",
    "X7",
    "Xm7 (b5) D"
  ],
  correct: 0
},

	{
  text: "29. O intervalo do I para o IV grau de uma escala maior natural é de:",
  options: [
    "4 Perfeita",
    "4 Diminuta",
    "4 Aumentada",
    "4 Maior",
    "4 Menor"
  ],
  correct: 0
},

	{
  text: "30. O intervalo do I para o IV grau do modo Lídio é de:",
  options: [
    "4 Perfeita",
    "4 Diminuta",
    "4 Aumentada",
    "4 Maior",
    "4 Menor"
  ],
  correct: 0
},

	{
  text: "31. O Modo Dórico é:",
  options: [
    "Maior com sexta maior",
    "Menor com sexta maior",
    "Maior com sexta diminuta",
    "Menor com sexta aumentada",
    "Maior com sexta diminuta"
  ],
  correct: 1
},

	{
  text: "32. O grau que dá nome à escala é a:",
  options: [
    "Mediante",
    "Supertónica",
    "Dominante",
    "Superdominante",
    "Tónica"
  ],
  correct: 4
},

	{
  text: "33. O grau conhecido por subdominante é:",
  options: [
    "II",
    "III",
    "IV",
    "V",
    "VI"
  ],
  correct: 2
},

  	{
  text: "34. Intervalo melódico é formado por:",
  options: [
    "Notas simultâneas.",
    "Notas sucessivas.",
    "Notas alternadas com pausas.",
    "Notas melódicas",
    "Notas bem cantadas."
  ],
  correct: 1
},

	{
  text: "35. O Uníssono:",
  options: [
    "É o menor intervalo na música.",
    "Não é realmente um intervalo.",
    "É um som executado por vários instrumentos de forma alternada.",
    "É um som com volume alto.",
    "É um som com volume baixo."
  ],
  correct: 0
},
   {
  text: "36. Uma semínima vale:",
  options: [
    "2 Colcheias.",
    "4 Colcheias.",
    "6 Colcheias.",
    "8 Colcheias.",
    "10 Colcheias."
  ],
  correct: 1
},

	{
  text: "37. A clave de sol serve para:",
  options: [
    "Dar nome às notas com alterações.",
    "Dar nome às notas médias-graves.",
    "Dar nome às notas médias-agudas.",
    "Dar nome às notas com durações breves.",
    "Dar nome às notas com intensidade baixa."
  ],
  correct: 2
},
   {
  text: "38. A mínima pontuada vale:",
  options: [
    "2 semínimas.",
    "3 semínimas.",
    "4 semínimas.",
    "5 semínimas.",
    "6 semínimas."
  ],
  correct: 1
},
   {
  text: "39. Um compasso se separa do outro, seja ele seu antecedente, através de:",
  options: [
    "Uma linha divisória.",
    "Uma barra dupla.",
    "Uma barra final.",
    "Uma barra de repetição.",
    "Nenhuma das opções."
  ],
  correct: 1
},

	{
  text: "40. A diferença acústica de frequências entre duas notas musicais é estudada pelo parâmetro:",
  options: [
    "Intensidade.",
    "Duração.",
    "Timbre.",
    "Altura.",
    "Velocidade."
  ],
  correct: 3
}
	
	
];


// Perguntas de Francês
const frenchQuestions = [
  {
    "text": "1. Quel titre attribuez-vous au texte?",
    "options": [
      "Les aires de la montagne",
      "Le changement de la photopériode",
      "Les effets des changements climatiques",
      "Le réchauffement des espèces",
      "Le climat de la lune"
    ],
    "correct": 2
  },
  {
    "text": "2. Comment désigne-t-on l'ensemble des conditions environnementales nécessaires à la vie et au développement des espèces?",
    "options": [
      "Le réchauffement climatique",
      "Le climat",
      "Le changement climatique",
      "L’habitat naturel",
      "L’environnement"
    ],
    "correct": 3
  },
  {
    "text": "3. Le réchauffement climatique cause la disparition, apparition et déplacement de la zone géographique de certains habitats.",
    "options": [
      "La phrase 2 n’est pas correcte.",
      "Les phrases 1 et 3 sont correctes.",
      "Les phrases 1 et 3 ne sont pas correctes.",
      "Les phrases 1, 2 et 3 ne sont pas correctes.",
      "Seule la phrase 1 est correcte."
    ],
    "correct": 4
  },
  {
    "text": "4. La zone géographique qui accueille les habitats nécessaires à une espèce est aussi nommée...",
    "options": [
      "L’habitat naturel",
      "Le réchauffement climatique",
      "Le changement climatique",
      "La transformation du milieu",
      "Aire de répartition"
    ],
    "correct": 0
  },
  {
    "text": "5. La migration des aires de répartition entraine...",
    "options": [
      "Un changement du climat d’une région.",
      "Un changement du type de culture d’une région et permet à des espèces tropicales de coloniser des nouveaux territoires.",
      "Une conservation du type de culture d’une région et permet à des espèces tropicales de coloniser des nouveaux territoires.",
      "Une modification du type de culture d’une région et permet à des espèces tropicales de rester dans les mêmes territoires.",
      "Une modification du type de culture d’une région et ne permet pas à des espèces tropicales de coloniser des nouveaux territoires."
    ],
    "correct": 1
  },
  {
    "text": "6. Comment les plantes peuvent-elles survivre à l’extinction ? Les plantes peuvent survivre grâce...",
    "options": [
      "À leur faible mobilité.",
      "Aux habitats au microclimat subsistants et au déplacement assisté par l’homme.",
      "Aux habitats au microclimat détruits et au déplacement assisté par l’homme.",
      "À leur faible capacité de dissémination.",
      "À leur forte mobilité."
    ],
    "correct": 1
  },
  {
    "text": "6. La phrase «Un plus grand nombre d'organismes (en termes d'effectifs comme d'espèces) peuvent passer la mauvaise saison » signifie que...",
    "options": [
      "Les organismes peuvent disparaître.",
      "Les organismes peuvent exister dans une saison qui n’est pas la leur.",
      "Les organismes ne peuvent pas exister.",
      "Les organismes peuvent migrer.",
      "Les organismes ne peuvent exister que dans leur saison normale."
    ],
    "correct": 1
  },
  {
    "text": "7. Qu’est-ce qui détermine le retour des oiseaux au printemps ? C’est...",
    "options": [
      "La photopériode.",
      "Le manque de nourriture.",
      "Le réchauffement climatique.",
      "La migration.",
      "L’élévation de la température."
    ],
    "correct": 0
  },
  {
    "text": "8. La modification du milieu est une conséquence .....",
    "options": [
      "La migration des espèces.",
      "Du déplacement des aires de répartition.",
      "De la mauvaise saison.",
      "De la chute des températures.",
      "Du changement climatique."
    ],
    "correct": 1
  },
  {
    "text": "9. Au restaurant, à la fin du repas : Monsieur, s’il vous plaît !...",
    "options": [
      "L’addition !",
      "La facture !",
      "La note !",
      "Le menu !",
      "Le compte !"
    ],
    "correct": 2
  },
  {
    "text": "10. Le matin, je prends un ..... de gâteau.",
    "options": [
      "Bouteille",
      "Cuillère",
      "Morceau",
      "Verre",
      "Tasse"
    ],
    "correct": 2
  },
  {
    "text": "11. Le gâteau est vraiment délicieux, j’aimerais bien en connaître la .......",
    "options": [
      "Formule",
      "Manière",
      "Matière",
      "Recette",
      "Sorte"
    ],
    "correct": 3
  },
  {
    "text": "12. Le bateau est un moyen de transport ..........",
    "options": [
      "Aérien",
      "Ferroviaire",
      "Maritime",
      "Routier",
      "Sous-marin"
    ],
    "correct": 2
  },
  {
    "text": "13. Les embouteillages à Maputo constituent un ............ majeur de la capitale mozambicaine.",
    "options": [
      "Aspect",
      "Danger",
      "Événement",
      "Plaie",
      "Problème"
    ],
    "correct": 4
  },
  {
    "text": "14. Identifiez la phrase correcte :",
    "options": [
      "Précisément, nous, nous avons bien choisi notre chef de classe.",
      "Précisément, nous nous avons bien choisi notre chef de classe.",
      "Précisément, nous, nous, avons bien choisi notre chef de classe.",
      "Précisément nous nous avons bien choisi notre chef de classe.",
      "Précisément, nous, nous avons bien choisi, notre chef de classe."
    ],
    "correct": 0
  },
  {
    "text": "15. Choisissez la reformulation qui a le sens le plus proche de la phrase originale : Nous travaillerons vite afin que ce soit fini.",
    "options": [
      "Nous travaillerons vite après que ce soit fini.",
      "Nous travaillerons vite pour que ce soit fini.",
      "Nous travaillerons vite en attendant que ce soit fini.",
      "Nous travaillerons vite dès que ce sera fini.",
      "Nous travaillerons vite avant que ce soit fini."
    ],
    "correct": 1
  },
  {
    "text": "16. Il conduit en parlant au portable.",
    "options": [
      "Il conduit d’abord et après il parle au portable.",
      "Il écoute de la musique mais il ne travaille pas.",
      "Il travaille mais il n’écoute pas de la musique.",
      "Il conduit en même temps qu’il parle au portable.",
      "Il écoute de la musique d’abord et après il travaille."
    ],
    "correct": 3
  },
  {
    "text": "17. Les parents n’ont pas ........ remercier les pompiers. Ceux-ci ont ....... en garde la famille et ils sont .......",
    "options": [
      "Appelé",
      "Appelés",
      "Pu",
      "Mis",
      "Partis"
    ],
    "correct": 0
  },
	
	{
  "text": "18. Les parents n’ont pas ........ remercier les pompiers. Ceux-ci ont ....... en garde la famille et ils sont .......",
  "options": [
    "Appelé",
    "Appelés",
    "Pu",
    "Mis",
    "Partis"
  ],
  "correct": 0
},
{
  "text": "19. La question des inégalités ........ posée avec plus d'acuité ces dernières années.",
  "options": [
    "Est",
    "A été",
    "Sont",
    "Sera",
    "Sont étées"
  ],
  "correct": 1
},
{
  "text": "20. Choisissez la bonne phrase pour compléter l'expression : Un programme de travail ........ a été mis en place pour que l'entreprise puisse atteindre ses objectifs.",
  "options": [
    "Cohérent",
    "Coeur",
    "Clé",
    "Clé",
    "Chiffre"
  ],
  "correct": 3
},
{
  "text": "21. Ils ........ encore leur cause mais ne le feront pas longtemps.",
  "options": [
    "Vont soutenir",
    "Souteniront",
    "Supporteront",
    "Aideront",
    "Réfléchiront"
  ],
  "correct": 0
},
	
{
  "text": "22. Quand ils auront terminé ce projet, ils ........ commencer un autre.",
  "options": [
    "Vont",
    "Vont",
    "Feront",
    "Souhaiter",
    "Partir"
  ],
  "correct": 3
},
{
  "text": "23. Cette nouvelle a ........ de nombreuses réactions chez les habitants de la ville.",
  "options": [
    "Provoqué",
    "Interrompu",
    "Créer",
    "Implication",
    "Mis"
  ],
  "correct": 0
},
{
  "text": "24. Nous avons ........ notre devoir avant d'aller à la plage.",
  "options": [
    "Terminé",
    "Commençons",
    "Prendre",
    "Devoir",
    "Terminated"
  ],
  "correct": 0
},

{
  "text": "25. Il ........ à l'école hier, mais il ne s'est pas bien senti.",
  "options": [
    "Est allé",
    "Allait",
    "Va",
    "Va",
    "Partait"
  ],
  "correct": 0
 },
 {
  "text": "26. Il a trouvé une solution à ce problème, mais il ........ de l'expliquer à ses collègues.",
  "options": [
    "Devait",
    "Doit",
    "Peut",
    "Voulez",
    "Ai"
  ],
  "correct": 1
},
{
  "text": "27. Ils ........ une nouvelle proposition avant la fin de la réunion.",
  "options": [
    "Feront",
    "Peuvent",
    "Disent",
    "Comprendre",
    "Vont"
  ],
  "correct": 0
},

{
  "text": "28. Le chef ........ toutes les règles avant de commencer.",
  "options": [
    "Doit",
    "Peuvent",
    "Doit",
    "Want",
    "Vla"
  ],
  "correct": 2
},

{
  "text": "29. Le chef ........ toutes les règles avant de commencer.",
  "options": [
    "Doit",
    "Peuvent",
    "Doit",
    "Veut",
    "Valeur"
  ],
  "correct": 0
},
{
  "text": "30. Nous ........ à la réunion ce matin.",
  "options": [
    "Assisterons",
    "Étions présents",
    "Sommes venus",
    "Serons",
    "Viendrons"
  ],
  "correct": 2
},
{
  "text": "31. Il ........ prendre une décision dès que possible.",
  "options": [
    "Va",
    "Doit",
    "Voudra",
    "Peut",
    "Réfléchira"
  ],
  "correct": 1
},
{
  "text": "32. Ils ........ le projet en janvier.",
  "options": [
    "Commenceront",
    "Commencent",
    "Ont commencé",
    "Ont commencé",
    "Allaient"
  ],
  "correct": 0
},
{
  "text": "33. Nous ........ à ce moment-là.",
  "options": [
    "Serons",
    "Sommes",
    "Serions",
    "Allons",
    "Étaient"
  ],
  "correct": 0
},
{
  "text": "34. Vous ........ la situation avant de donner votre avis.",
  "options": [
    "Comprendrez",
    "Comprend",
    "Avez compris",
    "Aviez",
    "Sont compris"
  ],
  "correct": 0
},
{
  "text": "35. Ils ........ à la fin du mois.",
  "options": [
    "Vont partir",
    "Sont partis",
    "Vont",
    "Sont",
    "PArtes"
  ],
  "correct": 0
},

{
  "text": "36. Nous ........ une grande surprise lors de l'annonce.",
  "options": [
    "Avons eu",
    "Aurons",
    "Avoir",
    "Avons",
    "Avions"
  ],
  "correct": 0
},
{
  "text": "37. Tu ........ le message avant de partir.",
  "options": [
    "As reçu",
    "Recevras",
    "Reçois",
    "Reçois",
    "As"
  ],
  "correct": 0
},
{
  "text": "38. Il ........ pas encore prêt à partir.",
  "options": [
    "N'est",
    "N'était",
    "Ne sera",
    "N'est",
    "Ne"
  ],
  "correct": 0
},
{
  "text": "39. Vous ........ plus de temps pour réfléchir à votre décision.",
  "options": [
    "Aurez",
    "Avez",
    "Avoir",
    "Aviez",
    "Devez"
  ],
  "correct": 0
},
{
  "text": "40. Ils ........ leurs valises avant de quitter la maison.",
  "options": [
    "Vont faire",
    "Font",
    "Fait",
    "Feront",
    "Vont"
  ],
  "correct": 0
},
	
	{
  "text": "41. Elle ........ d'accord avec toi sur ce sujet.",
  "options": [
    "Est",
    "Sera",
    "A été",
    "Soit",
    "Est"
  ],
  "correct": 0
},
{
  "text": "42. Nous ........ à la réunion demain à 10 heures.",
  "options": [
    "Allons participer",
    "Allons",
    "Sommes",
    "Aller",
    "Participerons"
  ],
  "correct": 0
},
{
  "text": "43. Vous ........ la décision avant la fin de la semaine.",
  "options": [
    "Prenez",
    "Preniez",
    "Prendrez",
    "Prenait",
    "Prenant"
  ],
  "correct": 2
},
{
  "text": "44. Ils ........ de bonnes idées pour améliorer le projet.",
  "options": [
    "Ont",
    "Auront",
    "Ont eu",
    "Ont",
    "Ont"
  ],
  "correct": 0
},
{
  "text": "45. Elle ........ toujours la vérité dans ses discours.",
  "options": [
    "Dit",
    "Dire",
    "Dira",
    "Dit",
    "Dira"
  ],
  "correct": 0
},
{
  "text": "46. Nous ........ aux vacances de Noël après l'examen.",
  "options": [
    "Partons",
    "Partirons",
    "Partis",
    "Partiront",
    "Partaient"
  ],
  "correct": 1
 },
 {
  "text": "47. Ils ........ en vacances le mois prochain.",
  "options": [
    "Partent",
    "Partiront",
    "Vont partir",
    "Partiraient",
    "Partira"
   ],
  "correct": 1
 },
 {
  "text": "48. Tu ........ le film avant de prendre ta décision.",
  "options": [
    "Vois",
    "Verras",
    "A vue",
    "Voiras",
    "Vu"
  ],
  "correct": 1
 },
 {
  "text": "49. Nous ........ de notre succès après des années de travail.",
  "options": [
    "Profiterons",
    "Profitons",
    "Avons profité",
    "Profitera",
    "Profitons"
  ],
  "correct": 0
 },
 {
  "text": "50. Vous ........ d'abord vos devoirs, puis vous pourrez jouer.",
  "options": [
    "Faites",
    "Faites",
    "Faites",
    "Devez",
    "Faites"
  ],
  "correct": 0
 },

  {
  "text": "51. Elle ........ déjà terminé son projet.",
  "options": [
    "A",
    "Aura",
    "A eu",
    "A terminé",
    "Avait"
  ],
  "correct": 0
},
{
  "text": "52. Ils ........ tout faire pour réussir.",
  "options": [
    "Vont",
    "Faut",
    "Doivent",
    "Devoir",
    "Faire"
  ],
  "correct": 2
},
{
  "text": "53. Nous ........ de partir tôt pour éviter le trafic.",
  "options": [
    "Espérons",
    "Espérerons",
    "Espérons",
    "Espéraient",
    "Espérions"
  ],
  "correct": 0
},
{
  "text": "54. Vous ........ vous concentrer sur votre travail.",
  "options": [
    "Devez",
    "Faites",
    "Devoir",
    "Devez",
    "Avez"
  ],
  "correct": 0
},
{
  "text": "55. Ils ........ préparer leur présentation pour demain.",
  "options": [
    "Vont",
    "Vont faire",
    "Feraient",
    "Fait",
    "Faire"
  ],
  "correct": 1
},
{
  "text": "56. Nous ........ comprendre ce que tu veux dire.",
  "options": [
    "Pouvons",
    "Pouvons",
    "Nous pouvons",
    "Pouvez",
    "Pouvez"
  ],
  "correct": 2
},
{
  "text": "57. Elle ........ toujours son téléphone dans son sac.",
  "options": [
    "A",
    "A trouvé",
    "A mis",
    "Porte",
    "Portait"
  ],
  "correct": 3
},
{
  "text": "58. Ils ........ aider leur voisin avec son déménagement.",
  "options": [
    "Ont",
    "Devront",
    "Diraient",
    "Vont",
    "Aider"
  ],
  "correct": 0
},
{
  "text": "59. Vous ........ peut-être venir plus tard.",
  "options": [
    "Pouvez",
    "Pouvez",
    "Voudrez",
    "Voudriez",
    "Voulez"
  ],
  "correct": 3
},
{
  "text": "60. Je ........ finir ce travail avant la fin de la journée.",
  "options": [
    "Dois",
    "Dois",
    "Devoir",
    "Deverai",
    "Doit"
  ],
  "correct": 0
}
		
	
];



// Perguntas de English
const englishQuestions = [
 	{
    text: "1. What is the past tense of the verb 'go'?",
    "options": [
      "Go",
      "Goes",
      "Went", // Resposta correta
      "Going",
      "Gone"
    ],
    "correct": 3
  },
  {
    text: "2. Which word is an antonym of 'happy'?",
    "options": [
      "Sad", // Resposta correta
      "Excited",
      "Joyful",
      "Calm",
      "Peaceful"
    ],
    "correct": 1
  },
  {
    text: "3. What is the plural form of 'child'?",
    "options": [
      "Childs",
      "Children", // Resposta correta
      "Child",
      "Childrens",
      "Child's"
    ],
    "correct": 2
  },
  {
    text: "4. What is the synonym of 'beautiful'?",
    "options": [
      "Ugly",
      "Pretty", // Resposta correta
      "Awful",
      "Bad",
      "Terrible"
    ],
    "correct": 2
   },
   {
    text: "5. Which one is a conjunction?",
    "options": [
      "Run",
      "Quickly",
      "And", // Resposta correta
      "Happy",
      "Before"
    ],
    "correct": 3
   },
	
	  {
    text: "6. When leaving the business dinner that day, the writer...",
    "options": [
      "felt that she/he had actually eaten the meal without any major issues.",
      "felt that she/he had behaved much better than she/he had anticipated.",
      "felt that she/he had learned something about business etiquette.",
      "felt more hesitant about her/his conduct than when going to it.",
      "felt more interested in business manners and codes than when going to it."
    ],
    correct: 2
  },
  {
    text: "7. According to the text, proper business protocol...",
    "options": [
      "can’t be as harmful to people’s professional career and skills as you may think.",
      "can’t be as positive to people’s professional career and skills as you may think.",
      "can discourage people’s professional career and skills.",
      "can be in the way of people’s professional career and skills.",
      "can leverage people’s professional career and skills."
    ],
    correct: 4
  },
  {
    text: "8. After reading this text, which of the following will you more likely not do if admitted into University?",
    "options": [
      "always show up to classes and any other activities at the school",
      "never be tardy to classes or any other activities at the school",
      "strive to do what you plead to, no matter what",
      "discriminate against others",
      "advance University goals"
    ],
    correct: 4
  },
  {
    text: "9. The writer uses the example of a capulana because...",
    "options": [
      "she/he wanted to show that capulanas are always accepted as appropriate attire at the workplace.",
      "she/he wanted to illustrate that rules concerning etiquette may be specific to each workplace.",
      "she/he wanted to show that you can tie a capulana and go to work in Mozambique.",
      "she/he needed to show that some of your co-workers may not like capulanas.",
      "she/he needed to highlight the idea that rules are standard everywhere."
    ],
    correct: 2
  },
  {
    text: "10. When talking about business etiquette, after reading this text, it is just logical that if admitted into University one of the first things...",
    "options": [
      "you must do should be to get and read the regulations concerning student life.",
      "you can do is to find out about the expected code of conduct of a student.",
      "you would have to do would be to adapt to the place before long.",
      "you should do is to ask 2nd Year students the rules they follow.",
      "you would do would go to the library and study."
    ],
    correct: 1
  },
  {
    text: "11. “What if I accidentally brought up a sensitive subject or committed a faux pas?” – Faux pas means:",
    "options": [
      "a violent action",
      "a misdemeanor",
      "a common mistake",
      "an impropriety",
      "an appropriate conduct"
    ],
    correct: 4
  },
  {
    text: "12. “Such attire may annoy your colleagues”. Attire is...",
    "options": [
      "a company dress code",
      "women’s clothing",
      "outfit",
      "offensive clothes",
      "elegance"
    ],
    correct: 3
  },
  {
    text: "13. “Such attire may annoy your colleagues, and even get you in hot water with management”. Hot water means the same as...",
    "options": [
      "bad conduct",
      "trouble",
      "out of place",
      "criticism",
      "the opposite of cold water"
    ],
    correct: 2
  },
  {
    text: "14. “... paying attention to how the executives behave (and following suit)”. One expression that is not equivalent to following suit is ...",
    "options": [
      "doing as another one has done.",
      "buying and wearing a suit.",
      "succeeding someone.",
      "following in the footsteps of someone.",
      "copying or imitating a given behaviour."
    ],
    correct: 2
  },
  {
    text: "15. “The most standard ones include (i) keeping your word ...” Keeping your word means ...",
    "options": [
      "remaining silent.",
      "letting no-one know what you are thinking about.",
      "helping others when in need of assistance.",
      "remembering to do what you promised to do.",
      "never telling anyone secrets."
    ],
    correct: 4
  },

	{
    text: "16. ‘I was shocked and surprised that the vehicle had been stolen _____ the hotel car-park’, he said.",
    options: [
      "at",
      "from",
      "by",
      "on",
      "near"
    ],
    correct: 2
  },
  {
    text: "17. ‘If thieves had _____ into the vehicle, the guards should have seen them.’",
    options: [
      "broke",
      "broken",
      "stole",
      "stealing",
      "break"
    ],
    correct: 2
  },
  {
    text: "18. The two guards on _____ last night both say they saw nothing unusual taking place in the car park.",
    options: [
      "job",
      "duty",
      "work",
      "task",
      "shift"
    ],
    correct: 2
  },
  {
    text: "19. There _____ several Land Rover Discoveries in the car park last night.",
    options: [
      "were",
      "was",
      "been",
      "are",
      "is"
    ],
    correct: 1
  },
  {
    text: "20. The colours were not _____ distinguishable.",
    options: [
      "easy",
      "easier",
      "much",
      "more",
      "clearly"
    ],
    correct: 4
  },
  {
    text: "21. The manager of the hotel said both men had _____ for her for many years.",
    options: [
      "been working",
      "worked",
      "working",
      "works",
      "work"
    ],
    correct: 2
  },
  {
    text: "22. She supported _____ statements.",
    options: [
      "his",
      "their",
      "her",
      "its",
      "these"
    ],
    correct: 2
  },
  {
    text: "23. A police spokesperson said a large number of four-wheel drive vehicles are _____ every day in all parts of the country.",
    options: [
      "stolen",
      "stealing",
      "stole",
      "break",
      "taken"
    ],
    correct: 1
  },
  {
    text: "24. Many people think that, in a small town like this, crime _____ exist.",
    options: [
      "doesn’t",
      "isn’t",
      "might not",
      "must not",
      "won’t"
    ],
    correct: 1
  },
  {
    text: "25. Drivers of four-wheel drive vehicles _____ be particularly alert.",
    options: [
      "can",
      "may",
      "should",
      "might",
      "must"
    ],
    correct: 4
  },
  {
    text: "26. If you _____ your vehicle in what you think is a safe place, you might not find it.",
    options: [
      "leave",
      "left",
      "leaving",
      "have left",
      "are leaving"
    ],
    correct: 1
  },
  {
    text: "27. Even _____ five minutes without a security lock or alarm, you may not find it.",
    options: [
      "for",
      "at",
      "in",
      "since",
      "after"
    ],
    correct: 1
  },
  {
    text: "28. If you _____ back to the car later, it might be gone.",
    options: [
      "comes",
      "come",
      "came",
      "have come",
      "are coming"
    ],
    correct: 2
  },
  {
    text: "29. A police officer said that people _____ be careful of their property.",
    options: [
      "can",
      "must",
      "might",
      "should",
      "will"
    ],
    correct: 2
  },
  {
    text: "30. When you _____ back, your car might not be there.",
    options: [
      "return",
      "go",
      "leave",
      "have",
      "are returning"
    ],
    correct: 1
  },
	
	  {
    text: "31. He _____ the car before it started raining.",
    options: [
      "washed",
      "washes",
      "wash",
      "had washed",
      "has washed"
    ],
    correct: 4
  },
  {
    text: "32. I think it _____ sunny tomorrow.",
    options: [
      "will be",
      "is being",
      "was",
      "is",
      "will"
    ],
    correct: 1
  },
  {
    text: "33. They _____ happy to see you at the party next week.",
    options: [
      "are being",
      "will be",
      "was",
      "have been",
      "will"
    ],
    correct: 2
  },
  {
    text: "34. She _____ a doctor when she graduates.",
    options: [
      "is being",
      "will be",
      "was",
      "is",
      "has been"
    ],
    correct: 2
  },
  {
    text: "35. We _____ at the train station to meet you when you arrive.",
    options: [
      "will be",
      "are",
      "was",
      "were",
      "is being"
    ],
    correct: 1
  },
  {
    text: "36. He _____ late if he doesn’t leave soon.",
    options: [
      "is",
      "will be",
      "was",
      "has been",
      "will"
    ],
    correct: 2
  },
  {
    text: "37. Tomorrow at this time, I _____ preparing for the meeting.",
    options: [
      "will be",
      "am",
      "was",
      "is being",
      "have been"
    ],
    correct: 1
  },
  {
    text: "38. _____ you at home later? I need to talk to you.",
    options: [
      "Will",
      "Are",
      "Was",
      "Were",
      "Is"
    ],
    correct: 1
  },
  {
    text: "39. They _____ working on the project until it is completed.",
    options: [
      "will be",
      "is being",
      "are",
      "was",
      "have been"
    ],
    correct: 1
  },
  {
    text: "40. By next year, she _____ a senior manager in the company.",
    options: [
      "will be",
      "was",
      "is being",
      "has been",
      "is"
    ],
    correct: 1
  },
  {
    text: "41. I promise I _____ careful with your belongings.",
    options: [
      "will be",
      "am being",
      "was",
      "have been",
      "is"
    ],
    correct: 1
  },
  {
    text: "42. He _____ to the gym every morning before work.",
    options: [
      "go",
      "goes",
      "going",
      "went",
      "gone"
    ],
    correct: 2
  },
  {
    text: "43. Sarah _____ herself in the mirror before leaving the house.",
    options: [
      "looked",
      "saw",
      "watched",
      "look",
      "views"
    ],
    correct: 1
  },
  {
    text: "44. This is the book _____ I told you about yesterday.",
    options: [
      "which",
      "who",
      "whom",
      "whose",
      "that"
    ],
    correct: 4
  },
  {
    text: "45. If he _____ earlier, he wouldn’t have missed the meeting.",
    options: [
      "arrived",
      "had arrived",
      "arrives",
      "was arriving",
      "has arrived"
    ],
    correct: 2
  },
  {
    text: "46. She didn’t tell _____ about the surprise party.",
    options: [
      "anyone",
      "someone",
      "nobody",
      "none",
      "everybody"
    ],
    correct: 1
  },
  {
    text: "47. They decided to _____ themselves with a short holiday after a long project.",
    options: [
      "reward",
      "celebrate",
      "enjoy",
      "rest",
      "treat"
    ],
    correct: 4
  },
  {
    text: "48. You should apologize to _____ for being late.",
    options: [
      "me",
      "myself",
      "I",
      "mine",
      "my"
    ],
    correct: 1
  },
  {
    text: "49. This is the teacher _____ students adore.",
    options: [
      "whom",
      "who",
      "whose",
      "which",
      "that"
    ],
    correct: 2
  },
  {
    text: "50. The children enjoyed _____ at the park yesterday.",
    options: [
      "themself",
      "themselves",
      "each other",
      "theirself",
      "them"
    ],
    correct: 2
  },
  {
    text: "51. Which option completes the sentence? By next year, she _____ a senior manager in the company.",
    options: [
      "will be",
      "was",
      "is being",
      "has been",
      "is"
    ],
    correct: 1
  }
	
 ];




// Perguntas de Historia
const historyQuestions = [
  {
    "text": "1. Na periodização da História de Moçambique, o período que se estende entre 1886 e 1930 é geralmente designado:",
    "options": [
      "Período da luta armada pela libertação nacional",
      "Período da agressão imperialista em Moçambique",
      "Período de Moçambique independente",
      "Período pré-colonial em Moçambique",
      "Período da formação dos primeiros estados em Moçambique"
    ],
    "correct": 1
  },

  {
    "text": "2. A migração no séc. XI trouxe para o planalto da região entre os rios Zambeze e Limpopo povos que construíram amuralhados de pedra. Estes povos eram designados por:",
    "options": [
      "Sotho",
      "Nguni",
      "Chuabos",
      "Shona",
      "Tswana"
    ],
    "correct": 3
  },

  {
    "text": "3. O lobolo é característica das comunidades moçambicanas, nomeadamente...",
    "options": [
      "Macua e Shona.",
      "Chuabo e Tauara.",
      "Macua e Tsonga.",
      "Teve e Ajaua.",
      "Tsonga e Chopi."
    ],
    "correct": 0
  },
  {
    "text": "4. No âmbito da penetração mercantil estrangeira em Moçambique, os portugueses fundaram em 1505 a Feitoria de:",
    "options": [
      "Quelimane",
      "Sena",
      "Tete",
      "Sofala",
      "Ilha de Moçambique"
    ],
    "correct": 3
  },

  {
    "text": "5. Os seguintes estados constituem exemplos dos estados militares do Vale de Zambeze:",
    "options": [
      "Massangano, Macanga e Zumbo",
      "Báruè, Quiteve e Sedanda",
      "Macanjila, Mtalica e Mataca",
      "Matsolo, Tembe e Nuamba",
      "Kaphwiti, Lundu e Undi"
    ],
    "correct": 0
  },

  {
    "text": "6. Os principais produtos que constituíam suporte para comercialização nos Estados Marave eram:",
    "options": [
      "Enxadas de ferro, tecidos de algodão (machiras), sal e marfim",
      "Ouro e marfim",
      "Apenas as machiras",
      "Apenas o marfim",
      "Ouro, penas de pássaros vermelhos e leguminosas"
    ],
    "correct": 0
  },

  {
    "text": "7. Como resultado das relações comerciais entre o Império de Mutapa e os portugueses, foi instituído o pagamento da curva, que era um tributo...",
    "options": [
      "Anual pago em ouro ao Mwenemutapa",
      "Mensal pago em dentes de marfim ao Mwenemutapa",
      "Pago às muchas em ocasiões especiais",
      "Diário pago para circular no território de Mwenemutapa",
      "Quinzenal pago aos portugueses"
    ],
    "correct": 0
  },

  {
    "text": "8. No Império de Mutapa, o comércio a longa distância e a mineração do ouro eram actividades económicas importantes, mas a principal forma de exploração era:",
    "options": [
      "A agricultura",
      "A caça do elefante",
      "Cobrança do tributo",
      "Cobrança do mussoco",
      "Venda de missangas"
    ],
    "correct": 0
  },

  {
    "text": "9. A penetração mercantil portuguesa em Moçambique, no séc. XV, foi antecedida por confrontações militares com:",
    "options": [
      "Os estados africanos em Moçambique",
      "Os comerciantes árabes estabelecidos na costa moçambicana",
      "Os comerciantes árabes estabelecidos no interior de Moçambique",
      "Os Estados militares e afro-islâmicos da costa",
      "Os ingleses e alemães que já se encontravam em Moçambique"
    ],
    "correct": 1
  },

  {
    "text": "10. Na organização político-administrativa do Estado de Mwenemutapa, os chefes províncias eram:",
    "options": [
      "Muenemusha ou Mukuru",
      "Fumo ou Encosse",
      "Mambo ou Muri",
      "Musha",
      "Mwenemutapa"
    ],
    "correct": 0
  },

  {
    "text": "11. Inicialmente, os Portugueses fixaram-se no litoral onde estabeleceram feitorias. A Fortaleza da Ilha de Moçambique foi fundada em:",
    "options": [
      "1500",
      "1510",
      "1507",
      "1509",
      "1505"
    ],
    "correct": 4
  },

  {
    "text": "12. No contexto da ocupação efetiva, os portugueses ocuparam militarmente Maganja da Costa no ano de:",
    "options": [
      "1779",
      "1833",
      "1884",
      "1898",
      "1920"
    ],
    "correct": 3
  },

  {
    "text": "13. Os estados militares resistiram tenazmente à invasão portuguesa. Uma das figuras da resistência foi Bonifácio 'M ́passo', que liderou a resistência em:",
    "options": [
      "Magul",
      "Maganja da Costa",
      "Chaimite",
      "Lourenço Marques",
      "Nampula"
    ],
    "correct": 2
  },

  {
    "text": "14. Na resistência em Cabo Delgado e Niassa destacam-se os feitos dos:",
    "options": [
      "Macanga",
      "Khomala",
      "Mussa Quanto",
      "Mataca",
      "Farelay"
    ],
    "correct": 3
  },

  {
    "text": "15. Na instalação do aparelho do estado colonial, nas áreas destinadas aos europeus, os portugueses criaram:",
    "options": [
      "Capitania-mor",
      "Comandos militares",
      "Regedorias",
      "Concelhos",
      "Circunscrições"
    ],
    "correct": 4
  },

  {
    "text": "16. Em 1899, entrou em vigor a principal legislação de trabalho aprovada pelo Governo Português para o território moçambicano. Um dos aspectos essenciais desses regulamentos foi:",
    "options": [
      "A institucionalização do trabalho forçado",
      "A colecta de impostos, nomeadamente, do mussoco e imposto de palhota",
      "Abolição da escravatura",
      "A política do trabalho migratório",
      "A política da caderneta"
    ],
    "correct": 1
  },

  {
    "text": "17. No contexto da luta armada de libertação nacional, liderada pela FRELIMO, a (re)abertura da Frente de Tete e a abertura da Frente de Manica e Sofala foram respectivamente em:",
    "options": [
      "1968 e 1972",
      "1971 e 1975",
      "1964 e 1969",
      "1964 e 1971",
      "1962 e 1969"
    ],
    "correct": 1
  },

  {
    "text": "18. O Acordo de Cessar-fogo entre o Governo Português e a Frente de Libertação de Moçambique (FRELIMO), a 7 de Setembro de 1974, teve lugar na cidade de:",
    "options": [
      "Lisboa",
      "Lusaka",
      "Roma",
      "Dar es Salaam",
      "Porto"
    ],
    "correct": 2
  },

  {
    "text": "19. Samora Machel tornou-se Presidente da FRELIMO em:",
    "options": [
      "1962",
      "1964",
      "1969",
      "1970",
      "1974"
    ],
    "correct": 3
  },

  {
    "text": "20. O Acordo através do qual se estabeleceu mecanismos de boa vizinhança e não ingerência em assuntos internos na região foi:",
    "options": [
      "de Nkomati",
      "Geral da Paz",
      "de Lusaka",
      "de Limpopo",
      "de Delagoa Bay"
    ],
    "correct": 1
  },

  {
    "text": "21. O Plano Prospectivo e Indicativo foi um plano que visava assegurar o desenvolvimento do país. Este plano foi aprovado pelo Governo de Moçambique em:",
    "options": [
      "1975",
      "1984",
      "1992",
      "1979",
      "1987"
    ],
    "correct": 3
  },

  {
    "text": "22. O Programa de Reabilitação Económica (PRE), iniciado em 1987, foi transformado em PRES, incorporando a componente social, em:",
    "options": [
      "1987",
      "1986",
      "1988",
      "1990",
      "1992"
    ],
    "correct": 3
  },

  {
    "text": "23. As primeiras eleições autárquicas em Moçambique foram realizadas em:",
    "options": [
      "1994",
      "1998",
      "1999",
      "2004",
      "1992"
    ],
    "correct": 0
  },

  {
    "text": "24. A principal causa da resistência africana contra a ocupação europeia foi:",
    "options": [
      "A defesa da escravatura em África",
      "A defesa das rotas comerciais",
      "A construção de caminhos-de-ferro",
      "A defesa da soberania",
      "O aumento do comércio do Ouro"
    ],
    "correct": 3
  },

  {
    "text": "25. A expansão europeia para África foi feita em duas vagas expedicionárias. Uma no século XV e outra no século XVI. A primeira vaga da expansão europeia em África cabe aos mercadores:",
    "options": [
      "Holandeses",
      "Ingleses",
      "Espanhóis",
      "Belgas",
      "Portugueses"
    ],
    "correct": 4
  },

  {
    "text": "26. A Conferência de Berlim entre as grandes potências europeias teve como um dos resultados:",
    "options": [
      "A descoberta de",
      "A expansão marítima da África",
      "A descoberta de novas terras",
      "A partilha de África",
      "A localização de territórios"
    ],
    "correct": 3
  },

  {
    "text": "27. Participaram na Conferência de Berlim:",
    "options": [
      "10 países",
      "14 países",
      "2 países",
      "13 países",
      "15 países"
    ],
    "correct": 1
  },

  {
    "text": "28. No interior da Tanzânia, a resistência contra a ocupação alemã (que chegou nos finais do século XIX) realizou-se em torno do chefe:",
    "options": [
      "Mkwawa",
      "Lat Dyor Diop",
      "Lobengula",
      "Kagubi",
      "Mataka"
    ],
    "correct": 0
  },

  {
    "text": "29. Em 1914, apenas dois países africanos continuavam livres da colonização europeia. Estamos a falar de:",
    "options": [
      "Kenya e Sudão",
      "África do Sul e Senegal",
      "Tunísia e Camarões",
      "Etiópia e Libéria",
      "Namíbia e Líbia"
    ],
    "correct": 3
  },

  {
    "text": "30. Uma das causas da derrota dos povos africanos na luta de resistência contra a penetração estrangeira foi a:",
    "options": [
      "Dificuldade de comunicação nos territórios africanos",
      "Dificuldade dos europeus em penetrar nos reinos africanos",
      "Falta de unidade entre os povos africanos",
      "Superioridade das armas dos africanos",
      "Falta de alimentos para os guerrilheiros africanos"
    ],
    "correct": 2
  },

  {
    "text": "31. As ideias e símbolos religiosos jogaram papel importante nas resistências africanas. Por exemplo, Abd al-Qadir liderou a resistência no/a:",
    "options": [
      "Sudão",
      "Egipto",
      "Argélia",
      "Etiópia",
      "Marrocos"
    ],
    "correct": 2
  },

  {
    "text": "32. Durante o processo da colonização, os dois principais tipos de administração estabelecidos pelas potências coloniais em África foram:",
    "options": [
      "Centralizada e Descentralizada",
      "Directa e Indirecta",
      "Voluntária e Involuntária",
      "Tribal e étnica",
      "Positiva e Negativa"
    ],
    "correct": 1
  },

  {
    "text": "33. Em 1922, a companhia majestática British South Africa Company (BSAC), de Cecil Rhodes, deixou de administrar o atual território do:",
    "options": [
      "Marrocos",
      "Congo",
      "Botswana",
      "Zimbabwe",
      "Níger"
    ],
    "correct": 3
  
  },

  {
    "text": "34. A intervenção inglesa nos assuntos da administração local limitava-se aos sectores da saúde, agricultura, transporte e defesa. A este sistema de administração chamou-se:",
    "options": [
      "Sistema Administrativo Centralizado",
      "Sistema Administrativo de Pirâmide",
      "Sistema Administrativo Branco",
      "Sistema Administrativo Directo",
      "Sistema de Administração Indirecta, 'indirect rule'"
    ],
    "correct": 4
  },
  {
    "text": "35. Nas colónias portuguesas de África durante o regime da República (1910-1926) gozavam de ampla autonomia financeira e administrativa e eram designadas por:",
    "options": [
      "Províncias Coloniais",
      "Províncias Ultramarinas",
      "Províncias de Portugal",
      "Províncias do Índico",
      "Províncias da Costa do Índico"
    ],
    "correct": 1
  },
  {
    "text": "36. As independências em África nos anos 50 a 60 tiveram influências dos países do sudoeste asiático, principalmente em relação:",
    "options": [
      "A independência de Camboja em 1954",
      "A Independência de Vietname em 1954",
      "A independência de Paquistão",
      "A independência de Índia em 1947",
      "A independência de Birmânia em 1947"
    ],
    "correct": 3
  },
  {
    "text": "37. Os africanos intelectuais da década de 40 a 50 que mais se destacaram no nacionalismo africano na região de África sub-Sahariana foram:",
    "options": [
      "Ian Smith da Rodésia do Sul e Kwame Nkrumah do Gana",
      "Kwame Nkrumah do Ghana e Jomo Kenyatta do Quénia",
      "C. Eduardo Mondlane de Moçambique e Julius Mwalimu Nyerere de Tanzânia",
      "Oliver Tambo de África do Sul e Kenneth David Kaunda da Zâmbia",
      "Robert Mugabe de Zimbabwe e Samora Machel de Moçambique"
    ],
    "correct": 2
  },
  {
    "text": "38. O pan-africanismo e a negritude influenciaram muito o nacionalismo africano. O líder negro considerado ‘pai do pan-africanismo’ foi:",
    "options": [
      "Leopold Senghor",
      "Oliver Tambo",
      "William Du Bois",
      "Nelson Mandela",
      "Amílcar Cabral"
    ],
    "correct": 2
  },
  {
    "text": "39. O desenvolvimento do nacionalismo africano foi acompanhando a evolução colonial, mesmo antes da Segunda Guerra Mundial. As principais bases ideológicas deste nacionalismo foram:",
    "options": [
      "O afrocentrismo e o eurocentrismo",
      "O neo-liberalismo e o neo-colonialismo",
      "O pan-eslavismo e o calvinismo",
      "O pan-africanismo e a negritude",
      "O positivismo e o iluminismo"
    ],
    "correct": 3
  },

  {
    "text": "40. A Organização que foi formada a 17 de Agosto de 1992 foi:",
    "options": [
      "Comunidade dos Países da Língua Portuguesa (CPLP)",
      "Federação da África Ocidental Francesa (AOF)",
      "Organização da Unidade Africana (OUA)",
      "União Africana (UA)",
      "Comunidade de Desenvolvimento da África Austral (SADC)"
    ],
    "correct": 4
  },

  
  {
    "text": "41. A Nova Parceria para o Desenvolvimento de África (NEPAD) é baseada numa visão comum e numa firme convicção dos líderes africanos de erradicar a pobreza e colocar os países africanos na via de crescimento sustentável e desenvolvimento, este programa é da:",
    "options": [
      "FRELIMO",
      "ANC",
      "ZAPU",
      "TANU",
      "?"
    ],
    "correct": 1
  },
  {
    "text": "42. Na Cimeira de Durban, Julho de 2002, registou-se a substituição oficial:",
    "options": [
      "da Organização da Unidade Africana (OUA) pela União Africana (UA)",
      "da Conferência para a Coordenação e Desenvolvimento da África Austral (SADCC) pela Comunidade de Desenvolvimento da África Austral (SADC)",
      "da organização dos Países da Língua Oficial Portuguesa (PALOPs) pela Comunidade dos Países da Língua Portuguesa (CPLP)",
      "da Federação da África Ocidental Francesa (AOF) pela Comunidade Económica dos Estados da África Ocidental (CEDEAO)",
      "do Banco Africano de Desenvolvimento (BAD) pelo Fundo Monetário Internacional (FMI)"
    ],
    "correct": 0
  },
  {
    "text": "43. A tomada da Bastilha a 14 de Julho de 1789 marcou:",
    "options": [
      "O estabelecimento do Directório",
      "O estabelecimento do Consulado",
      "O estabelecimento da República Burguesa",
      "O início da Revolução Francesa",
      "O fim da Revolução Francesa"
    ],
    "correct": 3
  },


  {
    "text": "44. A Revolução Industrial iniciou na Europa no Século XVIII. O primeiro país em que se desenvolveu esta revolução foi:",
    "options": [
      "A Suíça",
      "A Rússia",
      "A França",
      "A Alemanha",
      "A Inglaterra"
    ],
    "correct": 4
  },

  {
    "text": "45. O líder que introduziu o fascismo na Itália na década de 1920 foi:",
    "options": [
      "Sílvio Berlusconi",
      "Benito Mussolini",
      "Charles de Gaulle",
      "Franklin Roosevelt",
      "Winston Churchill"
    ],
    "correct": 1
  },

  {
    "text": "46. A Primeira Guerra Mundial desenrolou entre 1914 e 1918. A principal causa desta guerra foi:",
    "options": [
      "As divergências entre as grandes potências imperialistas pelo domínio do mundo",
      "O Ataque japonês às bases dos Estados Unidos no Pacífico",
      "O ataque alemão aos navios civis dos Estados Unidos no Atlântico",
      "O avanço das ideias socialistas no Mundo",
      "O assassinato do Arquiduque Francisco Ferdinando, herdeiro do império austro-húngaro, em Serajevo, em Junho de 1914"
    ],
    "correct": 4
  },


  {
    "text": "47. O líder que introduziu o Nazismo na Alemanha na década de 1930 foi:",
    "options": [
      "Otto Von Bismarck",
      "Helmut Kohl",
      "Adolf Hitler",
      "Franklin Roosevelt",
      "Benito Mussolini"
    ],
    "correct": 2
  },


  {
    "text": "48. A Segunda Guerra Mundial teve uma série de consequências incluindo as de carácter político, militar, ideológico, económico e social. Dos acontecimentos/processos abaixo, podemos considerar como consequência da Segunda Guerra Mundial:",
    "options": [
      "A guerra fria",
      "A criação da União das Repúblicas Socialistas Soviéticas",
      "A grande guerra Anglo – boer na África do Sul",
      "O derrube de Muhamar Kadafi na Líbia",
      "A crise económica mundial de 1929 – 1933"
    ],
    "correct": 0
  },

  {
    "text": "49. No contexto da II Guerra Mundial, o dia 6 de Junho de 1944 é conhecido como o Dia D. Neste data as tropas aliadas efectuaram o:",
    "options": [
      "Desembarque dos Alpes",
      "Desembarque da Normandia",
      "Desembarque de Roma",
      "Desembarque de Escandinávia",
      "Desembarque de Londres"
    ],
    "correct": 1
  },

  {
    "text": "50. A queda do muro de Berlim, que dividia a Alemanha em duas partes (Alemanha Federal e a Alemanha Democrática), teve lugar no ano:",
    "options": [
      "1989",
      "1991",
      "1992",
      "1996",
      "2000"
    ],
    "correct": 0
  },

  {
    "text": "51. O Plano Marshall foi um programa de recuperação dos aliados após a 2ª Guerra Mundial. Este plano foi liderado por:",
    "options": [
      "França",
      "Inglaterra",
      "Estados Unidos da América (EUA)",
      "União das Repúblicas Socialistas Soviéticas (URSS)",
      "Alemanha"
    ],
    "correct": 2
  },

  {
    "text": "52. O Plano Marshall foi implementado a partir de:",
    "options": [
      "1945",
      "1949",
      "1947",
      "1950",
      "1948"
    ],
    "correct": 2
  },

  {
    "text": "53. O Muro de Berlim foi uma separação da Alemanha, construído durante:",
    "options": [
      "A Guerra Fria",
      "A Primeira Guerra Mundial",
      "A Guerra dos 100 anos",
      "A Segunda Guerra Mundial",
      "A Guerra da Alemanha"
    ],
    "correct": 0
  },

  {
    "text": "54. A Conferência de Bandung resultou na criação do Movimento dos Não Alinhados em:",
    "options": [
      "1955",
      "1967",
      "1972",
      "1989",
      "2000"
    ],
    "correct": 0
  },

  {
    "text": "56. O Tratado de Maastricht institui a União Europeia com a designação actual de (UE) em:",
    "options": [
      "1994",
      "1990",
      "1992",
      "1998",
      "2002"
    ],
    "correct": 2
  },

  {
    "text": "57. O FMI foi criado em 1944 em Bretton Woods e era representado inicialmente por:",
    "options": [
      "50 países",
      "90 países",
      "45 países",
      "115 países",
      "100 países"
    ],
    "correct": 2
  },

  {
    "text": "58. A Organização do Tratado do Atlântico Norte congrega uma aliança militar intergovernamental baseada no Tratado do Atlântico Norte, assinado em:",
    "options": [
      "04 de Abril de 1949",
      "04 de Abril de 1945",
      "30 de Abril de 1950",
      "30 de Abril de 1949",
      "01 de Abril de 1950"
    ],
    "correct": 0
  },

  {
    "text": "59. Substituindo a “comunidade primitiva” e o predomínio da caça e da pesca, vários grupos populacionais foram chegando à Moçambique desde há cerca de 1700 anos, povoando gradualmente as bacias fluviais costeiras e, quase ao mesmo tempo, as encostas e os planaltos do interior. Esse processo de expansão em Moçambique ocorreu como consequência do conhecimento da agropecuária e do processo do fabrico do ferro, tendo ficado conhecido por:",
    "options": [
      "Penetração Mercantil",
      "M’fecane",
      "Expedições Missionárias",
      "Expansão Bantu",
      "Cerimónias tradicionais africanas"
    ],
    "correct": 3
  },

  {
    text: "60. Os nomes das unidades etnolinguísticas moçambicanas surgiram em períodos diferentes. Nesse contexto, os finais do século XVI seriam o período provável do aparecimento do termo...",
    "options": [
      "Ndau",
      "Chopi",
      "Tswa",
      "Yao",
      "Makua"
    ],
    "correct": 0
  },


    
];



// Perguntas de Geografia
 const geographyQuestions = [
  
  {
  text: "1. A Corrente Determinista estuda a relação entre:",
  options: [
    "O Meio económico e o físico",
    "O Meio físico e o químico",
    "O Homem e a Natureza",
    "O Homem e a Hidrosfera",
    "A Natureza e a Litosfera"
  ],
  correct: 2
 },

  {
  "text": "2. No século XIX, a Geografia passou a ser considerada uma ciência moderna, a partir da contribuição de dois cientistas alemães, tendo estes levado à que a Geografia adquirisse um carácter sistêmico e uma metodologia própria. Estes dois percursores da Geografia moderna são:",
  "options": [
    "Nicolau Copérnico e Cláudio Ptolomeu",
    "Vidal de La Blache e Johanes Kepler",
    "Alexandre Von Humboldt e Karl Ritter",
    "Richard Hartshorne e Alfred Hettner",
    "Isac Newton e Augosto Comte"
  ],
  "correct": 2
 },

  {
  "text": "3. A superfície de África é de cerca de:",
  "options": [
    "37 milhões de Km²",
    "32 milhões de Km²",
    "35 milhões de Km²",
    "30 milhões de Km²",
    "40 milhões de Km²"
  ],
  "correct": 2
 },

  {
  "text": "4. O diâmetro equatorial do Planeta Terra é de...?",
  "options": [
    "10.523,5 km",
    "11.253,7 km",
    "13.345,6 km",
    "12.713,5 km",
    "14.474,8 km"
  ],
  "correct": 3
 },

  {
  "text": "5. Apesar da Geografia ser considerada uma ciência charneira, na Antiguidade clássica ela se concentrava...",
  "options": [
    "na discrição dos factos",
    "na descrição dos fenómenos",
    "na descrição das florestas",
    "na discrição dos fenómenos espaciais",
    "descrição dos rios e mares"
  ],
  "correct": 1
 },

	{
  "text": "6. Na antiguidade, houve muitas teorias explicativas sobre o nosso Planeta, e uma delas defendia que este Planeta gira em torno...",
  "options": [
    "Da Terra",
    "Dos Mares",
    "Da ecúmena",
    "Da vegetação tropical",
    "Do Sol"
  ],
  "correct": 0
},

	{
  "text": "7. Qual destes métodos não constitui um método de estudo da Geografia?",
  "options": [
    "Cartográfico",
    "Estatístico",
    "Analítico",
    "Clínico",
    "Matemático"
  ],
  "correct": 3
},

	{
  "text": "8. Quem é o autor da Corrente Possibilista na Geografia?",
  "options": [
    "Paul Vidal de la Blache",
    "Alfred Hettner",
    "Friedrich Ratzel",
    "Karl Ritter",
    "Alexander von Humboldt"
  ],
  "correct": 0
 },

	{
  "text": "9. A geografia humana é um dos ramos da Geografia que se dedica ao estudo da relação entre os seres humanos e o ambiente em que vivem. Alguns dos temas que ela trata incluem:",
  "options": [
    "Agricultura, Geomorfologia, indústria, comércio, urbanismo.",
    "Climatologia, Biologia, indústria, comércio, urbanismo.",
    "História, Química, indústria, comércio, urbanismo.",
    "Agricultura, População, indústria, comércio, urbanismo.",
    "Física, População, indústria, comércio, Matemática."
  ],
  "correct": 3
 },

	{
  "text": "10. Equinócio é um fenómeno natural que é marcado:",
  "options": [
    "Pelos dias mais longos.",
    "Pelas noites mais longas.",
    "Pelas noites mais curtas.",
    "Pelos dias mais curtos.",
    "Os Hemisférios Sul e Norte recebem a mesma quantidade da radiação solar."
  ],
  "correct": 4
 },

	{
  "text": "11. No Hemisfério Norte, o Solstício ocorre duas vezes por ano e entre...",
  "options": [
    "21 de Junho e 21 de Dezembro",
    "22 de Dezembro e 21 de Junho",
    "21 de Junho e 22 de Setembro",
    "21 de Novembro e 22 de Maio",
    "21 de Março e 23 de Setembro"
  ],
  "correct": 0
 },

	{
  "text": "12. A Troposfera é uma camada da atmosfera que é, quimicamente, caracterizada por...",
  "options": [
    "Estratosfera",
    "Dióxido de Oxigénio",
    "Nitrogénio e Alumínio",
    "Nitrogénio e Oxigénio",
    "Oxigénio e Nitrogénio"
  ],
  "correct": 3
 },

	{
  "text": "13. No movimento aparente do Sol, a rotação da Terra provoca a impressão de que o Sol se movimenta de...",
  "options": [
    "Leste para Oeste",
    "Leste para nascente",
    "Oeste para Leste",
    "Oeste para Nascente",
    "Nascente para Leste"
  ],
  "correct": 0
 },

	{
  "text": "14. Ao longo de um determinado dia, foram registados os seguintes valores de temperatura: 06 horas – 22°C, 10 horas – 25°C, 14 horas – 42°C, 18 horas – 35°C, 22 horas – 32°C, 02 horas – 23°C. Considerando os dados acima, indique a temperatura média diurna naquele dia.",
  "options": [
    "22°C",
    "27°C",
    "30°C",
    "41°C",
    "32°C"
  ],
  "correct": 2
 },

	{
  "text": "15. As auroras boreais ocorrem com maior frequência nas seguintes regiões:",
  "options": [
    "África Oriental",
    "Europa Setentrional",
    "Ásia Menor",
    "América do Sul",
    "Noroeste Europeu"
  ],
  "correct": 1
 },

	{
  "text": "16. O Rio Zambeze é classificado como sendo:",
  "options": [
    "O maior do continente africano",
    "O segundo maior rio do continente",
    "O terceiro rio mais longo do continente",
    "O quarto mais longo do continente",
    "Nenhuma das alternativas"
  ],
  "correct": 2
 },

	{
  "text": "17. O rio Limpopo é considerado vital em Moçambique para a população da (s) província (s) de:",
  "options": [
    "Gaza",
    "Gaza e Maputo",
    "Gaza e Inhambane",
    "Maputo",
    "Inhambane"
  ],
  "correct": 2
 },

	{
  "text": "18. A maioria dos rios moçambicanos é do regime:",
  "options": [
    "Periódico",
    "Intermitente",
    "Permanente",
    "Permanente e periódico",
    "Nenhum"
  ],
  "correct": 2
 },

	{
  "text": "19. Para classificação do clima Köppen usou como critério:",
  "options": [
    "A Temperatura, precipitação e vegetação",
    "Vegetação",
    "Pressão e Temperatura",
    "A nebulosidade",
    "A quantidade da chuva"
  ],
  "correct": 0
 },

	{
  "text": "20. Qual das seguintes rochas constitui uma rocha sedimentar?",
  "options": [
    "Argila",
    "Calcário",
    "Mármore",
    "Granito",
    "Basalto"
  ],
  "correct": 1
 },

	{
  "text": "21. Como se designa a zona externa da Terra, cuja superfície está submetida à acção de múltiplos agentes erosivos?",
  "options": [
    "Núcleo",
    "Litosfera",
    "Crusta ou crosta terrestre",
    "Manto interno",
    "Manto externo"
  ],
  "correct": 2
},

	{
  "text": "22. O processo de desgaste das rochas fixas, na geodinâmica externa, por acção dos detritos transportados pelos ventos, toma o nome de:",
  "options": [
    "Erosão eólica",
    "Deflação",
    "Corrosão",
    "Erosão",
    "Corrosão"
  ],
  "correct": 1
 },

	{
  "text": "23. A erosão é o processo de...",
  "options": [
    "transporte dos detritos da montante à jusante",
    "desintegração, transporte e acumulação do material vegetal",
    "desintegração, transporte e acumulação dos detritos",
    "passagem de água com areia e água",
    "passagem do vento com areia"
  ],
  "correct": 2
 },

	{
  "text": "24. Em Moçambique, as rochas sedimentares localizam-se...",
  "options": [
    "a Sul do Save e na província de Tete",
    "nas províncias de Sofala e Manica",
    "praticamente, em todo o Sul do Save e província de Sofala",
    "em toda a parte Norte do país, Cabo-Delgado, Nampula e Niassa, e nas províncias de Tete e Manica",
    "em vastas regiões, principalmente nas províncias de Tete, Zambézia, Niassa, Cabo-Delgado e, na parte Sul, na cadeia dos Libombos"
  ],
  "correct": 4
 },

 {
  "text": "25. Lixiviação é o processo que consiste em...",
  "options": [
    "aumentar a camada espessa do solo",
    "reduzir a camada espessa da crosta",
    "atribuir a cor vermelha aos solos",
    "lavar os solos por meio dos processos químicos",
    "distribuir os húmus pelo solo"
  ],
  "correct": 3
 },

	
	{
  "text": "26. Melanização pressupõe o processo pelo qual os solos...",
  "options": [
    "adquirem a cor clara",
    "adquirem a cor preta/escura",
    "adquirem a cor castanha",
    "se solidificam",
    "se compactam"
  ],
  "correct": 1
 },

	{
  "text": "27. As placas litosféricas deslizam e, às vezes, colidem entre si a uma velocidade que oscila entre 01 e 10 cm/ano. O movimento que ocorre quando duas placas se chocam e a borda de uma fica debaixo da outra, até chegar ao manto, denomina-se por:",
  "options": [
    "Afastamento",
    "Separação",
    "Colisão e soerguimento",
    "Deslizamento",
    "Convergência"
  ],
  "correct": 4
 },

	{
  "text": "28. No âmbito da ciência geográfica, a Biogeografia é:",
  "options": [
    "A ciência que estuda e explica a origem, as condições geográficas e a repartição espacial das plantas e dos animais.",
    "A parte da geografia que inclui todos ecossistemas do mundo.",
    "A parte da geografia que estuda o conjunto de animais e plantas juntamente com o meio ambiente.",
    "A parte da geografia que estuda a substituição ordenada e gradual de uma comunidade por outra, até que se chegue a uma comunidade estável.",
    "A parte da geografia que estuda os seres vivos e ecossistemas."
  ],
  "correct": 1
 },

	{
  "text": "29. O tipo de solo que possui uma grande quantidade de areia, muito permeável e normalmente pobre em nutrientes, designa-se:",
  "options": [
    "Terra preta.",
    "Argiloso.",
    "Irrigado.",
    "Humífero.",
    "Arenoso."
  ],
  "correct": 4
 },

	{
  "text": "30. O lago é uma extensão de água cercada de terra, que pode ser natural ou artificial. Qual é a origem do lago Niassa?",
  "options": [
    "Tectónica.",
    "Artificial.",
    "Feito pelos Portugueses.",
    "Erosão eólica.",
    "Pelas chuvas convectivas."
  ],
  "correct": 1
 },

	{
  "text": "31. O lago Niassa faz parte dos seguintes países:",
  "options": [
    "Moçambique, Malawi e Zimbabwe.",
    "Moçambique, Tanzânia e África do Sul.",
    "Moçambique, Zâmbia e Madagáscar.",
    "Moçambique, Zâmbia e Tanzânia.",
    "Moçambique, Tanzânia e Malawi."
  ],
  "correct": 4
 },

	{
  "text": "32. Qual é a escala usada para medir a intensidade dos sismos?",
  "options": [
    "Pantone",
    "Glasgow",
    "Pauling",
    "Richter",
    "Fujita"
  ],
  "correct": 3
 },

	{
  "text": "33. Moçambique é um país costeiro, banhado pelo Oceano Índico. Indique o tipo de corrente que passa pelo Canal de Moçambique.",
  "options": [
    "Corrente fria de Humboldt",
    "Corrente das Agulhas",
    "Corrente de Benguela",
    "Corrente do Golfo",
    "Corrente Equatorial do Sul"
  ],
  "correct": 1
 },

	{
  "text": "34. Etiópia é um país africano que é banhado pelo oceano...",
  "options": [
    "Índico",
    "Atlântico",
    "Pacífico",
    "Glacial Antárctico",
    "Glacial Árctico"
  ],
  "correct": 0
 },

	{
  "text": "35. Embora não se tenha observado em todos os países, uma das principais características da população africana do século XXI é:",
  "options": [
    "Declínio da mortalidade e o aumento da natalidade",
    "Declínio da mortalidade e da natalidade",
    "Grandes migrações internas",
    "Aumento da mortalidade",
    "Aumento da mortalidade infantil"
  ],
  "correct": 0
 },

	{
  "text": "36. A densidade populacional compreende:",
  "options": [
    "A relação entre pessoas que vivam na mesma área",
    "A relação entre a população e a área",
    "A relação entre a população absoluta e a relativa",
    "A relação entre a população activa e a população dependente",
    "A relação entre a população residente e estrangeira"
  ],
  "correct": 1
 },

	{
  "text": "37. A teoria de Malthus, que apresenta a tese sobre o crescimento da população, foi publicada no seu livro intitulado:",
  "options": [
    "Ensaio da população",
    "Crescimento geométrico da população",
    "Ensaio sobre o princípio da população",
    "Ensaio do crescimento da população",
    "Ensaio da progressão aritmética da população"
  ],
  "correct": 2
 },

	{
  "text": "38. A China e Índia perfazem...",
  "options": [
    "Menos de 1⁄2 da população mundial.",
    "Mais de 1/3 da população mundial.",
    "Menos de 1/5 da população mundial.",
    "Mais de 1⁄2 da população mundial.",
    "Menos de 1/10 da população mundial."
  ],
  "correct": 1
 },

	{
  "text": "39. Muito recentemente a população mundial atingiu 7 biliões de habitantes. Indique o ano em que essa meta foi alcançada?",
  "options": [
    "2011",
    "2000",
    "2012",
    "2018",
    "2013"
  ],
  "correct": 0
 },

	{
  "text": "40. Fuga de cérebros é um tema bastante atual e que suscita muita curiosidade. Este conceito se refere a:",
  "options": [
    "Saída de pessoas para estudarem na Europa.",
    "Entrada de estudantes europeus e brasileiros em Moçambique.",
    "Saída e entrada de pessoas altamente qualificadas de e para Moçambique.",
    "Entrada de chineses para fazerem negócios em Moçambique.",
    "Entrada de nigerianos para dominarem o mercado nacional."
  ],
  "correct": 2
 },

	
	{
  "text": "41.O recenseamento da população ou censo demográfico faz o levantamento ou coleta periódica de dados estatísticos da população e habitação. Em Moçambique, este tem sido realizado em intervalos decenais. O próximo recenseamento será realizado no ano de:",
  "options": [
    "2020",
    "2022",
    "2024",
    "2025",
    "2027"
  ],
  "correct": 2
 },

	{
  "text": "42. Indique o maior produtor e exportador de petróleo em África:",
  "options": [
    "Marrocos",
    "Ruanda",
    "África do Sul",
    "Angola",
    "Nigéria"
  ],
  "correct": 4
 },

	{
  "text": "43. A África do Sul é país africano maior produtor de:",
  "options": [
    "Diamantes",
    "Ouro",
    "Platina",
    "Carvão mineral",
    "Titânio"
  ],
  "correct": 3
 },

	{
  "text": "44. Na actualidade, com a globalização, os factores que influenciam na localização da actividade industrial são:",
  "options": [
    "Transporte, Vias de comunicação e custo da mão-de-obra.",
    "Capital e energia.",
    "Energia, proximidade dos mercados.",
    "Transporte e matéria-prima.",
    "Proximidade dos mercados e matéria-prima."
  ],
  "correct": 1
 },

	{
  "text": "45. A indústria de ponta exige mão-de-obra...",
  "options": [
    "altamente qualificada.",
    "jovem.",
    "preferencialmente feminina.",
    "abundante com homens musculosos.",
    "que integra artesãos."
  ],
  "correct": 0
 },

	{
  "text": "46. A província mais populosa do país é:",
  "options": [
    "Inhambane.",
    "Nampula.",
    "Gaza.",
    "Zambézia.",
    "Tete."
  ],
  "correct": 1
 },

	{
  "text": "47. De acordo com os Resultados do IV Recenseamento Geral da População e Habitação, a taxa de fecundidade em Moçambique se situa em:",
  "options": [
    "2,5 filhos por mulher.",
    "3,5 filhos por mulher.",
    "5,2 filhos por mulher.",
    "4,5 filhos por mulher.",
    "6,3 filhos por mulher."
  ],
  "correct": 2
 },

	{
  "text": "48. Em Moçambique, muitas crianças que nascem não chegam a celebrar o seu primeiro aniversário. A que variável demográfica refere-se a afirmação?",
  "options": [
    "Mortalidade.",
    "Esperança de vida.",
    "Saldo fisiológico.",
    "Crescimento efectivo.",
    "Mortalidade infantil."
  ],
  "correct": 4
 },

	{
  "text": "49. Em Moçambique, sobretudo na região Norte, existem campos de refugiados. Onde se localiza o principal campo de refugiados em Moçambique?",
  "options": [
    "Nampula.",
    "Sofala.",
    "Tete.",
    "Inhambane.",
    "Maputo."
  ],
  "correct": 0
 },

	{
  "text": "50. O turismo é uma actividade económica para o desenvolvimento dos países. Na Idade Média, esta actividade foi marcada por:",
  "options": [
    "Viagens para descanso.",
    "Viagens para estudos.",
    "Viagens para jogos olímpicos.",
    "Peregrinações religiosas.",
    "Cruzeiros no mar."
  ],
  "correct": 3
 },

	{
  "text": "51. O Parque Nacional do Limpopo localiza-se na província de Gaza, nos distritos de:",
  "options": [
    "Xai-Xai e Chibuto.",
    "Massingir, Chicualacuala e Mabalane.",
    "Massingir e Chicualacuala.",
    "Massingir e Mabalane.",
    "Nenhuma das alternativas."
  ],
  "correct": 1
 },

	{
  "text": "52. A Praia de Bilene é uma das principais atracções turísticas de Moçambique. Esta localiza-se na província de:",
  "options": [
    "Inhambane.",
    "Zambézia.",
    "Gaza.",
    "Cabo Delgado.",
    "Nampula."
  ],
  "correct": 2
 },

	{
  "text": "53. Qual é o sistema de cultivo que consiste no plantio de uma única espécie no mesmo terreno?",
  "options": [
    "Agro-floresta.",
    "Extensivo.",
    "Monocultura.",
    "Policultura.",
    "Horti-cultura."
  ],
  "correct": 2
 },

	{
  "text": "54. O processo de levar água aos solos secos designa-se:",
  "options": [
    "Drenagem.",
    "Adubação.",
    "Irrigação.",
    "Rotação de culturas.",
    "Aração."
  ],
  "correct": 2
  },

	{
  "text": "55. Os países da Comunidade para o Desenvolvimento da África Austral (SADC) são:",
  "options": [
    "África do Sul, Angola, Botswana, Ilhas Comores, Lesotho, Malawi, Maurícias, Moçambique, Namíbia, República Democrática do Congo, Seicheles, Suazilândia, Tanzânia, Zâmbia, Zimbabwe.",
    "África do Sul, Angola, Botswana, Lesoto, Malawi, Maurícias, Moçambique, Namíbia, República Democrática do Congo, Seicheles, Suazilândia, Tanzânia, Zâmbia, Zimbabwe.",
    "África do Sul, Angola, Botswana, Lesoto, Malawi, Madagáscar, Maurícias, Moçambique, Namíbia, República Democrática do Congo, Suazilândia, Tanzânia, Zâmbia, Zimbabwe.",
    "África do Sul, Angola, Botswana, Lesoto, Malawi, Madagáscar, Maurícias, Moçambique, Namíbia, República Democrática do Congo, Seicheles, Suazilândia, Tanzânia, Zâmbia, Zimbabwe.",
    "África do Sul, Angola, Botswana, Ilhas Comore, Lesoto, Malawi, Madagáscar, Maurícias, Moçambique, Namíbia, República Democrática do Congo, Seicheles, Suazilândia, Tanzânia, Zâmbia, Zimbabwe."
  ],
  "correct": 3
 },

	{
  "text": "56. Os Países Africanos apresentam a maior percentagem da População Economicamente Activa no(s) sector(es):",
  "options": [
    "Secundário e terciário.",
    "Terciário e quaternário.",
    "Primário e secundário.",
    "Secundário.",
    "Primário."
  ],
  "correct": 4
 },

	{
  "text": "57. As grandes plantações agrícolas introduzidas nos continentes americano, africano e asiático usaram mão-de-obra escrava e o sistema de monoculturas. Quais destas culturas fazem parte do sistema de plantações?",
  "options": [
    "Cana-de-açúcar, batata, café, cacau e banana.",
    "Cana-de-açúcar, soja, café, cacau e banana.",
    "Cana-de-açúcar, milho, café, cacau e banana.",
    "Cana-de-açúcar, trigo, café, cacau e banana.",
    "Cana-de-açúcar, cevada, café, cacau e banana."
  ],
  "correct": 1
 },

	{
  "text": "58. A sistematização da Geografia em disciplina académica deve-se a dois cientistas, que são:",
  "options": [
    "William Morris e Alexandre von Humboldt",
    "Vidal de la Blache e Bernhardus Varenius",
    "Alexandre von Humboldt e Karl Ritter",
    "Emmanuel Kant e Karl Ritter",
    "Alexandre von Humboldt e Vidal de la Blache"
  ],
  "correct": 2
 },

	{
  "text": "59. As curvas de nível avaliam a curvatura da terra. A resposta é:",
  "options": [
    "Correcta",
    "Parcialmente correcta",
    "Incorrecra",
    "Totalmente correcta",
    "Nenhuma das alternativas anteriores"
  ],
  "correct": 2
 },
	
{
  "text": "60. Como é que se chama a rocha que é utilizada nas obras de engenharia civil, em aterros, execução de argamassa e também no fabrico de vidros?",
  "options": [
    "Gneiss",
    "Areia",
    "Argila",
    "Mármore",
    "Granito"
  ],
  "correct": 1
 }
	
];


// Perguntas de Fisica
const physicsQuestions = [
  {
    text: "1. Qual é a unidade de medida da força no Sistema Internacional?",
    options: [
      "Joule",
      "Watt",
      "Pascal",
      "Newton", // Resposta correta
      "Ampere"
    ],
    correct: 4 // Índice da resposta correta
  },
  {
    text: "2. O que acontece com a energia em um sistema isolado?",
    options: [
      "É destruída",
      "É transformada", // Resposta correta
      "Aumenta continuamente",
      "É criada",
      "Permanece constante em todas as formas"
    ],
    correct: 2 // Índice da resposta correta
  },
  {
    text: "3. Qual é a velocidade da luz no vácuo?",
    options: [
      "300 km/h",
      "3 x 10⁸ m/s", // Resposta correta
      "150 x 10⁶ m/s",
      "3 x 10⁶ m/s",
      "30.000 km/s"
    ],
    correct: 2 // Índice da resposta correta
  },
  {
    text: "4. Qual das forças a seguir é considerada uma força de contato?",
    options: [
      "Força gravitacional",
      "Força normal", // Resposta correta
      "Força elétrica",
      "Força magnética",
      "Força de atração nuclear"
    ],
    correct: 2 // Índice da resposta correta
  },
  {
    text: "5. Qual é a fórmula para calcular a energia cinética de um objeto?",
    options: [
      "E = mgh",
      "E = 1/2 mv²", // Resposta correta
      "E = mc²",
      "E = mv",
      "E = qV"
    ],
    correct: 2 // Índice da resposta correta
  },
	
	{
  text: "6. Um corpo é lançado verticalmente para cima, a partir do solo, com uma velocidade de 40 m/s. Desprezando o atrito do ar, o tempo que o corpo gasta para atingir a altura máxima é:",
  options: [
    "10",
    "9,8",
    "4",
    "10",
    "5"
  ],
  correct: 2 // Índice da resposta correta
},

	{
  text: "7. Qual é o coeficiente de atrito de um bloco de 10 kg que alcança 2 m/s, num deslocamento de 10 m, partindo do repouso? Considere a força a ele aplicada igual a 10 N.",
  options: [
    "8",
    "0,8",
    "2",
    "0,08",
    "0,5"
  ],
  correct: 3 // Índice da resposta correta
},

	
	{
  text: "8. Um corpo de massa 19kg está em movimento. Durante um certo intervalo de tempo, o módulo da sua velocidade passa de 10m/s para 40m/s. Qual o trabalho realizado pela força resultante sobre o corpo nesse intervalo de tempo?",
  options: [
    "1425",
    "14,25",
    "40",
    "190",
    "14250"
  ],
  correct: 4 // Índice da resposta correta
},

	{
  text: "9. Um móvel em MRUV parte do repouso e atinge a velocidade de 20 m/s. Se a aceleração do móvel é 2 m/s², determine a distância percorrida por esse móvel.",
  options: [
    "200",
    "100",
    "40",
    "50",
    "10"
  ],
  correct: 1 // Índice da resposta correta
},

	{
  text: "10. Um veículo se desloca a 108 km/h em uma estrada, onde a velocidade máxima permitida é 110 km/h. Ao tocar o telefone celular do condutor, imprudentemente ele desvia sua atenção para o aparelho ao longo de 4s. Qual é a distância percorrida, em metros, pelo veículo durante os 4s em que o condutor atendeu o celular?",
  options: [
    "120",
    "132",
    "146",
    "168",
    "8"
  ],
  correct: 0 // Índice da resposta correta
},

	{
  text: "11. A água de massa específica ρ = 1030 kg/m³, escoa através de um tubo horizontal. No ponto 1, a pressão manométrica vale 12 kPa e a velocidade é de 6 m/s. Qual é a pressão manométrica no ponto 2, onde a velocidade é de 4 m/s?",
  options: [
    "12",
    "14",
    "16",
    "20",
    "22"
  ],
  correct: 4 // Índice da resposta correta
},

	{
  text: "12. Num escoamento, na secção circular de um tubo horizontal, a velocidade do fluído é de 2 m/s. Qual é, em m/s, a velocidade do fluído numa secção do estrangulamento do tubo, se o seu diâmetro reduz-se à metade?",
  options: [
    "3",
    "4",
    "6",
    "8",
    "9"
  ],
  correct: 3 // Índice da resposta correta
},

	{
  text: "13. Um objecto de massa 5,0 kg movimentando-se a uma velocidade de módulo 10m/s, choca-se frontalmente com um segundo objecto de massa 20,0 kg , parado. O primeiro objecto, após o choque, recua com uma velocidade de módulo igual a 2,0 ms . Desprezando-se o atrito, determine o módulo da velocidade do segundo, após o choque:",
  options: [
    "2",
    "3",
    "4",
    "5",
    "6"
  ],
  correct: 1 // Índice da resposta correta
},

	{
  text: "14. Certa massa de um gás ocupa um volume de 20 litros a 27ºC e 600 mmHg de pressão. Qual é, em litros, o volume ocupado por essa mesma massa de gás a 47ºC e 800 mmHg de pressão?",
  options: [
    "4",
    "6",
    "8",
    "12",
    "16"
  ],
  correct: 4 // Índice da resposta correta
},

	{
  text: "15. Aquecedores solares usados em residências têm o objetivo de elevar a temperatura da água até 70°C. No entanto, a temperatura ideal da água para um banho é de 30°C. Por isso, deve-se misturar a água aquecida com a água à temperatura ambiente de um outro reservatório, que se encontra a 25°C. Qual a razão entre a massa de água quente e a massa de água fria na mistura para um banho à temperatura ideal?",
  options: [
    "0,111",
    "0,125",
    "0,357",
    "0,428",
    "0,833"
  ],
  correct: 1 // Índice da resposta correta
},

	{
  text: "16. Um gás perfeito contido num recipiente, inicialmente a 127°C e 5000 Pa, sofreu uma transformação isocórica. Por essa via sua pressão passou para 2000 Pa. Assim, sua temperatura final em SI vale:",
  options: [
    "400°C",
    "320°C",
    "240°C",
    "160°C",
    "100°C"
  ],
  correct: 3 // Índice da resposta correta
},

	{
  text: "17. Durante a expansão, um determinado gás recebe Q=200 J de calor e realiza w=140 J de trabalho. No fim do processo, pode-se afirmar que a energia interna do gás:",
  options: [
    "aumentou em 60J",
    "aumentou em 340J",
    "diminuiu em 60J",
    "diminuiu em 340J",
    "não variou"
  ],
  correct: 0 // Índice da resposta correta
},

	
	{
  text: "18. Ao fornecer 300 calorias de calor para um corpo, verifica-se como consequência uma variação de temperatura igual a 50°C. Determine a capacidade térmica desse corpo, em cal/°C:",
  options: [
    "3",
    "6",
    "9",
    "12",
    "15"
  ],
  correct: 1 // Índice da resposta correta
},

	{
  text: "19. Uma carga elétrica igual a 20nC é deslocada do ponto cujo potencial é 70V, para outro cujo potencial é de 30V. Nessas condições, o trabalho realizado pela força elétrica do campo foi igual a:",
  options: [
    "800nJ",
    "600nJ",
    "350nJ",
    "200nJ",
    "100nJ"
  ],
  correct: 0 // Índice da resposta correta
},

	{
  text: "20. Uma carga de 2 × 10⁻⁷C encontra-se isolada, no vácuo, distante 6,0cm de um ponto P. Qual a proposição correta?",
  options: [
    "O vetor campo elétrico no ponto P está voltado para a carga",
    "O campo elétrico no ponto P é nulo porque não há nenhuma carga elétrica em P",
    "O potencial elétrico no ponto P é positivo e vale 3 × 10⁴V",
    "O potencial elétrico no ponto P é negativo e vale -5 × 10⁴V",
    "O potencial elétrico no ponto P é negativo e vale 5 × 10⁻⁴V"
  ],
  correct: 2 // Índice da resposta correta
},

	{
  text: "21. Um corpúsculo de 0,2g eletrizado com carga de 80 × 10⁻⁶C varia a sua velocidade de 20m/s para 80m/s ao se deslocar do ponto A para o ponto B de um campo elétrico. Qual é a ddp entre os pontos A e B desse campo?",
  options: [
    "9000",
    "8500",
    "7500",
    "3500",
    "1500"
  ],
  correct: 2 // Índice da resposta correta
},

	
	{
  "text": "22. A custa de que tipo de energia ocorre a emissão termoelectrónica?",
  "options": [
    "Energia luminosa",
    "Energia química",
    "Energia térmica",
    "Energia mecânica",
    "Energia potencial"
  ],
  "correct": 2
},

	{
  "text": "23. Uma carga elétrica puntiforme de 1,0 × 10⁻⁵ C passa com velocidade 2,5 m/s na direção perpendicular a um campo de indução magnética e fica sujeita a uma força igual a 5,0 × 10⁻⁴ N. Determine a intensidade desse campo.",
  "options": [
    "10 T",
    "20 T",
    "30 T",
    "40 T",
    "50 T"
  ],
  "correct": 1
},

	
	{
  "text": "24. Uma partícula com carga q = 2 × 10⁻⁷ C se desloca do ponto A ao ponto B, que se localizam numa região em que existe um campo elétrico. Durante esse deslocamento, a força elétrica realiza um trabalho igual a 4 × 10⁻³ J sobre a partícula. A diferença de potencial VA – VB entre os dois pontos considerados, vale, em V:",
  "options": [
    "-8 × 10⁻¹⁰",
    "8 × 10⁻¹⁰",
    "-2 × 10⁴",
    "2 × 10⁴",
    "0,5 × 10⁻⁴"
  ],
  "correct": 3
},

	{
  "text": "25. Uma lâmpada de 200 W emite 3 × 10²⁰ fotoeletrões por segundo, quando a sua luz incide sobre a superfície de um metal. Quantos fotoeletrões serão emitidos na unidade de tempo se se trocar a fonte por outra de 600 W?",
  "options": [
    "6 × 10²⁰",
    "9 × 10²⁰",
    "6 × 10⁻²⁰",
    "12 × 10²⁰",
    "3 × 10²⁰"
  ],
  "correct": 1
},

	{
  "text": "26. O rádio-226 tem um período de semidesintegração de 1600 anos. Quantos períodos de semidesintegração decorreram após 9600 anos?",
  "options": [
    "9",
    "6",
    "0,17",
    "45",
    "18"
  ],
  "correct": 1
},

	
	{
  "text": "27. Na sequência radioativa: ⁸⁴₂₁₆M → ⁸²₂₁₂N → ⁸³₂₁₂O → ⁸⁴₂₁₂P → ⁸²₂₀₈Q, temos, sucessivamente, emissões...",
  "options": [
    "--10β -10β -10β 24α",
    "24α 24α -10β -10β",
    "24α -10β 24α -10β",
    "24α -10β -10β 24α",
    "10β 24α 24α -10β"
  ],
  "correct": 3
},

	
	{
  "text": "28. Uma superfície metálica, cuja função trabalho é 2 eV, é iluminada por fótons de energia de 3 eV. Qual é, em eV, a energia cinética máxima dos fótons emitidos por esta superfície?",
  "options": [
    "1",
    "2",
    "3",
    "4",
    "5"
  ],
  "correct": 0
},

	{
  "text": "29. Radiação de comprimento de onda λ = 150 nm incide sobre uma superfície metálica, para a qual são necessários 6,28 eV para remover um elétron. Qual é, em eV, o potencial de corte? (h = 4,14×10⁻¹⁵ eV·s, c = 3×10⁸ m/s)",
  "options": [
    "1",
    "2",
    "3",
    "4",
    "5"
  ],
  "correct": 1
},

	
	{
  "text": "30. Os comprimentos de onda máximos respeitantes aos picos das curvas espectrais de dois corpos negros às temperaturas T1 = 800 K e T2 = 3200 K, são, respectivamente, λ1 e λ2. Qual é a razão λ1 / λ2?",
  "options": [
    "0,25",
    "0,50",
    "2",
    "3",
    "4"
  ],
  "correct": 4
},

	{
  "text": "31. O pico da curva espectral de um corpo negro ocorre a uma frequência de 5,5 × 10¹⁴ Hz. Qual é, em kelvin, a temperatura desse corpo negro?",
  "options": [
    "4000",
    "5000",
    "5500",
    "6000",
    "6500"
  ],
  "correct": 4
},


	{
  "text": "32. Um móvel obedece a equação horária x=6+10t+2t² (SI). No sistema internacional, a velocidade inicial e a aceleração desse móvel são, respectivamente:",
  "options": [
    "6 m/s e 2 m/s²",
    "6 m/s e 10 m/s²",
    "10 m/s e 6 m/s²",
    "10 m/s e 4 m/s²",
    "10 m/s e 8 m/s²"
  ],
  "correct": 3
},

	{
  "text": "33. Uma pedra é lançada verticalmente para cima com velocidade de 144 km/h. Qual é, em metros, a altura máxima atingida? (g = 10 m/s²)",
  "options": [
    "20",
    "30",
    "40",
    "60",
    "80"
  ],
  "correct": 4
},

	
	{
  "text": "34. Um objecto de massa 5,0kg movimentando-se a uma velocidade de módulo 10m/s, choca-se frontalmente com um segundo objecto de massa 20,0kg, parado. O primeiro objecto, após o choque, recua com uma velocidade de módulo igual a 2,0m/s. Desprezando-se o atrito, determine o módulo da velocidade do segundo, após o choque:",
  "options": [
    "2,0m/s",
    "3,0m/s",
    "4,0m/s",
    "6,0m/s",
    "8,0m/s"
  ],
  "correct": 2
},

	{
  "text": "35. Uma partícula de massa m1 que desliza numa superfície sem atrito com a velocidade v1, colide com outra partícula em repouso de massa m2. Após a colisão, as duas partículas deslizam juntas com uma velocidade, três (3) vezes menor que v1. A relação entre as massas m1 e m2 das duas partículas é:",
  "options": [
    "m2 = 2m1",
    "m1 = 2m2",
    "m2 = 3m1",
    "m1 = 3m2",
    "m2 = 4m1"
  ],
  "correct": 1
},

	{
  "text": "36. Um corpo de massa 10kg é lançado com velocidade inicial 10m/s, e move-se ao longo de uma superfície até se imobilizar totalmente. Qual é o trabalho realizado pela força de atrito para imobilizar esse corpo?",
  "options": [
    "-500J",
    "300J",
    "100J",
    "-100J",
    "1J"
  ],
  "correct": 3
},

	{
  "text": "37. Uma carga de 2x10⁻⁷ C encontra-se isolada, no vácuo, distante 6,0 cm de um ponto P. Qual a proposição correta?",
  "options": [
    "O vetor campo elétrico no ponto P está voltado para a carga",
    "O campo elétrico no ponto P é nulo porque não há nenhuma carga elétrica em P",
    "O potencial elétrico no ponto P é positivo e vale 3 × 10⁴ V",
    "O potencial elétrico no ponto P é negativo e vale -5 × 10⁴ V",
    "O potencial elétrico no ponto P é positivo e vale 3 × 10⁻⁴ V"
  ],
  "correct": 2
},

	{
  "text": "38. Um condutor reto de 5m de comprimento é percorrido por uma corrente de 20 A e está mergulhado num campo magnético constante de intensidade 0,6·10⁻⁴ T, que faz um ângulo de 30° com o condutor. A força magnética que atua sobre o condutor é de:",
  "options": [
    "7mN",
    "5mN",
    "3mN",
    "2mN",
    "1mN"
  ],
  "correct": 3
},

	{
  "text": "39. Misturam-se 8g de água a temperatura de 100°C com 12g de água a temperatura de 40°C. Qual será, em °C, a temperatura final da mistura, se o calor específico da água é 1 cal/g°C?",
  "options": [
    "42",
    "48",
    "60",
    "64",
    "70"
  ],
  "correct": 2
},

	{
  "text": "40. Uma fonte calorífica fornece calor continuamente à razão de 50 cal/s, a uma determinada massa de água. Se a temperatura da água aumenta de 40°C para 50°C em 2 minutos, sendo o calor específico da água 1 cal/g°C, pode-se concluir que a massa da água aquecida, em gramas, é...",
  "options": [
    "500",
    "600",
    "700",
    "800",
    "900"
  ],
  "correct": 3
},

	{
  "text": "41. Complete a frase: As ondas electromagnéticas com frequência acima dos raios X recebem o nome de:",
  "options": [
    "ondas longas",
    "micro-ondas",
    "raios gama",
    "raios catódicos",
    "radiação visível"
  ],
  "correct": 2
}

		
];

// Perguntas de Quimica
const chemistryQuestions = [
 {
  text: "1. Quando aquecidos, os cristais cinza-escuros de iodo podem passar diretamente para o estado gasoso sem deixar resíduos; vapores estes que podem passar novamente para o estado sólido, se a temperatura baixar novamente. Este trecho relata:",
  options: [
    "Dois fenómenos físicos, a ebulição e a solidificação do iodo",
    "Reação do iodo com o calor",
    "Decomposição da molécula de iodo por ação da temperatura",
    "Fenômenos físicos da sublimação do iodo", // Resposta correta
    "Fenômeno químico da transformação do iodo sólido em gasoso e vice-versa"
  ],
  correct: 3 // Índice da resposta correta
},

  {
  text: "2. Quantos moles encontram-se em 900 gramas de carbonato de cálcio (CaCO₃)? Massas atômicas: Ca - 40, C - 12, O - 16.",
  options: [
    "1",
    "2",
    "6",
    "9", // Resposta correta
    "5"
  ],
  correct: 3 // Índice da resposta correta
},

{
  text: "3. Um dos compostos prejudiciais no cigarro é a nicotina (C₁₀H₁₄N₂). Um cigarro contém 1,62 mg de nicotina. Calcule o número de moles e o número de moléculas de nicotina que uma pessoa pode aspirar fumando dois cigarros. Massas atómicas: C - 12, H - 1, N - 14.",
  options: [
    "1,62 moles e 6,02 × 10²³ moléculas",
    "0,00002 moles e 1,2 × 10¹⁰ moléculas",
    "0,02 moles e 1,2 × 10²² moléculas", // Resposta correta
    "0,2 moles e 1,2 × 10²³ moléculas",
    "0,1 moles e 0,6 × 10² moléculas"
  ],
  correct: 2 // Índice da resposta correta
},

  {
  text: "4. A combustão completa do metano produz dióxido de carbono e água. A alternativa que representa o número de moles de dióxido de carbono produzido na combustão de 0.3 moles de metano é:",
  options: [
    "12 mol",
    "0.6 mol", // Resposta correta
    "0.9 mol",
    "0.3 mol",
    "1.5 mol"
  ],
  correct: "1" // Resposta correta identificada pela letra
},

  {
  text: "5. Assinale a alternativa que corresponde à regra de Hund:",
  options: [
    "Orbital é a região do espaço, de maior probabilidade, onde se pode encontrar um elétron.",
    "Os subníveis S, p, d, f comportam, respectivamente, até 2, 6, 10, 14 elétrons.",
    "O orbital tem forma esférica.",
    "Os elétrons de um orbital devem ter spins contrários.",
    "Todos os orbitais de um subnível são preenchidos parcialmente, para depois serem completos."
  ],
  correct: 4 // Índice da resposta correta (começando do 0)
},

	{
  text: "6. Um elétron sai de um Nível A para outro Nível B próximo do núcleo:",
  options: [
    "Muda o sinal do spin do elétron.",
    "O elétron absorve (A + B) quanta de energia.",
    "O elétron liberta uma onda eletromagnética equivalente à energia de (A + B) quanta de energia.",
    "O elétron absorve (A - B) quanta de energia.",
    "O elétron liberta uma onda eletromagnética equivalente à energia de (A - B) quanta de energia."
  ],
  correct: 3 // Índice da resposta correta (começando do 0)
},

	{
  text: "7. Sendo dados os números atômicos de três elementos, qual é a opção que apresenta elementos com propriedades semelhantes?",
  options: [
    "21, 25, 30",
    "1, 2, 6",
    "6, 7, 8",
    "9, 17, 35",
    "12, 13, 14"
  ],
  correct: 3 // Índice da resposta correta (começando do 0)
},

	{
  text: "8. As propriedades a seguir indicadas variam de seguinte modo na tabela periódica:",
  options: [
    "A eletronegatividade aumenta ao longo do período",
    "O raio atômico diminui ao longo do grupo",
    "A energia de ionização diminui ao longo do período",
    "A afinidade eletrônica aumenta ao longo do grupo",
    "A eletropositividade diminui ao longo do grupo"
  ],
  correct: 0 // Índice da resposta correta (começando do 0)
},

	{
  text: "9. Os elementos químicos que pertencem ao grupo dos halogêneos possuem a seguinte configuração eletrônica na sua camada de valência:",
  options: [
    "A. np5",
    "B. ns2 np4",
    "C. ns2 nd3",
    "D. nd5 ns2",
    "E. ns2 np5"
  ],
  correct: 0 // Índice da resposta correta (começando do 0)
},

	
	{
  text: "10. O elemento cujo átomo tem maior número de elétrons em sua camada externa é aquele cujo número atômico é:",
  options: [
    "2",
    "7",
    "12",
    "11",
    "4"
  ],
  correct: 2 // Índice da resposta correta (começando do 0)
},

	{
  text: "11. Indique a alternativa correta para completar as lacunas da frase seguinte:___ \"Um elemento químico é representado pelo seu ___ e identificado pelo número de ___ e pode apresentar ___ diferente número de ___.\"",
  options: [
    "Nome-protões-camadas",
    "Nome-electrões-protões",
    "Símbolo-protões-neutrões",
    "Símbolo-neutrões-protões",
    "Símbolo-electrões-neutrões"
  ],
  correct: 2 // Índice da resposta correta (C)
},

	{
  text: "12. Os elementos carbono (Z = 6) e oxigénio (Z = 8) combinam-se para formar dióxido de carbono. Este composto apresenta:",
  options: [
    "2 ligações covalentes comuns e 2 ligações dativas",
    "1 ligação covalente comum e 3 ligações dativas",
    "3 ligações covalentes comuns e 1 ligação dativa",
    "4 ligações covalentes comuns",
    "2 ligações covalentes comuns"
  ],
  correct: 3 // Índice da resposta correta (D)
},

	{
  text: "13. São dados dois compostos Z e Y. Sendo o primeiro molecular, e o segundo iónico. Podemos afirmar categoricamente que:",
  options: [
    "Z não conduz a corrente eléctrica quando fundido ou em solução aquosa",
    "Os dois, quando fundidos, sempre conduzem a corrente eléctrica",
    "Somente Y pode conduzir a corrente eléctrica quando ambos estão em solução aquosa",
    "Somente Z pode conduzir a corrente eléctrica quando ambos estão em solução aquosa",
    "Y conduz a corrente eléctrica quando fundido ou em solução aquosa"
  ],
  correct: 4 // Índice da resposta correta (Y conduz a corrente eléctrica quando fundido ou em solução aquosa)
},

	{
  text: "14. O aumento da diferença de eletronegatividade entre os elementos ocasiona a seguinte ordem no caráter das ligações:",
  options: [
    "Covalente polar, covalente apolar, iônica",
    "Iônica, covalente polar, covalente apolar",
    "Covalente apolar, iônica, covalente polar",
    "Covalente apolar, covalente polar, iônica",
    "Iônica, covalente apolar, covalente polar"
  ],
  correct: 3 // Índice da resposta correta (Covalente apolar, covalente polar, iônica)
},

	
	{
  text: "15. Quais os compostos que podem reagir com o ácido sulfúrico?",
  options: [
    "1 e 2",
    "2 e 3",
    "1 e 3",
    "1 e 4",
    "3 e 4"
  ],
  correct: 0 // Índice da resposta correta (1 e 2)
},

	{
  text: "16. Qual destes compostos é um óxido básico?",
  options: [
    "SO3",
    "MgO",
    "KOH",
    "CO2",
    "CHO"
  ],
  correct: 1 // Índice da resposta correta (MgO)
},

	{
  text: "17. Para preparar 1.2 litros de solução 0.4M de HCl, a partir do ácido concentrado (16M), o volume de água, em litros, a ser utilizado será de:",
  options: [
    "0,03",
    "0,47",
    "0,74",
    "1,03",
    "1,17"
  ],
  correct: 2 // Índice da resposta correta (0,74)
},

	{
  text: "18. Uma solução de concentração 0,5 normal apresenta, em cada litro:",
  options: [
    "0,5 mol de soluto",
    "0,5 equivalente-grama de soluto",
    "0,5 íons-grama de soluto",
    "0,5 átomo-grama de soluto",
    "0,5 molécula-grama de soluto"
  ],
  correct: 1 // Índice da resposta correta (0,5 equivalente-grama de soluto)
},

	{
  text: "19. O volume de água que se deve adicionar a 50 ml de uma solução de Al(SO4)3 a 0,4 N, a fim de torná-la 0,12 N, é igual a:",
  options: [
    "166,6 ml",
    "16,66 ml",
    "116,6 ml", // Resposta correta
    "16,6 ml",
    "1,66 ml"
  ],
  correct: 2 // Índice da resposta correta
},

	{
  text: "20. 20 mL de uma solução 0,5 N de NaOH foram misturados com 30 mL de uma solução de H₂SO₄ 0,2 N, contendo 2 gotas de tenolftaleína. Qual das afirmações seguintes é verdadeira? A mistura contém:",
  options: [
    "Excesso de NaOH e apresenta-se incolor",
    "Excesso de NaOH e apresenta-se rosa", // Resposta correta
    "Excesso de H₂SO₄ e apresenta-se incolor",
    "Excesso de H₂SO₄ e apresenta-se rosa",
    "pH igual a 7 e apresenta-se rosa"
  ],
  correct: 1 // Índice da resposta correta
},

	{
  text: "21. Substâncias simples são constituídas por um único __________ e, no seu estado padrão, possuem entalpia igual a __________. O calor de __________ de 1 mol de H₂(g) é numericamente igual ao calor de __________ de H₂O(l).",
  options: [
    "Elemento: 25°C e 1 atm: zero. Combustão: formação", // Resposta correta
    "Átomo: 25°C e 1 atm: zero. Combustão: formação",
    "Elemento: 25°C e 1 atm: zero. Formação: combustão",
    "Átomo: 25°C e 1 atm: um. Formação: combustão",
    "Elemento: 25°C e 1 atm: um. Combustão: formação"
  ],
  correct: 0 // Índice da resposta correta
},

	
	{
  text: "22. Dada a reação de dimerização 2NO(g) → N₂O₄(g), determine o valor de ΔH, sabendo que: Entalpia de formação de NO(g) = +34 kJ/mol e Entalpia de formação de N₂O₄(g) = +10 kJ/mol.",
  options: [
    "-58 kJ", // Resposta correta
    "+58 kJ",
    "+44 kJ",
    "-44 kJ",
    "-24 kJ"
  ],
  correct: 0 // Índice da resposta correta
},

	{
  text: "23. Em relação ao calor numa reação química que ocorre com absorção de calor, a(s) afirmação(ões) correta(s) é(são):",
  options: [
    "I. H_i deve ser maior que H_f", // Resposta correta
    "II. H_i deve ser maior que H_f",
    "III. H_i deve ser igual a H_f",
    "IV. A reação é exotérmica",
    "E. I"
  ],
  correct: 0 // Índice da resposta correta
},

	{
  text: "24. Dada a seguinte reação: 2NO + Cl2(g) → 2NOCl(g), se a concentração de NO(g) aumentar duas vezes, o que acontece com a velocidade da reação?",
  options: [
    "Aumenta duas vezes", // Resposta correta
    "Aumenta quatro vezes",
    "Aumenta uma vez",
    "Diminui duas vezes",
    "Mantém-se constante"
  ],
  correct: 0 // Índice da resposta correta
},

	{
  text: "25. Na cinética de uma reação, o aumento da temperatura provoca o aumento de todas as seguintes grandezas, exceto:",
  options: [
    "Velocidade da reação",
    "Energia do sistema",
    "Velocidade média das moléculas",
    "Energia de ativação", // Resposta correta
    "Energia cinética das partículas"
  ],
  correct: 3 // Índice da resposta correta
},

	{
  text: "26. Com base em estudos cinéticos, quais das afirmações abaixo estão corretas:",
  options: [
    "I. Toda reação é produzida por colisões, mas nem toda colisão gera uma reação.",
    "II. Uma colisão altamente energética pode produzir uma reação.",
    "III. Toda colisão com orientação adequada produz uma reação.",
    "IV. A energia mínima para uma colisão efetiva é denominada energia da reação.",
    "V. A diferença energética entre produtos e reagentes é denominada energia de ativação da reação.", // Resposta correta
  ],
  correct: 2 // Índice da resposta correta
},

	{
  text: "27. Dos fatores abaixo mencionados, quais os que aumentam a velocidade de uma reação química:",
  options: [
    "Calor, catalisador, ausência de luz",
    "Calor, maior superfície de contato entre reagentes, inibidor",
    "Calor, ausência de luz, inibidor",
    "Calor, maior superfície de contato entre reagentes, catalisador", // Resposta correta
    "Catalisador, frio, maior superfície de contato entre reagentes",
  ],
  correct: 3 // Índice da resposta correta
},

	{
  text: "28. Em solução aquosa, iões cromato (CrO₄²⁻ de cor amarela, coexistem em equilíbrio com iões dicromato (Cr₂O₇²⁻) de cor alaranjada, segundo a reação: 2(CrO₄²⁻) (aq) + 2H⁺ (aq) ⇌ (Cr₂O₇²⁻) (aq) + H₂O (l). A coloração alaranjada torna-se mais intensa quando se:",
  options: [
    "Adiciona OH⁻",
    "Aumenta a pressão",
    "Acrescenta mais água",
    "Acrescenta um catalisador",
    "Diminui o pH" // Resposta correta
  ],
  correct: 4 // Índice da resposta correta
},

	{
  text: "30. A constante de equilíbrio de um sistema é dada por Kc = [C][D] / [A][B]. A equação que representa a reação desse sistema é:",
  options: [
    "2C + 3D₂ ⇌ A + 4B",
    "A + B ⇌ C₂ + D₄",
    "A + B ⇌ C + D", // Resposta correta
    "4A + B ⇌ 2C + 3D",
    "A + B ⇌ C + D"
  ],
  correct: 3 // Índice da resposta correta
},

	{
  text: "31. O ácido acético é um importante ácido orgânico. Em solução aquosa, constitui o tempero conhecido pelo nome de vinagre. De cada 1000 moléculas de ácido acético dissolvidas em água, apenas 13 sofrem ionização. Calcule o grau de ionização desse ácido e classifique-o quanto à sua força.",
  options: [
    "a = 13%, ácido forte",
    "a = 1,3%, ácido forte",
    "a = 0,76%, ácido fraco", // Resposta correta
    "a = 1,3%, ácido fraco",
    "a = 13%, ácido fraco"
  ],
  correct: 2 // Índice da resposta correta
},

	{
  text: "32. Mistura-se 200mL de uma solução de HIO3, a 4x10^-3M, com igual volume da solução de Ba(OH)2, a 0.003M. Sabendo que o Kps de Ba(IO3)2 é 1.57x10^-9, preveja a formação de precipitado de Ba(IO3)2:",
  options: [
    "PI > Kps e há precipitação de Ba(IO3)2",
    "PI = Kps e não há precipitação de Ba(IO3)2",
    "PI < Kps e não há formação de precipitado de Ba(IO3)2", // Resposta correta
    "PI < Kps e há formação de precipitado de Ba(IO3)2",
    "PI > Kps e não há formação de precipitado de Ba(IO3)2"
  ],
  correct: 2 // Índice da resposta correta
},

	{
  text: "33. Mergulhando uma placa de cobre dentro de uma solução de nitrato de prata, observa-se a formação de uma coloração azulada na solução, característica da presença de Cu²⁺ (aq), e de um depósito de prata. Sobre essa reação, pode-se afirmar corretamente que:",
  options: [
    "A concentração dos íons nitrato diminui no processo",
    "O íon prata cede elétrons à placa de cobre",
    "O íon prata é o agente redutor",
    "O cobre metálico é oxidado pelos íons prata", // Resposta correta
    "Um íon prata é reduzido para cada átomo de cobre arrancado da placa"
  ],
  correct: 3 // Índice da resposta correta
},

	{
  text: "34. Na reação representada pela equação: MnO₄⁻ + xFe²⁺ + yH⁺ → Mn²⁺ + zFe³⁺ + wH₂O. Os coeficientes x, y, z e w são respectivamente:",
  options: [
    "5, 6, 5 e 3",
    "5, 4, 5 e 2",
    "3, 8, 3 e 4", // Resposta correta
    "3, 8, 3 e 8",
    "5, 8, 5 e 4"
  ],
  correct: 2 // Índice da resposta correta
},

	{
  text: "35. Pertence à classe das aminas primárias o composto que se obtém pela substituição:",
  options: [
    "De um dos átomos de hidrogénio do NH, por um radical acila",
    "De dois átomos de hidrogénio do NH, por dois radicais arila",
    "De um dos átomos de hidrogénio do NH, por um radical alquila", // Resposta correta
    "De dois átomos de hidrogénio do NH, por um radical alquilidena",
    "De três átomos de hidrogénio do NH, por um radical alquilidina"
  ],
  correct: 2 // Índice da resposta correta
},

	{
  text: "36. A substância de fórmula C₆H₁₆ representa um:",
  options: [
    "Alcano de cadeia aberta", // Resposta correta
    "Alcino de cadeia fechada",
    "Alcino de cadeia aberta",
    "Composto aromático",
    "Alceno de cadeia aberta"
  ],
  correct: 0 // Índice da resposta correta
},

	{
  text: "37. Em relação ao metilpropeno, podemos afirmar que contém:",
  options: [
    "Duas ligações pi",
    "Um carbono secundário", // Resposta correta
    "11 ligações sigma",
    "Quatro carbonos e 10 hidrogênios",
    "Um carbono quaternário"
  ],
  correct: 1 // Índice da resposta correta
},

	{
  text: "38. O ácido propanóico reage com NaH para dar origem ao composto:",
  options: [
    "CH3CH2CONa",
    "CH3CH2CH2ONa",
    "CH2=CHONaCH3",
    "CH3CH2COOH + Na",
    "CH3CH2COONa"
  ],
  correct: 0 // Índice da resposta correta
},

	{
  text: "39. Quando um dos hidrogênios da amônia é substituído por um radical arilo, o composto resultante é:",
  options: [
    "Sal de amônio",
    "Imida",
    "Amina",
    "Nitrila",
    "Amida"
  ],
  correct: 2 // Índice da resposta correta
},

	{
  text: "40. A alternativa que apresenta isómeros funcionais de etoxi-etano e acetona, respectivamente, é:",
  options: [
    "Todas as alternativas estão corretas",
    "Butano-Ie propanol-I",
    "Butanal e propanol-1",
    "Butanal e propanal",
    "Butanol-1 e propanal"
  ],
  correct: 3 // Índice da resposta correta
},

	{
  text: "41. A reacção de propeno com brometo de hidrogênio obedece a:",
  options: [
    "Regra de Markovnikov",
    "Teoria de Arrhenius",
    "Princípio de Pauli",
    "Regra de Ostwald",
    "Nenhuma das regras mencionadas"
  ],
  correct: 0 // Índice da resposta correta
},

	{
  text: "42. A sulfonação do benzeno obtem-se:",
  options: [
    "Sulfato de fenila",
    "Sulfato de benzila",
    "Hidrogenossulfato de fenila",
    "Ácido benzenossulfônico",
    "Hidrogenossulfato de benzila"
  ],
  correct: 3 // Índice da resposta correta
},

	{
  text: "43. A reação de 1-bromo propano com sódio metálico produz:",
  options: [
    "Propano",
    "Hexano",
    "Pentano",
    "2,2-dimetilbutano",
    "2,3-dimetilbutano"
  ],
  correct: 0 // Índice da resposta correta
},

	{
  text: "44. O mecanismo da reação entre o tolueno e o ácido nítrico obedece a:",
  options: [
    "Adição eletrofílica",
    "Substituição radicalar",
    "Adição nucleofílica",
    "Eliminação",
    "Substituição eletrofílica"
  ],
  correct: 4 // Índice da resposta correta
}
	
	
];




// Perguntas de Biologia
const biologyQuestions = [
  {
  text: "1. Qual das afirmações abaixo relacionadas com as regras de nomenclatura biológica é INCORRECTA?",
  options: [
    "A designação dos grupos superiores à espécie é binominal",
    "A designação da taxa é feita na língua latina ou utilizam-se palavras latinizadas",
    "O nome científico de uma subespécie é trinominal",
    "Para atribuir o nome à espécie é utilizada a nomenclatura binominal",
    "A designação dos grupos superiores à espécie é uninominal", // Resposta correta
  ],
  correct: 4, // Índice da resposta correta
 },

  {
  text: "2. O organelo que exerce a função de controlo de todo o metabolismo celular e armazenamento do material genético é:",
  options: [
    "Ribossoma",
    "Núcleo", // Resposta correta
    "Parede celular",
    "Aparelho de Golgi",
    "Vacúolo",
  ],
  correct: 1, // Índice da resposta correta
 },

  {
  text: "3. A equação C6H12O6 + O2 = 6CO2 + 6H2O representa um processo vital nos seres vivos. Indique qual?",
  options: [
    "Fermentação láctica",
    "Fotossíntese",
    "Fermentação alcoólica",
    "Respiração aeróbia", // Resposta correta
    "Hidrólise",
  ],
  correct: 3, // Índice da resposta correta
 },

  {
    text: "4. Qual processo biológico é responsável pela divisão celular que resulta em duas células-filhas idênticas?",
    options: [
      "Meiose",
      "Fagocitose",
      "Mitose", // Resposta correta
      "Exocitose",
      "Endocitose",
    ],
    correct: 2, // Índice da resposta correta
  },
  {
  text: "5. Das afirmações que seguem, escolha a que caracteriza uma célula eucarióta.",
  options: [
    "Célula de organização bastante simples sem estruturas membranares no citoplasma",
    "Célula que não apresenta ribossomas nem núcleo",
    "Célula de organização complexa sem estruturas membranares no citoplasma",
    "Célula de organização complexa com organelos bem delimitados por membranas", // Resposta correta
    "Célula que não apresenta cloroplastos",
  ],
  correct: 3, // Índice da resposta correta
 },

	{
  text: "6. Qual dos organismos apresentados abaixo é classificado como sendo procariota?",
  options: [
    "minhoca",
    "bactéria", // Resposta correta
    "todas as algas",
    "amêijoa",
    "cajueiro",
  ],
  correct: 1, // Índice da resposta correta
 },

	{
  text: "7. Para distinguir ao microscópio uma célula vegetal de uma animal, qual das seguintes estruturas deve estar presente?",
  options: [
    "Aparelho de Golgi",
    "Cloroplasto", // Resposta correta
    "Ribossoma",
    "Membrana nuclear",
    "Mitocôndria",
  ],
  correct: 1, // Índice da resposta correta
 },

	{
  text: "8. Nas plantas angiospérmicas, qual a função principal do líber?",
  options: [
    "Fotossíntese",
    "Condução de açúcares", // Resposta correta
    "Condução de água e sais minerais",
    "Reserva",
    "Transpiração",
  ],
  correct: 1, // Índice da resposta correta
 },

	{
  text: "9. Que característica(s) distingue(m) os Artrópodes dos restantes invertebrados?",
  options: [
    "Os apêndices articulados e o revestimento externo resistente e impermeável (exoesqueleto)", // Resposta correta
    "A ausência de um sistema respiratório",
    "A ausência de um sistema digestivo",
    "A ausência de sistema reprodutivo",
    "A ausência de um sistema nervoso",
  ],
  correct: 0, // Índice da resposta correta
 },

	{
  text: "10. Numa espécie em que o número de cromossomos é 46, quantos cromossomos terão as células resultantes de uma divisão mitótica?",
  options: [
    "46", // Resposta correta
    "23",
    "11,5",
    "92",
    "Algumas células terão com 46 cromossomos e outras com 23 cromossomos",
  ],
  correct: 0, // Índice da resposta correta
 },

	{
  text: "11. Qual destes organismos possui sistema digestivo completo?",
  options: [
    "Minhoca", // Resposta correta
    "Hidra",
    "Medusa",
    "Planária",
    "Ameba",
  ],
  correct: 0, // Índice da resposta correta
 },

	{
  text: "12. Das categorias taxonómicas em baixo apresentadas, indique a que enquadra organismos que têm um maior grau de semelhança entre si.",
  options: [
    "Filo",
    "Família",
    "Género",
    "Espécie", // Resposta correta
    "Ordem"
  ],
  correct: 3, // Índice da resposta correta
 },

	{
  text: "13. Durante a formação da urina a etapa da filtração ocorre ao nível do(a):",
  options: [
    "Tubo urinífero",
    "Tubo colector",
    "Ansa de Henle",
    "Glândula suprarenal",
    "Corpúsculo renal ou glomérulo Malpighi" // Resposta correta
  ],
  correct: 4 // Índice da resposta correta
},

	{
  text: "14. Nos seres humanos, as células sensoriais envolvidas tanto na audição como no equilíbrio são conhecidas por:",
  options: [
    "Células de Corti",
    "Células ciliadas", // Resposta correta
    "Células de Malpighi",
    "Otólitos",
    "Corpúsculo de Pacini"
  ],
  correct: 1 // Índice da resposta correta
},

	{
  text: "15. A hidrólise de proteínas resulta na formação de:",
  options: [
    "Ácidos nucleicos",
    "Aminoácidos", // Resposta correta
    "Enzimas",
    "Amido",
    "Açúcares"
  ],
  correct: 1 // Índice da resposta correta
},

	{
  text: "16. O glicogénio é o principal polissacarídeo de reserva das células:",
  options: [
    "Vegetais",
    "Animais", // Resposta correta
    "Das algas",
    "Dos fungos",
    "Vegetais e animais"
  ],
  correct: 1 // Índice da resposta correta
},

	{
  text: "17. Que processo é mais provável de ocorrer num órgão cujo epitélio apresenta muitas microvilosidades?",
  options: [
    "Gestação",
    "Distorção",
    "Absorção", // Resposta correta
    "Conjugação",
    "Espermatogénese"
  ],
  correct: 2 // Índice da resposta correta
},

	{
  text: "18. Qual das seguintes afirmações é INCORRECTA em relação à fotossíntese?",
  options: [
    "A fotossíntese decorre em duas séries de reacções: fotoquímicas e químicas",
    "Na fotossíntese, as reacções fotoquímicas ocorrem nas tilacóides",
    "Durante o processo da fotossíntese, é produzido o oxigénio",
    "Durante o processo da fotossíntese é formada a glicose",
    "O produto final da fotossíntese é uma proteína" // Resposta correta
  ],
  correct: 4 // Índice da resposta correta
},

	{
  text: "19. As opções que seguem, apresentam a seguinte sequência: o enzima encontrado no tubo digestivo, o substrato que o enzima hidrolisa, o produto resultante dessa hidrólise. Indique a sequência que é INCORRECTA.",
  options: [
    "Urease, proteínas, ureia",
    "Amilase salivar, polissacarídeos, glicose",
    "Pepsidase, proteínas, peptídeos e aminoácidos",
    "Lactase, lactose, glicose e galactose",
    "Lipase, lípidos, ácidos gordos e glicerol" // Resposta correta
  ],
  correct: 0 // Índice da resposta correta
},

	{
  text: "20. A capacidade dos leucócitos atravessarem as paredes dos capilares sanguíneos é a:",
  options: [
    "Fagocitose",
    "Lise",
    "Intercinese",
    "Diapedese", // Resposta correta
    "Diapausa"
  ],
  correct: 3 // Índice da resposta correta
},

	{
  text: "21. O ponto da retina do olho humano onde as fibras nervosas se reúnem é chamado de:",
  options: [
    "Cones",
    "Bastonetes",
    "Disco óptico", // Resposta correta
    "Coróide",
    "Cristalino"
  ],
  correct: 2 // Índice da resposta correta
},

	{
  text: "22. O processo de união entre o núcleo do óvulo com o do espermatozóide é designado por:",
  options: [
    "Nidação",
    "Fecundação", // Resposta correta
    "Gastrulação",
    "Segmentação",
    "Permutação"
  ],
  correct: 1 // Índice da resposta correta
},

	{
  text: "23. Indique o que pode encontrar tanto nas mitocôndrias como nos cloroplastos.",
  options: [
    "Vacúolos",
    "ADN", // Resposta correta
    "Cílios",
    "Flagelos",
    "Nucléolos"
  ],
  correct: 1 // Índice da resposta correta
},

	{
  text: "24. Apenas uma das seguintes razões permite enquadrar as bactérias no grupo dos seres procarióticos. Indique qual.",
  options: [
    "O facto de possuirem estruturas locomotoras denominadas pseudópodes",
    "O facto de não possuirem membrana nuclear que permite separar o núcleo do citoplasma", // Resposta correta
    "O facto de possuirem organelos membranosos",
    "O facto de possuirem estruturas locomotoras denominadas flagelos",
    "O facto de reproduzirem-se sexuadamente por conjugação"
  ],
  correct: 1 // Índice da resposta correta
},

	{
  text: "25. Qual dos órgãos humanos abaixo citados não produz enzimas digestivas?",
  options: [
    "glândulas salivares",
    "estômago",
    "vesícula biliar", // Resposta correta
    "apêndice cecal",
    "pâncreas"
  ],
  correct: 2 // Índice da resposta correta
},

	{
  text: "26. As Gimnospérmicas são plantas vasculares. Quanto a esse grupo de plantas pode-se dizer que: \nI. O maior número de espécies é representado pelos pinheiros e araucárias.\nII. São dependentes de água para a fecundação e formam xilema e floema.\nIII. O seu sucesso evolutivo é marcado pelo aparecimento de sementes.\nDas afirmações acima apresentadas (I, II e III), estão correctas as seguintes:",
  options: [
    "Apenas I",
    "Apenas I e II",
    "Apenas III", // Resposta correta
    "Apenas II e III",
    "Apenas I e III"
  ],
  correct: 2 // Índice da resposta correta
},

	{
  text: "27. Algumas adaptações das flores aumentam a possibilidade de polinização pelo vento. Assinale a alternativa que cita correctamente tais adaptações.",
  options: [
    "Pétalas grandes e coloridas",
    "Estigmas plumosos e compridos",
    "Produção de grandes quantidades de pólen", // Resposta correta
    "Produção de pequenas quantidades de pólen",
    "Muitos esporos coloridos"
  ],
  correct: 2 // Índice da resposta correta
},

	{
  text: "28. Dizemos que um solo é rico para o desenvolvimento das plantas quando:",
  options: [
    "possui uma grande quantidade de areia",
    "tem apenas micronutrientes",
    "pode fornecer todos os minerais e a água que a planta necessita", // Resposta correta
    "tem apenas macronutrientes",
    "possui grande quantidade de argila"
  ],
  correct: 2 // Índice da resposta correta
},

	{
  text: "29. Envolvendo uma planta com um saco plástico verifica-se que, após algum tempo, a parede interna do saco plástico fica coberta de gotículas de água. Esta água foi perdida pela planta no processo denominado:",
  options: [
    "Respiração",
    "Embebição",
    "Fotossíntese",
    "Gutação",
    "Evaporação" // Resposta correta
  ],
  correct: 4 // Índice da resposta correta
},

	{
  text: "30. Os estômas presentes na superfície das folhas das plantas são fundamentalmente responsáveis:",
  options: [
    "pelo crescimento das folhas",
    "pelo crescimento do caule",
    "pelas trocas gasosas e respiração", // Resposta correta
    "pela produção de novas folhas",
    "pela nutrição mineral"
  ],
  correct: 2 // Índice da resposta correta
},

	{
  text: "31. Quando uma planta atinge o ponto de compensação, pode-se afirmar que:",
  options: [
    "A taxa da respiração é igual a taxa da fotossíntese", // Resposta correta
    "A planta pára de respirar em virtude de ter atingido o equilíbrio energético",
    "A planta pára de realizar fotossíntese para compensar a diminuta taxa de reprodução",
    "A planta diminui muito a taxa de respiração para compensar a reduzida taxa de fotossíntese",
    "A planta cessa todo o seu metabolismo"
  ],
  correct: 0 // Índice da resposta correta
},

	{
  text: "32. A que grupo pertencem as plantas que produzem estróbilos?",
  options: [
    "Filicíneas",
    "Gimnospérmicas", // Resposta correta
    "Pteridófitas",
    "Fabaceae",
    "Briófitas"
  ],
  correct: 1 // Índice da resposta correta
},

	{
  text: "33. Indique uma característica relacionada com o sucesso das angiospérmicas no ambiente terrestre.",
  options: [
    "Apresentam flores cuja polinização pode ser feita com a ajuda de animais", // Resposta correta
    "Apresentam gametófito",
    "Possuem sistema radicular que não permite uma boa captação de água",
    "Apresentam ramos pouco desenvolvidos",
    "Apresentam caules pouco desenvolvidos"
  ],
  correct: 0 // Índice da resposta correta
},

	{
  text: "34. Indique a nível de qual dos seguintes órgãos as duas enzimas, pepsina e lipase, actuam durante o processo da digestão.",
  options: [
    "faringe",
    "estômago", // Resposta correta
    "esófago",
    "boca",
    "fígado"
  ],
  correct: 1 // Índice da resposta correta
}, 
	{
  text: "35. Que processo permite a ingestão de substâncias sólidas em algumas células animais?",
  options: [
    "Hidrólise",
    "Filtração",
    "Invasão",
    "Fagocitose", // Resposta correta
    "Selecção"
  ],
  correct: 3 // Índice da resposta correta
},


	{
  text: "36. Nos seres humanos, o fígado tem, fundamentalmente, a função de:",
  options: [
    "produzir mucina, substância que lubrifica e protege as mucosas",
    "produzir suco gástrico",
    "produzir sais biliares que actuam na emulsificação das gorduras", // Resposta correta
    "produzir ácido clorídrico para activação do pespinogénio",
    "ajudar na deglutição"
  ],
  correct: 2 // Índice da resposta correta
},

	{
  text: "37. O escorbuto resulta da falta de:",
  options: [
    "vitamina A",
    "vitamina C", // Resposta correta
    "vitamina D",
    "vitamina K",
    "vitamina B"
  ],
  correct: 1 // Índice da resposta correta
},

	{
  text: "38. Que vitamina está relacionada com a síntese de protrombina, exercendo a função anti-hemorrágica?",
  options: [
    "Tiamina",
    "Vitamina B",
    "Vitamina K", // Resposta correta
    "Biotina",
    "Vitamina C"
  ],
  correct: 2 // Índice da resposta correta
},

	{
  text: "39. Que composto(s) orgânico(s) resulta(m) da hidrólise de proteínas?",
  options: [
    "Ácidos nucleicos",
    "Aminoácidos", // Resposta correta
    "Celulose",
    "Amido",
    "Açúcares"
  ],
  correct: 1 // Índice da resposta correta
},

	{
  text: "40. A diferença fundamental entre os processos digestivos dos animais carnívoros e dos ruminantes é a existência, nos ruminantes, de um processo específico de digestão de:",
  options: [
    "Celulose", // Resposta correta
    "Gordura",
    "Proteína",
    "Aminoácidos",
    "Ácidos"
  ],
  correct: 0 // Índice da resposta correta
},
	{
  text: "41. Em qual dos animais em baixo indicados a hemoglobina está presente?",
  options: [
    "Lagosta",
    "Minhoca", 
    "Mosquito",
    "Rato", // Resposta correta
    "Gafanhoto"
  ],
  correct: 3 // Índice da resposta correta
},
  
	  {
  text: "42. Alguns cogumelos são comestíveis. Em que classe de fungos pertencem os cogumelos?",
  options: [
    "Ascomycetes",
    "Zygomycetes",
    "Deuteromycetes",
    "Basidiomycetes", // Resposta correta
    "Crysomycetes"
  ],
  correct: 3 // Índice da resposta correta
},

	  {
  text: "43. O mais provável que aconteça aos glóbulos vermelhos quando permanecem algum tempo numa solução hipertónica é que:",
  options: [
    "Aumentem de tamanho",
    "Encolham, porque perdem água", // Resposta correta
    "Rebentem, porque absorvem água",
    "Sofram divisão mitótica",
    "Sofram divisão meiótica"
  ],
  correct: 1 // Índice da resposta correta
},

	  {
  text: "44. As proteínas ingeridas pelos mamíferos produzem compostos nitrogenados tóxicos que devem passar por um determinado ciclo bioquímico que os transforma em compostos menos tóxicos. Esse ciclo ocorre:",
  options: [
    "no estômago",
    "no rim",
    "no fígado", // Resposta correta
    "no intestino delgado",
    "no pâncreas"
  ],
  correct: 2 // Índice da resposta correta
},

	  {
  text: "45. A hormona responsável pelo completo desenvolvimento dos caracteres sexuais masculinos é:",
  options: [
    "Adrenalina",
    "Progesterona",
    "Estrogénio",
    "Testosterona", // Resposta correta
    "Tiroxina"
  ],
  correct: 3 // Índice da resposta correta
},

	  {
  text: "46. Qual das seguintes características ou funções NÃO pertence aos elementos figurados do sangue humano?",
  options: [
    "Transporte de oxigénio",
    "Defesa fagocitária",
    "Coagulação do sangue",
    "Filtração do sangue", // Resposta correta
    "Defesa imunitária"
  ],
  correct: 3 // Índice da resposta correta
},

	  {
  text: "47. Qual das doenças abaixo indicadas NÃO é causada por um vírus?",
  options: [
    "SIDA",
    "Sarampo",
    "Tétano", // Resposta correta
    "Ébola",
    "Raiva"
  ],
  correct: 2 // Índice da resposta correta
},

	  {
  text: "48. Indique a opção que apresenta dois tipos de reprodução assexuada:",
  options: [
    "Fragmentação, gemiparidade e esporulação",
    "Conjugação e partenogénese",
    "Metagénese e fertilização",
    "Conjugação e cissiparidade",
    "Esporulação e conjugação" // Resposta correta
  ],
  correct: 4 // Índice da resposta correta
},

	  {
  text: "49. Indique o grupo de organismos que pode realizar a fotossíntese em ambientes aquáticos (mares, oceanos, lagos e rios):",
  options: [
    "Protozoários",
    "Algas", // Resposta correta
    "Peixes e camarões",
    "Fungos",
    "Nemátodos"
  ],
  correct: 1 // Índice da resposta correta
},

	  {
  text: "50. Indique a principal função dos enzimas:",
  options: [
    "Baixar a temperatura do corpo dos animais",
    "Produzir hormonas masculinas",
    "Catalisar as reacções químicas nos seres vivos", // Resposta correta
    "Conferir imunidade aos seres vivos",
    "Conferir as características secundárias femininas"
  ],
  correct: 2 // Índice da resposta correta
},

	{
  text: "51. Das características abaixo indicadas, indique aquela que não é comum a todos os organismos do Filo Chordata (Cordados):",
  options: [
    "Cefalização acentuada",
    "Simetria bilateral",
    "Celoma",
    "Tubo digestivo completo",
    "Respiração pulmonar" // Resposta correta
  ],
  correct: 4 // Índice da resposta correta
},
  
	  {
  text: "52. Os Fungos são responsáveis por qual dos seguintes processos na natureza?",
  options: [
    "Mudanças climáticas",
    "Ciclo da água",
    "Decomposição", // Resposta correta
    "Aquecimento global",
    "Fotossíntese"
  ],
  correct: 2 // Índice da resposta correta
},

	 {
  text: "53. A elefantíase é uma doença causada por nemátodos e que afecta os seres humanos. A doença é transmitida por:",
  options: [
    "consumo de alimentos contaminados",
    "picadas da mosca tsé-tsé",
    "picadas de mosquitos", // Resposta correta
    "consumo de água contaminada",
    "falta de higiene bucal"
  ],
  correct: 2 // Índice da resposta correta
},
 
	  {
  text: "54. Tendo como base o número de folhetos que apresentam durante o desenvolvimento embrionário, em qual dos seguintes grupos são colocados (em conjunto) os seres humanos, as ténias, as aranhas, os polvos e as estrelas-do-mar?",
  options: [
    "Vertebrados",
    "Diblásticos",
    "Triblásticos", // Resposta correta
    "Deuterostómios",
    "Acelomados"
  ],
  correct: 2 // Índice da resposta correta
},

	  {
  text: "55. Qual das afirmações seguintes é INCORRECTA?",
  options: [
    "Durante a organogénese, a mesoderme dá origem ao sistema excretor",
    "Durante a organogénese, a mesoderme dá origem ao sistema reprodutor",
    "Durante a organogénese, a mesoderme dá origem aos músculos",
    "Durante a organogénese, a mesoderme dá origem ao sistema nervoso", // Resposta correta
    "Durante a organogénese, a mesoderme dá origem ao sistema circulatório"
  ],
  correct: 3 // Índice da resposta correta
},

	  {
  text: "56. Se dois seres vivos pertencem à mesma ordem obrigatoriamente são da mesma:",
  options: [
    "Raça",
    "Família",
    "Espécie",
    "Subespécie",
    "Classe" // Resposta correta
  ],
  correct: 4 // Índice da resposta correta
}
	
];


// Perguntas de Português
const portugueseQuestions = [
  {
  text: "1. De acordo com o texto, qual é o principal objetivo da campanha 'Juntos contra a Fome'?",
  options: [
    "Ajudar os agricultores dos países da CPLP",
    "Apoiar iniciativas que contribuam para erradicar a fome no seio dos agricultores familiares da CPLP",
    "Apoiar iniciativas dos agricultores familiares da CPLP na luta contra a fome", // Resposta correta
    "Reduzir os índices de fome nos países da CPLP",
    "Erradicar a pobreza extrema e a fome",
  ],
  correct: 2, // Índice da resposta correta
 },

  {
  text: "2. Segundo a autora do texto, quem mais passa fome em África são...?",
  options: [
    "As crianças",
    "São as 28 milhões de pessoas",
    "São as 165 milhões de crianças",
    "Agricultores familiares da CPLP",
    "Os agricultores", // Resposta correta
  ],
  correct: 4, // Índice da resposta correta
 },

  {
  text: "3. Carranquinha de Aguilar é pseudónimo usado por...?",
  options: [
    "Rui de Noronha",
    "José Craveirinha",
    "Orlando Mendes",
    "Marcelino dos Santos",
    "Noémia de Sousa", // Resposta correta
  ],
  correct: 4, // Índice da resposta correta
 },

  {
  text: "4. Ainda para a FAO, a causa principal da fome é...",
  options: [
    "A prática da agricultura familiar",
    "O facto de os agricultores não conseguirem alimentar as suas próprias famílias",
    "O facto de a agricultura praticada ser ainda elementar", // Resposta correta
    "A falta de alimentos",
    "A pobreza dos próprios agricultores",
  ],
  correct: 2, // Índice da resposta correta
 },

  {
  text: "5. Segundo Murade Marargy, uma das condições básicas de subsistência que deve ser assegurada é...?",
  options: [
    "O direito a uma alimentação adequada", // Resposta correta
    "A garantia de territórios livres de fome",
    "A consagração de condições básicas de segurança alimentar",
    "A aprovação de condições de segurança alimentar nutricional",
    "A aprovação de condições mínimas de segurança alimentar nutricional",
  ],
  correct: 0, // Índice da resposta correta
 },

  {
  text: "6. Uma das diferenças entre a síntese e o resumo é:?",
  options: [
    "O número de palavras é indicado na síntese enquanto no resumo não",
    "Há fidelidade e neutralidade na reconstituição das ideias na síntese enquanto no resumo não",
    "Há tolerância do número de palavras no resumo (10%) enquanto na síntese não", // Resposta correta
    "A síntese é sempre redigida na terceira pessoa gramatical enquanto o resumo não",
    "Há correção formal e sintática no resumo enquanto na síntese não",
  ],
  correct: 2, // Índice da resposta correta
 },

  {
  text: "7. Qual das seguintes frases não é gramaticalmente correcta?",
  options: [
    "O director escreveu uma carta aos alunos.",
    "Os doadores internacionais ofereceram roupa ao hospital.",
    "Temos de obedecer o regulamento.", // Resposta correta
    "O Pedro nunca telefona ao pai.",
    "Os patrões exigem ao jovem experiência de trabalho.",
  ],
  correct: 2, // Índice da resposta correta
 },

  {
  text: "8. Na frase, “Mais logo decidiremos se vamos convosco à festa.”, a oração sublinhada é...?",
  options: [
    "completiva", 
    "condicional", 
    "comparativa", 
    "temporal", // Resposta correta
    "concessiva"
  ],
  correct: 3, // Índice da resposta correta
 },

  {
  text: "9. Uma das seguintes frases não é gramaticalmente correcta. Identifique-a.",
  options: [
    "Saímos da faculdade muito tarde",
    "A Maria voltou do serviço de táxi",
    "Os assaltantes saíram de lá na loja com muitos produtos alimentares.", // Resposta correta
    "Ingressei na faculdade para aprender.",
    "Passei pelo mercado para comprar arroz"
  ],
  correct: 2, // Índice da resposta correta
 },

  {
  text: "10. Na frase 'O povo manifesta-se contra o custo de vida no país', a expressão sublinhada é:",
  options: [
    "Sujeito",
    "Objecto directo",
    "Objecto indirecto",
    "Adjunto",
    "Oblíquo" // Resposta correta
  ],
  correct: 4, // Índice da resposta correta
},

{
  text: "11. Qual das seguintes frases é gramaticalmente correcta?",
  options: [
    "Os agricultores parece que estão contentes.",
    "Os agricultores parecem que estão contentes.", // Resposta correta
    "Os agricultores parecem estarem contentes.",
    "Os agricultores parecem eles estão contentes.",
    "Os agricultores parece que eles estão contentes."
  ],
  correct: 1, // Índice da resposta correta
},
	
{
  text: "12. Qual das seguintes frases não é gramaticalmente correcta?",
  options: [
    "Há pessoas que opõem-se ao plano quinquenal do governo.",
    "Há munícipes que se sentem satisfeitos com o trabalho do governo.",
    "Tudo se revolve.", // Resposta correta
    "Alguém me falou de ti.",
    "Ninguém te falou do projecto de construção de casas para jovens."
  ],
  correct: 2, // Índice da resposta correta
},
	
{
  text: "13. Na frase 'Ontem ________ com o director sobre várias matérias', a forma verbal que preenche adequadamente o espaço em branco é:",
  options: [
    "falamos",
    "falámos", // Resposta correta
    "falaremos",
    "falarei",
    "falarás"
  ],
  correct: 1, // Índice da resposta correta
},
	
{
  text: "14. 'Atualmente existem cerca de 7 mil milhões de pessoas no mundo.' Como se classifica o verbo desta frase?",
  options: [
    "Impersonal", // Resposta correta
    "Transitivo indirecto",
    "Copulativo",
    "Intransitivo",
    "Transitivo directo"
  ],
  correct: 0, // Índice da resposta correta
},

{
  text: "15. Na frase 'Os cientistas _____ o aquecimento global há anos', a forma verbal correta que preenche adequadamente o espaço em branco é:",
  options: [
    "anteveram",
    "anteverão",
    "anteviram",
    "antevinham", // Resposta correta
    "antevêm"
  ],
  correct: 3, // Índice da resposta correta
},
	
{
  text: "16. Na frase 'Eu sou muito rica', a expressão sublinhada está no grau:",
  options: [
    "Normal",
    "Superlativo absoluto analítico", // Resposta correta
    "Comparativo de inferioridade",
    "Comparativo de superioridade",
    "Superlativo absoluto sintético"
  ],
  correct: 1, // Índice da resposta correta
},
	
{
  text: "17. Na frase 'Aqui estuda-se, não se brinca', 'se' é... ",
  options: [
    "um pronome pessoal reflexo",
    "um pronome pessoal recíproco",
    "uma conjunção subordinativa",
    "um pronome pessoal",
    "uma partícula apassivante" // Resposta correta
  ],
  correct: 4, // Índice da resposta correta
},

{
  text: "18. Na frase 'A areia grossa de Moma pertence aos moçambicanos', o antónimo da palavra sublinhada é:",
  options: [
    "Pesada",
    "Fina", // Resposta correta
    "Magra",
    "Cara",
    "Dura"
  ],
  correct: 1, // Índice da resposta correta
},
	
{
  text: "19. Qual dos seguintes escritores não é moçambicano?",
  options: [
    "Armando Artur",
    "Filimone Meigos",
    "Eduardo White", // Resposta correta
    "Pepetela",
    "Calane da Silva"
  ],
  correct: 2, // Índice da resposta correta
},
	
{
  text: "20. Na frase 'As baleias, que são mamíferos, encontram-se em extinção no nosso país.', a frase sublinhada é...",
  options: [
    "relativa explicativa", // Resposta correta
    "relativa restritiva",
    "relativa livre",
    "completiva de nome",
    "substantiva"
  ],
  correct: 0, // Índice da resposta correta
},
	
{
  text: "21. Na frase 'Nduda morreu no local, mas o seu corpo não foi recuperado'. A palavra sublinhada é...",
  options: [
    "Conjunção", // Resposta correta
    "Preposição",
    "Locução",
    "Advérbio",
    "Pronome"
  ],
  correct: 0, // Índice da resposta correta
},
	
{
  text: "22. Qual das seguintes orações é integrante?",
  options: [
    "Não sei, sequer se vou ingressar na universidade", // Resposta correta
    "Não estou a ler embora seja imperioso.",
    "Ele foi preso porque assaltou um banco.",
    "O presidente é eleito para servir o povo.",
    "A polícia dispersou a população que se manifestava contra o custo de vida."
  ],
  correct: 0, // Índice da resposta correta
},
	
{
  text: "23. Indique a palavra cujo contraste de género masculino/feminino é feito por composição.",
  options: [
    "Águia", 
    "Égua", 
    "Gato", 
    "Judeu", 
    "Cavalo" // Resposta correta
  ],
  correct: 1, // Índice da resposta correta
},
	
{
  text: "24. Na frase “O Paulo cantou maravilhosamente”, a palavra sublinhada é?",
  options: [
    "Substantivo", 
    "Adjectivo", 
    "Preposição", 
    "Pronome", 
    "Advérbio" // Resposta correta
  ],
  correct: 4, // Índice da resposta correta
},
	
{
  text: "25. A frase “Empreste-me o lápis, por favor.” é?",
  options: [
    "Declarativa", 
    "Exclamativa", 
    "Imperativa", // Resposta correta
    "Interrogativa", 
    "Apelativa"
  ],
  correct: 3, // Índice da resposta correta
},
	
{
  text: "26. A actividade poética produzida no quadro da luta armada desenvolve-se no sentido de:",
  options: [
    "Distanciamento do poder colonial", 
    "Afirmação da ideologia da libertação nacional e distanciamento dos brancos.", 
    "Afirmação da ideologia da libertação nacional e distanciamento do poder colonial.", // Resposta correta
    "Afirmação de militância política e união do povo.", 
    "Nenhuma das opções está correcta."
  ],
  correct: 3, // Índice da resposta correta
},
	
{
  text: "27. Seleccione a palavra erradamente escrita:",
  options: [
    "Calegrafia", // Resposta correta
    "Exame", 
    "Externo", 
    "Tampa", 
    "Apicultura"
  ],
  correct: 0, // Índice da resposta correta
},
	
{
  text: "28. Um conjunto de navios e tropas de mar que pertencem a uma nação chama-se:",
  options: [
    "Armada", // Resposta correta
    "Arquipélago",
    "Banda",
    "Alcateia",
    "Enxame"
  ],
  correct: 0, // Índice da resposta correta
},
	
{
  text: "29. A pessoa que colecciona selos chama-se:",
  options: [
    "Coleccionador",
    "colector",
    "seleccionador",
    "filatelista", // Resposta correta
    "coleccionador de selos"
  ],
  correct: 3, // Índice da resposta correta
},
	
{
  text: "30. Assinale a palavra que não se integra no contexto:",
  options: [
    "Chapéu",
    "Boina",
    "Sobretudo",
    "Cebola", // Resposta correta
    "Peúgas"
  ],
  correct: 3, // Índice da resposta correta
},
	
{
  text: "31. O poema 'Saborosas tangerinas de Inhambane' foi escrito por:",
  options: [
    "José Craveirinha",
    "Ungulane Ba Ka Khossa",
    "Paulina Chiziane",
    "Mia Couto", // Resposta correta
    "Calane da Silva"
  ],
  correct: 3, // Índice da resposta correta
},
	
{
  text: "32. Qual dos seguintes escritores venceu o Prémio Literário Camões de 2013?",
  options: [
    "Armando Guebuza",
    "Mia Couto", // Resposta correta
    "Eduardo White",
    "Pepetela",
    "Luandino Vieira"
  ],
  correct: 1, // Índice da resposta correta
},
	
{
  text: "33. Ambivalência está para a crónica, assim como dedução está para ........?",
  options: [
    "reportagem",
    "texto narrativo",
    "texto argumentativo", // Resposta correta
    "texto normativo",
    "carta"
  ],
  correct: 2, // Índice da resposta correta
},
	
{
  text: "34. Mesmo que não haja espelhos por perto. A forma verbal sublinhada está no modo:?",
  options: [
    "Infinitivo",
    "Imperativo",
    "Indicativo",
    "Conjuntivo", // Resposta correta
    "Condicional"
  ],
  correct: 3, // Índice da resposta correta
},
	
{
  text: "35. A oração sublinhada na frase 'Vários analistas dizem que a economia mundial está a crescer' é:",
  options: [
    "subordinada integrante", // Resposta correta
    "subordinada relativa",
    "subordinada final",
    "subordinada causal",
    "subordinada consecutiva"
  ],
  correct: 0, // Índice da resposta correta
},
	
{
  text: "36. Em 'levantar-se devagarinho' a expressão sublinhada significa:",
  options: [
    "silenciosamente",
    "cuidadosamente",
    "lentamente", // Resposta correta
    "depressa",
    "de qualquer maneira"
  ],
  correct: 2, // Índice da resposta correta
},
	
{
  text: "37. As falhas que ______ havido são por causa dos desentendimentos entre os agricultores.",
  options: [
    "tem",
    "têm", // Resposta correta
    "estão",
    "hão",
    "nenhuma"
  ],
  correct: 1, // Índice da resposta correta
},

{
  text: "38. Qual das opções relaciona o autor à obra?",
  options: [
    "Paulina Chiziane - Uma história de poligamia",
    "Calane da Silva - Nós, os de Macurungo",
    "Mia Couto - Os sobreviventes da noite",
    "Ungulane Ba Ka Khosa - Dos meninos da Malanga",
    "Pepetela - Cela 1"
  ],
  correct: 0 // Índice da resposta correta: Paulina Chiziane - Uma história de poligamia
},

{
  text: "39. Qual das opções está correctamente constituída?",
  options: [
    "Os camponeses a cujo líder escrevi acabam de telefonar",
    "Os camponeses a cujo o líder escrevi acabam de telefonar.",
    "Os camponeses cujo o líder escrevi acabam de telefonar.",
    "Os camponeses cujo líder escrevi acabam de telefonar.",
    "Os camponeses que o líder escrevi acabam de telefonar."
  ],
  correct: 3 // Índice da resposta correta: Os camponeses cujo líder escrevi acabam de telefonar.
},
 
{
  text: "“40. Se nem a sua mãe, nem a sua excelsa esposa cumprem com esta tarefa, o melhor é ser você a fazê-la.\" Os pronomes sublinhados nesta frase são respectivamente:",
  options: [
    "Pronome possessivo, pronome relativo, pronome demonstrativo",
    "Pronome possessivo, pronome pessoal, pronome demonstrativo",
    "Pronome possessivo, pronome demonstrativo, pronome pessoal",
    "Pronome pessoal, pronome possessivo, pronome pessoal",
    "Pronome demonstrativo, pronome possessivo, pronome pessoal"
  ],
  correct: 2 // Índice da resposta correta: "Pronome possessivo, pronome demonstrativo, pronome pessoal"
},
	
{
  text: "41. “Hoje não é dia para confrontos porque, lembre-se, o calendário é uma coisa muito democrática e é segunda-feira para toda a gente”. As palavras sublinhadas são sucessivamente:",
  options: [
    "Preposição, conjunção, artigo",
    "Conjunção, preposição, artigo",
    "Conjunção, pronome, artigo",
    "Conjunção, preposição, pronome",
    "Preposição, conjunção, pronome"
  ],
  correct: 0 // Índice da resposta correta: "Preposição, conjunção, artigo"
},
	
{
  text: "42. O verbo estar na frase “Milhões de crianças estão desnutridas.” é:",
  options: [
    "transitivo directo",
    "intransitivo",
    "auxiliar",
    "copulativo ou de ligação",
    "irregular"
  ],
  correct: 3 // Índice da resposta correta: "copulativo ou de ligação"
},
	
	
{
  text: "43.Nas festas, geralmente, prefiro coca-cola ___ fanta.",
  options: [
    "Que",
    "Do que",
    "de",
    "da",
    "Além disso"
  ],
  correct: 2 // Índice da resposta correta: "de"
},
	
{
  text: "44. Qual a expressão que não pode substituir, com o mesmo sentido, ou seja?",
  options: [
    "Por outras palavras",
    "Dito de outro modo",
    "Além disso",
    "Isto é",
    "Quer dizer"
  ],
  correct: 2 // Índice da resposta correta: "Além disso"
},
	
{
  text: "45. Eça de Queirós e Antero de Quental são autores representativos...?",
  options: [
    "do Classicismo português",
    "do Barroco Português",
    "do Modernismo português",
    "do Romantismo português",
    "do Realismo português"
  ],
  correct: 4 // Índice da resposta correta: "do Realismo português"
},

{
  text: "46. O plural de 'palavra-chave' é:",
  options: [
    "Palavras-chaves",
    "Palavras-chave", // Resposta correta
    "Palavra-chaves",
    "As palavra-chave",
    "As palavra-chaves"
  ],
  correct: 1 // Índice da resposta correta: "Palavras-chave"
},
	
{
  text: '47. Na frase "... por mais que ela teimara em sacudi-la", o verbo encontra-se:',
  options: [
    "Presente do conjuntivo",
    "Presente do indicativo",
    "Pretérito imperfeito do Indicativo",
    "Pretérito mais-que-perfeito do Indicativo", // Resposta correta
    "Futuro do Indicativo"
  ],
  correct: 3 // Índice da resposta correta: "Pretérito mais-que-perfeito do Indicativo"
},
	
{
  text: "48. Seleccione a palavra erradamente escrita.",
  options: [
    "Periquito",
    "Impírico", // Resposta correta
    "Rubrica",
    "Enxame",
    "Exame"
  ],
  correct: 1 // Índice da resposta correta: "Impírico"
},
	
{
  text: "49. Paulina Chiziane escreveu as obras:",
  options: [
    "Sétimo juramento, Niketche e Cela1",
    "Portagem, Os ventos do apocalipse e Niketche",
    "Baladas de amor ao vento, Xigubo e As andorinhas",
    "Niketche, Vozes Anoitecidas e Baladas de amor ao vento", // Resposta correta
    "Os ventos de apocalipse, Sétimo Juramento e As andorinhas"
  ],
  correct: 3 // Índice da resposta correta: "Niketche, Vozes Anoitecidas e Baladas de amor ao vento"
},
	
{
  text: "50. Qual o par que liga correctamente a obra e o seu autor?",
  options: [
    "Cronincando, Calane da Silva",
    "País de mim, Eduardo White",
    "Terra sonâmbula, Marcelino dos Santos",
    "Os Lusiádas, Eça de Queirós",
    "Poesia de Combate, Ungulani Ba Ka Khossa" // Resposta correta
  ],
  correct: 4 // Índice da resposta correta: "Poesia de Combate, Ungulani Ba Ka Khossa"
},
	
{
  text: "51. A obra 'Choriro' é da autoria de...",
  options: [
    "Lucílio Manjate",
    "Ungulane Ba Ka Khosa",
    "Aldino Muianga",
    "Mia Couto",
    "José Saramago"
  ],
  correct: 0 // Índice da resposta correta: "Lucílio Manjate"
},
	
{
  text: "52. Assinale a alternativa que completa corretamente a frase abaixo. No caso de vocês _____ até aqui, tragam o material de estudos.",
  options: [
    "Virem", // Resposta correta
    "vir",
    "vierem",
    "vier",
    "verem"
  ],
  correct: 0 // Índice da resposta correta: "Virem"
},
	
{
  text: "53. Os camponeses querem trabalhar a terra. Esta frase é...?",
  options: [
    "simples", // Resposta correta
    "complexa por subordinação",
    "coordenada",
    "complexa por coordenação",
    "subordinada completiva"
  ],
  correct: 0 // Índice da resposta correta: "simples"
}
	
];


// Perguntas de Matemática
const mathQuestions = [
  {
    text: "1. A fórmula para conversão de Celsius para Fahrenheit é F = 1.8C + 32. Qual é a temperatura em Fahrenheit se o valor na escala Celsius for 50?",
    options: [
      "100", 
      "110", 
      "122", // Resposta correta
      "130", 
      "150",
    ],
    correct: 2, // Índice da resposta correta
  },
  {
    text: "2. O intervalo de tempo médio estatístico de reação de um motorista para começar a travar ao encontrar um obstáculo é de aproximadamente 1.5 a 1.8 segundos. Qual é o intervalo de distância (em metros) que um carro percorre durante esse intervalo, se sua velocidade for 60 km/h?",
    options: [
      "Entre 20 e 25 metros", 
      "Entre 25 e 30 metros", // Resposta correta
      "Entre 30 e 35 metros", 
      "Exatamente 30 metros", 
      "Exatamente 35 metros",
    ],
    correct: 1, // Índice da resposta correta
  },
  {
    text: "3. Qual é o quinquagésimo termo da sucessão numérica 1, 4, 7, 10, ...?",
    options: [
      "150", 
      "148", // Resposta correta
      "145", 
      "155", 
      "140",
    ],
    correct: 1, // Índice da resposta correta
  },
  {
    text: "4. As retas tangentes ao gráfico da curva definida pela equação f(x) = (x - 4) / (x - 2) nos pontos de interseção deste gráfico com os eixos coordenados caracterizam-se como:",
    options: [
      "Decrescentes com mesma inclinação",
      "Crescentes com mesma inclinação", // Resposta correta
      "Paralelas ao eixo x",
      "Decrescentes em sentidos opostos",
      "Crescentes em sentidos opostos",
    ],
    correct: 1, // Índice da resposta correta
  },
  {
    text: "5. As rectas no plano cartesiano y = (1/2)x + 5 e y = kx - b são perpendiculares quando:",
    options: [
      "k = 2", 
      "k = -2", // Resposta correta
      "k = 1/2", 
      "k = -1/2", 
      "k = 0",
	],
    correct: 1, // Índice da resposta correta
  },
  {
    text: "6. As assíntotas verticais, horizontais e oblíquas da função f(x) = (e * T) / x são:",
    options: [
      "x = 0, y = 0, e não há assíntota oblíqua", // Resposta correta
      "x = 0, y = 1, e y = x",
      "x = 1, y = 0, e y = -x",
      "x = 0, y = 1, e não há assíntota oblíqua",
      "Não há assíntotas",
    ],
    correct: 0, // Índice da resposta correta
  },
  {
    text: "7. Qual é a medida da altura (h) no triângulo retângulo de catetos a e b, se b = a raiz de 3?",
    options: [
      "h = a", // Resposta correta
      "h = b",
      "h = a raiz de 3",
      "h = b / raiz de 3",
      "h = a / 2",
    ],
    correct: 0, // Índice da resposta correta
  },
  {
    text: "8. Dois números distam entre si 5 unidades, sendo um deles 3. A tradução da afirmação anterior em linguagem matemática é:",
    options: [
      "x + 3 = 5", 
      "|x - 3| = 5", // Resposta correta
      "|x + 3| = 5", 
      "x - 3 = 5", 
      "x + 5 = 3",
    ],
    correct: 1, // Índice da resposta correta
  },
  {
    text: "9. Na equipa de futebol de salão do Bairro militam 10 jogadores. Pretende-se escalar o grupo que vai jogar na semana seguinte, tendo em conta que o Cossa e o Ratique devem obrigatoriamente fazer parte dos cinco seleccionados. Quantas possibilidades existem?",
    options: [
      "56", // Resposta correta
      "48",
      "60",
      "64",
      "72",
    ],
    correct: 0, // Índice da resposta correta
  },
  {
    text: "10. Uma roleta mostra os números de 1 a 8. Qual é a probabilidade de acertar num número menor do que 3?",
    options: [
      "1/4", // Resposta correta
      "1/2",
      "1/3",
      "2/3",
      "3/8",
    ],
    correct: 0, // Índice da resposta correta
  },
  {
    text: "11. Dadas as proposições t: chove e r: vou à praia. A proposição s: não chove então vou à praia é traduzida simbolicamente por:",
    options: [
      "¬t ∧ r",
      "¬t ∨ r",
      "¬t → r", // Resposta correta
      "t → r",
      "¬t ∧ ¬r",
    ],
    correct: 2, // Índice da resposta correta
  },
  {
    text: "12. A solução de log1/2(x+2) ≥ 3 é?",
    options: [
      "-2 < x ≤ -15/8", // Resposta correta
      "x ≥ -15/8",
      "x ≤ -15/8",
      "x > -15/8",
      "x ≤ -2",
    ],
    correct: 0, // Índice da resposta correta
  },
  {
    text: "13. A primitiva de x^3 - 2x é?",
    options: [
      "x^4/4 - x^2 + C", // Resposta correta
      "x^4 - x^2 + C",
      "x^4/4 + x^2 + C",
      "x^4/4 - 2x + C",
      "x^4 - 2x + C",
    ],
    correct: 0, // Índice da resposta correta
  },
  {
    text: "14. A derivada de 3x / (2x - 1)^2 é?",
    options: [
      "-6x - 3 / (2x - 1)^3", // Resposta correta
      "6x + 3 / (2x - 1)^3",
      "-3x - 6 / (2x - 1)^3",
      "3x + 6 / (2x - 1)^3",
      "6x + 3 / (2x - 1)^4",
    ],
    correct: 0, // Índice da resposta correta
  },
    
  {
   text: "15. A solução de cos(x) - sen(x) = 0 no intervalo [0, 2π] é?",
   options: [
     "π/4 e 5π/4", // Resposta correta
     "π/3 e 4π/3",
     "π/6 e 5π/6",
     "π/2 e 3π/2",
     "Nenhuma das anteriores",
   ],
  correct: 0, // Índice da resposta correta
 },
  
 {
   text: "16. O produto (x - 1)(x² + ax + b) é igual a x³ + x² - 5x - b quando a e b tomam   os valores:",
     options: [
    "a = 3 e b = -3",
    "a = 1 e b = -3",
    "a = 2 e b = -5",
    "a = 2 e b = -3", // Resposta correta                   
    "a = 1 e b = -5",
  ],
  correct: 3, // Índice da resposta correta
 },
  
  {
   text: "17. Considerando a sequência vₙ = (3n - 2) / (n + 1), indique a afirmação falsa:",
   options: [
     "A sequência é crescente para n ≥ 1.",
     "O limite da sequência quando n → ∞ é 3.",
     "A sequência é sempre menor que 3.",
     "A sequência assume valores iguais para n = 2 e n = 3.", // Resposta correta
     "O primeiro termo da sequência é 1/2.",
  ],
  correct: 3, // Índice da resposta correta
 },
 
  {
   text: "18. Em x = -3, a função f(x) = (x^2 - 9) / (x + 3) é:",
   options: [
     "Indeterminada em x = -3.", 
     "Definida e igual a 0.", 
     "Indeterminada, mas o limite é -6.", // Resposta correta 
     "Definida e igual a -6.",
     "Indeterminada, mas o limite é 0.",
   ],
   correct: 2, // Índice da resposta correta
  },
    
   {
  text: "19. O raio r = 2m de uma circunferência foi aumentado em 50%. Qual foi o aumento percentual da área da segunda circunferência em comparação com a primeira?",
  options: [
    "50%", 
    "125%", // Resposta correta             
    "100%", 
    "75%",
    "150%"
  ],
  correct: 1, // Índice da resposta correta
 },
   {
  text: "20. Duas garrafas, com 12 l de capacidade cada, contêm uma mistura de sumo e água. Numa, a razão sumo/água é de 3/1 e na outra é de 2/1. Se os conteúdos forem misturados qual será a nova razão sumo/água?",
  options: [
    "3/1", 
    "5/1", 
    "4/1", 
    "17/7", // Resposta correta
    "6/1"
  ],
  correct: 3, // Índice da resposta correta
},

    {
   text: "21. Se 5 elevado a 3a = 64, qual é o valor de 5 elevado a -a?",
   options: [
     "1/4", // Resposta correta      
     "1/2",
     "1/8",
     "2",
     "4",
   ],
   correct: 0, // Índice da resposta correta
 },

    {
  text: "22. Sendo y = 3^x, para y = 5, qual é o valor de x?",
  options: [
    "1.2",
    "1.465", // Resposta correta        
    "2",
    "3",
    "0.5",
  ],
  correct: 1, // Índice da resposta correta
 },

   {
  text: "23. Dois cadernos custam mais do que três canetas. O que custa mais, 7 cadernos ou 10 canetas?",
  options: [
    "7 cadernos", // Resposta correta
    "10 canetas",
    "Custam o mesmo",
    "Não é possível determinar",
  ],
  correct: 0, // Índice da resposta correta
 },
 
   {
   text: "24. A razão de semelhança entre dois polígonos é 2/3. Se o perímetro do menor é 24cm, qual será o perímetro do maior?",
   options: [
     "32 cm",
     "36 cm", // Resposta correta    
     "28 cm",
     "48 cm",
     "40 cm",
  ],
  correct: 1, // Índice da resposta correta
 },
 
    {
    text: "25. Num losango, a medida dos ângulos agudos é metade dos obtusos. Sabendo que o lado deste quadrilátero é igual a 3cm, achar o comprimento da diagonal menor.",
    options: [
    "5.20 cm", // Resposta correta
    "4.00 cm",
    "6.00 cm",
    "5.50 cm",
    "4.50 cm",
  ],
   correct: 0, // Índice da resposta correta
 },

    {
    text: "26. Seja um triângulo isósceles ABC de base AC, onde AB = BC e o ângulo CAB = 70°. Prolongando o lado AC desloca-se o ponto C para um ponto D, que é o vértice de um novo triângulo isósceles ABD. Os triângulos ABC e ABD são semelhantes. Ache as amplitudes dos ângulos do triângulo CDB.",
      options: [
      "45°, 45°, 90°",
      "60°, 60°, 60°",
      "50°, 50°, 80°",
      "55°, 55°, 70°", // Resposta correta                    ,
      "60°, 70°, 50°",
   ],
   correct: 3, // Índice da resposta correta
 },

    {
    text: "27. Determine as coordenadas do centro de uma circunferência, em que os extremos de um diâmetro são os pontos de coordenadas (-1;5) e (-5;-2).",
    options: [
      "(-3; 1.5)", // Resposta correta
      "(-2; 1)",
      "(-3; 2)",
      "(-2; 2.5)",
    "(-4; 3)",
   ],
   correct: 0, // Índice da resposta correta
  },
  
     {
     text: "28. A igualdade -x = | -x | é válida para:",
     options: [
       "x > 0", 
       "x = 0", 
       "x < 0", 
       "x ≥ 0",
       "x ≤ 0", // Resposta correta              
    ],
     correct: 4, // Índice da resposta correta
   },
 
	{
   text: "29. O gráfico de uma função par definida num intervalo [-a, a] é:",
   options: [
     "Simétrico em relação ao eixo x", 
     "Simétrico em relação ao eixo y", // Resposta correta
     "Crescente no intervalo [-a, a]",
     "Decrescente no intervalo [-a, a]",
     "Nenhuma das anteriores"
  ],
  correct: 1, // Índice da resposta correta
},
  {
  text: "30. Sabe-se que os pontos A(–3,–2), B(1, 5), C(3, 2) e D(–1,–5) pertencem ao gráfico de uma função. Então, esta função:",
  options: [
    "É uma função linear", 
    "É uma função quadrática", 
    "É uma função do tipo f(x) = ax + b", 
    "Não é uma função", // Resposta correta
    "É uma função constante"
  ],
  correct: 3, // Índice da resposta correta
}

	
 ];

// Iniciar o jogo
document.getElementById("start-btn").addEventListener("click", () => {
  console.log("Botão de começar clicado");
  showSection("discipline-section");
});

// Seleção de disciplina
document.querySelectorAll(".discipline-btn").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    currentDiscipline = e.target.dataset.discipline;
    startExam();
  });
});

// Iniciar exame
function startExam() {
  showSection("exam-section");
  document.getElementById("discipline-name").innerText = currentDiscipline;

  // Carregar perguntas de acordo com a disciplina
if (currentDiscipline === "Matemática") {
  questions = mathQuestions;
} else if (currentDiscipline === "Português") {
  questions = portugueseQuestions;
} else if (currentDiscipline === "Biologia") {
  questions = biologyQuestions; // Certifique-se de que `biologyQuestions` está definido
} else if (currentDiscipline === "Química") {
  questions = chemistryQuestions; // Certifique-se de que `chemistryQuestions` está definido
} else if (currentDiscipline === "Física") {
  questions = physicsQuestions; // Certifique-se de que `physicsQuestions` está definido
} else if (currentDiscipline === "Geografia") {
  questions = geographyQuestions; // Certifique-se de que `geographyQuestions` está definido
} else if (currentDiscipline === "História") {
  questions = historyQuestions; // Certifique-se de que `historyQuestions` está definido
} else if (currentDiscipline === "Inglês") {
  questions = englishQuestions; // Certifique-se de que `englishQuestions` está definido
} else if (currentDiscipline === "Francês") {
  questions = frenchQuestions; // Certifique-se de que `frenchQuestions` está definido
} else if (currentDiscipline === "Música") {
  questions = musicQuestions; // Certifique-se de que `musicQuestions` está definido
} else {
  questions = generateQuestions(); // Função genérica caso você tenha outra disciplina
}


  currentQuestionIndex = 0;
  score = 0;
  startTimer(45 * 60); // 30 minutos
  showQuestion();
}


function handleMeusArquivos() {
  const escolherDisciplina = document.getElementById("escolherDisciplina");
  const paginaArquivos = document.getElementById("paginaArquivos");
  const listaArquivos = document.getElementById("listaArquivos");

  // Esconde a seção de Escolher Disciplina, se existir
  if (escolherDisciplina) {
    escolherDisciplina.style.display = "none";
  }

  // Alterna a exibição da seção de arquivos
  if (paginaArquivos.style.display === "none" || !paginaArquivos.style.display) {
    paginaArquivos.style.display = "block";

    // Lista de disciplinas e seus respectivos PDFs
const rascunhos = [
  { nome: "Matemática", link: "https://raw.githubusercontent.com/exame-1/exame/main/mat.pdf" },
  { nome: "Português", link: "https://raw.githubusercontent.com/exame-1/exame/main/fome.pdf" },
  { nome: "Química", link: "https://raw.githubusercontent.com/exame-1/exame/main/qui.pdf" },
  { nome: "Física", link: "https://raw.githubusercontent.com/exame-1/exame/main/fis.pdf" },
  { nome: "Inglês", link: "https://raw.githubusercontent.com/exame-1/exame/main/eng.pdf" },
  { nome: "Francês", link: "https://raw.githubusercontent.com/exame-1/exame/main/frace.pdf" },
];


    // Popula os botões de disciplinas dinamicamente
    listaArquivos.innerHTML = ""; // Limpa antes de adicionar

    rascunhos.forEach((rascunho) => {
      const botao = document.createElement("button");
      botao.textContent = rascunho.nome;
      botao.className = "btnRascunho"; // Classe CSS para estilização
      botao.onclick = () => {
        window.open(rascunho.link, "_blank"); // Abre o PDF em uma nova aba
      };
      listaArquivos.appendChild(botao);
    });
  } else {
    paginaArquivos.style.display = "none"; // Esconde a seção se já estiver aberta
  }
}



// Mostrar a pergunta atual
function showQuestion() {
  const question = questions[currentQuestionIndex];
  document.getElementById("question-text").innerText = question.text;
  const optionsContainer = document.getElementById("options");
  optionsContainer.innerHTML = ""; // Limpar opções anteriores
  const letters = ["A", "B", "C", "D", "E"];

  question.options.forEach((option, index) => {
    const btn = document.createElement("button");
    btn.innerText = `${letters[index]}) ${option}`;
    btn.classList.add("option-btn");
    btn.addEventListener("click", () => checkAnswer(index));
    optionsContainer.appendChild(btn);
  });
}

// Verificar resposta
function checkAnswer(selectedIndex) {
  const question = questions[currentQuestionIndex];
  const options = document.querySelectorAll("#options button");
  if (selectedIndex === question.correct) {
    options[selectedIndex].classList.add("correct");
    score++;
  } else {
    options[selectedIndex].classList.add("wrong");
    options[question.correct].classList.add("correct");
  }
  document.getElementById("next-question-btn").style.display = "block";
  options.forEach((btn) => (btn.disabled = true));
}

// Próxima pergunta
document.getElementById("next-question-btn").addEventListener("click", () => {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
    document.getElementById("next-question-btn").style.display = "none";
  } else {
    endExam();
  }
});

// Finalizar exame
function endExam() {
  clearInterval(timerInterval);
  showSection("result-section");

  // Considerando que cada questão vale 0,5 pontos
  const totalScore = score * 0.5; // Pontuação total alcançada pelo aluno

  // Exibir mensagem de aprovação ou reprovação com a nota total
  document.getElementById(
    "result-message"
  ).innerText = `Você aprovou com a nota ${totalScore.toFixed(1)}.`;
  
  // Se o aluno não alcançar a nota mínima de 12 pontos, exibe a reprovação
  if (totalScore < 12) {
    document.getElementById("result-message").innerText = `Você reprovou com a nota ${totalScore.toFixed(1)}.`;
  }
}

// Reiniciar jogo
document.getElementById("restart-btn").addEventListener("click", () => {
  showSection("discipline-section");
});

// Temporizador
function startTimer(seconds) {
  const timerElement = document.getElementById("timer");
  timerInterval = setInterval(() => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    timerElement.innerText = `${String(minutes).padStart(2, "0")}:${String(
      remainingSeconds
    ).padStart(2, "0")}`;
    if (seconds <= 0) {
      clearInterval(timerInterval);
      endExam();
    }
    seconds--;
  }, 1000);
}


    // Impedir acesso ao DevTools (F12 e atalhos comuns)
    document.addEventListener('keydown', function(e) {
        if (e.key === "F12" || 
            (e.ctrlKey && e.shiftKey && (e.key === "I" || e.key === "J")) || 
            (e.ctrlKey && e.key === "U")) {
            e.preventDefault();
            alert("Inspeção não permitida!");
        }
    });


	    // Desabilitar clique com o botão direito
    document.addEventListener('contextmenu', function(e) {
        e.preventDefault();
        alert("Ação desativada!");
    });
	


// Mostrar seção
function showSection(sectionId) {
  document.querySelectorAll("div[id$='-section']").forEach((section) => {
    section.style.display = "none";
  });
  document.getElementById(sectionId).style.display = "block";
}
