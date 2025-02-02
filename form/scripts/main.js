import * as server from "@minecraft/server";

function aisatu(player) {
  const form = new ui.ActionFormData();
  form.title("挨拶");
  form.button("こんにちは");

  form
    .show(player)
    .then((response) => {
      switch (response.selection) {
        case 0:
          player.sendMessage("<" + player.name + "> こんにちは");
          player.sendMessage("<村人> こんにちは!");
          break;
        default:
          break;
      }
    })
    .catch((error) =>
      player.sendMessage("An error occurred: " + error.message)
    );
}

server.world.beforeEvents.itemUse.subscribe((ev) => {
  if (ev.itemStack.typeId == "minecraft:stick") {
    aisatu(ev.source);
  }
});
