import react, { useEffect, useState} from 'react';
import './App.css';
import tmdb from './tmdb';
import MovieRow from './components/MovieRow';
import FeaturedMovie from './components/FeaturedMovie';
import Header from './components/Header';



export default () => {

  const [movieList, setMovieList] = useState([]);
  const [featuredData, setFeaturedData] = useState(null);
  const [blackHeader, setBlackHeader] = useState(false);

  useEffect (() => {

   const loadAll = async () =>{

    //Chamar a Lista Total

    let list = await tmdb.getHomeList();
     setMovieList(list);
  

   //Chamar o Featured Aliatoriamente

   let originals = list.filter(i=>i.slug === 'originals');
   let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length -1));
   let chosen = originals[0].items.results[randomChosen];
   let chosenInfo = await tmdb.getMovieInfo(chosen.id, 'tv');
   setFeaturedData(chosenInfo);
   
  }
  
  
  loadAll();
}, []);

useEffect(()=>{
        
  const scrollListener = () =>{
    
      if(window.scrollY > 20){
        setBlackHeader(true);
      } else {
        setBlackHeader(false);
      }
      
    }
      window.addEventListener('scroll', scrollListener);

    return () =>{

      window.removeEventListener('scroll', scrollListener);
    }
}, []);



 return(
   <div className="page">

     <Header black={blackHeader} />

    {featuredData &&

      <FeaturedMovie item={featuredData} />
    
    }



     <section className="list">
       {movieList.map((item, key)=>(
       
       <MovieRow key={key} title={item.title} items={item.items}/>

       ))}
     </section>

     <footer>
           Website Construído Apenas Com O Objetivo de Aprendizagem Em Programação  React JS
     </footer>
         
         {movieList.length <= 0 && 
     <div className="loading">
       <img src="https://i.pinimg.com/originals/9a/02/aa/9a02aac51ed499e01518ac73dd954eb1.gif" alt="Caregando"></img>
     </div>
       }
       
   </div>
 );


}
