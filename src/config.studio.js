export default {
  source: ['src/tokens/studio/**/*.json'],
  log: {
    verbosity: 'verbose'
  },
  preprocessors: [
    'tokens-studio'
  ],
  platforms: {
    android: {
      buildPath: 'build/android/',
      transformGroup: 'android',
      files: [
        {
          destination: 'font_dimens.xml',
          format: 'android/fontDimens'
        },
        {
          destination: 'colors.xml',
          format: 'android/colors'
        },
        {
          destination: 'dimens.xml',
          format: 'android/dimens'
        },
        {
          destination: 'integers.xml',
          format: 'android/integers'
        }
      ]
    }
  }
};
