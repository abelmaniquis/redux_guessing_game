# redux_guessing_game


function feedback(diff){
    if(diff === 0){
      console.log("correct");
    }else if (diff <= 5){
        console.log("scalding");
    }else if (diff <= 10) {
        console.log("burning");
    } else if (diff <= 20) {
        console.log("hot");
    } else if (diff <= 30) {
        console.log("warm");
    } else if (diff <= 40) {
        console.log("cool");
    } else if (diff < 50) {
        console.log("cold");
    } else if (diff >= 50) {
        console.log("freezing");
    }
};