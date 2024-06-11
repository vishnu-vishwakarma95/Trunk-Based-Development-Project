// feature-toggle.test.js

const { isFeatureEnabled } = require('./feature-toggle');

test('Feature toggle should be disabled by default', () => {
  expect(isFeatureEnabled('newFeature')).toBe(false);
});
