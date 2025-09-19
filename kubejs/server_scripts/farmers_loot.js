// Add farmers delight to grass loot tables since the world was generated without it.

LootJS.lootTables(event => {
  event.getLootTable("minecraft:blocks/short_grass").createPool().addEntry(LootEntry.group(
    LootEntry.of("farmersdelight:onion").randomChance(0.0179),
    LootEntry.of("farmersdelight:rice").randomChance(0.0179),
    LootEntry.of("farmersdelight:cabbage_seeds").randomChance(0.0179),
    LootEntry.of("farmersdelight:tomato_seeds").randomChance(0.0179),
    LootEntry.of("rusticdelight:cotton_seed").randomChance(0.0179),
    LootEntry.of("rusticdelight:bell_pepper_seeds").randomChance(0.0179),
    LootEntry.of("rusticdelight:coffee_beans").randomChance(0.0179),
  ));
});
