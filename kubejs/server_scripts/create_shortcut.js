// Shortcut Create progression

ServerEvents.recipes(event => {
  event.remove({ id: "create:item_application/railway_casing"});
  event.remove({ id: "create:sequenced_assembly/sturdy_sheet"});
  event.remove({ id: "create:sequenced_assembly/precision_mechanism"});
  event.remove({ id: "create:sequenced_assembly/track" });
  event.remove({ id: "createrailwaysnavigator:navigator"});

  event.custom({
    type: "create:item_application",
    "ingredients": [
      { "tag": "c:stripped_logs" },
      { "tag": "c:plates/obsidian" }
    ],
    "results": [{ "id": "create:railway_casing" }]
  });

  event.custom({
    type: "create:item_application",
    "ingredients": [
      { "tag": "c:stripped_woods" },
      { "tag": "c:plates/obsidian" }
    ],
    "results": [{ "id": "create:railway_casing" }]
  });

  event.custom({
    type: "create:pressing",
    "ingredients": [
      { "item": "minecraft:obsidian"}
    ],
    "results": [{ "id": "create:sturdy_sheet" }]
  });

  event.custom({
    type: "create:mixing",
    ingredients: [
      { "tag": "c:end_stones" },
      { "item": "minecraft:charcoal" }
    ],
    "results": [{ "id": "minecraft:gunpowder" }]
  });

  event.shaped(
    Item.of("create:precision_mechanism", 1),
    [
      " G ",
      "NCN",
      " G "
    ],
    {
      G: "#c:ingots/gold",
      N: "#c:nuggets/iron",
      C: "create:cogwheel"
    }
  )

  event.shapeless(
    Item.of("create:track", 4),
    [
      "#create:sleepers",
      "2x #c:nuggets/iron"
    ]
  )

  event.shaped(
    Item.of("createrailwaysnavigator:navigator"),
    [
      "AIA",
      "IGI",
      "APA"
    ],
    {
      A: "create:andesite_alloy",
      I: "#c:nuggets/iron",
      G: "#c:glass_panes/colorless",
      P: "create:precision_mechanism"
    }
  );

});
