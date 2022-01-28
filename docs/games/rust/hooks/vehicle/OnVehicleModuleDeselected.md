---
hide_table_of_contents: true
---

# OnVehicleModuleDeselected

## Usage

* Called right after a player deselects a vehicle module item in a car's inventory
* No return behavior

## Examples

```csharp title=""
void OnVehicleModuleDeselected(ModularCarGarage carLift, BasePlayer player)
{
    Puts("OnVehicleModuleDeselected works!");
}
```
