import '../stylesheets/application.scss'
import '../js/bootstrap_js_files.js' 
import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import "channels"

Rails.start()
Turbolinks.start()
ActiveStorage.start()

console.log("hello from js.")
