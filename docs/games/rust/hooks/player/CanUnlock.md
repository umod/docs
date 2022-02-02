---
hide_table_of_contents: true
---

# CanUnlock

## Usage

* Called when the player tries to unlock a keylock or codelock
* Return a non-null value to override default behavior

## Examples

```csharp title=""
object CanUnlock(BasePlayer player, BaseLock baseLock)
{
    Puts("CanUnlock works!");
    return null;
}
```
