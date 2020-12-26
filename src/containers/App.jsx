import React, {useState, useEffect} from 'react';
import Header from '../components/Header';
import '../assets/styles/App.scss'
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import Footer from '../components/Footer';

const App = () => {
    
    const [videos, setVideos] = useState([]);
    
    useEffect(()=>{
        const fetchVideos = async () => { 
            try{
                const response  = await fetch('http://localhost:3000/initalState');
                const data = await response.json();
                setVideos(data.trends);
                console.log(data);
            }catch(err){
                console.log(err);
            }
        }
        fetchVideos();
    },[])

    return(
    <div className="App">
        <Header />
        <Search/>

        <Categories>
            <Carousel>
             {videos ?  videos.map(video => <CarouselItem data={video}/>): <span>Loading...</span>}
            </Carousel>
        </Categories>
        <Footer/>
    </div>
    )};

export default App;