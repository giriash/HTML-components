var showForm = document.getElementById("show_form");
var submitShowBtn  = document.getElementById("submit_show_btn");

/*
* construnctor
*
* @para {num} id
* @para {string} type
* @para {string} inputType
* @para {string} name
* @para {boolean} necessary
* @para {arr} addChoices
*/
function DataGenerator(id, type, inputType, name, necessary,addChoices){

	console.log("DataGenerator is created");
	this.id = id;       //elementID
	this.type = type;	//type
	this.inputType = inputType;
	this.name = name;   //name
	this.necessary = necessary; // necessary or not;
	this.addChoices = addChoices;
}
DataGenerator.prototype = {
	setData : function(data){
		//this.type = this.setDataType();
	},
	addData: function(data, element, btn){
		var newForm = document.createElement('div');
		newForm.id = data.id;
		newForm.appendChild(this.addSettings(data));
		newForm.appendChild(this.addForm(data));
		element.insertBefore(newForm, btn);
	},

	addSettings: function(data){
		//add name to the element;
		if (data.name == "") {
			data.name = "form1";
		}
		var nameElement = document.createElement("label");
		nameElement.innerHTML = data.name + ": &nbsp";
		return nameElement;
		//element.appendChild(nameElement);
	},
	addForm : function(data){
		var newElement;
		switch(data.type) {
			case "text":
				newElement = this.addText(data);
				break;
			case "radio":
				newElement = this.addRadio(data);
				break;
			case "checkbox":
				newElement = this.addCheckBox(data);
				break;
			case "select":
				newElement = this.addSelect(data);
				break;
			case "textarea":
				newElement = this.addTextarea(data);
				break;
			default:
				break;
		}
		console.log("form is added");
		return newElement;
		//element.appendChild(newElement);
	},
	addSubmit : function(data, element){
		var submitElement;
		// switch
	},

	//sub functions to add Forms
	addText : function(data){
		var textElement = document.createElement("input");
		textElement.type = data.inputType//'text';
		return textElement;
	},
	
	addRadio : function(data){
		var dataChoice = data.addChoices;
		var radioElement = document.createElement("div");
		for(var i = 0; i < dataChoice.length; i++){
			var radioAndLabel = document.createElement("div");
			var radio = document.createElement("input");
			var label = document.createElement("label");
			radio.type = 'radio';
			radio.class = "clear";
			radio.name = "form" + data.id + "_added_radio";
			radio.id = "form" + data.id + "_added_radio_" + dataChoice[i];
			label.innerHTML = dataChoice[i];
			radioAndLabel.className = 'multipleChooseSingle';
			radioAndLabel.appendChild(radio);
			radioAndLabel.appendChild(label);
			radioElement.appendChild(radioAndLabel);
		}
		return radioElement;
	},
	addCheckBox : function(data){
		var dataChoice = data.addChoices;
		var checkElement = document.createElement("div");
		for(var i = 0; i < dataChoice.length; i++){
			var checkAndLabel = document.createElement("div");
			var check = document.createElement("input");
			var label = document.createElement("label");
			check.type = 'checkbox';
			check.class = "clear";
			check.name = "form" + data.id + "_added_check";
			check.id = "form" + data.id + "_added_check_" + dataChoice[i];
			label.innerHTML = dataChoice[i];
			checkAndLabel.className = 'multipleChooseSingle';
			checkAndLabel.appendChild(check);
			checkAndLabel.appendChild(label);
			checkElement.appendChild(checkAndLabel);
		}
		return checkElement;
	},
	addSelect : function(data){
		var dataChoice = data.addChoices;
		var selectElement = document.createElement("select");
		for(var i = 0; i < dataChoice.length; i++){
			var option = document.createElement("option");
			option.id = "form" + data.id + "_added_check_" + dataChoice[i];
			option.innerHTML = dataChoice[i];
			selectElement.appendChild(option);
		}
		return selectElement;
	},
	addTextarea : function(data){
		var textareaElement = document.createElement("input");
		textareaElement.type = 'textarea'//'text';
		return textareaElement;
	}

}


////////////////////////////////////
/////////////add chooses////////////
////////////////////////////////////


function generateChoice(btn, input, container){
	addChoices = [];
	generateChoiceShow(addChoices, container, input);
	attachAddBtn(btn,input,container);
}

function attachAddBtn(btn, input, container){
	addEvent(btn, 'click', function(){
		if(input.value.trim() == ""){
			alert("Please input a choice.");
			return ;
		} else if(addChoices.includes(input.value.trim())){
			alert("This choice alreadt exists.");
			return ;
		} else {
			addChoices.push(input.value);
			generateChoiceShow(addChoices, container, input);
		}
	});

}

function generateChoiceShow(data, container, input){
	var showList = "";
	for(var i = 0; i < data.length; i++){
		var thisChoiceBlock = document.createElement("div");
		thisChoiceBlock = "<div id = 'choiceId" +i + "'> " + data[i] + "</div>";
		thisChoiceBlock.id = "choiceId" + i;
		showList += thisChoiceBlock;
		input.value = "";
	}
	container.innerHTML = showList;
	attachCancelOnEach(data,container,input);
}

