const cityName=document.getElementById('cityName');
const city_name=document.getElementById('city_name');
const SubmitButton=document.getElementById('SubmitButton');  // taking valuse from weather.hbs  from their id 
const temp1=document.getElementById('temp1');
const temp_status=document.getElementById('temp_status');
const today_date=document.getElementById('today_date');
const day=document.getElementById('day');
const  getInfo =async(event)=>{  //function call to event
    event.preventDefault();
   //  alert('hellow');
    
    // console.log("komal");
     let cityVal=cityName.value;
     console.log(cityVal);
    if(cityVal=="")
  {
    city_name.innerHTML=`please enter required details`;
  }else{
      try{
    // let url=`api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=6d7ffff9211c2996ff494e807462f785`
    let url =`http://api.openweathermap.org/data/2.5/weather?q=${cityVal}&appid=6d7ffff9211c2996ff494e807462f785`
    const response=await fetch(url);
     const data= await response.json();
     console.log(data);
     const arrData=[data]; // converting into object
     today_date.innerHTML=arrData[0].coord.lat+ " is latitute";
     day.innerHTML=arrData[0].coord.lon +"  is longitute";
     temp1.innerHTML=arrData[0].main.temp+"  is temp";
    //  temp_status.innerHTML=arrData[0].weather[0].main;
     city_name.innerHTML=`${arrData[0].name},${arrData[0].sys.country}`;
    //  city_name.innerHTML=arrData[0].name;
         console.log(city_name.innerHTML);
     const icond=arrData[0].weather[0].main;
     if(icon=="Clouds")
     {
        temp_status.innerHTML="<i class='fas fa-cloud'></i>";
     }else if(icon=="Rain"){
        temp_status.innerHTML="<i class='fas fa-cloud-rain'></i>";

     }else if(icon=="Clear"){
        temp_status.innerHTML="<i class='fas fa-cloud-sun'></i>";
     }else{
        temp_status.innerHTML="<i class='fas fa-rainbow'></i>";
     }

         }catch{
        // city_name.innerHTML=`enter name properly`;
               }
   }
}

SubmitButton.addEventListener('click',getInfo); // making event listner
