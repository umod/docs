---
hide_table_of_contents: true
---

# CanUseFuel

## Usage

* Called before a vehicle fuel system consumes fuel
* Returning true or false overrides default behavior

## Examples

```csharp title=""
object CanUseFuel(EntityFuelSystem fuelSystem, StorageContainer fuelContainer, float currentSeconds, float fuelPerSecond)
{
    Puts("CanUseFuel works!");
    return null;
}
```
