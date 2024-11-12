// @ts-nocheck
import { dialogOptions } from "$lib/store"

export const dialog = (message, title, icon) => {
    dialogOptions.set({
        message: message,
        title: title,
        icon: icon,
        open: true
    });
}
