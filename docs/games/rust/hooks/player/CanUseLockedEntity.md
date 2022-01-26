---
hide_table_of_contents: true
---

# CanUseLockedEntity

## Usage

* Called when the player tries to use an entity that is locked
* Returning true or false overrides default behavior

## Examples

```csharp title=""
bool CanUseLockedEntity(BasePlayer player, BaseLock baseLock)
{
    Puts("CanUseLockedEntity works!");
    return true;
}
```
