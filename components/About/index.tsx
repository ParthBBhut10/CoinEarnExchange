import React from 'react';
import './styles.css'; // Import the CSS for styling

const timelineData = [
  {
    step: 1,
    title: "Development",
    subtitle: "Platform",
    description: (
      <>
        1. Build Core AI trading algorithms, Solana sniping bots, and predictive engine.<br />
        2. Token creation and ICO/IEO for early investors.<br />
        3. Launch staking and deposit systems for initial traders.
      </>),
    imageUrl: "https://www.navines.com/wp-content/uploads/Ecommerce-Development-Service-Navines-Solution.gif",
  },
  {
    step: 2,
    title: "Staking Program",
    subtitle: "AI Refinement &",
    description:
      (<>
        1. Roll out staking opportunities with fundleasing options for traders.<br />
        2. Improve the AI trading algorithm based on live market data.
      </>),
    imageUrl: "https://believersias.com/wp-content/uploads/2023/06/Blog-Featured-Images-GIF-7.gif",
  },
  {
    step: 3,
    title: "Integration",
    subtitle: "Sniping Bot Release & Governance",
    description:
      (
        <>
          1. Integrate Solana sniping bots, allowing users to activate bots for Solana DEX trading.<br />
          2. Begin decentralizing platform governance with a DAO system.
        </>
      ),
    imageUrl: "https://miro.medium.com/v2/resize:fit:1400/1*NY6izOmuPmycSHjZ6v0R2w.gif",
  },
  {
    step: 4,
    title: "Features",
    subtitle: "Global Expansion & Advanced",
    description:
      (<>
        1. Expansion of predictive capabilities to cover additional asset classes like stocks and forex.<br />
        2. Launch premium features for token holders, including early access to new trading algorithms.
      </>),
    imageUrl: "https://i.pinimg.com/originals/a4/cd/33/a4cd33a38ddb7520ce50c4ffe4debcf3.gif",
  },
  {
    step: 5,
    title: "Fund",
    subtitle: "Index",
    description:
      (<>
        1. Launch of a diversified index fund for stable returns.<br />
        2. Focus on high-growth sectors within the crypto market.<br />
        3. Regular rebalancing to optimize performance.<br />
        4. Educational resources for investors on fund management.
      </>),
    imageUrl: "https://blog.flipsidecrypto.com/wp-content/uploads/2021/11/SolanaSpin_Notion_01-1.gif",
  },
];

const Timeline = () => {
  return (
    <section id="timeline">
      <h1>ROADMAP</h1>
      <p className="leader">
        Innovative Journey with COIN EARN EXCHANGE
      </p>
      <div className="demo-card-wrapper">
        {timelineData.map((item) => (
          <div
            key={item.step}
            className={`demo-card demo-card--step${item.step}`}
          >
            <div className="head">
              <div className="number-box">
                <span>{item.step < 10 ? `0${item.step}` : item.step}</span>
              </div>
              <h2>
                <span className="small">{item.subtitle}</span> {item.title}
              </h2>
            </div>
            <div className="body">
              <p>{item.description}</p>
              <img src={item.imageUrl} alt={item.title} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Timeline;
