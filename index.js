function squares(a, b) {
    let count =0;
    for(let i = Math.floor(Math.sqrt(a)); i<=Math.floor(Math.sqrt(b)); i++){
        if((i * i)>=a ){
            count++;
        }
    }
    return count;
}
