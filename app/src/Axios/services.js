
import { AxiosInstance } from "./axios";
import { toast } from 'react-toastify'; // імпорт білліотеки повідомлень


export function ServicesPersidIn (userfamily, osr, persuid, setData) {

    var allSpacesRe = /\s+/g;
    

    // var userfamily = family.current.value;
    // var osr = osrV.current.value;

    if (userfamily.replace(allSpacesRe, "") === ""){
        toast.error("Ви не ввели прізвище.");
        document.getElementById('userfamily').focus();
        return false;
    }
    if (persuid.length === 9){
        persuid = '0'+persuid;
    }
    if (persuid.length !== 10){
        toast.error("Ви ввели невірний особовий рахунок. Спробуйте ще раз.");
        return false;
    }
    if (persuid<100000000 || persuid>4100000000){
        toast.error("Ви ввели невірний особовий рахунок. Спробуйте ще раз.");
        return false;
    }
    if (osr === 'loe' && persuid>3200000000){
        toast.error("Ви ввели невірний особовий рахунок. Спробуйте ще раз.");
        return false;
    }
    if (osr !== 'loe' && persuid<3200000000){
        toast.error("Ви ввели невірний особовий рахунок. Спробуйте ще раз.");
        return false;
    }

    const config = {     
        headers: { 'content-type': 'multipart/form-data' }
    }
    
    const sendpersuid = {
        persuid: persuid,
        family: userfamily,
        osr: osr,
    };

    AxiosInstance.post('/lez/serviceonline/persuid', sendpersuid, config)
        .then(response => {
            if (response.data.success){
                setData(response.data);
            }
            else {
                toast.error(response.data.error);
            }
        })
        .catch(error => {
            toast.error("Помилка при відправці запиту");
    });    
}   

export function ServicesReqwestDeepLink(data, setShow, setQr){
   // toast.error (JSON.stringify(data));
   const config = {     
        headers: { 'content-type': 'multipart/form-data' }
    }

    const senddata = {
        service: data.service,
        userdata: data,
    };

    AxiosInstance.post('/lez/serviceonline/sharingdeeplink', senddata, config)
        .then(response => {
            if (response.data.success){
                if (response.data.type === 'computer'){
                    //відкрити 
                    setShow(true);
                    setQr(response.data.request) 
                }
                else {
                    window.location.href = response.data.deeplink;
                }
                ServicesReqwestResultDoc(response.data, setShow);
            }
            else {
                toast.error(response.data.error);
            }
        })
        .catch(error => {
            toast.error("Помилка при відправці запиту");
    });   
    
}

function ServicesReqwestResultDoc(data, setShow) {
    const config = {     
        headers: { 'content-type': 'multipart/form-data' }
    }
    const senddata = {
        service: data.service,
        request_id: data.request,
    };
    var type_page = '';
    if (data.type_service === 'pobut'){
        type_page = 'clients';
    }
    if (data.type_service === 'zbut'){
        type_page = 'company';
    }
    
    
    var timerid = setInterval(function () {
        AxiosInstance.post('/lez/serviceonline/resultdoc', senddata, config)
        .then(response => {
            if (response.data.success){
                //toast.error (senddata.service+' - true');
                clearInterval(timerid);
                setShow(false);
                localStorage.setItem('request_id', data.request);
                localStorage.setItem('step', 'signature');
                window.location.href ='/' + type_page + '/service_online/' + data.service;
                //закрити модальне вікно і перейти на крок 3
            }
            
        })
        .catch(error => {
            toast.error("Помилка при відправці запиту");
    });   
    }, 4000);
}


export function ServicesDataSign(requestId, active, setDataSign){
    const config = {     
        headers: { 'content-type': 'multipart/form-data' }
    }
    const senddata = {
        request_id: requestId,
    };

    AxiosInstance.post('/lez/serviceonline/setdatasign', senddata, config)
    .then(response => {
        if (response.data.success){
            if (!active) {
                setDataSign(response.data); 
            ;}
        }
        else {
            toast.error(response.data.error);
        }
    })
    .catch(error => {
        toast.error("Помилка при відправці запиту");
});   
}
