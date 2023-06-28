import Link from "next/link";
import React from "react";
import styles from "../styles/common.module.css";
import MovieCart from "../components/MovieCart";

const MoviePage = async () => {
    const url = process.env.RAPID_KEY;
    const options = {
        method: "GET",
        headers: {
            "X-RapidAPI-Key": "b1eee911ffmshebdc545b53a9696p12fba3jsnc06300bcf729",
            "X-RapidAPI-Host": "netflix54.p.rapidapi.com",
        },
    };

    const res = await fetch(url, options);
    const data = await res.json();
    const mainData = data.titles;

    // console.log(data);

    return (
        <>
            <section className={styles.movieSection}>
                <div className={styles.container}>
                    <h1>Movie & Series</h1>
                    {mainData.map((currElm) => {
                        return <MovieCart key={currElm.id} {...currElm} />;
                    })}
                </div>
            </section>
        </>
    );
};

export default MoviePage;
