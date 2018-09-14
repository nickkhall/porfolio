import React from 'react';

// Components
import CommonSection from 'components/Common/CommonSection';

const Hero = () => (
  <CommonSection className="hero">
    <h2 className="title">Passion</h2>
    <img
      className="hero-image"
      title="Server Room"
      alt="Server Room"
      src="../client/static/imgs/main-servers.png"
    />
  </CommonSection>
);

export default Hero;
