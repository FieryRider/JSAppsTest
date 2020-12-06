export const offers = (ctx) => {
  console.log("offers")
  const offers = [ { offerId: 3 }, { offerId: 4 } ]
  Object.assign(ctx, { offers })
  ctx.partial("../templates/offers.hbs", ctx)
}

export const offerInfo = (ctx) => {
  ctx.partial("../templates/offer_info.hbs", {offerId: ctx.params.id})
}
