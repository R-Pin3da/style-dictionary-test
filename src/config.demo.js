export default {
  source: ['src/tokens/**/*.json'],
  platforms: {
    css: {
      transformGroup: 'css',
      buildPath: 'build/css/',
      files: [
        {
          destination: '_variables.css',
          format: 'css/variables'
        }
      ]
    },
    android: {
      transformGroup: 'android',
      buildPath: 'build/android/',
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
    },
    compose: {
      transformGroup: 'compose',
      buildPath: 'build/compose/',
      files: [
        {
          destination: 'StyleDictionaryColor.kt',
          format: 'compose/object',
          options: {
            className: 'StyleDictionaryColor',
            packageName: 'StyleDictionaryColor'
          },
          filter: {
            $type: 'color'
          }
        },
        {
          destination: 'StyleDictionarySize.kt',
          format: 'compose/object',
          options: {
            className: 'StyleDictionarySize',
            packageName: 'StyleDictionarySize',
            type: 'float'
          },
          filter: {
            $type: 'dimension'
          }
        }
      ]
    },
    ios: {
      transformGroup: 'ios',
      buildPath: 'build/ios/',
      files: [
        {
          destination: 'StyleDictionaryColor.h',
          format: 'ios/colors.h',
          options: {
            className: 'StyleDictionaryColor',
            type: 'StyleDictionaryColorName'
          },
          filter: {
            $type: 'color'
          }
        },
        {
          destination: 'StyleDictionaryColor.m',
          format: 'ios/colors.m',
          options: {
            className: 'StyleDictionaryColor',
            type: 'StyleDictionaryColorName'
          },
          filter: {
            $type: 'color'
          }
        },
        {
          destination: 'StyleDictionarySize.h',
          format: 'ios/static.h',
          options: {
            className: 'StyleDictionarySize',
            type: 'float'
          },
          filter: {
            $type: 'dimension'
          }
        },
        {
          destination: 'StyleDictionarySize.m',
          format: 'ios/static.m',
          options: {
            className: 'StyleDictionarySize',
            type: 'float'
          },
          filter: {
            $type: 'dimension'
          }
        }
      ]
    },
    iosSwift: {
      transformGroup: 'ios-swift',
      buildPath: 'build/ios-swift/',
      files: [
        {
          destination: 'StyleDictionary+Class.swift',
          format: 'ios-swift/class.swift',
          options: {
            className: 'StyleDictionaryClass'
          }
        },
        {
          destination: 'StyleDictionary+Enum.swift',
          format: 'ios-swift/enum.swift',
          options: {
            className: 'StyleDictionaryEnum'
          }
        },
        {
          destination: 'StyleDictionary+Struct.swift',
          format: 'ios-swift/any.swift',
          options: {
            className: 'StyleDictionaryStruct',
            imports: 'SwiftUI',
            objectType: 'struct',
            accessControl: 'internal'
          }
        }
      ]
    },
    iosSwiftSeparateEnums: {
      transformGroup: 'ios-swift-separate',
      buildPath: 'build/ios-swift/',
      files: [
        {
          destination: 'StyleDictionaryColor.swift',
          format: 'ios-swift/enum.swift',
          options: {
            className: 'StyleDictionaryColor'
          },
          filter: {
            $type: 'color'
          }
        },
        {
          destination: 'StyleDictionarySize.swift',
          format: 'ios-swift/enum.swift',
          options: {
            className: 'StyleDictionarySize'
          },
          filter: {
            $type: 'dimension'
          }
        }
      ]
    }
  }
}
