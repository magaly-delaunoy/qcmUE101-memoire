/*
  Banque de questions – UE PY00101T, chapitre 4 « La mémoire »
  Définitions et tâches de mémoire, systèmes de mémoire, modèle d'Atkinson et Shiffrin (Sperling, H.M., K.F.,
  Murdock, empan de Miller, Brown-Peterson, interférence, codage), mémoire de travail (Baddeley, Cowan),
  niveaux de traitement, spécificité du codage, oubli, MNESIS.

  Deux types de questions :
  • QCM : { q, options: [4 réponses], e }  → la BONNE réponse est TOUJOURS la première de la liste
    "options" (le jeu mélange l'ordre à l'affichage).
  • VRAI/FAUX : { type: "vf", vrai: true ou false, q: "affirmation", e }
  "e" = explication affichée après la réponse.
  Astuce : garde des réponses de longueur comparable pour que la bonne ne se repère pas.
*/
const QUESTIONS = [
  // ───────── QCM ─────────
  {
    q: "Comment Tulving (2000) définit-il la mémoire ?",
    options: ["Retenir du passé l'information utile à présent", "Conserver définitivement toutes nos expériences", "Reproduire à l'identique les expériences vécues", "Enregistrer les stimuli sensoriels bruts"],
    e: "« Le moyen par lequel on retient et on retire de nos expériences passées l'information dont on a besoin au moment présent »."
  },
  {
    q: "Quelles sont les trois phases du processus de mémorisation ?",
    options: ["Encodage, stockage, récupération", "Perception, encodage, rappel", "Stockage, consolidation, oubli", "Encodage, répétition, récupération"],
    e: "Encoder, stocker et récupérer l'information."
  },
  {
    q: "Que désigne l'encodage ?",
    options: ["Transformer l'information en format traitable", "Conserver durablement les traces mnésiques", "Accéder à la trace mnésique déjà encodée", "Réactiver un souvenir pour l'utiliser"],
    e: "Transformation des informations de l'environnement dans un format que le système cognitif peut traiter et stocker."
  },
  {
    q: "Que désigne le stockage ?",
    options: ["Conserver des traces mnésiques", "Transformer l'information reçue", "Accéder à la trace encodée", "Réactiver une trace stockée"],
    e: "Rétention des informations en mémoire."
  },
  {
    q: "Que désigne la récupération ?",
    options: ["Accéder à la trace mnésique encodée", "Transformer le stimulus en code", "Conserver la trace mnésique", "Sélectionner l'information utile"],
    e: "Accès à l'information encodée pour l'utiliser (percevoir, communiquer, résoudre des problèmes…)."
  },
  {
    q: "Qui a le premier appliqué la démarche expérimentale à la mémoire ?",
    options: ["Hermann Ebbinghaus", "Endel Tulving", "Richard Atkinson", "Fergus Craik"],
    e: "Hermann Ebbinghaus (1885)."
  },
  {
    q: "En quelle année Ebbinghaus applique-t-il la démarche expérimentale à la mémoire ?",
    options: ["1885", "1956", "1968", "1972"],
    e: "1885."
  },
  {
    q: "Quel est l'ordre de la démarche expérimentale sur la mémoire ?",
    options: ["Encodage, délai, récupération", "Récupération, délai, encodage", "Encodage, récupération, délai", "Délai, encodage, récupération"],
    e: "On présente une série d'items (encodage), puis un délai (stockage), puis le sujet restitue (récupération)."
  },
  {
    q: "Que varie d'un système mnésique à l'autre ?",
    options: ["La durée et la capacité de stockage", "Le nombre de phases du processus", "La nature de la tâche proposée", "Le seul niveau de motivation"],
    e: "La mémoire n'est pas un système unitaire : elle n'est pas homogène dans ses composantes ni son fonctionnement."
  },
  {
    q: "Quelles durées de stockage les systèmes mnésiques couvrent-ils ?",
    options: ["De fractions de seconde à des années", "De quelques secondes à quelques heures", "D'une minute à une semaine environ", "Toujours moins d'une minute en tout"],
    e: "Du registre sensoriel à la mémoire à long terme."
  },
  {
    q: "Quelle est la capacité de stockage de la mémoire à long terme ?",
    options: ["Quasi illimitée", "Environ 7 éléments", "Quelques lettres", "Environ 20 éléments"],
    e: "Les mémoires tampons ont une capacité réduite ; la MLT une capacité quasi illimitée."
  },
  {
    q: "Dans un rappel sériel, que doit faire le sujet ?",
    options: ["Restituer les items dans l'ordre exact", "Restituer les items dans n'importe quel ordre", "Restituer à partir d'un indice de catégorie", "Choisir l'item appris parmi des nouveaux"],
    e: "Exemple : 2-8-9-4-6-1 à restituer dans le même ordre."
  },
  {
    q: "Dans un rappel libre, que doit faire le sujet ?",
    options: ["Restituer les items dans n'importe quel ordre", "Restituer les items dans l'ordre exact", "Restituer à partir d'un indice de catégorie", "Choisir l'item appris parmi des nouveaux"],
    e: "Le sujet peut commencer par n'importe quel item."
  },
  {
    q: "« Quel était le fruit ? » est un exemple de…",
    options: ["Rappel indicé", "Rappel libre", "Rappel sériel", "Reconnaissance"],
    e: "Un indice (la catégorie) est présenté au moment de la récupération."
  },
  {
    q: "Choisir « amnésiques » parmi trois termes proposés est un exemple de…",
    options: ["Reconnaissance", "Rappel indicé", "Rappel libre", "Rappel sériel"],
    e: "Identifier un item appris parmi des items nouveaux."
  },
  {
    q: "Quelle tâche est généralement mieux réussie ?",
    options: ["La reconnaissance", "Le rappel libre", "Le rappel sériel", "Le rappel indicé"],
    e: "Les performances en reconnaissance sont généralement meilleures qu'en rappel."
  },
  {
    q: "Pourquoi le rappel est-il plus difficile que la reconnaissance ?",
    options: ["Il nécessite une recherche active", "Il sollicite moins de ressources", "Il fournit toujours un indice", "Il repose sur le hasard"],
    e: "Le rappel sollicite plus de ressources attentionnelles."
  },
  {
    q: "Que suppose l'approche fonctionnelle de la mémoire ?",
    options: ["Une structure unique, plusieurs processus", "Plusieurs structures de mémoire distinctes", "Des systèmes indépendants par lésion", "Des modules sans processus de contrôle"],
    e: "Elle s'intéresse au fonctionnement (encodage, récupération) plutôt qu'aux structures."
  },
  {
    q: "Que suppose l'approche structurale de la mémoire ?",
    options: ["Plusieurs systèmes mnésiques distincts", "Une structure unique à plusieurs processus", "Seulement des processus d'encodage", "Une mémoire unitaire homogène"],
    e: "On parle de conceptions multi-systèmes."
  },
  {
    q: "Sur quels travaux repose l'approche structurale ?",
    options: ["La neuropsychologie", "La psychologie cognitive", "La psychophysique", "Le behaviorisme"],
    e: "L'approche fonctionnelle provient surtout de la psychologie cognitive."
  },
  {
    q: "Sur quels travaux repose l'approche fonctionnelle ?",
    options: ["La psychologie cognitive", "La neuropsychologie clinique", "La psychanalyse freudienne", "L'introspectionnisme de Wundt"],
    e: "Approche structurale : neuropsychologie."
  },
  {
    q: "Que stipule le principe de dissociation ?",
    options: ["Une lésion peut épargner d'autres systèmes", "Une lésion détruit tous les systèmes mnésiques", "Un seul système gère tous les types d'info", "Les systèmes fonctionnent toujours en série"],
    e: "Une lésion peut affecter un système en laissant les autres intacts."
  },
  {
    q: "Laquelle de ces dissociations n'est PAS citée dans le cours ?",
    options: ["Mémoire visuelle et auditive", "MCT et MLT (court/long terme)", "Sémantique et épisodique", "Explicite et implicite"],
    e: "Citées : MCT/MLT, sémantique/épisodique, procédurale/déclarative, explicite/implicite."
  },
  {
    q: "Comment se caractérise la MCT ?",
    options: ["Peu d'informations, sur une durée brève", "Informations stockées de façon permanente", "Capacité de stockage quasi illimitée", "Souvenirs d'enfance et vocabulaire"],
    e: "La MLT stocke de manière permanente (souvenirs d'enfance, vocabulaire, savoir lire)."
  },
  {
    q: "Quel exemple relève de la mémoire à long terme ?",
    options: ["Le vocabulaire et le savoir lire", "Un numéro lu à l'instant", "Des lettres vues 50 ms", "Une adresse répétée mentalement"],
    e: "Souvenirs d'enfance, vocabulaire, savoir lire."
  },
  {
    q: "Qui a introduit la distinction épisodique/sémantique, et quand ?",
    options: ["Tulving, 1972", "Tulving, 2000", "Cohen et Squire, 1980", "Graf et Schacter, 1985"],
    e: "Tulving (1972)."
  },
  {
    q: "Que stocke la mémoire épisodique ?",
    options: ["Souvenirs vécus, situés dans le temps et l'espace", "Connaissances générales sur le sens des mots et du monde", "Habiletés motrices et cognitives non verbalisables", "Informations perceptives sur la forme des objets"],
    e: "Événements propres à l'expérience individuelle, localisés dans le temps et l'espace."
  },
  {
    q: "Que stocke la mémoire sémantique ?",
    options: ["Savoirs généraux hors contexte d'acquisition", "Événements vécus avec leur contexte précis", "Savoir-faire moteurs devenus automatiques", "Souvenirs personnels de la dernière semaine"],
    e: "Savoirs dépourvus d'informations spatio-temporelles ; nécessaires à l'usage du langage."
  },
  {
    q: "Se rappeler ses dernières vacances sollicite surtout…",
    options: ["La mémoire épisodique", "La mémoire sémantique", "La mémoire procédurale", "La mémoire perceptive"],
    e: "Souvenir d'un événement vécu."
  },
  {
    q: "Répondre à « quelle est la capitale de la Suède ? » sollicite surtout…",
    options: ["La mémoire sémantique", "La mémoire épisodique", "La mémoire procédurale", "La mémoire de travail"],
    e: "Connaissance générale, sans contexte d'acquisition."
  },
  {
    q: "Qui a introduit la distinction procédurale/déclarative ?",
    options: ["Cohen et Squire (1980)", "Graf et Schacter (1985)", "Tulving (1972)", "Atkinson et Shiffrin (1968)"],
    e: "Cohen et Squire, 1980."
  },
  {
    q: "Que stocke la mémoire procédurale ?",
    options: ["Savoir-faire non verbalisables", "Faits consciemment récupérables", "Connaissances générales sur le monde", "Souvenirs situés dans le temps"],
    e: "Le « savoir-faire » : vélo, tennis, natation…"
  },
  {
    q: "Comment se subdivise la mémoire déclarative ?",
    options: ["En épisodique et sémantique", "En procédurale et implicite", "En explicite et implicite", "En MCT et MLT"],
    e: "La déclarative = épisodique + sémantique."
  },
  {
    q: "Lequel de ces exemples relève de la mémoire procédurale ?",
    options: ["Savoir nager", "Connaître une capitale", "Se rappeler un week-end", "Reconnaître un mot appris"],
    e: "Savoir-faire : nager, éplucher une pomme de terre, jouer au tennis…"
  },
  {
    q: "Qui a proposé la distinction explicite/implicite ?",
    options: ["Graf et Schacter (1985)", "Cohen et Squire (1980)", "Tulving (1972)", "Baddeley et Hitch (1974)"],
    e: "Graf et Schacter, 1985."
  },
  {
    q: "Par quelles tâches évalue-t-on la mémoire explicite ?",
    options: ["Rappel libre, indicé, reconnaissance", "Amorçage et conditionnement classique", "Habiletés motrices et perceptives", "Tâches perceptives sans consigne"],
    e: "Récupération consciente ou volontaire."
  },
  {
    q: "Qu'est-ce que la mémoire implicite ?",
    options: ["Une influence passée sans souvenir conscient", "Une récupération volontaire d'un événement", "Une restitution consciente d'une liste", "Un choix d'item parmi de nouveaux items"],
    e: "Elle n'implique pas le souvenir intentionnel et conscient d'un événement passé."
  },
  {
    q: "Quelle distinction l'UE 101 étudie-t-elle principalement ?",
    options: ["MCT et MLT, puis la mémoire de travail", "Épisodique et sémantique, puis procédurale", "Procédurale et déclarative, puis implicite", "Explicite et implicite, puis sémantique"],
    e: "Les autres distinctions sont vues en Licence 2 (UE 401)."
  },
  {
    q: "Dans quelle UE les systèmes de MLT sont-ils abordés ?",
    options: ["UE 401 (Licence 2)", "UE 101 (Licence 1)", "UE 301 (Licence 3)", "UE 501 (Licence 3)"],
    e: "Les distinctions de la MLT sont abordées en Licence 2."
  },
  {
    q: "Pourquoi le modèle d'Atkinson et Shiffrin est-il dit « sériel » ?",
    options: ["Ses sous-systèmes sont placés en série", "Ses sous-systèmes fonctionnent en parallèle", "Il ne comporte qu'un seul système", "Ses processus sont tous fixes"],
    e: "Le registre sensoriel, la MCT et la MLT se succèdent."
  },
  {
    q: "Quelles sont les trois structures du modèle d'Atkinson et Shiffrin ?",
    options: ["RIS, MCT et MLT", "MCT, MDT et MLT", "RIS, MDT et MLT", "RIS, MCT et MDT"],
    e: "Registre d'informations sensorielles, mémoire à court terme, mémoire à long terme."
  },
  {
    q: "Quels sont les processus de contrôle du modèle ?",
    options: ["Codage, répétition, recherche en mémoire", "Encodage, stockage, récupération, oubli", "Attention, perception, prise de décision", "Sélection, durée de rétention, saturation"],
    e: "Modifiables par l'individu et optionnels selon la tâche."
  },
  {
    q: "Que sont les « structures » dans le modèle d'Atkinson et Shiffrin ?",
    options: ["Des caractéristiques permanentes du système", "Des processus modifiables par l'individu", "Des stratégies optionnelles de la tâche", "Des habiletés motrices apprises"],
    e: "Aspects liés au système physique et aux processus fixes."
  },
  {
    q: "Que sont les « processus de contrôle » ?",
    options: ["Des opérations optionnelles", "Des composants physiques permanents", "Des mémoires sensorielles brèves", "Des registres perceptifs fixes"],
    e: "Utilisables selon les caractéristiques de la tâche."
  },
  {
    q: "Quelle est la durée de conservation du RIS ?",
    options: ["Moins d'une seconde", "Environ 20 secondes", "Quelques minutes", "Plusieurs heures"],
    e: "Très brève (inférieure à la seconde)."
  },
  {
    q: "Quel est le rôle du RIS ?",
    options: ["Conserver les stimuli un bref instant", "Stocker durablement tous les souvenirs", "Maintenir l'information par répétition", "Coordonner les systèmes de stockage"],
    e: "Mémoire perceptive exhaustive, dans la modalité du stimulus."
  },
  {
    q: "Que présente Sperling (1960) dans sa première expérience ?",
    options: ["12 lettres en 3 lignes de 4", "9 lettres en 3 lignes de 3", "16 lettres en 4 lignes de 4", "8 lettres en 2 lignes de 4"],
    e: "Pendant 50 millisecondes."
  },
  {
    q: "Combien de temps les lettres sont-elles présentées chez Sperling ?",
    options: ["50 millisecondes", "500 millisecondes", "5 secondes", "1 seconde"],
    e: "50 ms, puis rappel immédiat."
  },
  {
    q: "Combien de lettres les participants rappellent-ils à la 1re expérience de Sperling ?",
    options: ["Environ 4", "Environ 9", "Environ 12", "Environ 7"],
    e: "Ils rappellent environ 4 lettres."
  },
  {
    q: "Dans la 2e expérience de Sperling, qu'indique la ligne à rappeler ?",
    options: ["Un son grave, moyen ou aigu", "Une flèche de couleur verte", "Un mot affiché à l'écran", "Un flash lumineux coloré"],
    e: "La tonalité du son indique la ligne (bas, milieu, haut)."
  },
  {
    q: "Dans la 2e expérience de Sperling, que montrent les résultats ?",
    options: ["Presque toute la ligne indiquée est rappelée", "Seule la ligne du haut est bien rappelée", "Le rappel reste faible pour toutes les lignes", "Aucune lettre n'est rappelée sans consigne"],
    e: "Au moins 9 lettres sont disponibles un bref instant, alors que le sujet ignore la ligne à rappeler."
  },
  {
    q: "Au minimum, combien de lettres sont brièvement disponibles d'après la 2e expérience de Sperling ?",
    options: ["9 lettres", "4 lettres", "3 lettres", "7 lettres"],
    e: "Les sujets rappellent un peu plus de 3 lettres de n'importe quelle ligne : donc au moins 9 disponibles."
  },
  {
    q: "Comment appelle-t-on la mémoire sensorielle visuelle mise en évidence par Sperling ?",
    options: ["La mémoire iconique", "La mémoire échoïque", "La mémoire épisodique", "La mémoire de travail"],
    e: "Mémoire iconique : 12 lettres disponibles pendant quelques dixièmes de seconde."
  },
  {
    q: "Que devient le rappel quand le signal sonore est retardé de plus d'une seconde ?",
    options: ["Il tombe à la moitié des lettres", "Il reste identique à la 1re expérience", "Il double par rapport au rappel global", "Il disparaît totalement, sans exception"],
    e: "Les informations ne sont plus conservées dans le RIS."
  },
  {
    q: "Quelle information est transférée du RIS vers la MCT ?",
    options: ["Celle sur laquelle porte l'attention", "Toute l'information sensorielle reçue", "Seulement l'information sémantique", "Seulement l'information déjà apprise"],
    e: "Seules les informations sélectionnées sont transférées."
  },
  {
    q: "Quelle est la durée de stockage de la MCT dans le modèle d'Atkinson et Shiffrin ?",
    options: ["Environ 30 secondes", "Moins d'une seconde", "Environ 5 minutes", "Plusieurs heures"],
    e: "Stockage provisoire, maintenu par auto-répétition."
  },
  {
    q: "Que permet l'auto-répétition dans la MCT ?",
    options: ["Maintenir l'information un moment", "Étendre la capacité de stockage à l'infini", "Stocker l'information dans le RIS", "Éviter tout oubli définitif en MLT"],
    e: "L'information est stockée provisoirement grâce à la répétition mentale."
  },
  {
    q: "Que se passe-t-il quand la MCT est saturée ?",
    options: ["Les nouveautés effacent les anciennes", "Les anciennes informations repassent en RIS", "La MLT bloque toute nouvelle entrée", "La MCT augmente sa capacité d'accueil"],
    e: "Si le nombre d'informations dépasse la limite, la MCT est saturée."
  },
  {
    q: "Quel rôle l'élément central du modèle d'Atkinson et Shiffrin joue-t-il ?",
    options: ["La MCT, origine des processus de contrôle", "Le RIS, qui stocke durablement l'information", "La MLT, qui sélectionne l'information", "Le RIS, qui répète mentalement l'information"],
    e: "La MCT est l'élément central : stockage et processus de contrôle."
  },
  {
    q: "Quelle est la caractéristique essentielle de la MLT ?",
    options: ["Elle est organisée", "Elle est limitée", "Elle est brève", "Elle est modifiable à volonté"],
    e: "Cette organisation joue un rôle important dans la récupération."
  },
  {
    q: "Comment la MLT conserve-t-elle l'information dans ce modèle ?",
    options: ["De façon permanente, avec le sens", "De façon provisoire, en une seule dimension", "Sans tenir compte du sens des items", "Uniquement sous une forme visuelle brute"],
    e: "Selon toutes ses dimensions sensorielles et en tenant compte des propriétés sémantiques."
  },
  {
    q: "Quel exemple illustre une MLT efficace dans la vie quotidienne ?",
    options: ["Chanter des comptines de son enfance", "Retenir un numéro dicté à l'instant", "Répéter une adresse tout juste lue", "Suivre un calcul mental en cours"],
    e: "Retenir un nouveau numéro de téléphone est plus difficile : MCT limitée."
  },
  {
    q: "Quand Brenda Milner rapporte-t-elle le cas H.M. ?",
    options: ["1959", "1970", "1956", "1965"],
    e: "Milner, 1959."
  },
  {
    q: "Qu'a subi le patient H.M. à 27 ans ?",
    options: ["L'ablation de lobes temporaux", "Une greffe de l'hippocampe gauche", "Une lésion du lobe frontal droit", "Une section du corps calleux"],
    e: "Opération pour soigner son épilepsie."
  },
  {
    q: "Quel profil mnésique présente H.M. après l'opération ?",
    options: ["MCT préservée, MLT très atteinte", "MCT atteinte, MLT bien préservée", "MCT et MLT toutes deux préservées", "MCT et MLT toutes deux atteintes"],
    e: "Il retenait l'information quelques secondes mais ne consolidait plus."
  },
  {
    q: "Quel type de dissociation le cas H.M. illustre-t-il ?",
    options: ["Une simple dissociation", "Une double dissociation", "Aucune dissociation", "Une triple dissociation"],
    e: "Un système lésé, l'autre préservé."
  },
  {
    q: "Quelle limite oppose-t-on à l'argument du cas H.M. ?",
    options: ["L'écart pourrait tenir à la complexité", "Le patient était alors trop jeune", "L'opération avait eu lieu trop récemment", "Le patient n'était pas réellement amnésique"],
    e: "La différence de performances pourrait être liée à la complexité des tâches : il faut une double dissociation."
  },
  {
    q: "Qui décrit le patient K.F. ?",
    options: ["Shallice et Warrington (1970)", "Milner (1959)", "Scoville et Milner (1957)", "Murdock (1962)"],
    e: "Shallice et Warrington, 1970."
  },
  {
    q: "Quel profil mnésique présente K.F. ?",
    options: ["MCT très faible, apprentissage conservé", "MLT très faible, MCT bien conservée", "MCT et MLT toutes deux très faibles", "MCT et MLT toutes deux normales"],
    e: "Pattern inverse de H.M."
  },
  {
    q: "Que montrent H.M. et K.F. ensemble ?",
    options: ["Une double dissociation MCT/MLT", "Une simple dissociation MCT/MLT", "Une absence de dissociation", "Une dissociation épisodique/sémantique"],
    e: "MCT et MLT sont deux modules à part entière."
  },
  {
    q: "Pourquoi le cas K.F. remet-il en cause le modèle sériel ?",
    options: ["La MLT apprend sans MCT intacte", "La MCT ne stocke jamais d'information", "Le RIS ne joue aucun rôle ici", "La MLT dépend toujours de la MCT"],
    e: "Dans le modèle, la MLT est alimentée par la MCT : K.F. apprend malgré une MCT déficiente."
  },
  {
    q: "Combien de mots Murdock (1962) présente-t-il ?",
    options: ["30 mots", "20 mots", "15 mots", "40 mots"],
    e: "Un mot par seconde, à l'oral."
  },
  {
    q: "À quel rythme les mots sont-ils présentés chez Murdock ?",
    options: ["Un mot par seconde", "Un mot toutes les 5 secondes", "Deux mots par seconde", "Un mot toutes les 10 secondes"],
    e: "Liste de 30 mots, un mot par seconde."
  },
  {
    q: "Quelle tâche suit la présentation chez Murdock ?",
    options: ["Un rappel libre immédiat", "Un rappel sériel différé", "Une reconnaissance", "Un rappel indicé"],
    e: "1 min 30 pour écrire tous les mots dans l'ordre souhaité."
  },
  {
    q: "Que représente la courbe de position sérielle ?",
    options: ["Le pourcentage de rappel selon la position du mot", "Le temps de rappel selon la durée de présentation", "Le nombre d'intrusions selon la liste", "Le pourcentage d'oubli selon l'heure"],
    e: "On numérote les mots selon leur ordre de présentation."
  },
  {
    q: "Quels items sont les mieux rappelés dans la courbe de Murdock ?",
    options: ["Les premiers et derniers items", "Les items du milieu de la liste", "Les premiers items uniquement", "Les derniers items uniquement"],
    e: "Primauté et récence."
  },
  {
    q: "Qu'est-ce que l'effet de primauté ?",
    options: ["Meilleur rappel des items de début de liste", "Meilleur rappel des items de fin de liste", "Meilleur rappel des items du milieu", "Rappel identique pour tous les items"],
    e: "Les premiers mots arrivent en MLT, avec peu d'interférence."
  },
  {
    q: "Qu'est-ce que l'effet de récence ?",
    options: ["Meilleur rappel des items de fin de liste", "Meilleur rappel des items de début de liste", "Meilleur rappel des items du milieu", "Oubli massif des derniers items"],
    e: "Les derniers mots sont encore en MCT au moment du rappel."
  },
  {
    q: "Selon Atkinson et Shiffrin, à quel système correspond l'effet de récence ?",
    options: ["La MCT", "La MLT", "Le RIS", "La mémoire sémantique"],
    e: "Les derniers items sont encore présents en MCT."
  },
  {
    q: "Selon Atkinson et Shiffrin, à quoi correspond l'effet de primauté ?",
    options: ["La présence des premiers items en MLT", "La présence des derniers items en MCT", "La disparition des items en RIS", "La saturation de la MCT"],
    e: "Le transfert MCT → MLT a eu lieu grâce à une auto-répétition suffisante."
  },
  {
    q: "Pourquoi les items du milieu sont-ils peu rappelés ?",
    options: ["Ils quittent la MCT, peu transférés en MLT", "Ils sont conservés dans le RIS plus longtemps", "Ils restent en MCT trop longtemps sans effet", "Ils sont encodés trop profondément en MLT"],
    e: "Auto-répétition insuffisante."
  },
  {
    q: "Comment Murdock manipule-t-il la primauté ?",
    options: ["En variant le temps de présentation", "En variant le délai avant le rappel", "En ajoutant un comptage à rebours", "En changeant la langue des mots"],
    e: "Il joue sur l'auto-répétition (1 s ou 2 s par mot)."
  },
  {
    q: "Quel résultat obtient-on avec un temps de présentation plus long ?",
    options: ["Les premiers items sont mieux retenus", "Les derniers items sont mieux retenus", "Tous les items sont moins retenus", "Le milieu de la courbe disparaît"],
    e: "Aucun effet sur la partie MCT de la courbe ; effet sur la primauté."
  },
  {
    q: "Comment Postman et Phillips (1965) manipulent-ils la récence ?",
    options: ["Avec un comptage à rebours de 3 en 3", "Avec une variation du temps de présentation", "Avec un indice de catégorie", "Avec une liste plus courte"],
    e: "Tâche interférente après la présentation des 30 items."
  },
  {
    q: "Quel résultat Postman et Phillips obtiennent-ils après le comptage à rebours ?",
    options: ["L'effet de récence disparaît", "L'effet de primauté disparaît", "Les deux effets disparaissent", "Aucun effet ne change"],
    e: "Les derniers mots ne sont plus mieux rappelés que ceux du milieu."
  },
  {
    q: "Que devient le rappel des premiers items après la tâche interférente ?",
    options: ["Il n'est pas altéré", "Il s'effondre", "Il augmente nettement", "Il devient aléatoire"],
    e: "Ce qui est déjà en MLT n'est plus sensible à l'interférence."
  },
  {
    q: "Qui a utilisé le calcul mental comme tâche interférente ?",
    options: ["Glanzer et Cunitz (1966)", "Postman et Phillips (1965)", "Murdock (1962)", "Waugh et Norman (1965)"],
    e: "Calcul mental : Glanzer et Cunitz ; comptage à rebours : Postman et Phillips."
  },
  {
    q: "Quelle durée de délai de rappel est utilisée dans ces expériences ?",
    options: ["Entre 0 et 30 secondes", "Entre 0 et 5 secondes", "Entre 1 et 10 minutes", "Entre 1 heure et 1 jour"],
    e: "Délai occupé par une tâche de calcul ou de comptage à rebours."
  },
  {
    q: "Pourquoi les expériences de Murdock et de Postman et Phillips forment-elles une double dissociation expérimentale ?",
    options: ["Chaque variable touche une seule partie", "Les deux variables touchent toute la courbe", "Aucune variable ne touche la courbe", "Une variable touche les deux parties à la fois"],
    e: "Temps de présentation : primauté ; comptage à rebours : récence."
  },
  {
    q: "Quelles trois caractéristiques de la MCT l'approche des registres met-elle en avant ?",
    options: ["Taille limitée, rapidité de l'oubli, codage", "Durée, sélection, consolidation", "Capacité, attention, reconnaissance", "Taille limitée, interférence, stockage permanent"],
    e: "Capacité limitée, oubli rapide, codage du contenu."
  },
  {
    q: "Qu'est-ce que l'empan mnésique ?",
    options: ["La plus longue série rappelée dans l'ordre", "La durée maximale de stockage en MCT", "Le nombre d'items reconnus en une fois", "Le nombre de chunks stockés en MLT"],
    e: "Mesure de la capacité de la MCT par rappel sériel."
  },
  {
    q: "Combien d'items Miller (1956) présente-t-il aux sujets ?",
    options: ["Entre 5 et 15 items", "Entre 2 et 5 items", "Entre 20 et 30 items", "Entre 1 et 3 items"],
    e: "Rappel dans l'ordre, immédiatement après la présentation."
  },
  {
    q: "Quel empan moyen Miller obtient-il ?",
    options: ["7 ± 2 éléments", "5 ± 2 éléments", "9 ± 2 éléments", "4 ± 1 éléments"],
    e: "Certaines personnes retiennent 5 items, d'autres 9 : « nombre magique »."
  },
  {
    q: "Quelle qualité a l'empan mesuré par Miller ?",
    options: ["Il est invariable selon les items", "Il dépend entièrement du type d'items", "Il est nul pour les mots écrits", "Il augmente avec la modalité auditive"],
    e: "Même capacité avec chiffres, lettres, nombres et mots."
  },
  {
    q: "Combien d'unités compose 1-4-0-7-1-7-8-9 si on le regroupe en 14-07-1789 ?",
    options: ["3 unités", "8 unités", "2 unités", "4 unités"],
    e: "Chunking : 14, 07, 1789."
  },
  {
    q: "Combien de chiffres peut-on retenir au maximum grâce aux chunks ?",
    options: ["21 chiffres", "7 chiffres", "14 chiffres", "9 chiffres"],
    e: "7 unités de 3 chiffres : 7 × 3 = 21."
  },
  {
    q: "Qu'est-ce qu'un chunk ?",
    options: ["Une unité d'information regroupée", "Un item isolé mémorisé en MLT", "Un chiffre répété mentalement une fois", "Un indice de récupération en MLT"],
    e: "1-4-0-7-1-7-8-9 peut être regroupé en 14-07-1789 : 3 chunks au lieu de 8 items."
  },
  {
    q: "Qui a mis en évidence la rapidité de l'oubli en MCT ?",
    options: ["Brown (1958), Peterson (1959)", "Miller (1956), Sperling (1960)", "Waugh et Norman (1965), Miller", "Wickelgren (1965), Sperling (1960)"],
    e: "Épreuve de Brown-Peterson."
  },
  {
    q: "Quels stimuli sont présentés dans l'épreuve de Peterson et Peterson ?",
    options: ["Trois consonnes", "Trois chiffres", "Une phrase courte", "Une image simple"],
    e: "Par exemple CHJ."
  },
  {
    q: "Quelle tâche interférente est utilisée dans l'épreuve de Brown-Peterson ?",
    options: ["Compter à rebours de 3 en 3", "Recopier une série de lettres", "Résoudre un calcul mental", "Lire un texte à voix basse"],
    e: "À haute voix, à raison d'un nombre par seconde."
  },
  {
    q: "Quelle est la plage des délais de rétention chez Peterson et Peterson ?",
    options: ["De 3 à 18 secondes", "De 0 à 30 secondes", "De 1 à 5 minutes", "De 10 à 60 secondes"],
    e: "Intervalle différent à chaque essai."
  },
  {
    q: "Quel résultat obtient-on chez Peterson et Peterson ?",
    options: ["Le rappel baisse, quasi nul à 18 s", "Le rappel reste stable avec le délai", "Le rappel augmente avec le délai", "Le rappel s'effondre dès la 3e seconde"],
    e: "L'information reste très peu de temps en MCT."
  },
  {
    q: "Pourquoi utilise-t-on le comptage à rebours ?",
    options: ["Pour empêcher l'auto-répétition", "Pour faciliter l'encodage des consonnes", "Pour mesurer la vitesse de lecture", "Pour renforcer le transfert en MLT"],
    e: "Sans répétition, l'information est rapidement oubliée."
  },
  {
    q: "Que dit la théorie de l'effacement de la trace ?",
    options: ["L'information disparaît avec le temps", "L'information est remplacée par de nouvelles", "L'information est transférée en MLT", "L'information est codée sémantiquement"],
    e: "Théorie de l'interférence : l'information est remplacée par de nouvelles informations."
  },
  {
    q: "Que dit la théorie de l'interférence ?",
    options: ["Elle est remplacée par de nouvelles", "Elle disparaît simplement avec le temps", "Elle est toujours conservée intacte", "Elle repasse obligatoirement par le RIS"],
    e: "Effacement : disparition spontanée de la trace."
  },
  {
    q: "Combien de chiffres Waugh et Norman (1965) présentent-ils ?",
    options: ["16 chiffres", "12 chiffres", "20 chiffres", "10 chiffres"],
    e: "Série ordonnée de 16 chiffres."
  },
  {
    q: "Que doit rappeler le participant chez Waugh et Norman ?",
    options: ["Le chiffre suivant le chiffre témoin", "La liste entière des chiffres vus", "Le chiffre le plus fréquent de la liste", "Le dernier chiffre de toute la liste"],
    e: "Chiffre test = celui qui suit le chiffre témoin."
  },
  {
    q: "Comment Waugh et Norman font-ils varier le nombre d'items interférents ?",
    options: ["En déplaçant le chiffre témoin", "En changeant la longueur de la liste", "En changeant la langue des chiffres", "En changeant le nombre de participants"],
    e: "Plus le chiffre témoin est en début de liste, plus il y a d'items interférents."
  },
  {
    q: "Quelles cadences de présentation Waugh et Norman utilisent-ils ?",
    options: ["4 chiffres/s ou 1 chiffre/s", "2 chiffres/s ou 1 chiffre/2 s", "1 chiffre/s ou 1 chiffre/10 s", "8 chiffres/s ou 4 chiffres/s"],
    e: "Cadence rapide = délai court ; lente = délai long."
  },
  {
    q: "Quelle est la conclusion de Waugh et Norman ?",
    options: ["L'interférence est déterminante", "Le délai de rétention est le facteur clé", "L'oubli est dû à l'effacement spontané", "L'oubli ne dépend d'aucun facteur connu"],
    e: "Substitution en mémoire : le délai joue un rôle bien moins important."
  },
  {
    q: "Que désigne l'interférence rétroactive ?",
    options: ["Un nouveau matériel gêne la récupération de l'ancien", "Un ancien matériel gêne la récupération du nouveau", "Une absence d'interférence entre deux listes", "Une interférence due au seul délai"],
    e: "Exemple : oublier ce qu'on a mangé il y a trois jours."
  },
  {
    q: "Que désigne l'interférence proactive ?",
    options: ["Un ancien matériel gêne la récupération du nouveau", "Un nouveau matériel gêne la récupération de l'ancien", "Une absence d'interférence entre deux listes", "Une interférence due au seul délai"],
    e: "Exemple : aller chercher sa voiture là où elle était garée hier."
  },
  {
    q: "Quel exemple illustre l'interférence proactive ?",
    options: ["Chercher sa voiture à l'ancienne place", "Oublier le repas d'il y a trois jours", "Oublier un nom après un long délai", "Ne pas avoir encodé un mot du tout"],
    e: "L'ancien emplacement perturbe le nouveau."
  },
  {
    q: "Quel exemple illustre l'interférence rétroactive ?",
    options: ["Oublier le repas de midi d'il y a trois jours", "Aller chercher sa voiture à l'ancien endroit", "Confondre deux numéros appris le même jour", "Oublier un nom jamais entendu"],
    e: "De nombreuses informations encodées depuis rendent difficile le souvenir."
  },
  {
    q: "Pourquoi l'interférence est-elle importante pour l'apprentissage et la formation ?",
    options: ["On peut la limiter par des stratégies", "Elle rend tout apprentissage impossible", "Elle ne dépend d'aucune stratégie connue", "Elle disparaît d'elle-même avec le temps"],
    e: "Si l'oubli ne dépendait que du temps, on ne pourrait pas l'éviter."
  },
  {
    q: "Quel codage domine en MCT d'après les confusions acoustiques ?",
    options: ["Le codage verbal", "Le codage visuel", "Le codage sémantique", "Le codage moteur"],
    e: "On répète mentalement le numéro de téléphone."
  },
  {
    q: "Par quelle lettre F est-il souvent remplacé lors d'un rappel ?",
    options: ["S", "P", "K", "L"],
    e: "Confusion acoustique : « effe » et « esse »."
  },
  {
    q: "Quelle lettre est souvent confondue avec C par confusion acoustique ?",
    options: ["T", "O", "G", "K"],
    e: "C (« cé ») et T (« té ») ont un son proche ; C/O : proximité visuelle."
  },
  {
    q: "Pourquoi la confusion F/E ne prouve-t-elle pas un codage acoustique ?",
    options: ["La ressemblance visuelle suffit", "Les deux sons sont identiques", "Le test était mal conçu au départ", "Elle n'a jamais été observée en labo"],
    e: "La confusion F/S, elle, ne peut être expliquée que par le son."
  },
  {
    q: "Combien de lettres comporte la série test de Wickelgren (1965) ?",
    options: ["4 lettres", "8 lettres", "3 lettres", "6 lettres"],
    e: "Puis 8 lettres interférentes à recopier."
  },
  {
    q: "Que montre l'expérience de Wickelgren ?",
    options: ["Moins de rappels corrects si les lettres interférentes sonnent comme les initiales", "Moins de rappels corrects si les lettres interférentes ressemblent visuellement", "Aucun effet de la ressemblance", "Plus de rappels corrects si les lettres sonnent pareil"],
    e: "Argument en faveur d'un codage verbal en MCT."
  },
  {
    q: "Quelles figures Shepard et Metzler (1971) utilisent-ils ?",
    options: ["Deux figures abstraites à comparer", "Des mots présentés en rotation mentale", "Des visages inversés à identifier", "Des lettres déformées à reconnaître"],
    e: "Même figure à une rotation près ou figures différentes."
  },
  {
    q: "Quel est le facteur manipulé chez Shepard et Metzler ?",
    options: ["L'angle de rotation des figures", "Le temps de présentation des figures", "La taille relative des figures", "La couleur et la forme des figures"],
    e: "Le degré de rotation des figures identiques."
  },
  {
    q: "Quel est le résultat de Shepard et Metzler ?",
    options: ["Le temps croît avec l'angle de rotation", "Le temps ne dépend pas de l'angle", "Le temps diminue quand l'angle augmente", "Les erreurs sont nulles quel que soit l'angle"],
    e: "Les participants « font tourner les figures dans leur tête »."
  },
  {
    q: "Que montrent les travaux sur la rotation mentale ?",
    options: ["L'information n'est pas toujours codée verbalement", "L'information est toujours codée verbalement", "L'information est toujours codée sémantiquement", "La MCT n'a aucun code"],
    e: "Ils attestent d'un codage visuel en MCT."
  },
  {
    q: "Que montrent Wickens, Dalezman et Eggemeier (1976) ?",
    options: ["L'interférence proactive disparaît quand la catégorie change", "L'interférence proactive augmente quand la catégorie change", "L'interférence rétroactive disparaît toujours", "Aucune interférence n'existe en MCT"],
    e: "Elle disparaît d'autant plus que la distance sémantique augmente."
  },
  {
    q: "Quel codage en déduit-on des travaux de Wickens et al. ?",
    options: ["Un codage sémantique", "Un codage purement verbal", "Un codage purement visuel", "Un codage purement moteur"],
    e: "Il y a aussi un code sémantique, pas uniquement verbal ou imagé."
  },
  {
    q: "Combien d'essais successifs Wickens et al. utilisent-ils par participant ?",
    options: ["4 essais", "3 essais", "6 essais", "10 essais"],
    e: "3 essais d'une même catégorie, puis un 4e essai avec des fruits."
  },
  {
    q: "Quelle catégorie est présentée au 4e essai chez Wickens et al. ?",
    options: ["Des noms de fruits", "Des noms de professions", "Des noms de légumes", "Des noms de fleurs"],
    e: "Les 3 premiers essais portent sur d'autres catégories (légumes, fleurs, nourritures, professions)."
  },
  {
    q: "Pourquoi la baisse du rappel de Brown-Peterson n'apparaît-elle qu'après 5 ou 6 essais ?",
    options: ["À cause d'une interférence proactive", "À cause d'une interférence rétroactive", "À cause de la fatigue du participant", "À cause du délai de rétention"],
    e: "Les premiers essais interfèrent avec les suivants."
  },
  {
    q: "Quelle est la 1re limite de la MCT d'Atkinson et Shiffrin ?",
    options: ["C'est un registre unique de stockage", "Elle n'a aucune capacité de stockage", "Elle n'est jamais saturée en pratique", "Elle ne traite aucun item entrant"],
    e: "Il a fallu considérer plusieurs registres de stockage."
  },
  {
    q: "Quelle est la 2e limite de la MCT d'Atkinson et Shiffrin ?",
    options: ["Stockage et traitement dans une même unité", "Le stockage reste impossible à mesurer", "Le traitement est totalement inexistant", "La répétition n'est pas du tout gérée"],
    e: "Baddeley et Hitch (1974) observent des opérations de traitement différentes."
  },
  {
    q: "Qu'est-ce qu'un paradigme de charge mentale ?",
    options: ["Retenir des items en faisant autre chose", "Mémoriser une liste sans interférence", "Compter à rebours sans autre tâche", "Rappeler une liste après un long délai"],
    e: "Deux tâches en parallèle (par exemple raisonnement ou apprentissage)."
  },
  {
    q: "Combien de mots Baddeley et Hitch (1974) font-ils apprendre ?",
    options: ["16 mots", "30 mots", "12 mots", "20 mots"],
    e: "Rappel libre ; en parallèle, 0, 3 ou 6 chiffres à retenir."
  },
  {
    q: "Quel nombre de chiffres produit une baisse importante des performances ?",
    options: ["6 chiffres", "3 chiffres", "0 chiffre", "1 chiffre"],
    e: "Une charge de 3 chiffres n'a pas d'effet."
  },
  {
    q: "Quelle est la conclusion de Baddeley et Hitch ?",
    options: ["Elle n'apparaît que près de l'empan", "Elle existe toujours dès un chiffre", "Elle n'existe jamais en pratique", "Stockage et traitement sont identiques"],
    e: "Une capacité fixe est attribuée au stockage ; au-delà, des ressources de traitement sont prises."
  },
  {
    q: "Comment Baddeley (1990) définit-il la mémoire de travail ?",
    options: ["Maintenir et manipuler temporairement l'info", "Stocker durablement les connaissances générales", "Enregistrer brièvement les stimuli sensoriels", "Retenir uniquement les événements vécus"],
    e: "Système nécessaire aux activités cognitives complexes : compréhension, apprentissage, raisonnement."
  },
  {
    q: "Laquelle de ces situations mobilise la mémoire de travail ?",
    options: ["Comprendre une conversation", "Savoir faire du vélo", "Se rappeler son enfance", "Reconnaître son odeur préférée"],
    e: "Aussi : comprendre ce que l'on lit, prendre des notes, raisonner."
  },
  {
    q: "Quelle est la différence entre MCT et MDT ?",
    options: ["La MDT stocke et traite, la MCT stocke seulement", "La MCT stocke et traite, la MDT stocke seulement", "La MDT est un registre sensoriel", "La MCT est une mémoire permanente"],
    e: "La MCT retient brièvement ; la MDT permet des traitements cognitifs sur ce qui est temporairement stocké."
  },
  {
    q: "Quel type de modèle est celui de Baddeley ?",
    options: ["Un modèle structural multi-composants", "Un modèle sériel à registre unique", "Un modèle d'activation sans structure", "Un modèle purement fonctionnel et sériel"],
    e: "Système hiérarchisé : un centre exécutif et plusieurs sous-systèmes esclaves."
  },
  {
    q: "Quel est le système principal du modèle de Baddeley ?",
    options: ["Le centre exécutif", "La boucle phonologique", "Le calepin visuo-spatial", "Le buffer épisodique"],
    e: "Il contrôle et coordonne les sous-systèmes esclaves."
  },
  {
    q: "Quels sont les sous-systèmes esclaves du modèle de Baddeley ?",
    options: ["Boucle phonologique, calepin, buffer épisodique", "Boucle phonologique, centre exécutif, calepin", "Calepin visuo-spatial, RIS, buffer épisodique", "Boucle articulatoire, cache visuel, scribe interne"],
    e: "Le centre exécutif est le système principal."
  },
  {
    q: "En quelle année le buffer épisodique est-il ajouté au modèle ?",
    options: ["2000", "1974", "1986", "1996"],
    e: "Ajouté plus tardivement : Baddeley, 2000."
  },
  {
    q: "Quel est le rôle de la boucle phonologique ?",
    options: ["Traiter et maintenir l'information verbale", "Traiter et maintenir l'information spatiale", "Coordonner les sous-systèmes", "Intégrer les informations multimodales"],
    e: "Impliquée dans le calcul, la production et la compréhension du langage."
  },
  {
    q: "Quel est le rôle du calepin visuo-spatial ?",
    options: ["Maintenir l'information visuelle et spatiale", "Maintenir et traiter l'information verbale", "Contrôler l'attention de façon stratégique", "Relier la mémoire de travail à la MLT"],
    e: "Il génère et manipule les images mentales."
  },
  {
    q: "Quelles sont les deux composantes de la boucle phonologique ?",
    options: ["Un stock phonologique et sa boucle articulatoire", "Un cache visuel et un scribe interne spatial", "Un stock sensoriel et un registre auditif bref", "Un centre exécutif et un buffer épisodique"],
    e: "Stock passif + processus actif de répétition subvocale."
  },
  {
    q: "Combien de temps le stock phonologique conserve-t-il l'information ?",
    options: ["De 1,5 à 2 secondes", "Environ 20 secondes", "Moins d'une seconde", "Plusieurs minutes"],
    e: "Durée brève, d'où le besoin de rafraîchir les traces."
  },
  {
    q: "Quel est le rôle de la boucle articulatoire ?",
    options: ["Rafraîchir les traces par répétition", "Stocker les codes visuels brièvement", "Coordonner les deux tâches à la fois", "Intégrer les informations épisodiques"],
    e: "Procédé de re-lecture renvoyant l'information dans le stock phonologique."
  },
  {
    q: "Comment l'information visuelle entre-t-elle dans le stock phonologique ?",
    options: ["Via la boucle articulatoire (recodage)", "Directement, comme l'information auditive", "Via le calepin visuo-spatial en parallèle", "Via le buffer épisodique, avec la MLT"],
    e: "L'information auditive y accède directement."
  },
  {
    q: "Qui met en évidence l'effet de similitude phonologique, en 1966 ?",
    options: ["Baddeley", "Brooks", "Logie", "Cowan"],
    e: "Il évalue l'empan verbal avec des listes de mots similaires ou différents."
  },
  {
    q: "Quels mots forment une liste phonologiquement similaire ?",
    options: ["Roi, loi, toit, choix", "Maison, demeure, habitation, domicile", "Table, pomme, clou, chemise", "Bois, porte, pain, nuit"],
    e: "La liste « maison, demeure… » est similaire sémantiquement."
  },
  {
    q: "Que montre l'effet de similitude phonologique ?",
    options: ["Les mots proches par le son sont plus difficiles à rappeler", "Les mots proches par le sens sont plus difficiles à rappeler", "Les mots longs sont mieux rappelés", "Les mots courts sont moins bien rappelés"],
    e: "Le stock phonologique repose sur un code phonologique."
  },
  {
    q: "Que montre l'effet de longueur des mots ?",
    options: ["Les mots courts sont mieux rappelés que les longs", "Les mots longs sont mieux rappelés que les courts", "La longueur n'a pas d'effet", "Les mots longs sont codés visuellement"],
    e: "Plus un mot est long, plus sa répétition subvocale est longue."
  },
  {
    q: "Qui met en évidence l'effet de longueur des mots ?",
    options: ["Baddeley, Thomson et Buchanan (1975)", "Baddeley, Lewis et Vallar (1984)", "Baddeley, Grant et Wight (1975)", "Baddeley, Emslie et Kolodny (1998)"],
    e: "Il atteste de l'existence de la boucle articulatoire."
  },
  {
    q: "Pourquoi les mots longs sont-ils plus difficiles à rappeler ?",
    options: ["Leur répétition prend plus de temps", "Ils sont codés uniquement en visuel", "Ils saturent la mémoire à long terme", "Ils n'ont aucun sens pour le sujet"],
    e: "Les traces des autres mots s'effacent du stock pendant ce temps."
  },
  {
    q: "En quoi consiste la suppression articulatoire ?",
    options: ["Répéter un son sans signification", "Rappeler les mots dans l'ordre exact", "Compter à rebours à voix très basse", "Écrire les mots tout juste appris"],
    e: "Par exemple « blablabla… », qui bloque la boucle articulatoire."
  },
  {
    q: "Que provoque la suppression articulatoire pendant une tâche d'empan ?",
    options: ["Elle altère la performance mnésique", "Elle améliore la performance mnésique", "Elle n'a aucun effet", "Elle supprime l'empan"],
    e: "Elle bloque la boucle articulatoire."
  },
  {
    q: "Que devient l'effet de similarité phonologique avec suppression articulatoire et présentation visuelle ?",
    options: ["Il disparaît", "Il augmente", "Il reste identique", "Il s'inverse"],
    e: "Les informations visuelles n'ont pas pu être recodées phonologiquement (Baddeley, Lewis et Vallar, 1984)."
  },
  {
    q: "Que devient l'effet de similarité phonologique avec suppression articulatoire et présentation auditive ?",
    options: ["Il persiste", "Il disparaît", "Il s'inverse", "Il est annulé par la longueur"],
    e: "L'information accède directement au stock phonologique."
  },
  {
    q: "Quels sont les deux sous-systèmes du calepin visuo-spatial (Logie, 1995) ?",
    options: ["Le cache visuel et le scribe interne", "Le stock phonologique et la boucle articulatoire", "Le centre exécutif et le buffer", "Le registre iconique et le registre échoïque"],
    e: "Cache visuel : forme et couleur. Scribe interne : informations spatiales et mouvement."
  },
  {
    q: "Que stocke le cache visuel ?",
    options: ["Les configurations visuelles (forme, couleur)", "Les informations spatiales et le mouvement", "Les codes phonologiques", "Les représentations épisodiques"],
    e: "Le scribe interne est un mécanisme actif de répétition spatiale."
  },
  {
    q: "Que gère le scribe interne ?",
    options: ["Les informations spatiales, le mouvement", "La forme visuelle et la couleur des objets", "Les codes phonologiques des mots entendus", "Les épisodes de vie à long terme"],
    e: "Mécanisme actif de répétition."
  },
  {
    q: "Quelle matrice utilise la tâche de Brooks ?",
    options: ["Une matrice 4 × 4 avec une étoile", "Une grille de 9 cases entièrement vide", "Un cercle de lettres à parcourir", "Une liste de 16 mots à apprendre"],
    e: "Le participant place mentalement des chiffres selon des instructions spatiales."
  },
  {
    q: "Quelle tâche interférente accompagne la tâche de Brooks ?",
    options: ["Suivre un point lumineux au stylet", "Un comptage à rebours de 3 en 3", "Une répétition articulatoire continue", "Une génération aléatoire de chiffres"],
    e: "Il suit un point lumineux sur un trajet circulaire."
  },
  {
    q: "Que montre l'expérience de Brooks (Baddeley et al., 1975) ?",
    options: ["L'interférence visuelle perturbe la condition non verbale seulement", "L'interférence visuelle perturbe la condition verbale seulement", "L'interférence perturbe les deux conditions", "L'interférence ne perturbe aucune condition"],
    e: "Distinction entre composante verbale et non verbale de la MDT."
  },
  {
    q: "Quels cas cliniques appuient l'existence du calepin visuo-spatial ?",
    options: ["De Renzi et Nichelli, Hanley et al.", "H.M. et K.F. (Milner, Shallice)", "Milner (1959) et Shallice (1970)", "Brooks (1967) et Logie (1995)"],
    e: "MDT visuo-spatiale altérée, MDT verbale préservée : simple dissociation."
  },
  {
    q: "Quel profil présentent les patients de De Renzi et Nichelli ?",
    options: ["MDT visuo-spatiale altérée, verbale préservée", "MDT verbale altérée, visuo-spatiale préservée", "MDT entièrement préservée", "MDT entièrement altérée"],
    e: "Argument en faveur de la distinction verbal/non verbal."
  },
  {
    q: "Quelle est la fonction générale du centre exécutif ?",
    options: ["Coordonner les sous-systèmes", "Stocker l'information verbale", "Traiter les images mentales", "Intégrer les épisodes en MLT"],
    e: "Système attentionnel de contrôle : coordination, passage MDT/MLT, sélection stratégique."
  },
  {
    q: "Combien de fonctions Baddeley (1996) attribue-t-il au centre exécutif ?",
    options: ["Quatre", "Trois", "Cinq", "Deux"],
    e: "Attention divisée, flexibilité, attention sélective, stockage/traitement simultané."
  },
  {
    q: "Laquelle de ces fonctions n'appartient PAS au centre exécutif selon Baddeley (1996) ?",
    options: ["Le stockage phonologique passif", "L'attention divisée entre deux tâches", "La flexibilité entre stratégies", "L'attention sélective de l'information"],
    e: "Le stockage passif est propre à la boucle phonologique."
  },
  {
    q: "Quelle fonction du centre exécutif a été attribuée au buffer épisodique ?",
    options: ["Stocker et traiter l'info de la MLT", "Partager l'attention entre deux tâches", "Passer d'une stratégie à une autre", "Sélectionner l'information pertinente"],
    e: "Fonction abandonnée dans la dernière version du modèle (Baddeley, 2000)."
  },
  {
    q: "Quelle épreuve valide l'attention divisée du centre exécutif ?",
    options: ["Double tâche : empan et poursuite", "La génération aléatoire de touches", "La tâche de Brooks avec matrice", "L'épreuve de Brown-Peterson longue"],
    e: "Baddeley, Logie, Bressi, Della Sala et Spinnler (1986)."
  },
  {
    q: "Que montrent les patients à déficits exécutifs à l'épreuve de double tâche ?",
    options: ["Des difficultés à faire les deux tâches", "Une performance tout à fait normale", "Un meilleur résultat que les témoins", "Une absence de difficultés verbales"],
    e: "Déficit d'attention divisée et mauvaise coordination des sous-systèmes."
  },
  {
    q: "Quelle tâche valide la flexibilité mentale du centre exécutif ?",
    options: ["La génération aléatoire", "La tâche de Brooks", "La tâche de double empan", "La suppression articulatoire"],
    e: "Éviter toute séquence logique exige de modifier constamment son attention."
  },
  {
    q: "Quel résultat Baddeley et al. (1998) obtiennent-ils ?",
    options: ["La fluence altère l'aléatoire, pas le comptage", "Le comptage altère l'aléatoire, pas la fluence", "Les deux tâches altèrent la génération aléatoire", "Aucune tâche n'altère la génération aléatoire"],
    e: "La fluence verbale sollicite le centre exécutif."
  },
  {
    q: "À quoi sert le buffer épisodique ?",
    options: ["Intégrer des informations multimodales", "Répéter subvocalement l'information", "Maintenir uniquement les images spatiales", "Sélectionner des stratégies attentionnelles"],
    e: "Il fait le lien entre la MDT et la MLT."
  },
  {
    q: "Que montrent Baddeley, Vallar et Wilson (1987) ?",
    options: ["5 mots isolés contre 16 mots en phrase", "Environ 7 mots isolés contre 9 en phrase", "Autant de mots dans les deux conditions", "Moins de mots rappelés en phrase qu'isolés"],
    e: "La MLT permet de regrouper les mots (chunking) : argument pour le buffer épisodique."
  },
  {
    q: "Quelle est l'idée de l'approche fonctionnelle de la MDT (Cowan, Anderson) ?",
    options: ["La MDT est la partie activée de la MLT", "La MDT est une structure à composantes multiples", "La MDT est un registre sensoriel", "La MDT est indépendante de la MLT"],
    e: "Théories de l'activation : capacité de maintien et de traitement unitaire."
  },
  {
    q: "Quels sont les deux processus du modèle de Cowan ?",
    options: ["Activation et contrôle de capacité limitée", "Encodage et récupération de l'information", "Répétition et recodage phonologique", "Sélection et consolidation en MLT"],
    e: "Le processus de contrôle agit sur le focus attentionnel."
  },
  {
    q: "Que désigne le focus attentionnel chez Cowan ?",
    options: ["Les informations les plus accessibles", "Les informations de la MLT non activées", "Les informations sensorielles brutes", "Les informations déjà oubliées"],
    e: "Informations auxquelles on accède consciemment pour la tâche en cours."
  },
  {
    q: "Selon les théories de l'activation, quand une information de la MLT devient-elle disponible ?",
    options: ["Quand elle dépasse son seuil d'activation", "Quand elle est répétée à voix haute", "Quand elle est stockée en RIS", "Quand elle est sélectionnée par un filtre"],
    e: "Elle fait alors partie de la MDT."
  },
  {
    q: "De combien de registres le modèle de Cowan se compose-t-il ?",
    options: ["Trois : sensoriel, court terme (activé), long terme", "Deux : sensoriel et long terme", "Quatre : sensoriel, épisodique, phonologique, visuel", "Un seul registre unifié"],
    e: "Le registre à court terme est un sous-ensemble actif de la MLT."
  },
  {
    q: "Quelle est la séquence du modèle modal (1968) ?",
    options: ["Registre sensoriel, MCT, MLT", "MLT, MCT, registre sensoriel", "MCT, registre sensoriel, MLT", "Registre sensoriel, MLT, MCT"],
    e: "Atkinson et Shiffrin : l'information passe successivement d'un système à l'autre."
  },
  {
    q: "Quelles sont les caractéristiques des registres sensoriels ?",
    options: ["Large capacité, durée très brève", "Capacité limitée, durée longue", "Capacité limitée, durée brève", "Capacité illimitée, durée indéfinie"],
    e: "Quelques millisecondes à moins d'une seconde."
  },
  {
    q: "Qu'est-ce qui permet d'éviter l'oubli de l'information dans la MCT ?",
    options: ["L'auto-répétition", "L'amorçage", "Le conditionnement", "L'effet de récence"],
    e: "Maintien articulatoire."
  },
  {
    q: "Que désigne l'Administrateur Central ?",
    options: ["Un système attentionnel de contrôle", "Un système de stockage visuel esclave", "Un magasin phonologique passif bref", "Une interface directe avec la MLT"],
    e: "Il coordonne les systèmes esclaves."
  },
  {
    q: "Quel système fait l'interface entre les systèmes esclaves et la MLT ?",
    options: ["Le buffer épisodique", "Le centre exécutif", "La boucle phonologique", "Le calepin visuo-spatial"],
    e: "Ajouté en 2000."
  },
  {
    q: "Quelles informations traite le calepin visuo-spatial ?",
    options: ["Visuelles et spatiales", "Verbales seulement", "Épisodiques seulement", "Motrices automatisées"],
    e: "Maintien et manipulation d'images mentales."
  },
  {
    q: "Quelle mémoire conserve des événements situés dans leur contexte spatio-temporel ?",
    options: ["La mémoire épisodique", "La mémoire sémantique", "La mémoire procédurale", "La mémoire perceptive"],
    e: "Niveau de conscience : autonoétique (voyage temporel mental)."
  },
  {
    q: "Quelle mémoire gère des connaissances générales, indépendantes de tout contexte personnel ?",
    options: ["La mémoire sémantique", "La mémoire épisodique", "La mémoire procédurale", "La mémoire de travail"],
    e: "Niveau de conscience : noétique (savoir)."
  },
  {
    q: "Quelle mémoire est associée à la conscience autonoétique ?",
    options: ["La mémoire épisodique", "La mémoire sémantique", "La mémoire procédurale", "La mémoire perceptive"],
    e: "Voyage temporel mental."
  },
  {
    q: "Quel niveau de conscience caractérise la mémoire sémantique ?",
    options: ["Noétique", "Autonoétique", "Anoétique", "Immédiat"],
    e: "Savoir."
  },
  {
    q: "Quel niveau de conscience caractérise la mémoire procédurale ?",
    options: ["Anoétique", "Autonoétique", "Noétique", "Immédiat"],
    e: "Non conscient."
  },
  {
    q: "Que gère le système de représentation perceptive (PRS) ?",
    options: ["Les formes des objets ou des mots", "Les événements personnels bien datés", "Les concepts et faits généraux du monde", "Le maintien à court terme actif"],
    e: "Il est à l'origine de l'amorçage ; niveau anoétique."
  },
  {
    q: "Que provoque l'amnésie antérograde ?",
    options: ["Impossible de former de nouveaux souvenirs", "L'effacement de tous les souvenirs anciens", "La perte complète de la mémoire procédurale", "Une atteinte limitée au seul langage oral"],
    e: "L'amnésie rétrograde touche, elle, les souvenirs antérieurs à la lésion."
  },
  {
    q: "Que traduit l'effet d'amorçage (priming) ?",
    options: ["Un traitement modifié par exposition préalable", "Une récupération consciente d'un souvenir précis", "Un oubli rapide d'un stimulus vu récemment", "Une saturation de la MCT après surcharge"],
    e: "Mémoire non déclarative."
  },
  {
    q: "Le conditionnement classique relève de quel type de mémoire ?",
    options: ["La mémoire implicite", "La mémoire épisodique", "La mémoire explicite", "La mémoire sémantique"],
    e: "Processus automatique, sans récupération consciente et verbale."
  },
  {
    q: "Que conservent souvent les patients atteints du syndrome de Korsakoff ?",
    options: ["Leurs capacités d'apprentissage procédural", "Leur mémoire épisodique des derniers mois", "Leur mémoire de travail entièrement intacte", "Leurs capacités à former des souvenirs"],
    e: "La mémoire procédurale est souvent préservée."
  },
  {
    q: "Qui propose le modèle des niveaux de traitement ?",
    options: ["Craik et Lockhart (1972)", "Atkinson et Shiffrin (1968)", "Tulving et Thomson (1973)", "Baddeley et Hitch (1974)"],
    e: "Ce modèle porte sur l'encodage."
  },
  {
    q: "Quel encodage produit la trace la plus durable ?",
    options: ["Un encodage profond, sémantique", "Un encodage superficiel, structural", "Un encodage phonétique", "Un encodage purement visuel"],
    e: "La profondeur de traitement compte plus que la durée d'auto-répétition."
  },
  {
    q: "Selon Craik et Lockhart, qu'est-ce qui détermine la rétention en MLT ?",
    options: ["La profondeur de traitement", "La durée de répétition", "Le nombre de répétitions", "La taille de la MCT"],
    e: "Ils rejettent l'idée que la simple durée d'auto-répétition suffit."
  },
  {
    q: "Quel est l'un des niveaux d'encodage les plus efficaces ?",
    options: ["L'auto-référence", "La répétition à voix haute", "La relecture à l'identique", "Le recopiage du texte"],
    e: "Relier l'information à soi."
  },
  {
    q: "Quelle hypothèse suggère de combiner un code verbal et un code visuel ?",
    options: ["Le double codage de Paivio", "La spécificité du codage", "Les niveaux de traitement", "Le modèle modal"],
    e: "Combiner les deux codes améliore la rétention."
  },
  {
    q: "Quand la récupération est-elle optimale selon Tulving et Thomson (1973) ?",
    options: ["Quand les indices rappellent l'encodage", "Quand le délai de rétention est très long", "Quand l'encodage est resté superficiel", "Quand l'indice de rappel est tout nouveau"],
    e: "Principe de spécificité du codage."
  },
  {
    q: "Que montre l'expérience de Godden et Baddeley (1975) ?",
    options: ["Rappel meilleur si les contextes coïncident", "Rappel toujours meilleur sous l'eau", "Rappel toujours meilleur sur la terre ferme", "Aucun effet du contexte sur le rappel"],
    e: "Des plongeurs apprennent sous l'eau ou sur terre."
  },
  {
    q: "L'effet de dépendance à l'état valide quel principe ?",
    options: ["La spécificité du codage", "Les niveaux de traitement", "Le double codage", "Le modèle sériel"],
    e: "État interne ou environnemental à l'encodage."
  },
  {
    q: "Pourquoi la reconnaissance peut-elle échouer là où le rappel induit réussit ?",
    options: ["Un indice fort présent à l'encodage guide le rappel", "La reconnaissance exige toujours plus de ressources", "Le rappel n'utilise aucun indice", "La reconnaissance repose sur le hasard"],
    e: "La reconnaissance sans l'indice contextuel spécifique peut échouer."
  },
  {
    q: "Que révèle le phénomène du « mot sur le bout de la langue » ?",
    options: ["Un échec d'accès à une trace existante", "Un échec d'encodage de l'information", "L'absence totale de trace en mémoire", "Un oubli définitif de l'information"],
    e: "Défaut de récupération, pas d'encodage."
  },
  {
    q: "Quelle forme a la courbe de l'oubli d'Ebbinghaus ?",
    options: ["Chute rapide puis palier", "Baisse linéaire et constante", "Hausse initiale puis stabilité", "Oscillations régulières dans le temps"],
    e: "Elle décroît vite puis atteint une asymptote."
  },
  {
    q: "À quoi l'oubli en MLT est-il surtout attribué ?",
    options: ["Aux interférences", "À la dégradation passive de la trace", "À la saturation de la MCT", "À la fatigue du participant"],
    e: "Les interférences sont majeures."
  },
  {
    q: "Que propose le modèle MNESIS ?",
    options: ["Une articulation entre MDT et MLT", "Une mémoire unitaire sans système", "Des systèmes de MLT indépendants", "Un modèle sériel à trois registres"],
    e: "Il insiste sur les interactions constantes."
  },
  {
    q: "Quelle mémoire le modèle MNESIS intègre-t-il pour l'amorçage perceptif ?",
    options: ["La mémoire perceptive (PRS)", "La mémoire iconique visuelle", "La mémoire sémantique générale", "Le registre échoïque auditif"],
    e: "PRS : formes et structures perceptives."
  },
  {
    q: "Que décrit la sémantisation des souvenirs ?",
    options: ["Le passage d'épisodique vers sémantique", "Le passage de sémantique vers procédural", "La perte de tous les détails", "Le codage phonologique d'un souvenir"],
    e: "Passage progressif de représentations épisodiques vers la mémoire sémantique."
  },
  {
    q: "Quelle dissociation le patient H.M. met-il en évidence ?",
    options: ["MCT/MLT et déclaratif/procédural", "Visuel/verbal", "Sémantique/épisodique uniquement", "Phonologique/visuel"],
    e: "MCT normale, habiletés motrices acquises, mais pas de nouveaux souvenirs déclaratifs."
  },
  {
    q: "Quelle structure est centrale pour la consolidation déclarative chez H.M. ?",
    options: ["Le lobe temporal interne", "Le cervelet et le striatum", "Le lobe occipital visuel", "Le cortex moteur primaire"],
    e: "Rôle central dans la consolidation mnésique."
  },
  {
    q: "Quelles structures préservent la mémoire procédurale de H.M. ?",
    options: ["Le striatum et le cervelet", "L'hippocampe et l'amygdale", "Le lobe occipital", "Le cortex préfrontal"],
    e: "Il acquiert de nouvelles habiletés motrices."
  },
  {
    q: "Quelle habileté nouvelle H.M. peut-il acquérir ?",
    options: ["Dessiner en regardant un miroir", "Retenir le nom de son médecin", "Se souvenir de sa journée passée", "Apprendre une liste de dix mots"],
    e: "Mémoire procédurale préservée."
  },

  // ───────── Vrai / Faux ─────────
  {
    type: "vf",
    vrai: true,
    q: "Selon Tulving (2000), la mémoire retire du passé l'information utile au moment présent.",
    e: "Elle consiste à encoder, stocker et récupérer."
  },
  {
    type: "vf",
    vrai: false,
    q: "La mémoire se réduit à une seule phase, le stockage de l'information.",
    e: "Trois phases : encodage, stockage et récupération."
  },
  {
    type: "vf",
    vrai: true,
    q: "L'encodage transforme l'information de l'environnement en un format traitable.",
    e: "Il précède le stockage."
  },
  {
    type: "vf",
    vrai: false,
    q: "La récupération consiste à conserver les traces mnésiques en mémoire.",
    e: "C'est le stockage. La récupération est l'accès à la trace encodée."
  },
  {
    type: "vf",
    vrai: true,
    q: "Ebbinghaus est le premier à avoir appliqué la démarche expérimentale à la mémoire.",
    e: "En 1885."
  },
  {
    type: "vf",
    vrai: false,
    q: "Tulving est le premier à avoir appliqué la démarche expérimentale à l'étude de la mémoire.",
    e: "C'est Ebbinghaus, en 1885."
  },
  {
    type: "vf",
    vrai: true,
    q: "La mémoire n'est pas un système unitaire : plusieurs systèmes mnésiques coexistent.",
    e: "Ils diffèrent par leur durée et leur capacité de stockage."
  },
  {
    type: "vf",
    vrai: false,
    q: "Tous les systèmes mnésiques ont la même durée de stockage et la même capacité.",
    e: "Ils varient de fractions de seconde à plusieurs années."
  },
  {
    type: "vf",
    vrai: true,
    q: "La capacité de la mémoire à long terme semble quasiment illimitée.",
    e: "Les mémoires tampons ont une capacité réduite."
  },
  {
    type: "vf",
    vrai: true,
    q: "Dans un rappel sériel, les items doivent être restitués dans l'ordre exact de présentation.",
    e: "En rappel libre, l'ordre n'importe pas."
  },
  {
    type: "vf",
    vrai: false,
    q: "Dans un rappel libre, les items doivent être restitués dans l'ordre exact de présentation.",
    e: "C'est le rappel sériel."
  },
  {
    type: "vf",
    vrai: true,
    q: "Dans un rappel indicé, une information liée à l'item est fournie au rappel.",
    e: "Exemple : la catégorie (« quel était le fruit ? »)."
  },
  {
    type: "vf",
    vrai: true,
    q: "Les performances en reconnaissance sont généralement meilleures qu'en rappel.",
    e: "Le rappel exige une recherche active."
  },
  {
    type: "vf",
    vrai: false,
    q: "Les tâches de rappel sollicitent généralement moins de ressources attentionnelles que la reconnaissance.",
    e: "Elles en sollicitent plus."
  },
  {
    type: "vf",
    vrai: true,
    q: "L'approche structurale s'appuie surtout sur la neuropsychologie.",
    e: "L'approche fonctionnelle, sur la psychologie cognitive."
  },
  {
    type: "vf",
    vrai: false,
    q: "L'approche fonctionnelle considère qu'il existe plusieurs structures de mémoire distinctes.",
    e: "Elle considère une structure unique avec différents processus."
  },
  {
    type: "vf",
    vrai: true,
    q: "D'après le principe de dissociation, une lésion peut épargner d'autres systèmes mnésiques.",
    e: "Exemple : MCT/MLT."
  },
  {
    type: "vf",
    vrai: true,
    q: "Le cours oppose MCT/MLT, sémantique/épisodique, procédurale/déclarative, explicite/implicite.",
    e: "Quatre grandes dichotomies."
  },
  {
    type: "vf",
    vrai: false,
    q: "La mémoire à court terme stocke les informations de manière permanente.",
    e: "C'est la MLT. La MCT maintient peu d'informations, brièvement."
  },
  {
    type: "vf",
    vrai: true,
    q: "La mémoire épisodique concerne des souvenirs vécus, localisés dans le temps et l'espace.",
    e: "La sémantique est dépourvue d'informations spatio-temporelles."
  },
  {
    type: "vf",
    vrai: false,
    q: "La mémoire sémantique conserve des événements replacés dans leur contexte d'acquisition.",
    e: "C'est la mémoire épisodique."
  },
  {
    type: "vf",
    vrai: true,
    q: "Cohen et Squire (1980) ont introduit la mémoire procédurale et la mémoire déclarative.",
    e: "Tulving (1972) : épisodique/sémantique."
  },
  {
    type: "vf",
    vrai: false,
    q: "La mémoire procédurale est accessible à une récupération consciente et verbalisable.",
    e: "C'est la mémoire déclarative."
  },
  {
    type: "vf",
    vrai: true,
    q: "La mémoire déclarative se subdivise en une composante épisodique et une composante sémantique.",
    e: "Elle s'exprime par le langage ou des images mentales."
  },
  {
    type: "vf",
    vrai: true,
    q: "Savoir nager relève de la mémoire procédurale.",
    e: "Savoir-faire difficilement verbalisable."
  },
  {
    type: "vf",
    vrai: true,
    q: "Les termes de mémoire implicite et explicite ont été proposés par Graf et Schacter (1985).",
    e: "L'explicite est évaluée par le rappel et la reconnaissance."
  },
  {
    type: "vf",
    vrai: false,
    q: "La mémoire implicite implique le souvenir intentionnel et conscient d'un événement passé.",
    e: "C'est la mémoire explicite."
  },
  {
    type: "vf",
    vrai: true,
    q: "L'UE 101 étudie surtout la distinction MCT/MLT puis la mémoire de travail.",
    e: "Les autres distinctions sont vues en L2 (UE 401)."
  },
  {
    type: "vf",
    vrai: true,
    q: "Le modèle d'Atkinson et Shiffrin (1968) est un modèle sériel.",
    e: "RIS → MCT → MLT."
  },
  {
    type: "vf",
    vrai: false,
    q: "Dans le modèle d'Atkinson et Shiffrin, les processus de contrôle sont des caractéristiques permanentes du système.",
    e: "Les structures sont permanentes ; les processus de contrôle sont modifiables."
  },
  {
    type: "vf",
    vrai: true,
    q: "Les processus de contrôle concernent le codage, la répétition mentale et la recherche en mémoire.",
    e: "Ils sont optionnels selon la tâche."
  },
  {
    type: "vf",
    vrai: true,
    q: "Le registre d'informations sensorielles conserve l'information moins d'une seconde.",
    e: "Il est exhaustif et propre à chaque modalité."
  },
  {
    type: "vf",
    vrai: false,
    q: "Le registre d'informations sensorielles conserve l'information plusieurs minutes.",
    e: "Moins d'une seconde."
  },
  {
    type: "vf",
    vrai: true,
    q: "Dans sa 1re expérience, Sperling présente 12 lettres pendant 50 ms : environ 4 sont rappelées.",
    e: "En rappel global."
  },
  {
    type: "vf",
    vrai: false,
    q: "Dans sa première expérience, Sperling présente 12 lettres pendant 5 secondes.",
    e: "50 millisecondes."
  },
  {
    type: "vf",
    vrai: true,
    q: "Dans sa 2e expérience, Sperling indique la ligne à rappeler par un son grave, moyen ou aigu.",
    e: "Le son retarde ou non le rappel."
  },
  {
    type: "vf",
    vrai: true,
    q: "Sperling en déduit qu'au moins 9 lettres sont brièvement disponibles en mémoire iconique.",
    e: "Mémoire iconique."
  },
  {
    type: "vf",
    vrai: false,
    q: "Chez Sperling, un signal sonore retardé de plus d'une seconde n'a aucun effet sur le rappel.",
    e: "Le rappel tombe à la moitié des lettres."
  },
  {
    type: "vf",
    vrai: true,
    q: "Seules les informations auxquelles le sujet porte attention passent du RIS vers la MCT.",
    e: "Les autres sont perdues."
  },
  {
    type: "vf",
    vrai: false,
    q: "Toute l'information du RIS passe automatiquement en MCT, sans aucune sélection.",
    e: "Seules les informations sélectionnées par l'attention sont transférées."
  },
  {
    type: "vf",
    vrai: true,
    q: "Chez Atkinson et Shiffrin, la MCT stocke environ 30 secondes grâce à l'auto-répétition.",
    e: "Capacité limitée."
  },
  {
    type: "vf",
    vrai: false,
    q: "Dans le modèle d'Atkinson et Shiffrin, la capacité de la MCT est illimitée.",
    e: "Elle est limitée et peut être saturée."
  },
  {
    type: "vf",
    vrai: true,
    q: "Quand la MCT est saturée, les nouvelles informations effacent les précédentes.",
    e: "Saturation."
  },
  {
    type: "vf",
    vrai: true,
    q: "La mémoire à long terme se caractérise surtout par son organisation.",
    e: "Elle joue un rôle dans la récupération."
  },
  {
    type: "vf",
    vrai: true,
    q: "Retenir un nouveau numéro de téléphone est plus difficile que chanter une comptine d'enfance.",
    e: "MCT limitée / MLT quasi illimitée."
  },
  {
    type: "vf",
    vrai: true,
    q: "H.M. présente une MCT préservée et une MLT sévèrement atteinte après l'ablation de lobes temporaux.",
    e: "Milner, 1959."
  },
  {
    type: "vf",
    vrai: false,
    q: "H.M. présente une MCT sévèrement atteinte mais une MLT préservée.",
    e: "C'est le profil de K.F."
  },
  {
    type: "vf",
    vrai: true,
    q: "Le cas H.M. constitue une simple dissociation entre MCT et MLT.",
    e: "Il peut être contesté par la complexité des tâches."
  },
  {
    type: "vf",
    vrai: true,
    q: "L'argument du cas H.M. est contestable : l'écart pourrait venir de la complexité des tâches.",
    e: "D'où le recours à une double dissociation."
  },
  {
    type: "vf",
    vrai: true,
    q: "K.F. (Shallice et Warrington) a une MCT très faible mais un apprentissage à long terme conservé.",
    e: "Cela remet en cause le modèle sériel."
  },
  {
    type: "vf",
    vrai: false,
    q: "Le cas K.F. confirme que la MCT est un passage obligatoire vers la MLT.",
    e: "Il montre au contraire que le modèle sériel n'est pas valide."
  },
  {
    type: "vf",
    vrai: true,
    q: "H.M. et K.F. montrent ensemble une double dissociation entre MCT et MLT.",
    e: "Deux modules à part entière."
  },
  {
    type: "vf",
    vrai: true,
    q: "Chez Murdock (1962), on présente une liste de 30 mots, à raison d'un mot par seconde.",
    e: "Rappel libre immédiat."
  },
  {
    type: "vf",
    vrai: true,
    q: "Dans la courbe sérielle, les premiers et derniers items sont mieux rappelés que ceux du milieu.",
    e: "Primauté et récence."
  },
  {
    type: "vf",
    vrai: false,
    q: "L'effet de primauté désigne le meilleur rappel des derniers items de la liste.",
    e: "C'est la récence."
  },
  {
    type: "vf",
    vrai: true,
    q: "L'effet de récence manifeste la présence des derniers items en MCT au moment du rappel.",
    e: "La primauté : présence des premiers items en MLT."
  },
  {
    type: "vf",
    vrai: true,
    q: "Les items du milieu sont mal rappelés : ils quittent la MCT et passent peu en MLT.",
    e: "Auto-répétition insuffisante."
  },
  {
    type: "vf",
    vrai: true,
    q: "Un temps de présentation plus long améliore le rappel des premiers items, pas celui des derniers.",
    e: "Murdock manipule la primauté."
  },
  {
    type: "vf",
    vrai: false,
    q: "Augmenter le temps de présentation améliore le rappel des derniers items.",
    e: "Il améliore les premiers items (primauté)."
  },
  {
    type: "vf",
    vrai: true,
    q: "Postman et Phillips font compter à rebours pour empêcher de répéter les derniers items.",
    e: "Ils réduisent l'effet de récence."
  },
  {
    type: "vf",
    vrai: false,
    q: "Après le comptage à rebours, c'est l'effet de primauté qui disparaît.",
    e: "Seul l'effet de récence disparaît."
  },
  {
    type: "vf",
    vrai: true,
    q: "Ce qui est déjà stocké en MLT n'est plus sensible à l'interférence d'une tâche de comptage.",
    e: "Le rappel des premiers mots n'est pas altéré."
  },
  {
    type: "vf",
    vrai: true,
    q: "Les expériences de Murdock et de Postman et Phillips forment une double dissociation.",
    e: "Elles agissent chacune sur une seule partie de la courbe."
  },
  {
    type: "vf",
    vrai: true,
    q: "L'approche en registres met en avant la taille limitée, l'oubli rapide et le codage de la MCT.",
    e: "Trois caractéristiques."
  },
  {
    type: "vf",
    vrai: true,
    q: "L'empan mnésique est la plus longue séquence rappelée dans l'ordre après une seule présentation.",
    e: "Mesure par rappel sériel."
  },
  {
    type: "vf",
    vrai: false,
    q: "Miller (1956) trouve un empan mnésique moyen de 4 ± 1 éléments seulement.",
    e: "7 ± 2 éléments : le « nombre magique »."
  },
  {
    type: "vf",
    vrai: true,
    q: "L'empan de 7 ± 2 est invariable avec des chiffres, des lettres, des nombres ou des mots.",
    e: "Miller."
  },
  {
    type: "vf",
    vrai: true,
    q: "La séquence 1-4-0-7-1-7-8-9 peut devenir 3 unités si on la mémorise comme la date 14-07-1789.",
    e: "Chunking."
  },
  {
    type: "vf",
    vrai: false,
    q: "Le regroupement en chunks ne permet jamais de dépasser la limite de la MCT.",
    e: "Les stratégies de regroupement permettent de la dépasser."
  },
  {
    type: "vf",
    vrai: true,
    q: "En regroupant l'information en chunks, on peut retenir jusqu'à 21 chiffres.",
    e: "7 unités de 3 chiffres."
  },
  {
    type: "vf",
    vrai: true,
    q: "L'épreuve de Brown-Peterson montre que l'information reste très peu de temps en MCT.",
    e: "Oubli quasi total au bout de 18 secondes."
  },
  {
    type: "vf",
    vrai: false,
    q: "Dans l'épreuve de Peterson et Peterson, le sujet voit trois chiffres puis compte à rebours de 3 en 3.",
    e: "Il voit trois consonnes (par exemple CHJ)."
  },
  {
    type: "vf",
    vrai: true,
    q: "Chez Peterson et Peterson, le comptage à rebours empêche l'auto-répétition des consonnes.",
    e: "Les délais vont de 3 à 18 secondes."
  },
  {
    type: "vf",
    vrai: false,
    q: "Dans l'épreuve de Peterson et Peterson, le rappel reste stable quelle que soit la durée de rétention.",
    e: "Le rappel diminue avec la durée de rétention."
  },
  {
    type: "vf",
    vrai: true,
    q: "Selon la théorie de l'interférence, de nouvelles informations remplacent les anciennes.",
    e: "Selon l'effacement, elle disparaît avec le temps."
  },
  {
    type: "vf",
    vrai: false,
    q: "Selon la théorie de l'effacement de la trace, l'information est remplacée par de nouvelles informations.",
    e: "C'est la théorie de l'interférence."
  },
  {
    type: "vf",
    vrai: true,
    q: "Chez Waugh et Norman, le chiffre test est celui qui suit le chiffre témoin dans la liste.",
    e: "Liste de 16 chiffres."
  },
  {
    type: "vf",
    vrai: true,
    q: "Chez Waugh et Norman, plus il y a d'items interférents, plus la probabilité de rappel est faible.",
    e: "L'interférence est le facteur le plus déterminant."
  },
  {
    type: "vf",
    vrai: false,
    q: "Chez Waugh et Norman, le délai de rétention est le facteur le plus déterminant de l'oubli.",
    e: "C'est l'interférence ; le délai joue un rôle bien moins important."
  },
  {
    type: "vf",
    vrai: true,
    q: "L'interférence rétroactive survient quand du matériel nouveau gêne la récupération de l'ancien.",
    e: "Interférence proactive : l'inverse."
  },
  {
    type: "vf",
    vrai: false,
    q: "L'interférence proactive survient quand un nouveau matériel rend difficile la récupération d'un ancien matériel.",
    e: "C'est l'interférence rétroactive."
  },
  {
    type: "vf",
    vrai: true,
    q: "Aller chercher sa voiture là où elle était garée hier est un exemple d'interférence proactive.",
    e: "L'ancien matériel perturbe le nouveau."
  },
  {
    type: "vf",
    vrai: true,
    q: "Si l'oubli dépend de l'interférence, des stratégies d'apprentissage peuvent la limiter.",
    e: "S'il ne dépendait que du temps, on ne pourrait pas l'éviter."
  },
  {
    type: "vf",
    vrai: true,
    q: "Les confusions acoustiques (F pour S, C pour T) plaident pour un codage verbal en MCT.",
    e: "Wickelgren (1965)."
  },
  {
    type: "vf",
    vrai: false,
    q: "La confusion entre F et S s'explique par la proximité visuelle des deux lettres.",
    e: "Elle ne s'explique que par la proximité sonore."
  },
  {
    type: "vf",
    vrai: true,
    q: "Chez Wickelgren, des lettres interférentes au son proche réduisent les rappels corrects.",
    e: "Série test de 4 lettres, 8 lettres interférentes."
  },
  {
    type: "vf",
    vrai: true,
    q: "Chez Shepard et Metzler, le temps de réponse est proportionnel à l'angle de rotation des figures.",
    e: "Rotation mentale."
  },
  {
    type: "vf",
    vrai: false,
    q: "Chez Shepard et Metzler, le temps de réponse ne dépend pas de l'angle de rotation.",
    e: "Il lui est strictement proportionnel."
  },
  {
    type: "vf",
    vrai: true,
    q: "La rotation mentale montre que l'information n'est pas toujours codée de façon verbale.",
    e: "Codage visuel."
  },
  {
    type: "vf",
    vrai: true,
    q: "Chez Wickens et al., l'interférence proactive disparaît quand la catégorie sémantique change.",
    e: "Codage sémantique."
  },
  {
    type: "vf",
    vrai: false,
    q: "Wickens, Dalezman et Eggemeier montrent que l'interférence proactive augmente avec la distance sémantique.",
    e: "Elle disparaît d'autant plus que la distance augmente."
  },
  {
    type: "vf",
    vrai: true,
    q: "À l'épreuve de Brown-Peterson, la baisse du rappel n'apparaît qu'après 5 ou 6 essais.",
    e: "Interférence proactive."
  },
  {
    type: "vf",
    vrai: true,
    q: "Une limite du modèle d'Atkinson et Shiffrin : il voit la MCT comme un registre unique.",
    e: "Il existe plusieurs registres de stockage."
  },
  {
    type: "vf",
    vrai: true,
    q: "Pour Baddeley et Hitch, stockage et traitement n'ont sans doute pas lieu dans la même unité.",
    e: "Observations avec un paradigme de charge mentale."
  },
  {
    type: "vf",
    vrai: true,
    q: "Dans un paradigme de charge mentale, le sujet retient des items tout en réalisant une autre tâche.",
    e: "Deux tâches en parallèle."
  },
  {
    type: "vf",
    vrai: true,
    q: "Chez Baddeley et Hitch, seule une charge de 6 chiffres fait nettement baisser les performances.",
    e: "0 ou 3 chiffres : pas d'effet."
  },
  {
    type: "vf",
    vrai: false,
    q: "Chez Baddeley et Hitch (1974), une charge de 3 chiffres suffit à effondrer les performances.",
    e: "Seule une charge de 6 chiffres entraîne une baisse importante."
  },
  {
    type: "vf",
    vrai: true,
    q: "Pour Baddeley et Hitch, la compétition stockage/traitement n'apparaît que près de l'empan.",
    e: "Une capacité fixe est attribuée au stockage."
  },
  {
    type: "vf",
    vrai: false,
    q: "Selon Baddeley et Hitch, la compétition entre stockage et traitement existe quelle que soit la charge.",
    e: "Seulement quand la charge est proche de l'empan."
  },
  {
    type: "vf",
    vrai: true,
    q: "Pour Baddeley (1990), la mémoire de travail maintient et manipule temporairement l'information.",
    e: "Nécessaire à la compréhension, l'apprentissage, le raisonnement."
  },
  {
    type: "vf",
    vrai: false,
    q: "La MDT correspond à un système de stockage uniquement, responsable de la rétention brève de l'information.",
    e: "C'est la MCT. La MDT stocke et traite."
  },
  {
    type: "vf",
    vrai: true,
    q: "Le modèle de Baddeley est hiérarchisé : un centre exécutif et des sous-systèmes esclaves.",
    e: "Modèle structural à composantes multiples."
  },
  {
    type: "vf",
    vrai: true,
    q: "Le centre exécutif coordonne la boucle phonologique, le calepin et le buffer épisodique.",
    e: "Système attentionnel de contrôle."
  },
  {
    type: "vf",
    vrai: false,
    q: "Le centre exécutif est un système esclave de stockage visuel spécialisé.",
    e: "C'est un système attentionnel amodal de contrôle et de coordination."
  },
  {
    type: "vf",
    vrai: true,
    q: "Le buffer épisodique a été ajouté au modèle de Baddeley en 2000.",
    e: "Il intègre des informations multimodales."
  },
  {
    type: "vf",
    vrai: false,
    q: "Le buffer épisodique faisait partie du modèle initial de Baddeley et Hitch (1974).",
    e: "Il a été ajouté plus tardivement, en 2000."
  },
  {
    type: "vf",
    vrai: true,
    q: "La boucle phonologique comprend un stock phonologique et un processus de boucle articulatoire.",
    e: "Stock passif + répétition subvocale."
  },
  {
    type: "vf",
    vrai: true,
    q: "Le stock phonologique conserve l'information de 1,5 à 2 secondes.",
    e: "La boucle articulatoire rafraîchit les traces."
  },
  {
    type: "vf",
    vrai: false,
    q: "Le stock phonologique conserve l'information plusieurs minutes sans répétition.",
    e: "De 1,5 à 2 secondes seulement."
  },
  {
    type: "vf",
    vrai: true,
    q: "L'information présentée auditivement accède directement au stock phonologique.",
    e: "L'information visuelle passe par la boucle articulatoire."
  },
  {
    type: "vf",
    vrai: false,
    q: "L'information présentée visuellement accède directement au stock phonologique.",
    e: "Elle y accède indirectement, via la boucle articulatoire."
  },
  {
    type: "vf",
    vrai: true,
    q: "Selon l'effet de similitude phonologique, des mots au son proche sont plus difficiles à rappeler.",
    e: "Baddeley (1966) : roi, loi, toit, choix."
  },
  {
    type: "vf",
    vrai: false,
    q: "Selon l'effet de similitude phonologique, des mots proches par le sens sont plus difficiles à rappeler.",
    e: "C'est la proximité phonologique qui gêne le rappel."
  },
  {
    type: "vf",
    vrai: true,
    q: "Selon l'effet de longueur, une liste de mots courts est mieux rappelée qu'une liste de longs.",
    e: "Temps de répétition subvocale."
  },
  {
    type: "vf",
    vrai: false,
    q: "L'effet de longueur des mots montre que les mots longs sont mieux rappelés.",
    e: "Les mots courts sont mieux rappelés."
  },
  {
    type: "vf",
    vrai: true,
    q: "La suppression articulatoire bloque le processus de boucle articulatoire.",
    e: "Exemple : répéter « blablabla… » à voix haute."
  },
  {
    type: "vf",
    vrai: true,
    q: "Avec suppression articulatoire et présentation visuelle, l'effet de similitude disparaît.",
    e: "Pas de recodage phonologique possible."
  },
  {
    type: "vf",
    vrai: false,
    q: "Avec suppression articulatoire et présentation auditive, l'effet de similarité phonologique disparaît.",
    e: "Il persiste : l'accès au stock est direct."
  },
  {
    type: "vf",
    vrai: true,
    q: "Le calepin visuo-spatial comprend un cache visuel et un scribe interne (Logie, 1995).",
    e: "Cache : forme et couleur. Scribe : spatial et mouvement."
  },
  {
    type: "vf",
    vrai: false,
    q: "Le cache visuel traite les informations spatiales et le mouvement.",
    e: "C'est le scribe interne ; le cache stocke forme et couleur."
  },
  {
    type: "vf",
    vrai: true,
    q: "Chez Brooks, la poursuite de cible perturbe la condition spatiale mais pas la condition verbale.",
    e: "Il y a une composante verbale et une non verbale de la MDT."
  },
  {
    type: "vf",
    vrai: true,
    q: "Des patients à MDT visuo-spatiale altérée et verbale préservée appuient l'existence du calepin.",
    e: "De Renzi et Nichelli (1975)."
  },
  {
    type: "vf",
    vrai: true,
    q: "Baddeley (1996) attribue quatre fonctions principales au centre exécutif.",
    e: "La 4e est passée au buffer épisodique."
  },
  {
    type: "vf",
    vrai: false,
    q: "La capacité de stocker et traiter simultanément les informations de la MLT reste une fonction du centre exécutif dans la dernière version.",
    e: "Elle a été attribuée au buffer épisodique."
  },
  {
    type: "vf",
    vrai: true,
    q: "La double tâche (empan + poursuite) met en difficulté les patients à déficits exécutifs.",
    e: "Attention divisée altérée."
  },
  {
    type: "vf",
    vrai: true,
    q: "Une tâche de génération aléatoire exige de la flexibilité mentale, donc le centre exécutif.",
    e: "Éviter toute suite logique."
  },
  {
    type: "vf",
    vrai: false,
    q: "Une simple tâche de comptage perturbe la génération aléatoire autant que la fluence verbale.",
    e: "Seule la fluence verbale la perturbe."
  },
  {
    type: "vf",
    vrai: true,
    q: "Le buffer épisodique intègre des informations multimodales venant des autres composants et de la MLT.",
    e: "Scène ou épisode cohérent."
  },
  {
    type: "vf",
    vrai: true,
    q: "Chez Baddeley, Vallar et Wilson, on rappelle environ 5 mots isolés, mais jusqu'à 16 en phrases.",
    e: "La MLT permet le chunking."
  },
  {
    type: "vf",
    vrai: false,
    q: "Baddeley, Vallar et Wilson (1987) montrent que l'empan est identique pour des mots isolés et pour des phrases.",
    e: "Il passe d'environ 5 à 16 mots."
  },
  {
    type: "vf",
    vrai: true,
    q: "Pour Cowan, la MDT est la partie activée de la MLT.",
    e: "Approche fonctionnelle."
  },
  {
    type: "vf",
    vrai: false,
    q: "Pour Cowan et Anderson, la MDT est une structure spécifique indépendante de la MLT.",
    e: "C'est la conception de Baddeley ; Cowan : partie activée de la MLT."
  },
  {
    type: "vf",
    vrai: true,
    q: "Chez Cowan, le focus attentionnel regroupe les informations les plus accessibles.",
    e: "Contrôle de capacité limitée."
  },
  {
    type: "vf",
    vrai: true,
    q: "Dans les théories de l'activation, une information de la MLT est disponible dès son seuil.",
    e: "Elle fait alors partie de la MDT."
  },
  {
    type: "vf",
    vrai: true,
    q: "Dans le modèle modal, l'information passe du registre sensoriel à la MCT, puis à la MLT.",
    e: "Modèle sériel."
  },
  {
    type: "vf",
    vrai: false,
    q: "Les mémoires iconique et échoïque ont une capacité illimitée et une durée de rétention indéfinie.",
    e: "Grande capacité, mais durée très brève."
  },
  {
    type: "vf",
    vrai: true,
    q: "L'auto-répétition permet d'éviter l'oubli de l'information dans la MCT.",
    e: "Maintien articulatoire."
  },
  {
    type: "vf",
    vrai: true,
    q: "Miller (1956) estime la capacité de la MCT à 7 ± 2 éléments (ou chunks).",
    e: "Nombre magique."
  },
  {
    type: "vf",
    vrai: false,
    q: "L'Administrateur Central est un système esclave spécialisé dans le stockage visuel.",
    e: "C'est un système attentionnel amodal de contrôle et de coordination."
  },
  {
    type: "vf",
    vrai: true,
    q: "La boucle phonologique comporte un magasin passif et une récapitulation articulatoire.",
    e: "Stock + répétition."
  },
  {
    type: "vf",
    vrai: true,
    q: "Le calepin visuo-spatial traite les informations visuelles et spatiales.",
    e: "Cache visuel + scribe interne."
  },
  {
    type: "vf",
    vrai: true,
    q: "Le buffer épisodique, ajouté en 2000, sert d'interface entre les systèmes esclaves et la MLT.",
    e: "Intégration multimodale."
  },
  {
    type: "vf",
    vrai: true,
    q: "La mémoire épisodique conserve des événements situés dans leur contexte spatio-temporel.",
    e: "Conscience autonoétique."
  },
  {
    type: "vf",
    vrai: true,
    q: "La mémoire sémantique gère des connaissances générales sur le monde, hors contexte personnel.",
    e: "Conscience noétique."
  },
  {
    type: "vf",
    vrai: false,
    q: "Le voyage temporel mental (conscience autonoétique) caractérise spécifiquement la mémoire sémantique.",
    e: "Il caractérise la mémoire épisodique."
  },
  {
    type: "vf",
    vrai: false,
    q: "L'amnésie antérograde touche surtout le rappel des souvenirs anciens antérieurs à la lésion.",
    e: "Elle empêche la formation de nouveaux souvenirs."
  },
  {
    type: "vf",
    vrai: true,
    q: "La mémoire procédurale implique l'acquisition d'habiletés motrices et cognitives automatisées.",
    e: "Exemple : faire du vélo."
  },
  {
    type: "vf",
    vrai: true,
    q: "L'amorçage est une modification du traitement d'un stimulus après une exposition préalable.",
    e: "Mémoire non déclarative."
  },
  {
    type: "vf",
    vrai: false,
    q: "Le conditionnement classique nécessite une récupération consciente et verbale du souvenir.",
    e: "C'est un processus implicite, automatique."
  },
  {
    type: "vf",
    vrai: true,
    q: "Les patients Korsakoff conservent souvent leurs capacités d'apprentissage procédural.",
    e: "Mémoire procédurale préservée."
  },
  {
    type: "vf",
    vrai: false,
    q: "La rétention en MLT dépend directement de la durée passée par l'information en MCT.",
    e: "Elle dépend de la profondeur de traitement."
  },
  {
    type: "vf",
    vrai: true,
    q: "Un encodage profond produit une trace plus durable qu'un encodage superficiel.",
    e: "Craik et Lockhart (1972)."
  },
  {
    type: "vf",
    vrai: true,
    q: "L'effet d'auto-référence est l'un des niveaux d'encodage les plus efficaces.",
    e: "Relier l'information à soi."
  },
  {
    type: "vf",
    vrai: true,
    q: "L'hypothèse du double codage de Paivio suggère de combiner un code verbal et un code visuel.",
    e: "Meilleure rétention."
  },
  {
    type: "vf",
    vrai: true,
    q: "La récupération est optimale quand les indices du rappel correspondent à ceux de l'encodage.",
    e: "Spécificité du codage (Tulving et Thomson, 1973)."
  },
  {
    type: "vf",
    vrai: false,
    q: "Le rappel libre donne toujours de meilleures performances que la reconnaissance.",
    e: "La reconnaissance est généralement plus facile."
  },
  {
    type: "vf",
    vrai: true,
    q: "L'effet de dépendance à l'état valide le principe de spécificité du codage.",
    e: "Contexte ou état interne."
  },
  {
    type: "vf",
    vrai: false,
    q: "Le « mot sur le bout de la langue » illustre un échec d'encodage et non de récupération.",
    e: "C'est un échec d'accès à une trace existante."
  },
  {
    type: "vf",
    vrai: true,
    q: "L'interférence proactive survient quand un ancien apprentissage perturbe une information nouvelle.",
    e: "Rétroactive : l'inverse."
  },
  {
    type: "vf",
    vrai: true,
    q: "L'interférence rétroactive a lieu quand une information nouvelle empêche de rappeler l'ancienne.",
    e: "Proactive : l'inverse."
  },
  {
    type: "vf",
    vrai: false,
    q: "La courbe de l'oubli d'Ebbinghaus montre une perte d'information linéaire et constante.",
    e: "Elle chute vite puis atteint une asymptote."
  },
  {
    type: "vf",
    vrai: false,
    q: "L'oubli en MLT s'explique surtout par la dégradation passive et irréversible de la trace.",
    e: "Les interférences sont majeures."
  },
  {
    type: "vf",
    vrai: true,
    q: "Le modèle MNESIS articule de façon dynamique la mémoire de travail et les systèmes de MLT.",
    e: "Interactions constantes."
  },
  {
    type: "vf",
    vrai: true,
    q: "Le modèle MNESIS intègre la mémoire perceptive (PRS), responsable de l'amorçage perceptif.",
    e: "PRS."
  },
  {
    type: "vf",
    vrai: false,
    q: "Le modèle MNESIS considère que mémoires épisodique et sémantique fonctionnent sans aucune interaction.",
    e: "Il insiste sur les interactions constantes."
  },
  {
    type: "vf",
    vrai: true,
    q: "La sémantisation est le passage progressif de représentations épisodiques vers la sémantique.",
    e: "MNESIS."
  },
  {
    type: "vf",
    vrai: true,
    q: "H.M. conserve une MCT normale mais ne peut plus encoder de nouveaux souvenirs déclaratifs.",
    e: "Il acquiert pourtant de nouvelles habiletés motrices."
  },
  {
    type: "vf",
    vrai: true,
    q: "Le complexe hippocampique joue un rôle central dans la consolidation déclarative chez H.M.",
    e: "Striatum et cervelet : mémoire procédurale préservée."
  },
  {
    type: "vf",
    vrai: false,
    q: "Le patient H.M. est incapable d'acquérir de nouvelles habiletés motrices comme le dessin en miroir.",
    e: "Il les acquiert : sa mémoire procédurale est préservée."
  },
  {
    type: "vf",
    vrai: false,
    q: "Selon Tulving (2000), la mémoire se limite au stockage permanent des événements vécus.",
    e: "Elle consiste à encoder, stocker et récupérer l'information utile."
  },
  {
    type: "vf",
    vrai: false,
    q: "Ebbinghaus a appliqué la démarche expérimentale à l'étude de la mémoire en 1956.",
    e: "C'est en 1885."
  },
  {
    type: "vf",
    vrai: false,
    q: "Dans la démarche expérimentale sur la mémoire, la récupération précède l'encodage.",
    e: "Ordre : encodage, délai de stockage, récupération."
  },
  {
    type: "vf",
    vrai: false,
    q: "Tous les systèmes mnésiques ont une capacité de stockage quasiment illimitée.",
    e: "Seule la MLT a une capacité quasi illimitée."
  },
  {
    type: "vf",
    vrai: false,
    q: "En reconnaissance, le sujet doit produire lui-même les items appris.",
    e: "Il doit identifier l'item appris parmi des items nouveaux."
  },
  {
    type: "vf",
    vrai: false,
    q: "L'approche structurale provient principalement des travaux de psychologie cognitive.",
    e: "Elle repose sur la neuropsychologie."
  },
  {
    type: "vf",
    vrai: false,
    q: "La mémoire déclarative et la mémoire procédurale constituent un seul et même système.",
    e: "Ce sont deux systèmes qui fonctionnent en parallèle."
  },
  {
    type: "vf",
    vrai: false,
    q: "Cohen et Squire (1980) ont introduit la distinction épisodique/sémantique.",
    e: "C'est Tulving (1972). Cohen et Squire : procédurale/déclarative."
  },
  {
    type: "vf",
    vrai: false,
    q: "Graf et Schacter (1985) ont introduit la distinction procédurale/déclarative.",
    e: "Ils ont proposé les termes implicite/explicite."
  },
  {
    type: "vf",
    vrai: false,
    q: "La mémoire explicite est évaluée par des tâches d'amorçage perceptif et de conditionnement.",
    e: "Elle l'est par le rappel libre, indicé et la reconnaissance."
  },
  {
    type: "vf",
    vrai: false,
    q: "Dans le modèle d'Atkinson et Shiffrin, le RIS conserve l'information plusieurs secondes.",
    e: "Moins d'une seconde."
  },
  {
    type: "vf",
    vrai: false,
    q: "Les trois structures du modèle d'Atkinson et Shiffrin sont le RIS, la MDT et la MLT.",
    e: "RIS, MCT et MLT."
  },
  {
    type: "vf",
    vrai: false,
    q: "La mémoire iconique est la mémoire sensorielle de la modalité auditive.",
    e: "C'est la mémoire échoïque ; l'iconique est visuelle."
  },
  {
    type: "vf",
    vrai: false,
    q: "Dans le modèle d'Atkinson et Shiffrin, la capacité de la MLT est très limitée.",
    e: "Elle n'est pas limitée."
  },
  {
    type: "vf",
    vrai: false,
    q: "Le patient H.M. a subi l'ablation de ses lobes temporaux à l'âge de 9 ans.",
    e: "À 27 ans, pour traiter son épilepsie."
  },
  {
    type: "vf",
    vrai: false,
    q: "Brenda Milner rapporte le cas du patient H.M. dans un article publié en 1970.",
    e: "En 1959."
  },
  {
    type: "vf",
    vrai: false,
    q: "Le cas du patient K.F. a été décrit par Milner en 1959, à la suite de H.M.",
    e: "Par Shallice et Warrington (1970)."
  },
  {
    type: "vf",
    vrai: false,
    q: "Chez Murdock (1962), les mots sont présentés à raison de deux mots par seconde.",
    e: "Un mot par seconde."
  },
  {
    type: "vf",
    vrai: false,
    q: "Chez Murdock (1962), la tâche proposée ensuite est un rappel sériel différé.",
    e: "C'est un rappel libre immédiat."
  },
  {
    type: "vf",
    vrai: false,
    q: "Selon le modèle d'Atkinson et Shiffrin, l'effet de primauté correspond à la MCT.",
    e: "La primauté correspond à la MLT ; la récence à la MCT."
  },
  {
    type: "vf",
    vrai: false,
    q: "Chez Murdock, le temps de présentation agit sur la partie de la courbe liée à la MCT.",
    e: "Il agit sur la partie liée à la MLT (primauté)."
  },
  {
    type: "vf",
    vrai: false,
    q: "Postman et Phillips font varier le temps de présentation des mots.",
    e: "Ils ajoutent un comptage à rebours après la liste."
  },
  {
    type: "vf",
    vrai: false,
    q: "Après le comptage à rebours, le rappel des premiers mots s'effondre chez Postman et Phillips.",
    e: "Il n'est pas altéré."
  },
  {
    type: "vf",
    vrai: false,
    q: "Miller (1956) présente à ses sujets des listes de 20 à 30 items à rappeler dans l'ordre.",
    e: "Entre 5 et 15 items."
  },
  {
    type: "vf",
    vrai: false,
    q: "Selon Miller, l'empan dépend beaucoup de la nature des items : chiffres, lettres ou mots.",
    e: "Il est invariable avec chiffres, lettres, nombres et mots."
  },
  {
    type: "vf",
    vrai: false,
    q: "Chez Peterson et Peterson, les délais de rétention vont de 30 à 180 secondes.",
    e: "De 3 à 18 secondes."
  },
  {
    type: "vf",
    vrai: false,
    q: "Chez Waugh et Norman, la cadence rapide correspond à 1 chiffre par seconde.",
    e: "4 chiffres par seconde ; la cadence lente : 1 par seconde."
  },
  {
    type: "vf",
    vrai: false,
    q: "Chez Waugh et Norman, l'oubli est dû au délai de rétention plutôt qu'à l'interférence.",
    e: "L'interférence est le facteur déterminant."
  },
  {
    type: "vf",
    vrai: false,
    q: "Les confusions acoustiques entre lettres plaident pour un codage visuel en MCT.",
    e: "Elles plaident pour un codage verbal."
  },
  {
    type: "vf",
    vrai: false,
    q: "Chez Shepard et Metzler, les participants doivent mémoriser une liste de mots.",
    e: "Ils comparent deux figures abstraites."
  },
  {
    type: "vf",
    vrai: false,
    q: "Chez Wickens, Dalezman et Eggemeier, la catégorie change au 2e essai.",
    e: "Elle change au 4e essai (fruits)."
  },
  {
    type: "vf",
    vrai: false,
    q: "Baddeley et Hitch (1974) font apprendre 30 mots en parallèle de 0, 3 ou 6 chiffres.",
    e: "16 mots."
  },
  {
    type: "vf",
    vrai: false,
    q: "Le modèle de Baddeley comporte quatre sous-systèmes esclaves autour du centre exécutif.",
    e: "Trois : boucle phonologique, calepin visuo-spatial et buffer épisodique."
  },
  {
    type: "vf",
    vrai: false,
    q: "Le stock phonologique conserve l'information de 10 à 15 secondes.",
    e: "De 1,5 à 2 secondes."
  },
  {
    type: "vf",
    vrai: false,
    q: "Le calepin visuo-spatial a été ajouté au modèle de Baddeley en 2000.",
    e: "C'est le buffer épisodique."
  },
  {
    type: "vf",
    vrai: false,
    q: "L'effet de longueur des mots s'explique par la capacité du calepin visuo-spatial.",
    e: "Il s'explique par la durée de la répétition subvocale (boucle articulatoire)."
  },
  {
    type: "vf",
    vrai: false,
    q: "La suppression articulatoire bloque le fonctionnement du calepin visuo-spatial.",
    e: "Elle bloque la boucle articulatoire."
  },
  {
    type: "vf",
    vrai: false,
    q: "Dans la tâche de Brooks, la poursuite de cible perturbe la condition verbale, pas la condition spatiale.",
    e: "Elle perturbe la condition non verbale (spatiale)."
  },
  {
    type: "vf",
    vrai: false,
    q: "Le scribe interne maintient la forme visuelle et la couleur des objets.",
    e: "C'est le cache visuel ; le scribe traite l'espace et le mouvement."
  },
  {
    type: "vf",
    vrai: false,
    q: "Le buffer épisodique est un système de stockage à capacité illimitée.",
    e: "Capacité limitée, contrôlé par le centre exécutif."
  },
  {
    type: "vf",
    vrai: false,
    q: "Godden et Baddeley (1975) montrent un meilleur rappel quand le contexte de rappel diffère de celui de l'apprentissage.",
    e: "Il est meilleur quand les contextes coïncident."
  },
  {
    type: "vf",
    vrai: false,
    q: "Le principe de spécificité du codage a été proposé par Craik et Lockhart.",
    e: "Par Tulving et Thomson (1973)."
  },
  {
    type: "vf",
    vrai: false,
    q: "L'effet d'auto-référence consiste à répéter l'information à voix haute.",
    e: "Il consiste à relier l'information à soi."
  },
  {
    type: "vf",
    vrai: false,
    q: "Le modèle MNESIS se limite à la description de la mémoire à long terme.",
    e: "Il articule mémoire de travail et systèmes de MLT."
  },
  {
    type: "vf",
    vrai: false,
    q: "La mémoire procédurale est associée à un niveau de conscience autonoétique.",
    e: "Anoétique (non conscient)."
  },
  {
    type: "vf",
    vrai: false,
    q: "La mémoire de travail n'intervient que dans les tâches de laboratoire.",
    e: "Elle sert aussi à comprendre un texte, une conversation, prendre des notes."
  }
];
