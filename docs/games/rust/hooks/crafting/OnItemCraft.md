---
hide_table_of_contents: true
---

# OnItemCraft

## Usage

* Called right after an item is added to the crafting queue
* Returning true or false overrides default behavior

## Examples

```csharp title=""
object OnItemCraft(ItemCraftTask task, BasePlayer player, Item item)
{
    Puts("OnItemCraft works!");
    return null;
}
```
