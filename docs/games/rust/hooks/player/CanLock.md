---
hide_table_of_contents: true
---

# CanLock

## Usage

* Useful for canceling the lock action
* Return a non-null value to override default behavior

## Examples

```csharp title=""
object CanLock(BasePlayer player, BaseLock baseLock)
{
    Puts("CanLock works!");
    return null;
}
```
