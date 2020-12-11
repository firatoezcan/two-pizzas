declare module "preact-iso" {
  export type RouterChildProps = {
    path: string;
    query: { [key: string]: string };
    default?: boolean;
  };
}
