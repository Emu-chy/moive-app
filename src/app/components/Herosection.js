import React from "react";
import Image from "next/image";
import Link from "next/link";

import heroStyles from "../styles/herosection.module.css";
import commonStyles from "../styles/common.module.css";

const Herosection = () => {
    return (
        <main className={heroStyles.main_section}>
            <div className={commonStyles.container}>
                <div className={commonStyles.grid_two_section}>
                    <div className={heroStyles.hero_content}>
                        <h1>LETS WATCH MOVIE TOGETHER </h1>
                        <p>
                            From award-winning dramas to blockbuster action movies, we&apos;ve got
                            you covered. Browse our selection of the latest and greatest movies, and
                            find your new favorite today.
                        </p>

                        <Link href="/movie">
                            <button>Explore Movies</button>
                        </Link>
                    </div>
                    <div className={heroStyles.hero_image}>
                        <Image src="/home.svg" alt="" height={500} width={500} />
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Herosection;
