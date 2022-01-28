---
hide_table_of_contents: true
---

# OnLootEntityEnd

## Usage

* Called when the player stops looting a ContainerIOEntity, DroppedItemContainer, FuseBox, ItemBasedFlowRestrictor, LootableCorpse, or StorageContainer
* No return behavior

## Examples

```csharp title=""
void OnLootEntityEnd(BasePlayer player, BaseCombatEntity entity)
{
    Puts("OnLootEntityEnd works!");
}
```
