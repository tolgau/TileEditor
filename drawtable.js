function tableInsideId(elementId, mapArray, tileSet){
idValue = elementId;
var terrainWidth = mapArray.length;
var terrainHeight = mapArray[0].length;
document.getElementById('test').innerHTML = terrainWidth +' '+ terrainHeight;
document.getElementById(elementId).innerHTML = '';
var table = document.createElement('table');
table.setAttribute('cellpadding',0);
table.setAttribute('cellspacing',0);
table.setAttribute('border',0);
table.setAttribute('background','tilesets/' + tileSet + '/' + 19 + '.png');
table.setAttribute('id', elementId + 'canvas');
var tbody = document.createElement('tbody');
table.appendChild(tbody);

	for(i=1; i<terrainWidth-1; i++){
	var tr = document.createElement('tr');
	tbody.appendChild(tr);
	
		for(k=1; k<terrainHeight-1; k++){
			var td = document.createElement('td');
//////////////////////////////////// EDITING ATTRIBUTES //////////////////////////////////////////////////////////
			td.setAttribute('onclick','clickHandle(this, idValue)');
			td.setAttribute('onmouseover','mouseOverHandle(this, idValue)');
			td.setAttribute('onmouseout','mouseOutHandle(this, idValue)');
//////////////////////////////////// EDITING ATTRIBUTES //////////////////////////////////////////////////////////	
			tr.appendChild(td);					
			var data = terrainRules(i,k,mapArray);
			if(data.length == 1){
				var div = document.createElement('div');
				div.setAttribute('style', 'position:relative; top:0; left:0;');
				div.setAttribute('id', i + elementId + k);
				var img1 = document.createElement('img');
				img1.setAttribute('src','tilesets/' + tileSet + '/' + data[0] + '.png');
				img1.setAttribute('style', 'position:relative; top:0; left:0;');
				div.appendChild(img1);
				td.appendChild(div);
				}
			else if(data.length == 2){
				var div = document.createElement('div');
				div.setAttribute('id', i + elementId + k);
				div.setAttribute('style', 'position:relative; top:0; left:0;');
				var img1 = document.createElement('img');
				img1.setAttribute('src','tilesets/' + tileSet + '/' + data[0] + '.png');
				img1.setAttribute('style', 'position:relative; top:0; left:0;');
				div.appendChild(img1);
				var img2 = document.createElement('img');
				img2.setAttribute('src','tilesets/' + tileSet + '/' + data[1] + '.png');
				img2.setAttribute('style', 'position:absolute; top:0; left:0;');
				div.appendChild(img2);
				td.appendChild(div);
				}
			else if(data.length == 3){
				var div = document.createElement('div');
				div.setAttribute('id', i + elementId + k);
				div.setAttribute('style', 'position:relative; top:0; left:0;');
				var img1 = document.createElement('img');
				img1.setAttribute('src','tilesets/' + tileSet + '/' + data[0] + '.png');
				img1.setAttribute('style', 'position:relative; top:0; left:0;');
				div.appendChild(img1);
				var img2 = document.createElement('img');
				img2.setAttribute('src','tilesets/' + tileSet + '/' + data[1] + '.png');
				img2.setAttribute('style', 'position:absolute; top:0; left:0;');
				div.appendChild(img2);
				var img3 = document.createElement('img');
				img3.setAttribute('src','tilesets/' + tileSet + '/' + data[2] + '.png');
				img3.setAttribute('style', 'position:absolute; top:0; left:0;');
				div.appendChild(img3);
				td.appendChild(div);
				}
			else if(data.length == 4){
				var div = document.createElement('div');
				div.setAttribute('id', i + elementId + k);
				div.setAttribute('style', 'position:relative; top:0; left:0;');
				var img1 = document.createElement('img');
				img1.setAttribute('src','tilesets/' + tileSet + '/' + data[0] + '.png');
				img1.setAttribute('style', 'position:relative; top:0; left:0;');
				div.appendChild(img1);
				var img2 = document.createElement('img');
				img2.setAttribute('src','tilesets/' + tileSet + '/' + data[1] + '.png');
				img2.setAttribute('style', 'position:absolute; top:0; left:0;');
				div.appendChild(img2);
				var img3 = document.createElement('img');
				img3.setAttribute('src','tilesets/' + tileSet + '/' + data[1] + '.png');
				img3.setAttribute('style', 'position:absolute; top:0; left:0;');
				div.appendChild(img3);
				var img4 = document.createElement('img');
				img4.setAttribute('src','tilesets/' + tileSet + '/' + data[3] + '.png');
				img4.setAttribute('style', 'position:absolute; top:0; left:0;');
				div.appendChild(img4);
				td.appendChild(div);
				}

		}


	}
document.getElementById(elementId).appendChild(table);	

};

