---
hide_table_of_contents: true
---

# OnSleepingBagValidCheck

## Usage

* Called when a player tries to remove a sleeping bag from their respawn screen
* Return a non-null value to override default behavior

## Examples

```csharp title=""
object OnSleepingBagDestroy(SleepingBag sleepingBag, BasePlayer player)
{
    Puts("OnSleepingBagDestroy works!");
    return null;
}
```
