---
hide_table_of_contents: true
---

# CanRenameBed

## Usage

* Called when the player attempts to rename a bed or sleeping bag
* Return a non-null value to override default behavior

## Examples

```csharp title=""
object CanRenameBed(BasePlayer player, SleepingBag bed, string bedName)
{
    Puts("CanRenameBed works!");
    return null;
}
```
