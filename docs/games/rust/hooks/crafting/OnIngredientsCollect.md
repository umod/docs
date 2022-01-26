---
hide_table_of_contents: true
---

# OnIngredientsCollect

## Usage

* Called when ingredients are about to be collected for crafting an item
* Returning a non-null value cancels default behavior

## Examples

```csharp title=""
bool? OnIngredientsCollect(ItemCrafter itemCrafter, ItemBlueprint blueprint, ItemCraftTask task, int amount, BasePlayer player)
{
    Puts("OnIngredientsCollect works!");
    return null;
}
```
