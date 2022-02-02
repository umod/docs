---
hide_table_of_contents: true
---

# CanPickupLock

## Usage

* Called when a player attempts to pickup a lock
* Return true or false to override default behavior

## Examples

```csharp title=""
bool? CanPickupLock(BasePlayer player, BaseLock baseLock)
{
    Puts("CanPickupLock works!");
    return null;
}
```
