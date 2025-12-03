const n = 4;
const steps = (n) => {
    for (let row =0; row < n; ++row) {
        let step = ""
        for (let column = 0; column < n; ++column) {
            if (column <= row){
                step += "#"
            }
            else{
                step += " "
            }
        }
        console.log(step)
    }
};
