interface ChooseImageOption {
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    complete?: (res: ChooseImageResponse) => {}
    /** 最多可以选择的图片张数 */
    count?: number
    /** 接口调用失败的回调函数 */
    fail?: (res: ChooseImageResponse) => {}
    /** 所选的图片的尺寸
     *
     * 可选值：
     * - 'original': 原图;
     * - 'compressed': 压缩图; */
    sizeType?: Array<'original' | 'compressed'>
    /** 选择图片的来源
     *
     * 可选值：
     * - 'album': 从相册选图;
     * - 'camera': 使用相机; */
    sourceType?: Array<'album' | 'camera'>
    /** 接口调用成功的回调函数 */
    success?: (res: ChooseImageResponse) => {}
}

interface ChooseImageResponse {
    /** 接口调用结束的信息 **/
    errMsg: string,
    /** 图片的本地临时文件列表 **/
    tempFilePaths: string[],
    tempFiles: any[]
}

const chooseImage = function (options: ChooseImageOption) {
    const {count = 1, success, fail, complete} = options;
    const res: ChooseImageResponse = {
        errMsg: "chooseImage:ok",
        tempFilePaths: [],
        tempFiles: []
    };
    const chooseImgInputId = "annarChooseImage";
    let chooseImgInput = document.getElementById(chooseImgInputId) as HTMLInputElement;
    if (!chooseImgInput) {
        const obj = document.createElement("input");
        obj.setAttribute("type", "file");
        obj.setAttribute("id", chooseImgInputId);
        if (count > 1) {
            obj.setAttribute("multiple", "multiple");
        }
        obj.setAttribute("accept", "image/*");
        obj.setAttribute("style", "position: fixed; top: -4000px; left: -3000px; z-index: -300;");
        document.body.appendChild(obj);
        chooseImgInput = document.getElementById(chooseImgInputId) as HTMLInputElement;
    }
    let taroChooseImageCallback: any;
    const taroChooseImagePromise = new Promise(resolve => {
        taroChooseImageCallback = resolve;
    });
    const TaroMouseEvents = document.createEvent("MouseEvents");
    TaroMouseEvents.initEvent("click", true, true);
    chooseImgInput.dispatchEvent(TaroMouseEvents);
    chooseImgInput.onchange = function (e: any) {
        const arr = [...e.target.files];
        arr && arr.forEach(item => {
            const blob = new Blob([item], {
                type: item.type
            });
            const url = URL.createObjectURL(blob);
            res.tempFilePaths.push(url);
            res.tempFiles.push({path: url, size: item.size, type: item.type});
        });
        typeof success === "function" && success(res);
        typeof complete === "function" && complete(res);
        taroChooseImageCallback(res);
        e.target.value = "";
    };
    chooseImgInput.onerror = function (err) {
        res.errMsg = (err.toString ? err.toString() : err + "");
        typeof fail === "function" && fail(res)
    }
    return taroChooseImagePromise;
};

export default chooseImage;
