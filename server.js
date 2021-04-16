let state;
setInterval(() => {
    state = process.env.STATE;
    if (state) {
        fetch('https://practicum-demo.herokuapp.com/status')
    } 
    //
},2000);