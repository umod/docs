---
hide_table_of_contents: true
---

# CanLock

## Usage

* Useful for canceling the lock action
* Returning a non-null value cancels default behavior

## Examples

```csharp title=""
object CanLock(BasePlayer player, BaseLock baseLock)
{
    Puts("CanLock works!");
    return null;
}
```
