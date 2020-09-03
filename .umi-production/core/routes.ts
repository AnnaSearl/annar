// @ts-nocheck
import { ApplyPluginsType } from '/Users/chenjiawen/personal/component/anna-remax-ui/node_modules/@umijs/runtime';
import { plugin } from './plugin';

const routes = [
  {
    "path": "/_demos/index",
    "component": require('../../docs/components/data-display/card/index.tsx').default,
    "exact": true
  },
  {
    "path": "/_demos/index-1",
    "component": require('../../docs/components/data-display/steps/index.tsx').default,
    "exact": true
  },
  {
    "path": "/_demos/index-2",
    "component": require('../../docs/components/data-display/tabs/index.tsx').default,
    "exact": true
  },
  {
    "path": "/_demos/index-3",
    "component": require('../../docs/components/data-display/tag/index.tsx').default,
    "exact": true
  },
  {
    "path": "/_demos/index-4",
    "component": require('../../docs/components/data-entry/cascade/index.tsx').default,
    "exact": true
  },
  {
    "path": "/_demos/index-5",
    "component": require('../../docs/components/data-entry/checkbox/index.tsx').default,
    "exact": true
  },
  {
    "path": "/_demos/index-6",
    "component": require('../../docs/components/data-entry/image-upload/index.tsx').default,
    "exact": true
  },
  {
    "path": "/_demos/index-7",
    "component": require('../../docs/components/data-entry/input/index.tsx').default,
    "exact": true
  },
  {
    "path": "/_demos/index-8",
    "component": require('../../docs/components/data-entry/picker/index.tsx').default,
    "exact": true
  },
  {
    "path": "/_demos/index-9",
    "component": require('../../docs/components/data-entry/radio/index.tsx').default,
    "exact": true
  },
  {
    "path": "/_demos/index-10",
    "component": require('../../docs/components/data-entry/rate/index.tsx').default,
    "exact": true
  },
  {
    "path": "/_demos/index-11",
    "component": require('../../docs/components/data-entry/search-bar/index.tsx').default,
    "exact": true
  },
  {
    "path": "/_demos/index-12",
    "component": require('../../docs/components/data-entry/selector/index.tsx').default,
    "exact": true
  },
  {
    "path": "/_demos/index-13",
    "component": require('../../docs/components/data-entry/stepper/index.tsx').default,
    "exact": true
  },
  {
    "path": "/_demos/index-14",
    "component": require('../../docs/components/data-entry/switch/index.tsx').default,
    "exact": true
  },
  {
    "path": "/_demos/index-15",
    "component": require('../../docs/components/feedback/action-sheet/index.tsx').default,
    "exact": true
  },
  {
    "path": "/_demos/index-16",
    "component": require('../../docs/components/feedback/filter/index.tsx').default,
    "exact": true
  },
  {
    "path": "/_demos/index-17",
    "component": require('../../docs/components/feedback/loading/index.tsx').default,
    "exact": true
  },
  {
    "path": "/_demos/index-18",
    "component": require('../../docs/components/feedback/result/index.tsx').default,
    "exact": true
  },
  {
    "path": "/_demos/index-19",
    "component": require('../../docs/components/feedback/skeleton/index.tsx').default,
    "exact": true
  },
  {
    "path": "/_demos/index-20",
    "component": require('../../docs/components/general/button/index.tsx').default,
    "exact": true
  },
  {
    "path": "/_demos/index-21",
    "component": require('../../docs/components/general/cell/index.tsx').default,
    "exact": true
  },
  {
    "path": "/_demos/index-22",
    "component": require('../../docs/components/general/icon/index.tsx').default,
    "exact": true
  },
  {
    "path": "/_demos/index-23",
    "component": require('../../docs/components/general/popup/index.tsx').default,
    "exact": true
  },
  {
    "path": "/_demos/index-24",
    "component": require('../../docs/components/gesture/swipe-action/index.tsx').default,
    "exact": true
  },
  {
    "path": "/_demos/index-25",
    "component": require('../../docs/components/layout/one-dimensional/index.tsx').default,
    "exact": true
  },
  {
    "path": "/_demos/index-26",
    "component": require('../../docs/components/layout/space/index.tsx').default,
    "exact": true
  },
  {
    "path": "/_demos/index-27",
    "component": require('../../docs/components/layout/two-dimensional/index.tsx').default,
    "exact": true
  },
  {
    "path": "/",
    "component": (props) => require('react').createElement(require('../../node_modules/@umijs/preset-dumi/lib/themes/default/layout.js').default, {
      ...{"menus":{"*":{"*":[{"path":"/","title":"Annar - 优雅、简洁的 Remax 组件库","meta":{}}],"/components":[{"title":"General","path":"/components/general","meta":{"order":0},"children":[{"path":"/components/general/button","title":"Button","meta":{"order":5}},{"path":"/components/general/cell","title":"Cell","meta":{"order":10}},{"path":"/components/general/icon","title":"Icon","meta":{"order":15}},{"path":"/components/general/popup","title":"Popup","meta":{"order":20}}]},{"title":"Layout","path":"/components/layout","meta":{"order":0},"children":[{"path":"/components/layout/one-dimensional","title":"One-dimensional","meta":{"order":5}},{"path":"/components/layout/two-dimensiona","title":"Two-dimensional","meta":{"order":10}},{"path":"/components/layout/space","title":"Space","meta":{"order":15}}]},{"title":"Data Entry","path":"/components/data-entry","meta":{"order":1},"children":[{"path":"/components/data-entry/input","title":"Input","meta":{"order":5}},{"path":"/components/data-entry/picker","title":"Picker","meta":{"order":6}},{"path":"/components/data-entry/radio","title":"Radio","meta":{"order":10}},{"path":"/components/data-entry/checkbox","title":"Checkbox","meta":{"order":15}},{"path":"/components/data-entry/switch","title":"Switch","meta":{"order":15}},{"path":"/components/data-entry/selector","title":"Selector","meta":{"order":20}},{"path":"/components/data-entry/image-upload","title":"ImageUpload","meta":{"order":22}},{"path":"/components/data-entry/cascade","title":"Cascade","meta":{"order":25}},{"path":"/components/data-entry/search-bar","title":"SearchBar","meta":{"order":25}},{"path":"/components/data-entry/rate","title":"Rate","meta":{"order":30}},{"path":"/components/data-entry/stepper","title":"Stepper","meta":{"order":35}}]},{"title":"Data Display","path":"/components/data-display","meta":{"order":2},"children":[{"path":"/components/data-display/card","title":"Card","meta":{"order":5}},{"path":"/components/data-display/steps","title":"Steps","meta":{"order":10}},{"path":"/components/data-display/tag","title":"Tag","meta":{"order":15}},{"path":"/components/data-display/tabs","title":"Tabs","meta":{"order":20}}]},{"title":"Feedback","path":"/components/feedback","meta":{"order":3},"children":[{"path":"/components/feedback/action-sheet","title":"ActionSheet","meta":{"order":3}},{"path":"/components/feedback/filter","title":"Filter","meta":{"order":5}},{"path":"/components/feedback/loading","title":"Loading","meta":{"order":10}},{"path":"/components/feedback/result","title":"Result","meta":{"order":20}},{"path":"/components/feedback/skeleton","title":"Skeleton","meta":{"order":25}}]},{"title":"Gesture","path":"/components/gesture","meta":{"order":15},"children":[{"path":"/components/gesture/swipe-action","title":"SwipeAction","meta":{"order":5}}]}]}},"locales":[],"navs":{"*":[{"path":"/components","title":"Components"},{"title":"Eurus","path":"https://github.com/AnnaSearl/eurus"},{"title":"GitHub","path":"https://github.com/AnnaSearl/annar"}]},"title":"Annar","logo":"https://smebimage.fuliaoyi.com/Fger7VZclDUaXDJuqg42MlsUqV-w","mode":"site","repoUrl":"https://github.com/AnnaSearl/anna-remax-ui"},
      ...props,
    }),
    "routes": [
      {
        "path": "/",
        "component": require('../../docs/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/index.md",
          "updatedTime": 1598932996000,
          "title": "Annar - 优雅、简洁的 Remax 组件库",
          "hero": {
            "title": "Annar",
            "desc": "<div class=\"markdown\"><p>优雅、简洁的 Remax 组件库</p></div>",
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
              "title": "一款 Cute 的UI组件",
              "desc": "<div class=\"markdown\"><p>因为实在想不出其他特性了，只能说可爱了😊</p></div>"
            }
          ],
          "slugs": []
        },
        "title": "Annar - 优雅、简洁的 Remax 组件库"
      },
      {
        "path": "/components/data-display/card",
        "component": require('../../docs/components/data-display/card.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/components/data-display/card.md",
          "updatedTime": 1596281166000,
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
        "component": require('../../docs/components/data-display/steps.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/components/data-display/steps.md",
          "updatedTime": 1589726957000,
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
        "component": require('../../docs/components/data-display/tabs.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/components/data-display/tabs.md",
          "updatedTime": 1592586789000,
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
        "component": require('../../docs/components/data-display/tag.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/components/data-display/tag.md",
          "updatedTime": 1595467842000,
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
              "depth": 4,
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
        "component": require('../../docs/components/data-entry/cascade.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/components/data-entry/cascade.md",
          "updatedTime": 1589726957000,
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
        "component": require('../../docs/components/data-entry/checkbox.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/components/data-entry/checkbox.md",
          "updatedTime": 1598274362000,
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
        "path": "/components/data-entry/image-upload",
        "component": require('../../docs/components/data-entry/imageUpload.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/components/data-entry/imageUpload.md",
          "updatedTime": 1598274362000,
          "title": "ImageUpload",
          "order": 22,
          "slugs": [
            {
              "depth": 2,
              "value": "ImageUpload",
              "heading": "imageupload"
            },
            {
              "depth": 2,
              "value": "API",
              "heading": "api"
            },
            {
              "depth": 4,
              "value": "ImageUpload",
              "heading": "imageupload-1"
            },
            {
              "depth": 4,
              "value": "ImageProps",
              "heading": "imageprops"
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
        "title": "ImageUpload"
      },
      {
        "path": "/components/data-entry/input",
        "component": require('../../docs/components/data-entry/input.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/components/data-entry/input.md",
          "updatedTime": 1597462656000,
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
        "component": require('../../docs/components/data-entry/picker.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/components/data-entry/picker.md",
          "updatedTime": 1589726957000,
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
        "component": require('../../docs/components/data-entry/radio.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/components/data-entry/radio.md",
          "updatedTime": 1598274362000,
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
        "component": require('../../docs/components/data-entry/rate.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/components/data-entry/rate.md",
          "updatedTime": 1595216241000,
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
        "component": require('../../docs/components/data-entry/searchBar.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/components/data-entry/searchBar.md",
          "updatedTime": 1596281166000,
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
        "component": require('../../docs/components/data-entry/selector.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/components/data-entry/selector.md",
          "updatedTime": 1589726957000,
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
        "path": "/components/data-entry/stepper",
        "component": require('../../docs/components/data-entry/stepper.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/components/data-entry/stepper.md",
          "updatedTime": 1596281166000,
          "title": "Stepper",
          "order": 35,
          "slugs": [
            {
              "depth": 2,
              "value": "Stepper",
              "heading": "stepper"
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
        "title": "Stepper"
      },
      {
        "path": "/components/data-entry/switch",
        "component": require('../../docs/components/data-entry/switch.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/components/data-entry/switch.md",
          "updatedTime": 1589726957000,
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
        "path": "/components/feedback/action-sheet",
        "component": require('../../docs/components/feedback/action-sheet.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/components/feedback/action-sheet.md",
          "updatedTime": 1593174715000,
          "title": "ActionSheet",
          "order": 3,
          "slugs": [
            {
              "depth": 2,
              "value": "ActionSheet",
              "heading": "actionsheet"
            },
            {
              "depth": 2,
              "value": "API",
              "heading": "api"
            },
            {
              "depth": 4,
              "value": "ActionSheet",
              "heading": "actionsheet-1"
            },
            {
              "depth": 4,
              "value": "ActionSheetActionDefaultProps",
              "heading": "actionsheetactiondefaultprops"
            },
            {
              "depth": 4,
              "value": "ActionSheetActionGridProps",
              "heading": "actionsheetactiongridprops"
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
        "title": "ActionSheet"
      },
      {
        "path": "/components/feedback/filter",
        "component": require('../../docs/components/feedback/filter.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/components/feedback/filter.md",
          "updatedTime": 1589726957000,
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
        "component": require('../../docs/components/feedback/loading.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/components/feedback/loading.md",
          "updatedTime": 1595216241000,
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
        "path": "/components/feedback/result",
        "component": require('../../docs/components/feedback/result.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/components/feedback/result.md",
          "updatedTime": 1593174715000,
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
        "path": "/components/feedback/skeleton",
        "component": require('../../docs/components/feedback/skeleton.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/components/feedback/skeleton.md",
          "updatedTime": 1596186890000,
          "title": "Skeleton",
          "order": 25,
          "slugs": [
            {
              "depth": 2,
              "value": "Skeleton",
              "heading": "skeleton"
            },
            {
              "depth": 2,
              "value": "API",
              "heading": "api"
            },
            {
              "depth": 4,
              "value": "Skeleton",
              "heading": "skeleton-1"
            },
            {
              "depth": 4,
              "value": "SkeletonParagraphProps",
              "heading": "skeletonparagraphprops"
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
        "title": "Skeleton"
      },
      {
        "path": "/components/general/button",
        "component": require('../../docs/components/general/button.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/components/general/button.md",
          "updatedTime": 1597390820000,
          "title": "Button",
          "order": 5,
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
        "component": require('../../docs/components/general/cell.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/components/general/cell.md",
          "updatedTime": 1593174715000,
          "title": "Cell",
          "order": 10,
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
        "component": require('../../docs/components/general/icon.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/components/general/icon.md",
          "updatedTime": 1595216241000,
          "title": "Icon",
          "order": 15,
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
            },
            {
              "depth": 2,
              "value": "FAQ",
              "heading": "faq"
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
        "path": "/components/general/popup",
        "component": require('../../docs/components/general/popup.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/components/general/popup.md",
          "updatedTime": 1595216241000,
          "title": "Popup",
          "order": 20,
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
        "title": "Popup"
      },
      {
        "path": "/components/gesture/swipe-action",
        "component": require('../../docs/components/gesture/swipe-action.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/components/gesture/swipe-action.md",
          "updatedTime": 1595216241000,
          "title": "SwipeAction",
          "order": 5,
          "group": {
            "order": 15,
            "path": "/components/gesture",
            "title": "Gesture"
          },
          "slugs": [
            {
              "depth": 2,
              "value": "SwipeAction",
              "heading": "swipeaction"
            },
            {
              "depth": 2,
              "value": "API",
              "heading": "api"
            },
            {
              "depth": 4,
              "value": "SwipeActionProps",
              "heading": "swipeactionprops"
            },
            {
              "depth": 4,
              "value": "SwipeActionOptionProps",
              "heading": "swipeactionoptionprops"
            }
          ],
          "nav": {
            "path": "/components",
            "title": "Components"
          }
        },
        "title": "SwipeAction"
      },
      {
        "path": "/components/layout/one-dimensional",
        "component": require('../../docs/components/layout/one-dimensional.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/components/layout/one-dimensional.md",
          "updatedTime": 1595216241000,
          "title": "One-dimensional",
          "order": 5,
          "group": {
            "order": 0,
            "path": "/components/layout",
            "title": "Layout"
          },
          "slugs": [
            {
              "depth": 2,
              "value": "One-dimensional",
              "heading": "one-dimensional"
            },
            {
              "depth": 2,
              "value": "API",
              "heading": "api"
            },
            {
              "depth": 4,
              "value": "Row",
              "heading": "row"
            },
            {
              "depth": 4,
              "value": "Col",
              "heading": "col"
            }
          ],
          "nav": {
            "path": "/components",
            "title": "Components"
          }
        },
        "title": "One-dimensional"
      },
      {
        "path": "/components/layout/space",
        "component": require('../../docs/components/layout/space.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/components/layout/space.md",
          "updatedTime": 1595467842000,
          "title": "Space",
          "order": 15,
          "slugs": [
            {
              "depth": 2,
              "value": "Space",
              "heading": "space"
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
            "path": "/components/layout",
            "title": "Layout"
          }
        },
        "title": "Space"
      },
      {
        "path": "/components/layout/two-dimensiona",
        "component": require('../../docs/components/layout/two-dimensiona.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/components/layout/two-dimensiona.md",
          "updatedTime": 1595467842000,
          "title": "Two-dimensional",
          "order": 10,
          "slugs": [
            {
              "depth": 2,
              "value": "Two-dimensional",
              "heading": "two-dimensional"
            },
            {
              "depth": 2,
              "value": "API",
              "heading": "api"
            },
            {
              "depth": 4,
              "value": "Grid",
              "heading": "grid"
            }
          ],
          "nav": {
            "path": "/components",
            "title": "Components"
          },
          "group": {
            "path": "/components/layout",
            "title": "Layout"
          }
        },
        "title": "Two-dimensional"
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
        "meta": {},
        "exact": true,
        "redirect": "/components/feedback/action-sheet"
      },
      {
        "path": "/components/general",
        "meta": {
          "order": 0
        },
        "exact": true,
        "redirect": "/components/general/button"
      },
      {
        "path": "/components/gesture",
        "meta": {
          "order": 15
        },
        "exact": true,
        "redirect": "/components/gesture/swipe-action"
      },
      {
        "path": "/components/layout",
        "meta": {
          "order": 0
        },
        "exact": true,
        "redirect": "/components/layout/one-dimensional"
      }
    ],
    "title": "Annar"
  }
];

// allow user to extend routes
plugin.applyPlugins({
  key: 'patchRoutes',
  type: ApplyPluginsType.event,
  args: { routes },
});

export { routes };
