function tableInsideId(elementId, mapArray, tileSet){
	
var terrainWidth = mapArray.length;
var terrainHeight = mapArray[0].length;

var table = document.createElement('table');
table.setAttribute('cellpadding',0);
table.setAttribute('cellspacing',0);
table.setAttribute('border',0);
table.setAttribute('background','tilesets/' + tileSet + '/' + 19 + '.png');

	for(i=1; i<terrainWidth-1; i++){
	var tr = document.createElement('tr');
	table.appendChild(tr);
	
		for(k=1; k<terrainHeight-1; k++){
			var td = document.createElement('td');
			tr.appendChild(td);
			var data = terrainRules(i,k,mapArray);
			if(data.length == 1){
				var div = document.createElement('div');
				div.setAttribute('style', 'position:relative; top:0; left:0;');
				var img1 = document.createElement('img');
				img1.setAttribute('src','tilesets/' + tileSet + '/' + data[0] + '.png');
				img1.setAttribute('style', 'position:relative; top:0; left:0;');
				div.appendChild(img1);
				td.appendChild(div);
				}
			else if(data.length == 2){
				var div = document.createElement('div');
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
