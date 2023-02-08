import { atom } from "nanostores";

export const headervisible = atom(false)

export const headerVisibleChanger = (state) => {
headervisible.set(state)
}
