import item from '@/filter/item';

export interface QueryProps {
  select?: (selector: string) => any;
  selectAll?: (selector: string) => any;
  boundingClientRect?: () => any;
  exec?: (cb: () => void) => any;
}

const createSelectorQuery = function () {
  const query: QueryProps = {};
  let eles: any[] = [];

  query.select = function (selector: string) {
    let ele = null;
    const sel = selector.substring(1);
    if (/^#/.test(selector)) {
      ele = document.getElementById(sel);
    }
    if (/^\./.test(selector)) {
      ele = document.getElementsByClassName(sel)?.[0];
    }
    eles.push(ele);
    return this;
  };

  query.selectAll = function (selector: string) {
    let ele: any = [];
    const sel = selector.substring(1);
    if (/^\./.test(selector)) {
      ele = document.getElementsByClassName(sel);
    }
    eles.push(ele);
    return this;
  };

  query.boundingClientRect = function () {
    eles = eles.map(item => {
      let newItem = item;
      if (Object.prototype.toString.call(item) === '[object HTMLCollection]') {
        const htmlArr = [];
        for (let index = 0; index < item.length; index++) {
          htmlArr.push(item[index]);
        }
        newItem = htmlArr.map((i: any) => {
          const rect = i.getBoundingClientRect();
          return {
            bottom: rect.bottom,
            height: rect.height,
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
