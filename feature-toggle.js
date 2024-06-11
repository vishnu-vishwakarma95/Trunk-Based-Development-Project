// feature-toggle.js

const features = {
    newFeature: false,
  };
  
  function isFeatureEnabled(feature) {
    return features[feature];
  }
  
  if (isFeatureEnabled('newFeature')) {
    // Code for the new feature
    console.log(" New Feature Enabled - added new line for testing");
  } else {
    // Code for the existing functionality
    console.log(" Existing Functionality ");
  }
  
  module.exports = { isFeatureEnabled };
  