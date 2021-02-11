"use strict"

const styleElement = document.createElement("style")
document.head.appendChild(styleElement)

let event

const mouseevent = () => {
	styleElement.innerHTML = `:focus{outline:0}`
	document.removeEventListener("mousedown", mouseevent)
	event = document.addEventListener("keydown", keyevent)
}

const keyevent = () => {
	styleElement.innerHTML = ``
	document.removeEventListener("keydown", keyevent)
	event = document.addEventListener("mousedown", mouseevent)
}

document.addEventListener("mousedown", mouseevent)

// import { fromEvent } from "rxjs"
// import { take, tap } from "rxjs/operators"

// let event$

// const mousedown$ = fromEvent(document, "mousedown").pipe(
// 	take(1),
// 	tap(() => {
// 		styleElement.innerHTML = `:focus{outline:0}`
// 		event$ = keydown$.subscribe()
// 	}),
// 	tap(console.log)
// )

// const keydown$ = fromEvent(document, "keydown").pipe(
// 	take(1),
// 	tap(() => {
// 		styleElement.innerHTML = ``
// 		event$ = mousedown$.subscribe()
// 	}),
// 	tap(console.log)
// )

// mousedown$.subscribe()
