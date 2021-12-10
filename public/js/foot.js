const movieName=document.getElementById('movieName');
const city_name=document.getElementById('city_name');
const SubmitButton=document.getElementById('SubmitButton');  // taking valuse from weather.hbs  from their id 
const cast=document.getElementById('cast');
const director=document.getElementById('director');
const gener=document.getElementById('gener');
const lang=document.getElementById('lang');
const time=document.getElementById('time');
const po=document.getElementById('po');
const DVD=document.getElementById('DVD');

const  getInfo =async(event)=>{  //function call to event
    event.preventDefault();  // so that page will not relode
    // alert('hellow new');
    
    // console.log("komal");
     let moVal=movieName.value;
     console.log(moVal);
    if(moVal=="")
  {
    day.innerHTML=`please enter movie name `;
  }else{
    // let url=`http://www.omdbapi.com/?i=${moVal}&apikey=3840c011`;

    let url=`http://www.omdbapi.com/?t=${moVal}&apikey=3840c011`;
    // let url =`http://api.openweathermap.org/data/2.5/weather?q=${moVal}&appid=6d7ffff9211c2996ff494e807462f785`

    const response =await fetch(url);
    // console.log(response);
    const data=await response.json();
    console.log(data);
    const arrobj=[data];
    po.innerHTML=`<img src=" ${arrobj[0].Poster}"/>` 
   
    time.innerHTML=arrobj[0].Runtime;
    cast.innerHTML=arrobj[0].Actors;
    DVD.innerHTML=arrobj[0].DVD;
    director.innerHTML=arrobj[0].Director;
    gener.innerHTML=arrobj[0].Genre;
    lang.innerHTML=arrobj[0].Language;
   
    // po.innerHTML=arrobj[0].country;
    // <img src="${arrobj[0].Poster}"></img>

  }
}
SubmitButton.addEventListener('click',getInfo); // making event listner
