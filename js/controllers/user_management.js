export const login = (ctx) => {
  ctx.partial("/templates/login.hbs")
}

export const loginPost = (ctx) => {
  console.log(ctx)
  ctx.redirect("/")
}

export const register = (ctx) => {
  ctx.partial("/templates/register.hbs")
}

export const registerPost = (ctx) => {
  console.log(ctx)
  ctx.redirect("/")
}
