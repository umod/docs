---
hide_table_of_contents: true
---

# CanPickupLock

## Usage

* Called when a player attempts to pickup a lock
* Returning true or false overrides default behavior

## Examples

```csharp title=""
bool CanPickupLock(BasePlayer player, BaseLock baseLock)
{
    Puts("CanPickupLock works!");
    return true;
}
```
