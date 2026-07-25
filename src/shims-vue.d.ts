declare module "*.vue" {
  import { DefineComponent } from "vue";
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

interface ImportMetaEnv {
  readonly VITE_REST_URI?: string;
  readonly VITE_GRAPHQL_URI?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