function attachCancelOnEach(data,container,input){
	var funcs = [];
	for (var i = 0; i < container.children.length; i++) {
		addEvent(container.children[i],"click", function(i){
			return function(){
				if (window.confirm("Do you really want to cancel this choice?")) { 
				  	data.splice(i,1);
				  	generateChoiceShow(data,container,input);
				}
			};
		}(i));
	}
}

////////////////////////////////////
/////////////add event//////////////
////////////////////////////////////
var chooseTypeForm = document.getElementById("cotrol_type");
var chooseTypeInput = document.getElementById("cotrol_type_text");
//add chooses form
var chooseTypeChoose = document.getElementById("cotrol_type_choice");
var chooseTypeChoose2 = document.getElementById("cotrol_type_choice2");
var chooseTypeChoose3 = document.getElementById("cotrol_type_choice3");
var chooseTypeChoiceInput = document.getElementById("cotrol_type_choice_input");
var chooseTypeChoiceButton = document.getElementById("cotrol_type_choice_button");
var chooseTypeChoiceShow = document.getElementById("cotrol_type_choice_show");
var chooseTypeChoiceInput2 = document.getElementById("cotrol_type_choice_input2");
var chooseTypeChoiceButton2 = document.getElementById("cotrol_type_choice_button2");
var chooseTypeChoiceShow2 = document.getElementById("cotrol_type_choice_show2");
var chooseTypeChoiceInput3 = document.getElementById("cotrol_type_choice_input3");
var chooseTypeChoiceButton3 = document.getElementById("cotrol_type_choice_button3");
var chooseTypeChoiceShow3 = document.getElementById("cotrol_type_choice_show3");

var chooseNecessaryForm = document.getElementById("control_necessary");
var submitBtn = document.getElementById("submit_btn");
var setName = document.getElementById("set_name");
var name = ""; // defalut name, if setName is empty;
var selectedType, selectedInputType = 'text', selectedNecessary = true;
var addChoices = [];

addEvent(chooseTypeForm, 'click', function(e){
	switch(e.target.id) {
		case "type_input":
			selectedType = "text";
			name = "input ";
			chooseTypeChoose.style.display = 'none';
			chooseTypeChoose2.style.display = 'none';
			chooseTypeChoose3.style.display = 'none';
			chooseTypeInput.style.display = 'block';
			break;
		case "type_choose_one":
			selectedType = "radio";
			name = "multiple choose (select one) ";
			setName.value = "";
			generateChoice(chooseTypeChoiceButton, chooseTypeChoiceInput, chooseTypeChoiceShow);
			
			chooseTypeChoose.style.display = 'block';
			chooseTypeChoose2.style.display = 'none';
			chooseTypeChoose3.style.display = 'none';
			chooseTypeInput.style.display = 'none';

			break;
		case "type_choose_multiple":
			selectedType = "checkbox";
			setName.value = "";
			console.log("s");
			generateChoice(chooseTypeChoiceButton2, chooseTypeChoiceInput2, chooseTypeChoiceShow2);
			name = "multiple choose (select multiple) ";
			chooseTypeChoose.style.display = 'none';
			chooseTypeChoose2.style.display = 'block';
			chooseTypeChoose3.style.display = 'none';
			chooseTypeInput.style.display = 'none';
			break;
		case "type_select":
			selectedType = "select";
			setName.value = "";
			generateChoice(chooseTypeChoiceButton3, chooseTypeChoiceInput3, chooseTypeChoiceShow3);
			name = "choose box ";
			chooseTypeChoose.style.display = 'none';
			chooseTypeChoose2.style.display = 'none';
			chooseTypeChoose3.style.display = 'block';
			chooseTypeInput.style.display = 'none';
			break;
		case "type_text":
			selectedType = "textarea";
			setName.value = "";
			name = "textarea ";
			chooseTypeChoose.style.display = 'none';
			chooseTypeChoose2.style.display = 'none';
			chooseTypeChoose3.style.display = 'none';
			chooseTypeInput.style.display = 'none';
			break;
		default: 
			break;
	}
	//console.log("selectedType is " + selectedType);
});

addEvent(chooseTypeInput, 'click', function(e){
	switch(e.target.id){
		case "type_input_text":
			selectedInputType = "text";
			setName.value = '';
			break;
		case "type_input_password":
			selectedInputType = "password";
			setName.value = 'password';
			break;
		case "type_input_email":
			selectedInputType = "email";
			setName.value = 'email';
			break;
		case "type_input_phone":
			selectedInputType = "tel";
			setName.value = 'phone';
			break;
		default:
			break;
	}
});

addEvent(chooseNecessaryForm, 'click', function(e){
	switch(e.target.id){
		case "set_required":
			selectedNecessary = true;
			break;
		case "set_not_required":
			selectedNecessary = false;
			break;
		default: 
			break;
	}
});

var elementCount = 0;
addEvent(submitBtn, 'click', function(e){
	if(selectedType == null){
		alert("please select a form type");
	}
	//console.log("type is " + type);
	name = setName.value == "" ? name : setName.value;
	var data1 = new DataGenerator(elementCount, selectedType, selectedInputType, name, selectedNecessary,addChoices);
	data1.addData(data1,showForm,submitShowBtn);	
	elementCount++;
	submitShowBtn.style.display = "block";

});

// submit show form



