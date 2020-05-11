import { ApplyPluginsType } from '/Users/chenjiawen/personal/component/anna-remax-ui/node_modules/@umijs/runtime';
import { plugin } from './plugin';

const routes = [
  {
    "path": "/_demos/index",
    "component": require('/Users/chenjiawen/personal/component/anna-remax-ui/docs/components/data-display/card/index.tsx').default,
    "exact": true
  },
  {
    "path": "/_demos/index-1",
    "component": require('/Users/chenjiawen/personal/component/anna-remax-ui/docs/components/data-entry/search-bar/index.tsx').default,
    "exact": true
  },
  {
    "path": "/_demos/index-2",
    "component": require('/Users/chenjiawen/personal/component/anna-remax-ui/docs/components/general/button/index.tsx').default,
    "exact": true
  },
  {
    "path": "/_demos/index-3",
    "component": require('/Users/chenjiawen/personal/component/anna-remax-ui/docs/components/general/cell/index.tsx').default,
    "exact": true
  },
  {
    "path": "/",
    "component": (props) => require('react').createElement(require('/Users/chenjiawen/personal/component/anna-remax-ui/node_modules/@umijs/preset-dumi/lib/themes/default/layout.js').default, {
      ...{"menus":{"*":{"*":[{"path":"/","title":"Anna Remax UI - 一款基于Remax框架开发的UI组件库","meta":{}}],"/components":[{"title":"General","path":"/components/general","meta":{"order":0},"children":[{"path":"/components/general/button","title":"Button","meta":{}},{"path":"/components/general/cell","title":"Cell","meta":{}}]},{"title":"Data Entry","path":"/components/data-entry","meta":{"order":1},"children":[{"path":"/components/data-entry/search-bar","title":"SearchBar","meta":{}}]},{"title":"Data Display","path":"/components/data-display","meta":{"order":2},"children":[{"path":"/components/data-display/card","title":"Card","meta":{"order":1}}]}]}},"locales":[],"navs":{"*":[{"path":"/components","title":"Components"},{"title":"GitHub","path":"https://github.com/AnnaSearl/anna-remax-ui"}]},"title":"Anna Remax UI","logo":"https://smebimage.fuliaoyi.com/FoMXNlKdZt9UqufDkPony8ztWKsU","mode":"site","repoUrl":"https://github.com/AnnaSearl/anna-remax-ui"},
      ...props,
    }),
    "routes": [
      {
        "path": "/",
        "component": require('/Users/chenjiawen/personal/component/anna-remax-ui/docs/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/index.md",
          "updatedTime": null,
          "title": "Anna Remax UI - 一款基于Remax框架开发的UI组件库",
          "hero": {
            "title": "Anna Remax UI",
            "desc": "<div class=\"markdown\"><p>一款基于 Remax 框架开发的UI组件库</p></div>",
            "actions": [
              {
                "text": "开始使用",
                "link": "/components/general/button"
              }
            ]
          },
          "features": [
            {
              "title": "基于 Remax",
              "desc": "<div class=\"markdown\"><p>基于 Remax 开发UI组件，可以尽情使用 Remax 的特性。</p></div>"
            },
            {
              "title": "多端适配运行",
              "desc": "<div class=\"markdown\"><p>支持微信小程序，支付宝小程序，钉钉小程序，Web。</p></div>"
            },
            {
              "title": "一款 cute 的UI组件",
              "desc": "<div class=\"markdown\"><p>因为实在想不出其他特性了，只能说可爱了😊</p></div>"
            }
          ],
          "footer": "<div class=\"markdown\"><p>Open-source MIT Licensed | Copyright © 2020<br />Powered by <a href=\"https://d.umijs.org/\" target=\"_blank\">dumi<svg xmlns=\"http://www.w3.org/2000/svg\" aria-hidden x=\"0px\" y=\"0px\" viewBox=\"0 0 100 100\" width=\"15\" height=\"15\" class=\"__dumi-default-external-link-icon\"><path fill=\"currentColor\" d=\"M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z\"></path><polygon fill=\"currentColor\" points=\"45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9\"></polygon></svg></a></p></div>",
          "slugs": []
        },
        "title": "Anna Remax UI - 一款基于Remax框架开发的UI组件库"
      },
      {
        "path": "/components/data-display/card",
        "component": require('/Users/chenjiawen/personal/component/anna-remax-ui/docs/components/data-display/card.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/components/data-display/card.md",
          "updatedTime": null,
          "title": "Card",
          "order": 1,
          "group": {
            "title": "Data Display",
            "order": 2,
            "path": "/components/data-display"
          },
          "slugs": [],
          "nav": {
            "path": "/components",
            "title": "Components"
          }
        },
        "title": "Card"
      },
      {
        "path": "/components/data-entry/search-bar",
        "component": require('/Users/chenjiawen/personal/component/anna-remax-ui/docs/components/data-entry/searchBar.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/components/data-entry/searchBar.md",
          "updatedTime": null,
          "title": "SearchBar",
          "group": {
            "title": "Data Entry",
            "order": 1,
            "path": "/components/data-entry"
          },
          "slugs": [],
          "nav": {
            "path": "/components",
            "title": "Components"
          }
        },
        "title": "SearchBar"
      },
      {
        "path": "/components/general/button",
        "component": require('/Users/chenjiawen/personal/component/anna-remax-ui/docs/components/general/button.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/components/general/button.md",
          "updatedTime": null,
          "title": "Button",
          "group": {
            "order": 0,
            "path": "/components/general",
            "title": "General"
          },
          "slugs": [],
          "nav": {
            "path": "/components",
            "title": "Components"
          }
        },
        "title": "Button"
      },
      {
        "path": "/components/general/cell",
        "component": require('/Users/chenjiawen/personal/component/anna-remax-ui/docs/components/general/cell.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/components/general/cell.md",
          "updatedTime": null,
          "title": "Cell",
          "slugs": [],
          "nav": {
            "path": "/components",
            "title": "Components"
          },
          "group": {
            "path": "/components/general",
            "title": "General"
          }
        },
        "title": "Cell"
      },
      {
        "path": "/components/data-display",
        "meta": {
          "order": 2
        },
        "exact": true,
        "redirect": "/components/data-display/card"
      },
      {
        "path": "/components",
        "meta": {},
        "exact": true,
        "redirect": "/components/general"
      },
      {
        "path": "/components/data-entry",
        "meta": {
          "order": 1
        },
        "exact": true,
        "redirect": "/components/data-entry/search-bar"
      },
      {
        "path": "/components/general",
        "meta": {
          "order": 0
        },
        "exact": true,
        "redirect": "/components/general/button"
      }
    ],
    "title": "Anna Remax UI"
  }
];

// allow user to extend routes
plugin.applyPlugins({
  key: 'patchRoutes',
  type: ApplyPluginsType.event,
  args: { routes },
});

export { routes };
