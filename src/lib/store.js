import { writable } from "svelte/store"

let options = { timeZone: "Asia/Kolkata", year: 'numeric', month: '2-digit', day: '2-digit' }

export let sidebarShown = writable(false)
export let streamTime = writable(new Date().toLocaleDateString('en-US', options) + ', 05:30:00 PM')
export let malayalamText = writable("ദിവ്യബലി <br /> ഉടൻ ആരംഭിക്കുന്നതാണ്.")