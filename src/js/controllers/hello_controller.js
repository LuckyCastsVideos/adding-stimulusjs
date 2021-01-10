import { Controller } from "stimulus";

export default class extends Controller {
  // Defines a `this.testTarget` that you can use in your functions.
  // Attach to an element with `data-hello-target="test"`.
  static get targets() {
    return ["test"];
  }

  // Called whenever the controller is attached to an element on the page.
  // Attach this controller with something like `<div data-controller="hello"></div>`.
  initialize() {
    console.log("Hello! StimulusJS is working!");
  }

  // Can be called from within this file with `this.greet()`, or in an action in your HTML.
  // Call this on a button click with something like `<button data-action="click->hello#greet"></button>`.
  greet() {
    console.log("Hello! You're in a StimulusJS function!");
  }
}
