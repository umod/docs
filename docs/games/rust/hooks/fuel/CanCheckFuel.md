---
hide_table_of_contents: true
---

# CanCheckFuel

## Usage

* Called when a player tries to loot a vehicle's fuel container
* Return true or false to override default behavior

## Examples

```csharp title=""
bool? CanCheckFuel(EntityFuelSystem fuelSystem, StorageContainer fuelContainer, BasePlayer player)
{
    Puts("CanCheckFuel works!");
    return null;
}
```
