
var editingMode = { rect: 0, line: 0 };

function Pencil(ctx, drawing, canvas) {
	//this.currEditingMode = editingMode.line;
	this.currEditingMode = "line";
	this.currLineWidth = 5;
	this.currColour = '#000000';
	this.currentShape = 0;

	// Liez ici les widgets à la classe pour modifier les attributs présents ci-dessus.

	new DnD(canvas, this);

	var butRect = document.querySelector("#butRect");
	var butLine = document.querySelector("#butLine");
	var spinnerWidth = document.querySelector("#spinnerWidth");
	var colour = document.querySelector("#colour");

	butRect.addEventListener("change", () => {
		this.currEditingMode = "rect"
	})

	butLine.addEventListener("change", () => {
		this.currEditingMode = "line"
	})

	spinnerWidth.addEventListener("change", () => {
		this.currLineWidth = parseInt(spinnerWidth.value)
	})

	colour.addEventListener("change", () => {
		this.currColour = colour.value
	})

	// Implémentez ici les 3 fonctions onInteractionStart, onInteractionUpdate et onInteractionEnd
	this.onInteractionStart = function (dnd){
		if (this.currEditingMode === "rect"){
			this.currentShape = new Rectangle();
		} else if (this.currEditingMode === "line") {
			this.currentShape = new Line();
		}
	}

	this.onInteractionUpdate = function (dnd){
		if (this.currEditingMode === "rect"){
			this.currentShape = new Rectangle(dnd.init_x, dnd.init_y, dnd.final_x-dnd.init_x, dnd.final_y-dnd.init_y, this.currLineWidth, this.currColour);
		} else if (this.currEditingMode === "line") {
			this.currentShape = new Line(dnd.init_x, dnd.init_y, dnd.final_x, dnd.final_y, this.currLineWidth, this.currColour);
		}
		drawing.paint(ctx)
		this.currentShape.paint(ctx)
	}

	this.onInteractionEnd = function (dnd){
		//console.log("end")
		//console.log(dnd)
		//var drawing = new Drawing();
		//var rec = new Rectangle(dnd.init_x, dnd.init_y, dnd.final_x-dnd.init_x, dnd.final_y-dnd.init_y, this.currLineWidth, this.currColour);
		var idx = Date.now().toString(16)
		drawing.add_form(idx, this.currentShape);
		updateShapeList(idx, this.currentShape)
		var listEl = document.getElementById(idx)
		listEl.querySelector('button').addEventListener('click', ()=> {
			removeShape(idx)
			drawing.remove_form(idx)
			drawing.paint(ctx)
		})
	}
};


