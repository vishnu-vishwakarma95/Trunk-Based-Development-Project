const features = {
    newFeature: false,
  };
  
  function isFeatureEnabled(feature) {
    return features[feature];
  }
  
  if (isFeatureEnabled('newFeature')) {
    // Code for the new feature
    console.log("New Feature Enabled");
  } else {
    // Code for the existing functionality
    console.log("Existing Functionality");
  }
  