function clearNodes(elementId){
	
var target = document.getElementById(elementId);
	if ( target.hasChildNodes() ){
		while ( target.childNodes.length >= 1 ){
			target.removeChild( target.firstChild );       
		} 
	}
};
	
function drawPartial(x, y, elementId, mapArray, tileSet){
var terrainWidth = mapArray.length;
var terrainHeight = mapArray[0].length;	
	for(i=x-1; i<=x+1; i++){
		for(k=y-1; k<=y+1; k++){
			var data = terrainRules(i,k,mapArray);
			if(data.length == 1){
				var div = document.getElementById(i + elementId + k);
				clearNodes(i + elementId + k);
				var img1 = document.createElement('img');
				img1.setAttribute('src','tilesets/' + tileSet + '/' + data[0] + '.png');
				img1.setAttribute('style', 'position:relative; top:0; left:0;');
				clearNodes(i + elementId + k);
				div.appendChild(img1);
				}
			else if(data.length == 2){
				var div = document.getElementById(i + elementId + k);
				clearNodes(i + elementId + k);
				var img1 = document.createElement('img');
				img1.setAttribute('src','tilesets/' + tileSet + '/' + data[0] + '.png');
				img1.setAttribute('style', 'position:relative; top:0; left:0;');
				div.appendChild(img1);
				var img2 = document.createElement('img');
				img2.setAttribute('src','tilesets/' + tileSet + '/' + data[1] + '.png');
				img2.setAttribute('style', 'position:absolute; top:0; left:0;');
				div.appendChild(img2);
				}
			else if(data.length == 3){
				var div = document.getElementById(i + elementId + k);
				clearNodes(i + elementId + k);
				var img1 = document.createElement('img');
				img1.setAttribute('src','tilesets/' + tileSet + '/' + data[0] + '.png');
				img1.setAttribute('style', 'position:relative; top:0; left:0;');
				div.appendChild(img1);
				var img2 = document.createElement('img');
				img2.setAttribute('src','tilesets/' + tileSet + '/' + data[1] + '.png');
				img2.setAttribute('style', 'position:absolute; top:0; left:0;');
				div.appendChild(img2);
				var img3 = document.createElement('img');
				img3.setAttribute('src','tilesets/' + tileSet + '/' + data[2] + '.png');
				img3.setAttribute('style', 'position:absolute; top:0; left:0;');
				div.appendChild(img3);
				}
			else if(data.length == 4){
				var div = document.getElementById(i + elementId + k);
				clearNodes(i + elementId + k);
				var img1 = document.createElement('img');
				img1.setAttribute('src','tilesets/' + tileSet + '/' + data[0] + '.png');
				img1.setAttribute('style', 'position:relative; top:0; left:0;');
				div.appendChild(img1);
				var img2 = document.createElement('img');
				img2.setAttribute('src','tilesets/' + tileSet + '/' + data[1] + '.png');
				img2.setAttribute('style', 'position:absolute; top:0; left:0;');
				div.appendChild(img2);
				var img3 = document.createElement('img');
				img3.setAttribute('src','tilesets/' + tileSet + '/' + data[1] + '.png');
				img3.setAttribute('style', 'position:absolute; top:0; left:0;');
				div.appendChild(img3);
				var img4 = document.createElement('img');
				img4.setAttribute('src','tilesets/' + tileSet + '/' + data[3] + '.png');
				img4.setAttribute('style', 'position:absolute; top:0; left:0;');
				div.appendChild(img4);
				}

		}


	}
	
};