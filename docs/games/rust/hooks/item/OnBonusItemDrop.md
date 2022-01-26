---
hide_table_of_contents: true
---

# OnBonusItemDropped

## Usage

* Called when a loot container is about to drop bonus scrap for a player who has a corresponding tea buff
* Returning a non-null value overrides default behavior

## Examples

```csharp title=""
object OnBonusItemDrop(Item item, BasePlayer player)
{
    Puts("OnBonusItemDrop works!");
    return null;
}
```
