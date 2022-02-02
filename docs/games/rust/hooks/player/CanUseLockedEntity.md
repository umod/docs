---
hide_table_of_contents: true
---

# CanUseLockedEntity

## Usage

* Called when the player tries to use an entity that is locked
* Return true or false to override default behavior

## Examples

```csharp title=""
bool? CanUseLockedEntity(BasePlayer player, BaseLock baseLock)
{
    Puts("CanUseLockedEntity works!");
    return null;
}
```
