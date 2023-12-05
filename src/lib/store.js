import { writable } from "svelte/store"

export let sidebarShown = writable(false)

let options = { timeZone: "Asia/Kolkata", year: 'numeric', month: '2-digit', day: '2-digit' }
export let streamTime = writable(new Date().toLocaleDateString('en-US', options) + ', 05:30:00 PM')