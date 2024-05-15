/* eslint-disable no-undef */
const flowbite = require("flowbite-react/tailwind");
  /** @import('tailwindcss').Config */

import { Flowbite } from 'flowbite-react';

export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',

    flowbite.content(),
  ],
  theme: {
    extend: {},
  },
  plugins: [
    flowbite.plugin(),
  ],
};
