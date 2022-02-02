---
hide_table_of_contents: true
---

# CanSetBedPublic

## Usage

* Called when a player tries to set a bed public
* Return a non-null value to override default behavior

## Examples

```csharp title=""
object CanSetBedPublic(BasePlayer player, SleepingBag bed)
{
    Puts("CanSetBedPublic works!");
    return null;
}
```
