import {Modal} from "./Modal.tsx"

export default {
    component: Modal,
    title: "Modal"
}

export const Default = {
    args:{
        children: "Modal",
        onClose: () => console.log("close"),
    }
}