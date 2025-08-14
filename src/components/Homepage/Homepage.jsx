import React from 'react';
import HeroSlider from './HeroSlider.jsx';
import NewsSection from './NewsSection.jsx';
import Gallery from './Gallery.jsx';
// import AcademicExcellence from './Academic.jsx';
import HomeNewsHighlights from './news.jsx'


export default function HomePage(){
    return (
        <>
          <main >
            <HeroSlider />
            {/* <AcademicExcellence /> */}
            <div className="container">
              <NewsSection />
              <HomeNewsHighlights />
              {/* <Gallery /> */}
            </div>
          </main>
        </>
      );
}