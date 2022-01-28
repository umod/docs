---
hide_table_of_contents: true
---

# OnSleepingBagValidCheck

## Usage

* Called when determining if a sleeping bag is a valid respawn location for a player
* Useful in conjunction with OnRespawnInformationGiven since a custom sleeping bag will need to pass this check
* Returning true or false overrides default behavior

## Examples

```csharp title=""
bool? OnSleepingBagValidCheck(SleepingBag sleepingBag, ulong targetPlayerId, bool ignoreTimers)
{
    Puts("OnSleepingBagValidCheck works!");
    return null;
}
```
