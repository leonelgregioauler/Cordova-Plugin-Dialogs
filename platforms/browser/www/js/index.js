/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    
	alert: function() {
		
		function alertDismissed() {
			alert('Usuario clicou no botao OK!');
		}
		
	    navigator.notification.alert(
			'Registro salvo com sucesso!',  // message
			alertDismissed,         	    // callback
			'Sucesso!',            		    // title
			'OK'                  		    // buttonName
		);
	},
	
	confirm: function() {
		function onConfirm(buttonIndex) {
			alert('Usuario clicou no botao ' + buttonIndex);
		}

		navigator.notification.confirm(
			'Erro ao Salvar Registro. Deseja tentar novamente ?', // message
			 onConfirm,            	// callback to invoke with index of button pressed
			'Erro',           		// title
			['Sim','Nao']     		// buttonLabels
		);
    },
	
	prompt: function() {
		function onPrompt(results) {
			alert("Usuario clicou no botao " + 
			    results.buttonIndex + 
				" e digitou " + results.input1);
		}

		navigator.notification.prompt(
			'Informe seu nome',  // message
			onPrompt,                  // callback to invoke
			'Regitro',            // title
			['Ok','Cancelar'],             // buttonLabels
			'Seu nome'                 // defaultText
		);
	},
	
	beep: function() {
		navigator.notification.beep(2);
	} 
	
};

app.initialize();