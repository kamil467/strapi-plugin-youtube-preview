
import { getTranslation } from './utils/getTranslation';
import { PLUGIN_ID } from './pluginId';
import { Initializer } from './components/Initializer';
import { PluginIcon } from './components/PluginIcon';

export default {
  register(app: any) {
    app.customFields.register({
      name: 'youtube',
      pluginId: 'youtube-preview',
      type: 'string',
      intlLabel: {
        id: getTranslation('youtube.label'),
        defaultMessage: "YouTube URL"
      },
      intlDescription: {
        id: getTranslation('youtube.description'),
        defaultMessage: "Enter a YouTube video URL"
      },
      icon: PluginIcon,
      components: {
        Input: async () => {
          const component = await import('./components/YoutubeInput');
          return component.Input;
        }
      },
      options: {
        base: [
          {
            sectionTitle: {
              id: getTranslation('youtube.options.section'),
              defaultMessage: 'Settings',
            },
            items: [
              {
                name: 'options.placeholder',
                type: 'string',
                intlLabel: {
                  id: getTranslation('youtube.options.placeholder'),
                  defaultMessage: 'Placeholder text',
                },
                defaultValue: 'https://www.youtube.com/watch?v=...',
              },
            ],
          },
        ],
        advanced: [
          {
            sectionTitle: {
              id: getTranslation('youtube.options.section'),
              defaultMessage: 'Settings',
            },
            items: [
              {
                name: 'required',
                type: 'checkbox',
                intlLabel: {
                  id: getTranslation('youtube.options.advanced.required'),
                  defaultMessage: 'Required field',
                },
                description: {
                  id: getTranslation('youtube.options.advanced.required.description'),
                  defaultMessage: 'You won\'t be able to create an entry if this field is empty',
                },
              },
              {
                name: 'options.placeholder',
                type: 'string',
                intlLabel: {
                  id: getTranslation('youtube.options.advanced.placeholder'),
                  defaultMessage: 'Placeholder text',
                },
                defaultValue: 'https://www.youtube.com/watch?v=...',
              },
            ],
          },
        ],
      },
    });

    app.addMenuLink({
      to: `plugins/${PLUGIN_ID}`,
      icon: PluginIcon,
      intlLabel: {
        id: getTranslation('plugin.name'),
        defaultMessage: PLUGIN_ID,
      },
      Component: async () => {
        const component = await import('./pages/App');
        return component.App;
      },
    });

    app.registerPlugin({
      id: PLUGIN_ID,
      initializer: Initializer,
      isReady: false,
      name: PLUGIN_ID,
    });
  },

  bootstrap() {},

  async registerTrads({ locales }: { locales: string[] }) {
    const importedTrads = await Promise.all(
      locales.map(async (locale) => {
        try {
          const { default: data } = await import(`./translations/${locale}.json`);
          return { data, locale };
        } catch (error) {
          return {
            data: {},
            locale,
          };
        }
      })
    );

    return importedTrads;
  },
};