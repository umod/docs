---
hide_table_of_contents: true
---

# OnVehicleModuleSelect

## Usage

* Called right after a player has selected a vehicle module item in a car inventory, but before they are shown the corresponding storage container
* Return a non-null value to override default behavior

## Examples

```csharp title=""
object OnVehicleModuleSelect(Item moduleItem, ModularCarGarage carLift, BasePlayer player)
{
    Puts("OnVehicleModuleSelect works!");
    return null;
}
```
