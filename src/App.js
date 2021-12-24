import React, {useEffect} from 'react';
import Tmdb from './Tmdb';
import MovieRow from './components/MovieRow';
import './App.css';
import FeaturedMovie from './components/FeaturedMovie';
import Header from './components/Header';



export default () => {

    const [movielist, setMovieList] = React.useState([]);
    const [featuredData, setFeaturedData] = React.useState(null);
    const [blackHeader, setBlackHeader] = React.useState(true);

    useEffect(() => {
        const loadAll =async() => {
            let list = await Tmdb.getHomeList();
            setMovieList(list);

            // Obtendo o Featured
            let originals = list.filter(i=>i.slug === 'originals');
            let ramdomMovie = Math.floor(Math.random() * (originals[0].items.results.length - 1));
            let movie = originals[0].items.results[ramdomMovie];
            let movieInfo = await Tmdb.getMovieInfo(movie.id, 'tv');

            setFeaturedData(movieInfo);
        }
        loadAll();
    }, []);

    useEffect(() => {
        const scrollListener = () => {
            if(window.scrollY > 10) {
                setBlackHeader(true);
            } else {
                setBlackHeader(false); 
            }
        }

        window.addEventListener('scroll', scrollListener);
        return () => {
            window.removeEventListener('scroll', scrollListener);
        }
    }, []);

    return (
        <div className="page">

            <Header black={blackHeader} />

            {featuredData && 
                <FeaturedMovie item={featuredData} />
            }

            <section className="lists">
                {movielist.map((item, key) =>(
                    <MovieRow key={key} title={item.title} items={item.items}/>
                ))}    
                
            </section>
        </div>
    );
}