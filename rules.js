function terrainRules(i,k,tArray){
var returnArray = new Array();	
	if(
				 tArray[i][k]==1
			){
				returnArray = [5];
				return returnArray;
	}
	
	else if(
			 tArray[i-1][k-1]==1 && 
			   tArray[i-1][k]==0 && 
			   tArray[i][k-1]==0 && 
			     tArray[i][k]==0 && 
			   tArray[i][k+1]==1 && 
			 tArray[i+1][k-1]==1 && 
			   tArray[i+1][k]==0 
			 ){
				returnArray = [4,3,9];
				return returnArray;	
	}
	
	else if(
			 tArray[i-1][k-1]==1 && 
			   tArray[i-1][k]==0 && 
			 tArray[i-1][k+1]==1 && 
			   tArray[i][k-1]==0 && 
			     tArray[i][k]==0 && 
			   tArray[i][k+1]==0 && 
			   tArray[i+1][k]==1 
			 ){
				returnArray = [7,9,2];
				return returnArray;	
	}
			
	else if(
			   tArray[i-1][k]==0 && 
			 tArray[i-1][k+1]==1 && 
			   tArray[i][k-1]==1 && 
			     tArray[i][k]==0 && 
			   tArray[i][k+1]==0 && 
			   tArray[i+1][k]==0 && 
			 tArray[i+1][k+1]==1
			 ){
				returnArray = [7,6,1];
				return returnArray;	
	}
	
	else if(
			   tArray[i-1][k]==1 && 
			   tArray[i][k-1]==0 && 
			     tArray[i][k]==0 && 
			   tArray[i][k+1]==0 && 
			 tArray[i+1][k-1]==1 && 
			   tArray[i+1][k]==0 && 
			 tArray[i+1][k+1]==1
			 ){
				returnArray = [8,3,1];
				return returnArray;	
	}

	else if(
			   tArray[i-1][k]==0 && 
			 tArray[i-1][k+1]==1 && 
			   tArray[i][k-1]==1 && 
			     tArray[i][k]==0 && 
			   tArray[i][k+1]==0 && 
			   tArray[i+1][k]==1 
			 ){
				returnArray = [12,7];
				return returnArray;	
	}
	
	else if(
			 tArray[i-1][k-1]==1 && 
			   tArray[i-1][k]==0 && 
			   tArray[i][k-1]==0 && 
			     tArray[i][k]==0 && 
			   tArray[i][k+1]==1 && 
			   tArray[i+1][k]==1 
			 ){
				returnArray = [13,9];
				return returnArray;	
	}
	
	else if(
			   tArray[i-1][k]==1 && 
			   tArray[i][k-1]==0 && 
			     tArray[i][k]==0 && 
			   tArray[i][k+1]==1 && 
			 tArray[i+1][k-1]==1 && 
			   tArray[i+1][k]==0 
			 ){
				returnArray = [11,3];
				return returnArray;	
	}
	
	else if(
			   tArray[i-1][k]==1 && 
			   tArray[i][k-1]==1 && 
			     tArray[i][k]==0 && 
			   tArray[i][k+1]==0 && 
			   tArray[i+1][k]==0 && 
			 tArray[i+1][k+1]==1
			 ){
				returnArray = [10,1];
				return returnArray;	
	}
	
	else if(
			   tArray[i][k-1]==1 && 
			     tArray[i][k]==0 && 
			   tArray[i][k+1]==0 && 
			   tArray[i+1][k]==0 && 
			 tArray[i+1][k+1]==1
			 ){
				returnArray = [6,1];
				return returnArray;	
	}
	
	else if(
			   tArray[i-1][k]==0 && 
			 tArray[i-1][k+1]==1 && 
			   tArray[i][k-1]==1 && 
			     tArray[i][k]==0 && 
			   tArray[i][k+1]==0 
			 ){
				returnArray = [6,7];
				return returnArray;	
	}

	else if(
			 tArray[i-1][k-1]==1 && 
			   tArray[i-1][k]==0 && 
			   tArray[i][k-1]==0 && 
			     tArray[i][k]==0 && 
			   tArray[i+1][k]==1 
			 ){
				returnArray = [9,2];
				return returnArray;	
	}
	
	else if(
			   tArray[i-1][k]==0 && 
			 tArray[i-1][k+1]==1 && 
			     tArray[i][k]==0 && 
			   tArray[i][k+1]==0 && 
			   tArray[i+1][k]==1 
			 ){
				returnArray = [7,2];
				return returnArray;	
	}
	
	else if(
			   tArray[i][k-1]==0 && 
			     tArray[i][k]==0 && 
			   tArray[i][k+1]==1 && 
			 tArray[i+1][k-1]==1 && 
			   tArray[i+1][k]==0 
			 ){
				returnArray = [3,4];
				return returnArray;	
	}
	
	else if(
			 tArray[i-1][k-1]==1 && 
			   tArray[i-1][k]==0 && 
			   tArray[i][k-1]==0 && 
			     tArray[i][k]==0 && 
			   tArray[i][k+1]==1 
			 ){
				returnArray = [9,4];
				return returnArray;	
	}
	
	else if(
			   tArray[i-1][k]==1 && 
			   tArray[i][k-1]==0 && 
			     tArray[i][k]==0 && 
			 tArray[i+1][k-1]==1 && 
			   tArray[i+1][k]==0 
			 ){
				returnArray = [8,3];
				return returnArray;	
	}
	
	else if(
			   tArray[i-1][k]==1 && 
			     tArray[i][k]==0 && 
			   tArray[i][k+1]==0 && 
			   tArray[i+1][k]==0 && 
			 tArray[i+1][k+1]==1
			 ){
				returnArray = [8,1];
				return returnArray;	
	}
	
	else if(
			   tArray[i-1][k]==1 && 
			   tArray[i][k-1]==1 && 
			     tArray[i][k]==0 && 
			   tArray[i][k+1]==1 && 
			   tArray[i+1][k]==1
			 ){
				returnArray = [20];
				return returnArray;	
	}
	
////////// THE ONE WITH ALL POSSIBLE RULES /////////	
	else if(
			 tArray[i-1][k-1]==1 && 
			   tArray[i-1][k]==0 && 
			 tArray[i-1][k+1]==1 && 
			   tArray[i][k-1]==0 && 
			     tArray[i][k]==0 && 
			   tArray[i][k+1]==0 && 
			 tArray[i+1][k-1]==1 && 
			   tArray[i+1][k]==0 && 
			 tArray[i+1][k+1]==1
			 ){
				returnArray = [9,7,3,1];
				return returnArray;	
	}
////////// THE ONE WITH ALL POSSIBLE RULES /////////	

	else if(
			 tArray[i-1][k-1]==1 && 
			   tArray[i-1][k]==0 && 
			 tArray[i-1][k+1]==1 && 
			   tArray[i][k-1]==0 && 
			     tArray[i][k]==0 && 
			   tArray[i][k+1]==0 && 
			 tArray[i+1][k-1]==1 && 
			   tArray[i+1][k]==0 
			 ){
				returnArray = [9,7,3];
				return returnArray;	
	}
	
	else if(
			 tArray[i-1][k-1]==1 && 
			   tArray[i-1][k]==0 && 
			 tArray[i-1][k+1]==1 && 
			   tArray[i][k-1]==0 && 
			     tArray[i][k]==0 && 
			   tArray[i][k+1]==0 && 
			   tArray[i+1][k]==0 && 
			 tArray[i+1][k+1]==1
			 ){
				returnArray = [9,7,1];
				return returnArray;	
	}
	
	else if(
			   tArray[i-1][k]==0 && 
			 tArray[i-1][k+1]==1 && 
			   tArray[i][k-1]==0 && 
			     tArray[i][k]==0 && 
			   tArray[i][k+1]==0 && 
			 tArray[i+1][k-1]==1 && 
			   tArray[i+1][k]==0 && 
			 tArray[i+1][k+1]==1
			 ){
				returnArray = [3,7,1];
				return returnArray;	
	}
	
	else if(
			 tArray[i-1][k-1]==1 && 
			   tArray[i-1][k]==0 && 
			   tArray[i][k-1]==0 && 
			     tArray[i][k]==0 && 
			   tArray[i][k+1]==0 && 
			 tArray[i+1][k-1]==1 && 
			   tArray[i+1][k]==0 && 
			 tArray[i+1][k+1]==1
			 ){
				returnArray = [3,9,1];
				return returnArray;	
	}
			
	else if(
			 tArray[i-1][k-1]==1 && 
			   tArray[i-1][k]==0 && 
			   tArray[i][k-1]==0 && 
			     tArray[i][k]==0 && 
			   tArray[i][k+1]==0 && 
			   tArray[i+1][k]==0 && 
			 tArray[i+1][k+1]==1
			 ){
				returnArray = [9,1];
				return returnArray;	
	}
			
	else if(
			   tArray[i-1][k]==0 && 
			 tArray[i-1][k+1]==1 && 
			   tArray[i][k-1]==0 && 
			     tArray[i][k]==0 && 
			   tArray[i][k+1]==0 && 
			 tArray[i+1][k-1]==1 && 
			   tArray[i+1][k]==0 
			 ){
				returnArray = [3,7];
				return returnArray;	
	}
	
	else if(
			   tArray[i][k-1]==1 && 
			     tArray[i][k]==0 && 
			   tArray[i][k+1]==1 && 
			   tArray[i+1][k]==1 
			 ){
				returnArray = [17];
				return returnArray;	
	}
	
	else if(
			   tArray[i-1][k]==1 && 
			     tArray[i][k]==0 && 
			   tArray[i][k+1]==1 && 
			   tArray[i+1][k]==1 
			 ){
				returnArray = [16];
				return returnArray;	
	}
	
	else if(
			   tArray[i-1][k]==1 && 
			   tArray[i][k-1]==1 && 
			     tArray[i][k]==0 && 
			   tArray[i+1][k]==1 
			 ){
				returnArray = [15];
				return returnArray;	
	}
	
	else if(
			   tArray[i-1][k]==1 && 
			   tArray[i][k-1]==1 && 
			     tArray[i][k]==0 && 
			   tArray[i][k+1]==1 
			 ){
				returnArray = [14];
				return returnArray;	
	}
	
	else if(
			     tArray[i][k]==0 && 
			   tArray[i][k+1]==1 && 
			   tArray[i+1][k]==1 
			 ){
				returnArray = [13];
				return returnArray;	
	}
	
	else if(
			   tArray[i][k-1]==1 && 
			     tArray[i][k]==0 && 
			   tArray[i+1][k]==1 
			 ){
				returnArray = [12];
				return returnArray;	
	}
	
	else if(
			   tArray[i-1][k]==1 && 
			     tArray[i][k]==0 && 
			   tArray[i][k+1]==1 
			 ){
				returnArray = [11];
				return returnArray;	
	}
	
	else if(
			   tArray[i-1][k]==1 && 
			   tArray[i][k-1]==1 && 
			     tArray[i][k]==0 
			 ){
				returnArray = [10];
				return returnArray;	
	}

///////// OPTIMISATION DONE HERE ///////////////////	
	else if(
			   tArray[i-1][k]==1 && 
			     tArray[i][k]==0 && 
			   tArray[i+1][k]==1
			 ){
				returnArray = [8,2];
				return returnArray;	
	}
			
	else if(
			   tArray[i][k-1]==1 && 
			     tArray[i][k]==0 && 
			   tArray[i][k+1]==1 
			 ){
				returnArray = [6,4];
				return returnArray;	
	}
///////// TILES 18 AND 19 ARE REDUNDANT ////////////	

	else if(
			 tArray[i-1][k-1]==1 && 
			   tArray[i-1][k]==0 && 
			 tArray[i-1][k+1]==1 && 
			     tArray[i][k]==0 
			 ){
				returnArray = [9,7];
				return returnArray;	
	}
	
	else if(
			 tArray[i-1][k+1]==1 && 
			     tArray[i][k]==0 &&
			   tArray[i][k+1]==0 && 
			 tArray[i+1][k+1]==1
			 ){
				returnArray = [1,7];
				return returnArray;	
	}


	else if(
			     tArray[i][k]==0 && 
			 tArray[i+1][k-1]==1 && 
			   tArray[i+1][k]==0 && 
			 tArray[i+1][k+1]==1
			 ){
				returnArray = [1,3];
				return returnArray;	
	}
	
	else if(
			 tArray[i-1][k-1]==1 && 
			   tArray[i][k-1]==0 && 
			     tArray[i][k]==0 && 
			 tArray[i+1][k-1]==1 
			 ){
				returnArray = [9,3];
				return returnArray;	
	}
	
	else if(
			   tArray[i-1][k]==1 && 
			     tArray[i][k]==0 &&  
			   tArray[i+1][k]==0 && 
			 tArray[i+1][k+1]==1
			 ){
				returnArray = [9,7];
				return returnArray;	
	}
	
	else if(
			     tArray[i][k]==0 && 
			   tArray[i+1][k]==1 
			 ){
				returnArray = [2];
				return returnArray;	
	}
	
	else if(
			     tArray[i][k]==0 && 
			   tArray[i][k+1]==1 
			 ){
				returnArray = [4];
				return returnArray;	
	}
	
	else if(
			   tArray[i][k-1]==1 && 
			     tArray[i][k]==0 
			 ){
				returnArray = [6];
				return returnArray;	
	}

	else if(
			   tArray[i-1][k]==1 && 
			     tArray[i][k]==0 
			 ){
				returnArray = [8];
				return returnArray;	
	}
	
	else if(
			     tArray[i][k]==0 && 
			 tArray[i+1][k+1]==1
			 ){
				returnArray = [1];
				return returnArray;	
	}
	
	else if(
			     tArray[i][k]==0 && 
			 tArray[i+1][k-1]==1 
			 ){
				returnArray = [3];
				return returnArray;	
	}


	else if(
			 tArray[i-1][k+1]==1 && 
			     tArray[i][k]==0 
			 ){
				returnArray = [7];
				return returnArray;	
	}
	
	else if(
			 tArray[i-1][k-1]==1 && 
			     tArray[i][k]==0 
			 ){
				returnArray = [9];
				return returnArray;	
	}
	
	else{
				returnArray = [18];
				return returnArray;	
	}
}