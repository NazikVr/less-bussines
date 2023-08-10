const Pay = () => {
    var paramsString = document.location.search; 
    var searchParams = new URLSearchParams(paramsString);
    var url = '';
    var gaz = searchParams.get("t"); 
    if (gaz && gaz !== ''){
        var data = gaz.split('_s=');
        var sum = '';
        if (data[1] && data[1] !== ''){
            var summ = data[1].split('.')
            if (summ[1] || summ[1] === ''){
                summ[1] = '00';
            }
            if (summ[1].length === 1){
                summ[1] = summ[1]+'0';
            }
            sum = '&invoice=' + summ[0] + '.' + summ[1];
        }
        url = 'https://www.ipay.ua/ua/charger?bill_id=3187&acc='+data[0]+sum;
    }
    else {
        var el = searchParams.get("p"); 
        if (el && el !== ''){
           url = 'https://www.ipay.ua/ua/charger?bill_id=2840&acc='+el;
        }
    }
    window.location.href = url;
}

export default Pay