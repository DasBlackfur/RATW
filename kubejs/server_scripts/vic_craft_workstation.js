// Add the Arms Dealer Workstation as a craftable block

ServerEvents.recipes(event => {
  event.shaped(
    Item.of("pointblank:workstation", 1),
    [
      "SSS",
      "WPW",
      "SSS"
    ],
    {
      S: "#create:sleepers",
      W: "#minecraft:planks",
      P: "pointblank:printer"
    }
  );
});
