import MovieCard from "../components/MovieCard.jsx"; //másik fileból fuction importálás
//azért van az importál 2 db pont mert visszább kell lépnunk  a file rendszerbe!
import {useState} from "react";

function Home(){
    //searchQuery-be fogjuk tárolni az inputba irt étéket
    //setsearchQuerybe fogjuk tárolni a függvényt ami frissit az értéket azéert kell mert mindig változni fog pl ir a search részre
    const [searchQuery, setSearchQuery] = useState("");
    const movies =[
        {id:1,title:"John Wick", release_date:"2020"},
        {id:2,title:"nem tudom", release_date:"2021"},
        {id:3,title:"gőzöm sincs", release_date:"2012"},
        {id:4,title:"esélytelen", release_date:"2008"},
    ]
    const handelSearch = (e)=> {
    e.preventDefault(); //ha keresunk nem törli a mezőből rökktön és tiltja az alapbető https requestet
    }
    return <div className="home">
        <div className="movies-grid">
            <form className={search-form} onSubmit={handelSearch}> //ha onsbumit akkor csinélja ezt a functiont
                <input
                    type="text"
                    placeholder="Search for movies..."
                    className="search-input"
                    value={searchQuery} //itt hívjuk meg
                    //onChange változát érzékel(target) akkor változon a value
                    onChange={(e) => setSearchQuery(e.target.value)} // e az a esemény metaatadai
                />
                <button type="submit" className="search-button">Search</button>
            </form>
            {movies.map((movie => //.map az végig interál és ad nekik egy egyedi azonsitot az key-el!!
                <MovieCard movie= {movie} key={movie.id}</>))}
        </div>
    </div>
}
export default Home;