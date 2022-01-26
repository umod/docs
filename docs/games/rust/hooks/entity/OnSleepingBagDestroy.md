---
hide_table_of_contents: true
---

# OnSleepingBagValidCheck

## Usage

* Called when a player tries to remove a sleeping bag from their respawn screen
* Returning a non-null value overrides default behavior

## Examples

```csharp title=""
object OnSleepingBagDestroy(SleepingBag sleepingBag, BasePlayer player)
{
    Puts("OnSleepingBagDestroy works!");
    return null;
}
```
