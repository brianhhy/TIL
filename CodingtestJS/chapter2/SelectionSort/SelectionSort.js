function selectionSort(array){
    let indexMin, temp;
    for(let i = 0; i<array.length-1;i++){
        indexMin = i;
        for(let j = i+1; j<array.length;j++){
            if(array[i] < array[indexMin]){
                indexMin = j;

            }                
        }
        temp = array[indexMin];
        array[indexMin] = array[i];
        array[i] = temp;
    }
    
}