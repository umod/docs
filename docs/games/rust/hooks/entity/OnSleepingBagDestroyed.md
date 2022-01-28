---
hide_table_of_contents: true
---

# OnSleepingBagDestroyed

## Usage

* Called after a player removes a sleeping bag from their respawn screen
* No return behavior

## Examples

```csharp title=""
void OnSleepingBagDestroyed(SleepingBag sleepingBag, BasePlayer player)
{
    Puts("OnSleepingBagDestroyed works!");
}
```
