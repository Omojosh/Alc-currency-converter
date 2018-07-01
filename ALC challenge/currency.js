document.getElementById('convertIt').addEventListener('click', convertCurrency);

 function convertCurrency(e){
    const from = document.getElementById('from').value;
    const to = document.getElementById('to').value;
    

    let http = new XMLHttpRequest();
    http.open('GET', `http://free.currencyconverterapi.com/api/v5/convert?q=${from}_${to},${to}_${from}&compact=ultra`, true);

    http.onreadystatechange = () =>{

        if(http.readyState ===4 && http.status === 200){
            const object = http.responseText;
            const objectVal = JSON.parse(object);
            const Amount = document.getElementById('amount').value;
            const val = objectVal[`${from}_${to}`];
           
            let total =  Amount*val;
            const Answer = document.getElementById('result').value = ((total).toFixed(2));
            console.log(Answer);  
        };
    }
    http.send();
    e.preventDefault();
};

