# Installation du repo front

Hello les copains, je copie Mathieu, je vous prépare aussi un mini guide d'installation pour le front. Mais vous verez, pour ce repo, c'est pas sorcier !

On utilise le gestionnaire de paquets yarn pour gérer react et tout ce qui l'entoure (webpack, redux, react-dom, etc).
Si vous avez npm d'installé sur votre machine (ça devrait normalement être le cas), il vous suffit d'utiliser : "npm install --global yarn" pour installer yarn.

Ensuite, dans le repo du projet, tappez "yarn" tout court. Cela va installer dans votre repo (dans un dossier node_modules) toutes les librairies indiquées dans le fichier package.json.

Et normalement, une fois cela fait... c'est bon ! Il vous suffit de tapper "yarn start" pour que webpack se mette en branle, traduise le code React en JS vanilla, le SCSS en CSS, et qu'une fenêtre s'ouvre sur Chrome pour vous afficher le résultat (au port 3000 par défaut, yarn vous proposera d'en utiliser un autre si le 3000 est déjà utilisé).

/!\ La base URI utilisée pour tout relier à l'API se trouve dans le fichier : src/reducers/display.js
Vous devriez avoir à la ligne 13 : " baseURI: 'http://localhost:8080' "
Si vous utilisez un autre port pour lancer le back, ou que vous utilisez un back en ligne, c'est cette valeur qu'il faut modifier.

Enjoy !
