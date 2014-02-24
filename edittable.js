// JavaScript Document
localStorage['tool'] = '0';
localStorage['mapData'] = JSON.stringify(mapTerrain1);
var mapTerrain = JSON.parse(localStorage['mapData']);
var isDown = 0;

var terrainWidth = mapTerrain.length;
var terrainHeight = mapTerrain[0].length;

function clickHandle(x, elementId){
var ycoord = x.cellIndex;
var xcoord = x.parentNode.rowIndex;
var ynew = ycoord+1;
var xnew = xcoord+1;
if(localStorage['tool'] == '0'){
mapTerrain[xcoord+1][ycoord+1] = 1;}
else if(localStorage['tool'] == '1'){
mapTerrain[xcoord+1][ycoord+1] = 0;}
else{alert(localStorage['tool'])}
localStorage['mapData'] = JSON.stringify(mapTerrain);
if(xnew>1 && ynew>1 && xnew<terrainWidth-2 && ynew<terrainHeight-2){
drawPartial(xnew, ynew, 'container', mapTerrain, 'grass');}
else{
tableInsideId('container', mapTerrain, 'grass');}
}

function mouseOverHandle(x, elementId){
var ycoord = x.cellIndex;
var xcoord = x.parentNode.rowIndex;
var ynew = ycoord+1;
var xnew = xcoord+1;
var ide = document.createElement('img');
ide.setAttribute('src','tilesets/grass/21.png');
ide.setAttribute('style', 'position:absolute; top:0; left:0;');
ide.setAttribute('z-index','8');
ide.setAttribute('id', 'ide');
ide.setAttribute('onmousedown','return false;')
document.getElementById('test').innerHTML = xcoord + ' ' + ycoord;
	if(isDown == 1){
		var ycoord = x.cellIndex;
		var xcoord = x.parentNode.rowIndex;
		if(localStorage['tool'] == '0'){
		mapTerrain[xcoord+1][ycoord+1] = 1;}
		else if(localStorage['tool'] == '1'){
		mapTerrain[xcoord+1][ycoord+1] = 0;}
		else{alert(localStorage['tool'])}
		localStorage['mapData'] = JSON.stringify(mapTerrain);
		if(xnew>1 && ynew>1 && xnew<terrainWidth-2 && ynew<terrainHeight-2){
		drawPartial(xnew, ynew, 'container', mapTerrain, 'grass');}
		else{
		tableInsideId('container', mapTerrain, 'grass');}
	}
if (document.getElementById('ide') == null){
document.getElementById(xnew + elementId + ynew).appendChild(ide);}
};

function mouseOutHandle(x, elementId){
	if ((event.relatedTarget || event.toElement) != document.getElementById("ide")){
		var ycoord = x.cellIndex;
		var xcoord = x.parentNode.rowIndex;
		var ynew = ycoord+1;
		var xnew = xcoord+1;
		document.getElementById('ide').parentNode.removeChild(document.getElementById('ide'));
	}
};

function savePane(){
if(document.getElementById('outputmap') == null){
document.getElementById('controls').innerHTML += '<textarea style="border:1px; color: #CCC; width:85px; height:50px;font-size:11px; background-color: #333" id="outputmap" cols="70" rows="10"></textarea>';}
document.getElementById('outputmap').innerHTML = 'var mapTerrain1 = ' + localStorage['mapData'] + ';';
document.getElementById('outputmap').select();
};

function clearMap(){
for(i=1; i<terrainWidth-1; i++){
	for(k=1; k<terrainHeight-1; k++){
		mapTerrain[i][k] = 0;
		}
	}
localStorage['mapData'] = JSON.stringify(mapTerrain);
tableInsideId('container', mapTerrain, 'grass');
};

function fillMap(){
for(i=1; i<terrainWidth-1; i++){
	for(k=1; k<terrainHeight-1; k++){
		mapTerrain[i][k] = 1;
		}
	}
localStorage['mapData'] = JSON.stringify(mapTerrain);
tableInsideId('container', mapTerrain, 'grass');
};

function clickToolLand(){
localStorage['tool'] = '0';
};

function clickToolSea(){
localStorage['tool'] = '1';
};

window.onmousedown = function(){ isDown = 1; document.getElementById('test').innerHTML = isDown;}
window.onmouseup = function(){ isDown = 0; document.getElementById('test').innerHTML = isDown;}