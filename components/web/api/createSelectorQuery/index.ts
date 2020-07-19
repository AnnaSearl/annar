export interface QueryProps {
  select?: (selector: string) => any;
  selectAll?: (selector: string) => any;
  boundingClientRect?: () => any;
  exec?: (cb: () => void) => any;
}

const HTML_NODES = ['[object HTMLCollection]', '[object NodeList]'];

const createSelectorQuery = function () {
  const query: QueryProps = {};
  let eles: any[] = [];

  query.select = function (selector: string) {
    let ele = null;
    ele = document.querySelector(selector);
    eles.push(ele);
    return this;
  };

  query.selectAll = function (selector: string) {
    let ele: any = [];
    ele = document.querySelectorAll(selector);
    eles.push(ele);
    return this;
  };

  query.boundingClientRect = function () {
    eles = eles.map(item => {
      let newItem = item;
      if (HTML_NODES.includes(Object.prototype.toString.call(item))) {
        const htmlArr = [];
        for (let index = 0; index < item.length; index++) {
          htmlArr.push(item[index]);
        }
        newItem = htmlArr.map((i: any) => {
          const rect = i.getBoundingClientRect();
          return {
            bottom: rect.bottom,
            height: rect.height,
            // 由于 getBoundingClientRect 方法获取的是相对视窗的，所以这里改写成 i.offsetLeft 来使其相对的元素为最近的position不为static的祖先元素。
            left: i.offsetLeft, // rect.left
            right: rect.right,
            top: rect.top,
            width: i.offsetWidth, // rect.width
            x: rect.x,
            y: rect.y,
          };
        });
      } else {
        const rect = newItem.getBoundingClientRect();
        newItem = {
          bottom: rect.bottom,
          height: rect.height,
          left: newItem.offsetLeft, // rect.left
          right: rect.right,
          top: rect.top,
          width: newItem.offsetWidth, // rect.width
          x: rect.x,
          y: rect.y,
        };
      }
      return newItem;
    });
    return this;
  };

  query.exec = function (callback?: (ret: any[]) => void) {
    callback?.(eles);
  };

  return query;
};

export default createSelectorQuery;
