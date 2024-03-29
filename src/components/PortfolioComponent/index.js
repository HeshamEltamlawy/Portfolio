import './index.scss'
import portfolioData from "../../Data/portfolio.json";
const Portfolio=() =>{



    const renderPortfolio = (portfolio)=> {
        return( 
            <div className="images-container">
            {
                portfolio.map((port,idx)=>{
                    return(
                        <div className="image-box" key={idx} >
                            <img 
                            src={port.cover}
                            className="portfolio-image"
                            alt="portfolio"/>
                            <div className="content">
                                <p className="title" >{port.title}</p>
                                <h4 className="description" >{port.description}</h4>
                                <button className="btn"  
                                onClick={() => window.open(port.url)}
                                >View</button>

                            </div>

                        </div>
                        
                    )
                })

            }

            </div>
        );
    }


    return(
        <>
        <div className="portfolio-page">
            <div>{renderPortfolio(portfolioData.portfolio)}</div>

        </div>
        </>
    )
} 



export default Portfolio;