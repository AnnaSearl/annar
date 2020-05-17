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
    "component": require('/Users/chenjiawen/personal/component/anna-remax-ui/docs/components/data-display/steps/index.tsx').default,
    "exact": true
  },
  {
    "path": "/_demos/index-2",
    "component": require('/Users/chenjiawen/personal/component/anna-remax-ui/docs/components/data-display/tabs/index.tsx').default,
    "exact": true
  },
  {
    "path": "/_demos/index-3",
    "component": require('/Users/chenjiawen/personal/component/anna-remax-ui/docs/components/data-display/tag/index.tsx').default,
    "exact": true
  },
  {
    "path": "/_demos/index-4",
    "component": require('/Users/chenjiawen/personal/component/anna-remax-ui/docs/components/data-entry/cascade/index.tsx').default,
    "exact": true
  },
  {
    "path": "/_demos/index-5",
    "component": require('/Users/chenjiawen/personal/component/anna-remax-ui/docs/components/data-entry/checkbox/index.tsx').default,
    "exact": true
  },
  {
    "path": "/_demos/index-6",
    "component": require('/Users/chenjiawen/personal/component/anna-remax-ui/docs/components/data-entry/input/index.tsx').default,
    "exact": true
  },
  {
    "path": "/_demos/index-7",
    "component": require('/Users/chenjiawen/personal/component/anna-remax-ui/docs/components/data-entry/picker/index.tsx').default,
    "exact": true
  },
  {
    "path": "/_demos/index-8",
    "component": require('/Users/chenjiawen/personal/component/anna-remax-ui/docs/components/data-entry/radio/index.tsx').default,
    "exact": true
  },
  {
    "path": "/_demos/index-9",
    "component": require('/Users/chenjiawen/personal/component/anna-remax-ui/docs/components/data-entry/rate/index.tsx').default,
    "exact": true
  },
  {
    "path": "/_demos/index-10",
    "component": require('/Users/chenjiawen/personal/component/anna-remax-ui/docs/components/data-entry/search-bar/index.tsx').default,
    "exact": true
  },
  {
    "path": "/_demos/index-11",
    "component": require('/Users/chenjiawen/personal/component/anna-remax-ui/docs/components/data-entry/selector/index.tsx').default,
    "exact": true
  },
  {
    "path": "/_demos/index-12",
    "component": require('/Users/chenjiawen/personal/component/anna-remax-ui/docs/components/data-entry/switch/index.tsx').default,
    "exact": true
  },
  {
    "path": "/_demos/index-13",
    "component": require('/Users/chenjiawen/personal/component/anna-remax-ui/docs/components/feedback/filter/index.tsx').default,
    "exact": true
  },
  {
    "path": "/_demos/index-14",
    "component": require('/Users/chenjiawen/personal/component/anna-remax-ui/docs/components/general/button/index.tsx').default,
    "exact": true
  },
  {
    "path": "/_demos/index-15",
    "component": require('/Users/chenjiawen/personal/component/anna-remax-ui/docs/components/general/cell/index.tsx').default,
    "exact": true
  },
  {
    "path": "/_demos/index-16",
    "component": require('/Users/chenjiawen/personal/component/anna-remax-ui/docs/components/general/icon/index.tsx').default,
    "exact": true
  },
  {
    "path": "/_demos/index-17",
    "component": require('/Users/chenjiawen/personal/component/anna-remax-ui/docs/components/feedback/popup/index.tsx').default,
    "exact": true
  },
  {
    "path": "/_demos/index-18",
    "component": require('/Users/chenjiawen/personal/component/anna-remax-ui/docs/components/feedback/result/index.tsx').default,
    "exact": true
  },
  {
    "path": "/_demos/index-19",
    "component": require('/Users/chenjiawen/personal/component/anna-remax-ui/docs/components/feedback/loading/index.tsx').default,
    "exact": true
  },
  {
    "path": "/",
    "component": (props) => require('react').createElement(require('/Users/chenjiawen/personal/component/anna-remax-ui/node_modules/@umijs/preset-dumi/lib/themes/default/layout.js').default, {
      ...{"menus":{"*":{"*":[{"path":"/","title":"Anna Remax UI - 一款基于Remax框架开发的UI组件库","meta":{}},{"path":"/index.html","title":"Anna Remax UI - 一款基于Remax框架开发的UI组件库","meta":{}}],"/components":[{"title":"General","path":"/components/general","meta":{"order":0},"children":[{"path":"/components/general/button","title":"Button","meta":{}},{"path":"/components/general/cell","title":"Cell","meta":{}},{"path":"/components/general/icon","title":"Icon","meta":{}}]},{"title":"Data Entry","path":"/components/data-entry","meta":{"order":1},"children":[{"path":"/components/data-entry/input","title":"Input","meta":{"order":5}},{"path":"/components/data-entry/picker","title":"Picker","meta":{"order":6}},{"path":"/components/data-entry/radio","title":"Radio","meta":{"order":10}},{"path":"/components/data-entry/checkbox","title":"Checkbox","meta":{"order":15}},{"path":"/components/data-entry/switch","title":"Switch","meta":{"order":15}},{"path":"/components/data-entry/selector","title":"Selector","meta":{"order":20}},{"path":"/components/data-entry/cascade","title":"Cascade","meta":{"order":25}},{"path":"/components/data-entry/search-bar","title":"SearchBar","meta":{"order":25}},{"path":"/components/data-entry/rate","title":"Rate","meta":{"order":30}}]},{"title":"Data Display","path":"/components/data-display","meta":{"order":2},"children":[{"path":"/components/data-display/card","title":"Card","meta":{"order":5}},{"path":"/components/data-display/steps","title":"Steps","meta":{"order":10}},{"path":"/components/data-display/tag","title":"Tag","meta":{"order":15}},{"path":"/components/data-display/tabs","title":"Tabs","meta":{"order":20}}]},{"title":"Feedback","path":"/components/feedback","meta":{"order":3},"children":[{"path":"/components/feedback/filter","title":"Filter","meta":{"order":5}},{"path":"/components/feedback/loading","title":"Loading","meta":{"order":10}},{"path":"/components/feedback/popup","title":"Popup","meta":{"order":15}},{"path":"/components/feedback/result","title":"Result","meta":{"order":20}}]}]}},"locales":[],"navs":{"*":[{"path":"/components","title":"Components"},{"title":"GitHub","path":"https://github.com/AnnaSearl/anna-remax-ui"}]},"title":"Anna Remax UI","logo":"https://smebimage.fuliaoyi.com/FoMXNlKdZt9UqufDkPony8ztWKsU","mode":"site","repoUrl":"https://github.com/AnnaSearl/anna-remax-ui"},
      ...props,
    }),
    "routes": [
      {
        "path": "/index.html",
        "component": require('/Users/chenjiawen/personal/component/anna-remax-ui/docs/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/index.md",
          "updatedTime": 1589164630000,
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
        "path": "/",
        "component": require('/Users/chenjiawen/personal/component/anna-remax-ui/docs/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/index.md",
          "updatedTime": 1589164630000,
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
          "updatedTime": 1589164630000,
          "title": "Card",
          "order": 5,
          "group": {
            "title": "Data Display",
            "order": 2,
            "path": "/components/data-display"
          },
          "slugs": [
            {
              "depth": 2,
              "value": "Card",
              "heading": "card"
            },
            {
              "depth": 2,
              "value": "API",
              "heading": "api"
            }
          ],
          "nav": {
            "path": "/components",
            "title": "Components"
          }
        },
        "title": "Card"
      },
      {
        "path": "/components/data-display/steps",
        "component": require('/Users/chenjiawen/personal/component/anna-remax-ui/docs/components/data-display/steps.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/components/data-display/steps.md",
          "updatedTime": null,
          "title": "Steps",
          "order": 10,
          "slugs": [
            {
              "depth": 2,
              "value": "Steps",
              "heading": "steps"
            },
            {
              "depth": 2,
              "value": "API",
              "heading": "api"
            },
            {
              "depth": 4,
              "value": "Steps",
              "heading": "steps-1"
            },
            {
              "depth": 4,
              "value": "StepProps",
              "heading": "stepprops"
            }
          ],
          "nav": {
            "path": "/components",
            "title": "Components"
          },
          "group": {
            "path": "/components/data-display",
            "title": "Data Display"
          }
        },
        "title": "Steps"
      },
      {
        "path": "/components/data-display/tabs",
        "component": require('/Users/chenjiawen/personal/component/anna-remax-ui/docs/components/data-display/tabs.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/components/data-display/tabs.md",
          "updatedTime": null,
          "title": "Tabs",
          "order": 20,
          "slugs": [
            {
              "depth": 2,
              "value": "Tabs",
              "heading": "tabs"
            },
            {
              "depth": 2,
              "value": "API",
              "heading": "api"
            },
            {
              "depth": 4,
              "value": "Tabs",
              "heading": "tabs-1"
            },
            {
              "depth": 4,
              "value": "Tabs.TabContent",
              "heading": "tabstabcontent"
            },
            {
              "depth": 4,
              "value": "TabTitleProps",
              "heading": "tabtitleprops"
            }
          ],
          "nav": {
            "path": "/components",
            "title": "Components"
          },
          "group": {
            "path": "/components/data-display",
            "title": "Data Display"
          }
        },
        "title": "Tabs"
      },
      {
        "path": "/components/data-display/tag",
        "component": require('/Users/chenjiawen/personal/component/anna-remax-ui/docs/components/data-display/tag.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/components/data-display/tag.md",
          "updatedTime": null,
          "title": "Tag",
          "order": 15,
          "slugs": [
            {
              "depth": 2,
              "value": "Tag",
              "heading": "tag"
            },
            {
              "depth": 2,
              "value": "API",
              "heading": "api"
            },
            {
              "depth": 2,
              "value": "Tag",
              "heading": "tag-1"
            },
            {
              "depth": 4,
              "value": "Tag.CheckableTag",
              "heading": "tagcheckabletag"
            }
          ],
          "nav": {
            "path": "/components",
            "title": "Components"
          },
          "group": {
            "path": "/components/data-display",
            "title": "Data Display"
          }
        },
        "title": "Tag"
      },
      {
        "path": "/components/data-entry/cascade",
        "component": require('/Users/chenjiawen/personal/component/anna-remax-ui/docs/components/data-entry/cascade.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/components/data-entry/cascade.md",
          "updatedTime": null,
          "title": "Cascade",
          "order": 25,
          "slugs": [
            {
              "depth": 2,
              "value": "Cascade",
              "heading": "cascade"
            },
            {
              "depth": 2,
              "value": "API",
              "heading": "api"
            },
            {
              "depth": 4,
              "value": "Cascade",
              "heading": "cascade-1"
            },
            {
              "depth": 4,
              "value": "OptionProps",
              "heading": "optionprops"
            }
          ],
          "nav": {
            "path": "/components",
            "title": "Components"
          },
          "group": {
            "path": "/components/data-entry",
            "title": "Data Entry"
          }
        },
        "title": "Cascade"
      },
      {
        "path": "/components/data-entry/checkbox",
        "component": require('/Users/chenjiawen/personal/component/anna-remax-ui/docs/components/data-entry/checkbox.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/components/data-entry/checkbox.md",
          "updatedTime": null,
          "title": "Checkbox",
          "order": 15,
          "slugs": [
            {
              "depth": 2,
              "value": "Checkbox",
              "heading": "checkbox"
            },
            {
              "depth": 2,
              "value": "API",
              "heading": "api"
            },
            {
              "depth": 4,
              "value": "Checkbox",
              "heading": "checkbox-1"
            },
            {
              "depth": 4,
              "value": "Checkbox.Group",
              "heading": "checkboxgroup"
            }
          ],
          "nav": {
            "path": "/components",
            "title": "Components"
          },
          "group": {
            "path": "/components/data-entry",
            "title": "Data Entry"
          }
        },
        "title": "Checkbox"
      },
      {
        "path": "/components/data-entry/input",
        "component": require('/Users/chenjiawen/personal/component/anna-remax-ui/docs/components/data-entry/input.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/components/data-entry/input.md",
          "updatedTime": null,
          "title": "Input",
          "order": 5,
          "slugs": [
            {
              "depth": 2,
              "value": "Input",
              "heading": "input"
            },
            {
              "depth": 2,
              "value": "API",
              "heading": "api"
            }
          ],
          "nav": {
            "path": "/components",
            "title": "Components"
          },
          "group": {
            "path": "/components/data-entry",
            "title": "Data Entry"
          }
        },
        "title": "Input"
      },
      {
        "path": "/components/data-entry/picker",
        "component": require('/Users/chenjiawen/personal/component/anna-remax-ui/docs/components/data-entry/picker.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/components/data-entry/picker.md",
          "updatedTime": null,
          "title": "Picker",
          "order": 6,
          "slugs": [
            {
              "depth": 2,
              "value": "Picker",
              "heading": "picker"
            },
            {
              "depth": 2,
              "value": "API",
              "heading": "api"
            },
            {
              "depth": 4,
              "value": "Picker",
              "heading": "picker-1"
            },
            {
              "depth": 4,
              "value": "OptionProps",
              "heading": "optionprops"
            }
          ],
          "nav": {
            "path": "/components",
            "title": "Components"
          },
          "group": {
            "path": "/components/data-entry",
            "title": "Data Entry"
          }
        },
        "title": "Picker"
      },
      {
        "path": "/components/data-entry/radio",
        "component": require('/Users/chenjiawen/personal/component/anna-remax-ui/docs/components/data-entry/radio.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/components/data-entry/radio.md",
          "updatedTime": null,
          "title": "Radio",
          "order": 10,
          "slugs": [
            {
              "depth": 2,
              "value": "Radio",
              "heading": "radio"
            },
            {
              "depth": 2,
              "value": "API",
              "heading": "api"
            },
            {
              "depth": 4,
              "value": "Radio",
              "heading": "radio-1"
            },
            {
              "depth": 4,
              "value": "Radio.Group",
              "heading": "radiogroup"
            }
          ],
          "nav": {
            "path": "/components",
            "title": "Components"
          },
          "group": {
            "path": "/components/data-entry",
            "title": "Data Entry"
          }
        },
        "title": "Radio"
      },
      {
        "path": "/components/data-entry/rate",
        "component": require('/Users/chenjiawen/personal/component/anna-remax-ui/docs/components/data-entry/rate.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/components/data-entry/rate.md",
          "updatedTime": null,
          "title": "Rate",
          "order": 30,
          "slugs": [
            {
              "depth": 2,
              "value": "Rate",
              "heading": "rate"
            },
            {
              "depth": 2,
              "value": "API",
              "heading": "api"
            },
            {
              "depth": 4,
              "value": "Rate",
              "heading": "rate-1"
            }
          ],
          "nav": {
            "path": "/components",
            "title": "Components"
          },
          "group": {
            "path": "/components/data-entry",
            "title": "Data Entry"
          }
        },
        "title": "Rate"
      },
      {
        "path": "/components/data-entry/search-bar",
        "component": require('/Users/chenjiawen/personal/component/anna-remax-ui/docs/components/data-entry/searchBar.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/components/data-entry/searchBar.md",
          "updatedTime": 1589164630000,
          "title": "SearchBar",
          "order": 25,
          "group": {
            "title": "Data Entry",
            "order": 1,
            "path": "/components/data-entry"
          },
          "slugs": [
            {
              "depth": 2,
              "value": "SearchBar",
              "heading": "searchbar"
            },
            {
              "depth": 2,
              "value": "API",
              "heading": "api"
            }
          ],
          "nav": {
            "path": "/components",
            "title": "Components"
          }
        },
        "title": "SearchBar"
      },
      {
        "path": "/components/data-entry/selector",
        "component": require('/Users/chenjiawen/personal/component/anna-remax-ui/docs/components/data-entry/selector.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/components/data-entry/selector.md",
          "updatedTime": null,
          "title": "Selector",
          "order": 20,
          "slugs": [
            {
              "depth": 2,
              "value": "Selector",
              "heading": "selector"
            },
            {
              "depth": 2,
              "value": "API",
              "heading": "api"
            },
            {
              "depth": 4,
              "value": "Selector",
              "heading": "selector-1"
            },
            {
              "depth": 4,
              "value": "OptionProps",
              "heading": "optionprops"
            }
          ],
          "nav": {
            "path": "/components",
            "title": "Components"
          },
          "group": {
            "path": "/components/data-entry",
            "title": "Data Entry"
          }
        },
        "title": "Selector"
      },
      {
        "path": "/components/data-entry/switch",
        "component": require('/Users/chenjiawen/personal/component/anna-remax-ui/docs/components/data-entry/switch.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/components/data-entry/switch.md",
          "updatedTime": null,
          "title": "Switch",
          "order": 15,
          "slugs": [
            {
              "depth": 2,
              "value": "Switch",
              "heading": "switch"
            },
            {
              "depth": 2,
              "value": "API",
              "heading": "api"
            }
          ],
          "nav": {
            "path": "/components",
            "title": "Components"
          },
          "group": {
            "path": "/components/data-entry",
            "title": "Data Entry"
          }
        },
        "title": "Switch"
      },
      {
        "path": "/components/feedback/filter",
        "component": require('/Users/chenjiawen/personal/component/anna-remax-ui/docs/components/feedback/filter.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/components/feedback/filter.md",
          "updatedTime": null,
          "title": "Filter",
          "order": 5,
          "group": {
            "title": "Feedback",
            "order": 3,
            "path": "/components/feedback"
          },
          "slugs": [
            {
              "depth": 2,
              "value": "Filter",
              "heading": "filter"
            },
            {
              "depth": 2,
              "value": "API",
              "heading": "api"
            },
            {
              "depth": 4,
              "value": "Filter",
              "heading": "filter-1"
            },
            {
              "depth": 4,
              "value": "Filter.Item",
              "heading": "filteritem"
            },
            {
              "depth": 4,
              "value": "OptionProps",
              "heading": "optionprops"
            }
          ],
          "nav": {
            "path": "/components",
            "title": "Components"
          }
        },
        "title": "Filter"
      },
      {
        "path": "/components/feedback/loading",
        "component": require('/Users/chenjiawen/personal/component/anna-remax-ui/docs/components/feedback/loading.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/components/feedback/loading.md",
          "updatedTime": null,
          "title": "Loading",
          "order": 10,
          "slugs": [
            {
              "depth": 2,
              "value": "Loading",
              "heading": "loading"
            },
            {
              "depth": 2,
              "value": "API",
              "heading": "api"
            },
            {
              "depth": 4,
              "value": "Loading",
              "heading": "loading-1"
            }
          ],
          "nav": {
            "path": "/components",
            "title": "Components"
          },
          "group": {
            "path": "/components/feedback",
            "title": "Feedback"
          }
        },
        "title": "Loading"
      },
      {
        "path": "/components/feedback/popup",
        "component": require('/Users/chenjiawen/personal/component/anna-remax-ui/docs/components/feedback/popup.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/components/feedback/popup.md",
          "updatedTime": null,
          "title": "Popup",
          "order": 15,
          "slugs": [
            {
              "depth": 2,
              "value": "Popup",
              "heading": "popup"
            },
            {
              "depth": 2,
              "value": "API",
              "heading": "api"
            },
            {
              "depth": 4,
              "value": "Popup",
              "heading": "popup-1"
            }
          ],
          "nav": {
            "path": "/components",
            "title": "Components"
          },
          "group": {
            "path": "/components/feedback",
            "title": "Feedback"
          }
        },
        "title": "Popup"
      },
      {
        "path": "/components/feedback/result",
        "component": require('/Users/chenjiawen/personal/component/anna-remax-ui/docs/components/feedback/result.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/components/feedback/result.md",
          "updatedTime": null,
          "title": "Result",
          "order": 20,
          "slugs": [
            {
              "depth": 2,
              "value": "Result",
              "heading": "result"
            },
            {
              "depth": 2,
              "value": "API",
              "heading": "api"
            },
            {
              "depth": 4,
              "value": "Result",
              "heading": "result-1"
            },
            {
              "depth": 4,
              "value": "IconProps",
              "heading": "iconprops"
            }
          ],
          "nav": {
            "path": "/components",
            "title": "Components"
          },
          "group": {
            "path": "/components/feedback",
            "title": "Feedback"
          }
        },
        "title": "Result"
      },
      {
        "path": "/components/general/button",
        "component": require('/Users/chenjiawen/personal/component/anna-remax-ui/docs/components/general/button.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/components/general/button.md",
          "updatedTime": 1589164630000,
          "title": "Button",
          "group": {
            "order": 0,
            "path": "/components/general",
            "title": "General"
          },
          "slugs": [
            {
              "depth": 2,
              "value": "Button",
              "heading": "button"
            },
            {
              "depth": 2,
              "value": "API",
              "heading": "api"
            }
          ],
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
          "updatedTime": 1589164630000,
          "title": "Cell",
          "slugs": [
            {
              "depth": 2,
              "value": "Cell",
              "heading": "cell"
            },
            {
              "depth": 2,
              "value": "API",
              "heading": "api"
            }
          ],
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
        "path": "/components/general/icon",
        "component": require('/Users/chenjiawen/personal/component/anna-remax-ui/docs/components/general/icon.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/components/general/icon.md",
          "updatedTime": null,
          "title": "Icon",
          "slugs": [
            {
              "depth": 2,
              "value": "Icon",
              "heading": "icon"
            },
            {
              "depth": 2,
              "value": "API",
              "heading": "api"
            }
          ],
          "nav": {
            "path": "/components",
            "title": "Components"
          },
          "group": {
            "path": "/components/general",
            "title": "General"
          }
        },
        "title": "Icon"
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
        "meta": {},
        "exact": true,
        "redirect": "/components/data-entry/input"
      },
      {
        "path": "/components/feedback",
        "meta": {
          "order": 3
        },
        "exact": true,
        "redirect": "/components/feedback/filter"
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
