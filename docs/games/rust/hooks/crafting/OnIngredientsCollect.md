---
hide_table_of_contents: true
---

# OnIngredientsCollect

## Usage

* Called when ingredients are about to be collected for crafting an item
* Return a non-null value to override default behavior

## Examples

```csharp title=""
object OnIngredientsCollect(ItemCrafter itemCrafter, ItemBlueprint itemBlueprint, ItemCraftTask task, int itemAmount, BasePlayer player)
{
    Puts("OnIngredientsCollect works!");
    return null;
}
```
