const IS_DEV = process.env.APP_ENV === 'development';

export default () => {
  return {
    name: IS_DEV ? 'Petros (DEV)' : 'Petros',
    slug: IS_DEV ? 'petros-dev' : 'petros',
    version: '1.0.0',
    orientation: 'portrait',
    icon: './assets/icon.png',
    userInterfaceStyle: 'light',
    splash: {
      image: './assets/splash.png',
      resizeMode: 'contain',
      backgroundColor: '#ffffff',
    },
    updates: {
      fallbackToCacheTimeout: 0,
    },
    assetBundlePatterns: ['**/*'],
    android: {
      adaptiveIcon: {
        foregroundImage: './assets/adaptive-icon.png',
        backgroundColor: '#FFFFFF',
      },
    },
    web: {
      favicon: './assets/favicon.png',
    },
    extra: {
      eas: {
        projectId: 'aa1754ff-9f36-4ea4-a47d-7663c4122d53',
      },
    },
    ios: {
      supportsTablet: true,
      bundleIdentifier: IS_DEV ? 'com.dev.petros' : 'com.petros',
    },
  };
};
