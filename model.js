// Implémenter ici les 4 classes du modèle.
// N'oubliez pas l'héritage !
function Drawing(){
    this.forms = new Map();

    this.get_forms = function (){return this.forms}
    this.add_form = function (idx, shape){
        this.forms.set(idx,shape);
    }
    this.remove_form = function (idx){
        this.forms.delete(idx);
    }
}

function Shape(color, thickness){
    this.color = color;
    this.thickness = thickness;

    this.get_color = function (){return this.color}
    this.get_thickness = function (){return this.thickness}
}

function Rectangle(x_top_left,y_top_left,rectangle_width,rectangle_height,thickness,color){ //extend Shape
    Shape.call(this,color,thickness)
    this.x_top_left = x_top_left;
    this.y_top_left = y_top_left;
    this.rectangle_width = rectangle_width;
    this.rectangle_height = rectangle_height;

    this.get_x_top_left = function (){ return this.x_top_left}
    this.get_y_top_left = function (){ return this.y_top_left}
    this.get_x_bottom_right = function (){ return (this.rectangle_width)}
    this.get_y_bottom_right = function (){ return (this.rectangle_height)}
}

function Line(start_x,start_y,end_x,end_y,thickness,color){ //extend Shape
    Shape.call(this,color,thickness)
    this.start_x = start_x;
    this.start_y = start_y;
    this.end_x = end_x;
    this.end_y = end_y;

    this.get_start_x = function (){ return this.start_x}
    this.get_start_y = function (){ return this.start_y}
    this.get_end_x = function (){ return this.end_x}
    this.get_end_y = function (){ return this.end_y}
}