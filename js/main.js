import load from "./load.js";
import {save,saveProj,saveAs,saveAsProj} from "./save.js";
import compile as coffee from "./coffeescript"

$(function(){
	$('#open').onclick(() => {
		window.isFile = true;
		window.file = load(true);
	});
	$('#open-proj').onclick(() => {
		window.isFile = false;
		window.proj = load(false);
	});
	$('#save').onclick(() => {
		if (isFile) {
			save(file);
		} else {
			saveProj(proj);
		}
	});
	$('#save-as').onclick(function(){
		if (isFile) {
			saveAs(file)
		} else{
			saveAsProj(proj)
		}
	});
});