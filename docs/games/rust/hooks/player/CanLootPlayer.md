---
hide_table_of_contents: true
---

# CanLootEntity

## Usage

* Called when the player attempts to loot another player
* Return true or false to override default behavior

## Examples

```csharp title=""
bool? CanLootPlayer(BasePlayer target, BasePlayer looter)
{
    Puts("CanLootPlayer works!");
    return null;
}
```
