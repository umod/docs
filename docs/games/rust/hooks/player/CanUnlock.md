---
hide_table_of_contents: true
---

# CanUnlock

## Usage

* Called when the player tries to unlock a keylock or codelock
* Returning a non-null value overrides default behavior

## Examples

```csharp title=""
object CanUnlock(BasePlayer player, BaseLock baseLock)
{
    Puts("CanUnlock works!");
    return null;
}
```
