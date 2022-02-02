---
hide_table_of_contents: true
---

# CanCraft

## Usage

* Called when the player attempts to craft an item
* Return true or false to override default behavior

## Examples

```csharp title=""
bool? CanCraft(ItemCrafter itemCrafter, ItemBlueprint itemBlueprint, int itemAmount, bool free)
{
    Puts("CanCraft works!");
    return null;
}
```

```csharp title=""
bool? CanCraft(PlayerBlueprints playerBlueprints, ItemDefinition itemDefinition, int skinItemId)
{
    Puts("CanCraft works!");
    return null;
}
```