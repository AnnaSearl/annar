import { ApplyPluginsType } from '/Users/chenjiawen/personal/component/anna-remax-ui/node_modules/@umijs/runtime';
import { plugin } from './plugin';

const routes = [
  {
    "path": "/",
    "component": (props) => require('react').createElement(require('/Users/chenjiawen/personal/component/anna-remax-ui/node_modules/@umijs/preset-dumi/lib/themes/default/layout.js').default, {
      ...{"menus":{"*":{"*":[{"path":"/","title":"特性","meta":{}}]}},"locales":[],"navs":{},"title":"anna-remax-ui","mode":"doc","repoUrl":"https://github.com/AnnaSearl/anna-remax-ui"},
      ...props,
    }),
    "routes": [
      {
        "path": "/",
        "component": require('../../docs/README.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/README.md",
          "updatedTime": null,
          "slugs": [
            {
              "depth": 2,
              "value": "特性",
              "heading": "特性"
            },
            {
              "depth": 2,
              "value": "体验",
              "heading": "体验"
            },
            {
              "depth": 2,
              "value": "示例",
              "heading": "示例"
            },
            {
              "depth": 2,
              "value": "安装",
              "heading": "安装"
            },
            {
              "depth": 2,
              "value": "使用",
              "heading": "使用"
            },
            {
              "depth": 2,
              "value": "关于 Anna Remax UI",
              "heading": "关于-anna-remax-ui"
            }
          ],
          "title": "特性"
        },
        "title": "特性"
      }
    ],
    "title": "anna-remax-ui"
  }
];

// allow user to extend routes
plugin.applyPlugins({
  key: 'patchRoutes',
  type: ApplyPluginsType.event,
  args: { routes },
});

export { routes };
