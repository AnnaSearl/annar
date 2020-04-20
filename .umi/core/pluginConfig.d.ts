/** Created by Umi Plugin **/

export interface IConfigFromPlugins {
  routes?: {
    /**
     * Any valid URL path
     */
    path?: string;
    /**
     * A React component to render only when the location matches.
     */
    component?: string | (() => any);
    wrappers?: string[];
    /**
     * navigate to a new location
     */
    redirect?: string;
    /**
     * When true, the active class/style will only be applied if the location is matched exactly.
     */
    exact?: boolean;
    routes?: any[];
    [k: string]: any;
  }[];
  history?: {
    type?: "browser" | "hash" | "memory";
    options?: {};
  };
  polyfill?: {
    imports?: string[];
  };
  alias?: {};
  analyze?: {
    analyzerMode?: "server" | "static" | "disabled";
    analyzerHost?: string;
    analyzerPort?: any;
    openAnalyzer?: boolean;
    generateStatsFile?: boolean;
    statsFilename?: string;
    logLevel?: "info" | "warn" | "error" | "silent";
    defaultSizes?: "stat" | "parsed" | "gzip";
    [k: string]: any;
  };
  /**
   * postcss autoprefixer, default flexbox: no-2009
   */
  autoprefixer?: {};
  base?: string;
  chainWebpack?: () => any;
  chunks?: string[];
  cssLoader?: {};
  cssModulesTypescriptLoader?: {
    mode?: "emit" | "verify";
  };
  cssnano?: {};
  copy?: string[];
  define?: {};
  devScripts?: {};
  /**
   * devServer configs
   */
  devServer?: {
    /**
     * devServer port, default 8000
     */
    port?: number;
    host?: string;
    https?: {} | boolean;
    http2?: boolean;
    headers?: {};
    [k: string]: any;
  };
  devtool?: string;
  /**
   * Code splitting for performance optimization
   */
  dynamicImport?: {
    /**
     * loading the component before loaded
     */
    loading?: string;
  };
  exportStatic?: {
    htmlSuffix?: boolean;
    dynamicRoot?: boolean;
  };
  externals?: {} | string | (() => any);
  extraBabelPlugins?: any[];
  extraBabelPresets?: any[];
  extraPostCSSPlugins?: any[];
  hash?: boolean;
  ignoreMomentLocale?: boolean;
  inlineLimit?: number;
  lessLoader?: {};
  manifest?: {
    fileName?: string;
    publicPath?: string;
    basePath?: string;
  };
  mountElementId?: "";
  mpa?: {};
  nodeModulesTransform?: {
    type?: "all" | "none";
    exclude?: any[];
  };
  outputPath?: "";
  plugins?: string[];
  postcssLoader?: {};
  presets?: string[];
  proxy?: {};
  publicPath?: string;
  runtimePublicPath?: boolean;
  singular?: boolean;
  styleLoader?: {};
  targets?: {};
  terserOptions?: {};
  theme?: {};
  forkTSCheker?: {};
  favicon?: string;
  headScripts?: any[];
  links?: any[];
  metas?: any[];
  scripts?: any[];
  styles?: any[];
  title?: string;
  mock?: {
    exclude?: string[];
  };
  description?: string;
  logo?: string;
  locales?: any[];
  mode?: string;
  menus?: {};
  navs?: any[] | {};
  resolve?: {};
  [k: string]: any;
}
