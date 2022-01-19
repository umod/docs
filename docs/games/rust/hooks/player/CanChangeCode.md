---
hide_table_of_contents: true
---

# CanChangeCode

## Usage

* Called when a player tries to change the code on a code lock
* Return false to prevent player from changing lock code

## Examples

```csharp title="Block code change for non-admin"
object CanChangeCode(BasePlayer player, CodeLock codeLock, string newCode, bool isGuestCode)
{
    if (!player.IsAdmin)
    {
        return false;
    }

    return null;
}
```
