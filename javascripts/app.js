// Rover Object Goes Here
// ======================



// ITERATION 1

var theRover = {
  direction: "N", //imp mettre la virgule si autre apres  // aqui la llave del object = dictionnaire = Direction, la value = N: Norte
  message: "tenemos tacos",
  x: 0,
  y: 0
}

// ======================
function turnLeft(rover) {
  console.log("turnLeft was called!");
  switch (rover.direction) { // aqui el switch evalua la direccion; para  accederlo hay dos manera: (rover.direction) o rover["directtion"] --> La utilización del punta es más commún porque ahora caracter
    case "N": // evaluacion del primer caso: vas al norte
      rover.direction = "W"; // ON change la direction de N a W si le roover est au N
      break; // el break siempre va despues de haber hecho el cambio
    case "W":
      // Pour lui dire, si tu coincide ici, rompt le cylce
      rover.direction = "S";
      break; // a mettre apres chaque case, sinon la fonction tourne jusqu'à la fin !!!
    case "S":
      rover.direction = "E";
      /* return rover.direction --> autre solution au lieu de mettre (break) car return dit à la fonction de se terminer quand elle à trouver la réponse*/
      break;
    case "E":
      rover.direction = "N";
      break;
    default: // Ce que va faire si rien ne coincinde
      return rover.direction; // autre forme de sortir //comme le return

  }
}

function turnRight(rover) {
  console.log("turnRight was called!");
  switch (rover.direction) {
    case "N":
      rover.direction = "E";
    case "E":
      break;
      rover.direction = "S";
    case "S":
      break;
      rover.direction = "W";
      /* return rover.direction --> autre solution au lieu de mettre (break) car return dit à la fonction de se terminer quand elle à trouver la réponse*/
    case "W":
      break;
      rover.direction = "N";
    default:
      return rover.direction;
  }
}


// ITERATION 2

// ITERATION 3

switch (expression) {
  case expression:

    break;
  default:

}

function moveForward(rover) {
  console.log("moveForward was called")
  switch (rover.direction) {
    case "N":
      rover.y = rover.y - 1 // car on veut qu'il aille au nord Y étant a 0; le sud a 1, le nord est donc à +1// autre options:   rover.y -= 1  rover.y--
      break;
    case "E":
      rover.x = rover.x + 1;
      break;
    case "W":
      rover.x = rover.x - 1;
      break;
    case "S":
      rover.y = rover.y + 1;
    default:
      return rover.direction;
  }
}


function command(rover, commanda) {
  commanda = commanda.split("");// el ("") indica que va por cada letra // el split checa cada letra del rffllllr...
  for (var i = 0; i <= command.length; i++) {
    if (command === r) {
      turnRight(rover);
    } else if (command === l) {
      turnLeft(roover);
    } else if (command === f) {
      moveForward(roover);
    } else(commmand === b)
    moveBackwards(roover)
  }
}
