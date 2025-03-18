import type { Core } from '@strapi/strapi';

const register = ({ strapi }: { strapi: Core.Strapi }) => {
  // register phase
  strapi.customFields.register({
    name: "youtube",
    plugin: "youtube-preview",
    type: "string",
    
    inputSize: {
      // optional
      default: 6,
      isResizable: true,
    }
    
  });
};

export default register;
