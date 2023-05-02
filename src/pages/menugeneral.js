import MenuAlmuerzo from "./menualmuerzo"
import MenuDesayuno from "./menudesayuno"

export default function MenuGeneral() {
    return (
        <div>
            <MenuDesayuno></MenuDesayuno>
            <MenuAlmuerzo></MenuAlmuerzo>
        </div>
    )
}