// Implémenter ici les fonctions paint à ajouter dans chacune des classes du modèle.

Rectangle.prototype.paint = function(ctx) {
    ctx.strokeStyle = this.get_color();
    ctx.lineWidth = this.get_thickness();
    ctx.beginPath();
    ctx.rect(this.get_x_top_left(), this.get_y_top_left(), this.get_x_bottom_right(),   this.get_y_bottom_right());
    ctx.stroke();
};

Line.prototype.paint = function(ctx) {
    ctx.strokeStyle = this.get_color();
    ctx.lineWidth = this.get_thickness();
    ctx.beginPath();
    ctx.moveTo(this.get_start_x(), this.get_start_y());
    ctx.lineTo(this.get_end_x(), this.get_end_y());
    ctx.stroke();
};

Drawing.prototype.paint = function(ctx) {
    //console.log(this.getForms());
    ctx.fillStyle = '#F0F0F0'; // set canvas' background color
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    this.get_forms().forEach( ((value, key) => {
        value.paint(ctx);
    } ));
};

function updateShapeList(idx, shape) {
    var newEl = document.createElement('li')
    var butEl = document.createElement('button')
    var spanEl = document.createElement('span')
    newEl.id = idx
    if (shape.constructor === Rectangle) newEl.textContent = 'Rectangle'
    else newEl.textContent = 'Line'
    newEl.style.color = shape.color
    butEl.type = 'button'
    butEl.classList.add('btn')
    butEl.classList.add('btn-default')
    spanEl.classList.add('glyphicon')
    spanEl.classList.add('glyphicon-remove-sign')
    butEl.appendChild(spanEl)
    newEl.appendChild(butEl)
    document.querySelector('#shapeList').appendChild(newEl)
}

function removeShape(id){
    document.getElementById(id).remove()
}
