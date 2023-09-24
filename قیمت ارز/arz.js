
let gh_d=0;
let gh_dr=0;
const data=async()=>{
   let idata =  await fetch("https://amirbay.ir/api/CurrencyApi/GetLatestCurrency")
   .then((response) => response.json())
   .then((i) =>{
    gh_d = i.USDPrice;
    gh_dr = i.UAEPrice;
    document.getElementById("get2").innerHTML= thun2(gh_d);
    document.getElementById("getdr").innerHTML= thun2(gh_dr);
   } )
   


    }
function thun2(jjj){
    var num=jjj;
    var num_parts = num.toString().split(".");
    num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return (num_parts);
}

