
// La création d'un Dnd requière un canvas et un interacteur.
// L'interacteur viendra dans un second temps donc ne vous en souciez pas au départ.
function DnD(canvas, interactor) {
	// Définir ici les attributs de la 'classe'
    this.init_x = 0;
    this.init_y = 0;
    this.final_x = 0;
    this.final_y = 0;
    this.is_pressed = false;

	// Developper les 3 fonctions gérant les événements
    this.mousedown_listener = function (evt){
      this.init_x = getMousePosition(canvas,evt).x;
      this.init_y = getMousePosition(canvas,evt).y;
      this.is_pressed = true;
      interactor.onInteractionStart(this);
    }

    this.mousemove_listener = function(evt){
      if (this.is_pressed){
        this.final_x = getMousePosition(canvas,evt).x;
        this.final_y = getMousePosition(canvas,evt).y;
        interactor.onInteractionUpdate(this);
      }
    }

    this.mouseup_listener = function(evt){
      this.final_x = getMousePosition(canvas,evt).x;
      this.final_y = getMousePosition(canvas,evt).y;
      this.is_pressed = false;
      interactor.onInteractionEnd(this);
    }

	// Associer les fonctions précédentes aux évènements du canvas.
    canvas.addEventListener('mousedown',this.mousedown_listener, false);
    canvas.addEventListener('mousemove',this.mousemove_listener, false);
    canvas.addEventListener('mouseup',this.mouseup_listener, false);
};


// Place le point de l'événement evt relativement à la position du canvas.
    function getMousePosition(canvas, evt) {
  var rect = canvas.getBoundingClientRect();
  return {
    x: evt.clientX - rect.left,
    y: evt.clientY - rect.top
  };
};



