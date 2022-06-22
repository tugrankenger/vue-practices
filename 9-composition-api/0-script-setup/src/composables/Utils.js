import {
    ref
} from 'vue'
export default function () {
    const title = ref("baslik")
    const count = ref(0)

    const inc = () => {
        count.value++
    }

    const alertMe = (info) => {
        console.log(info)
    }

    return {title, count, inc, alertMe}
}