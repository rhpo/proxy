import { faMessage } from "@fortawesome/free-solid-svg-icons";
import { writable } from "svelte/store";

export const menuOpen = writable(false);

export const dialogOptions = writable({
    message: "",
    title: "",
    icon: faMessage,
    open: false
});
