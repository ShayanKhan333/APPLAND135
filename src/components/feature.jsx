import React from 'react'
import FeatureBox from './featureBox'
import featureimg from '../assets/feature_1.png';
import featureimg1 from '../assets/feature_2.png';
import featureimg2 from '../assets/feature_3.png';

const feature = () => {
  return (
    <div id='features'>
      <div className="a-container">
     <FeatureBox img={featureimg} title="Deploy Your Programming Course"/>
     <FeatureBox img={featureimg1} title="Deploy Your Graphics Design Course"/>
     <FeatureBox img={featureimg2} title="Deploy Your Animation Course"/>
      </div>
    </div>
  )
}

export default feature
