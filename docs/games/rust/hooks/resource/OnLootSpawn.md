---
hide_table_of_contents: true
---

# OnLootSpawn

## Usage

* Called when loot spawns in a container
* Returning a non-null value overrides default behavior

## Examples

```csharp title=""
object OnLootSpawn(LootContainer container)
{
    Puts("OnLootSpawn works!");
    return null;
}
```
