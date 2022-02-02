---
hide_table_of_contents: true
---

# OnItemCraft

## Usage

* Called right after an item is added to the crafting queue
* Return true or false to override default behavior

## Examples

```csharp title=""
bool? OnItemCraft(ItemCraftTask task, BasePlayer player, Item item)
{
    Puts("OnItemCraft works!");
    return null;
}
```
