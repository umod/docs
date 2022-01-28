---
hide_table_of_contents: true
---

# OnBonusItemDropped

## Usage

* Called after a loot container has dropped bonus scrap for a player who has a corresponding tea buff
* No return behavior

## Examples

```csharp title=""
void OnBonusItemDropped(Item item, BasePlayer player)
{
    Puts("OnBonusItemDropped works!");
}
```
