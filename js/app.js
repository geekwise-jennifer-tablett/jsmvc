//name event
var get_element = function(element_id){
    return document.getElementById(element_id);
};

//model

//var names = function(name_data){
//this.collection = name_data.added_collection;
//    return this;
//};

var name_array = [];

//view


var create_view_elements = function(element_type,element_id,text_content){
    var element = document.createElement(element_type);
    element.setAttribute('id',element_id);
    element.textContent = text_content;
    document.body.appendChild(element);
}









//controller

var display_name = function(){
    get_element('input').addEventListener('keydown',function(event){
        if(event.keyCode === 13){
            
            name_array.push(this.value);
            for(var i=0; i<name_array.length; i++){
                create_view_elements('p','',name_array[i]);
                this.value = null;
            }
        }
    });
};

document.addEventListener('DOMContentLoaded',function(event){

    create_view_elements('h1','add_name','Type name and press Enter');
    create_view_elements('input','input','');
    create_view_elements('h1','delete_name','CLICK on name to delete');

display_name();

});
