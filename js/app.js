import { home } from "./controllers/home.js"
import { login, loginPost, register, registerPost } from "./controllers/user_management.js"
import { offers, offerInfo } from "./controllers/offers.js"

const app = Sammy("#root", (ctx) => {
  ctx.use("Handlebars", "hbs")

  // ctx.userData = getUserData()
  // initNotifications() // there may not be notif elements yet. May need to hardcode the CSS into the elements instead of calling initNotifications()

  ctx.get("/", home)
  ctx.get("/index.html", home)
  ctx.get("/home", home)
  ctx.get("/login", login)
  ctx.post("/login/:id", loginPost)
  ctx.get("/register", register)
  ctx.post("/register/:id", registerPost)
  ctx.get("/offers", offers)
  ctx.get("/offers/:id", offerInfo)
})

app.run()
