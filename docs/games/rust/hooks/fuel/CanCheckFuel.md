---
hide_table_of_contents: true
---

# CanCheckFuel

## Usage

* Called when a player tries to loot a vehicle's fuel container
* Returning true or false overrides default behavior

## Examples

```csharp title=""
object CanCheckFuel(EntityFuelSystem fuelSystem, StorageContainer fuelContainer, BasePlayer player)
{
    Puts("CanCheckFuel works!");
    return null;
}
```
