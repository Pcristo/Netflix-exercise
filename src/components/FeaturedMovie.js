import React from 'react';
import './FeaturedMovie.css'
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import AddIcon from '@material-ui/icons/Add';

export default ({item}) => {

    let firstDate = new Date(item.first_air_date);
    let genres = [];
    for(let i in item.genres){
        genres.push( item.genres[i].name);
    }


    return (
      
        <section className="featured" style={{

            backgroundSize:'cover',
            backgroundPosition: 'center',
            backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`




        }}>

            <div className="featured--vertical">
               <div className="featured--horizontal">
                 <div className="featured--name">{item.original_name}</div>
                    <div className="featured--info">
                       <div className="featured--points">{item.vote_average}</div>
                          <div className="featured--year">{firstDate.getFullYear()}</div>
                          <div className="featured--season">{item.number_of_seasons} Temporada{item.number_of_seasons !=1 ?'s' : ''}</div>
                          </div>
                          <div className="featured--description">{item.overview}</div>
                        <div className="featured--buttons">
                           <a href={`/watch/${item.id}`} className="button--left"> <PlayArrowIcon className="playarrow" />Assistir</a>
                           <a href={`/list/add${item.id}`} className="button--right"><AddIcon className="playarrow" /> Minha Lista</a>
                       
                    </div>

                    <div className="featured--genres">
                        <strong>Gêneros:</strong> {genres.join(', ')}

                    </div>
            
               </div>
            </div>
        </section>
        
    );


}