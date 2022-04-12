const chooseOptimalDistance = (t, k, ls) => {
    var ar=[];
    var summ=[];
    let control=[];
    let combinations=[];
    stepCombination=(step) =>{
        for(var i =0;i<ls.length;i++){
            if(!control[i]){
                control[i]=true;
                combinations[step]=ls[i];
                if(step<k-1){
                    stepCombination(step+1, i+1)
                } else {
                    if(!ar.includes(combinations)){
                    ar.push(([]).concat(combinations));
                    var initialValue = 0;
                    summ.push(([]).concat(combinations.reduce((a,b)=>{return a+b;}, initialValue)));
                    } 
                }
                control[i]=false;
            }

        }
    }
stepCombination(0);
var summFilter = summ.filter(x => x <= t).sort();
if(!!summFilter.length){
    return summFilter[summFilter.length-1];
}
    else
        return null;
}
console.log(chooseOptimalDistance(174,3,[51, 56, 58, 59, 61]));//173
console.log(chooseOptimalDistance(163, 3, [50])); // null

