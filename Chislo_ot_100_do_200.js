function cqloChislo(input) {

    let num = Number(input[0]);

    if (num < 100){
        console.log("Less than 100");
    } 
    if (num > 100 && input < 200){
        console.log("Between 100 and 200");
    }
    if (num > 200){
        console.log("Greater than 200");
    }

    
}
cqloChislo(["95"])
cqloChislo(["120"])
cqloChislo(["210"])