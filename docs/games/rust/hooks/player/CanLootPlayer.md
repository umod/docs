---
hide_table_of_contents: true
---

# CanLootEntity

## Usage

* Called when the player attempts to loot another player
* Returning true or false overrides default behavior

## Examples

```csharp title=""
bool CanLootPlayer(BasePlayer target, BasePlayer looter)
{
    Puts("CanLootPlayer works!");
    return true;
}
```
