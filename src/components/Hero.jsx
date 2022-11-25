import { PrismicRichText, useAllPrismicDocumentsByType, usePrismicDocuments } from '@prismicio/react'

// Styles
import "./Hero.css"

// Assets
import arrow from "../assets/Arrow.svg"
import { useEffect, useState } from 'react'

export default function Hero () {
  const [current, setCurrent] = useState()

  const [document, { state }] = useAllPrismicDocumentsByType('article', {
    orderings: {
      field: 'my.article.number',
      direction: 'desc'
    }
  });

  useEffect(() => {
    if (document?.length) {
      setCurrent(document[0])
    }
  }, [document])


  return (
    <div className="hero-wrapper">
      <section className="hero">
        {state === 'loading' ? (
            <p>Loading…</p>
          ) : (
          <a 
            href={current?.data.mailchimp_link.url} 
            target="_blank"
          >
            <div 
              className="base"
              style={{ backgroundImage: `url(${current?.data.image.url}.jpeg)` }} 
            >
              <div>
                <div className="left">
                  <span>MeanTimes Newsletter #{current?.data.number}</span>
                  <h2>{current?.data.title}</h2>
                </div>
                <div className="right">
                  <img src={arrow} />
                  <span>14/10/22</span>
                </div>
              </div>
            </div>
          </a>
        )}
      </section>
      <section className="archive">
        <p className="archive-title">The MeanTimes Newsletter</p>
        {state === 'loading' ? (
          <p>Loading…</p>
        ) : (
          document && document.slice(1).map((article, index) => (
            <a
              href={article.data.mailchimp_link.url} 
              target="_blank"
              key={index}
            >
              <div 
                style={{backgroundImage: `url(${article.data.image.url})`}}
              >
                <div>
                  <p>{article.data.title}</p>
                  <p style={{fontSize: "1rem", marginTop: "5px"}}>
                    Newsletter #{article.data.number}
                  </p>
                </div>
              </div>
            </a>
          ))
        )}
      </section>
    </div>
  )
}