import {load,loadProj} from "load.js";
import {save,saveProj,saveAs,saveAsProj} from "save.js";
import check from "checker.js";

$(function(){
	$('#open').onclick(function(){
		isFile = true;
		file = load(true);
	});
	$('#open-proj').onclick(function(){
		isFile = false;
		proj = loadProj(true);
	});
	$('#save').onclick(function(){
		if (isFile) {
			save(file);
		} else{
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

var btn = getElementById()