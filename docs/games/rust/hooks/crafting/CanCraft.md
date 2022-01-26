---
hide_table_of_contents: true
---

# CanCraft

## Usage

* Called when the player attempts to craft an item
* Returning true or false overrides default behavior

## Examples

```csharp title=""
bool CanCraft(ItemCrafter itemCrafter, ItemBlueprint bp, int amount)
{
    Puts("CanCraft works!");
    return true;
}
```

```csharp title=""
bool CanCraft(PlayerBlueprints playerBlueprints, ItemDefinition itemDefinition, int skinItemId)
{
    Puts("CanCraft works!");
    return true;
}
```