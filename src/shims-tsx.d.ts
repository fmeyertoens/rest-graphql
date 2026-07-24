/* eslint-disable no-unused-vars */
import type { VNode } from "vue";

declare global {
    namespace JSX {
        interface Element extends VNode {}
        interface ElementClass {}
        interface ElementAttributesProperty {
            $props: unknown;
        }
        interface IntrinsicElements {
            [elem: string]: any;
        }
    }
}
