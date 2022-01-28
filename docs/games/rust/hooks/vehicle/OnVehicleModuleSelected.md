---
hide_table_of_contents: true
---

# OnVehicleModuleSelected

## Usage

* Called right after a player has selected a vehicle module item in a car's inventory, and after they have been shown the corresponding storage container if applicable
* No return behavior

## Examples

```csharp title=""
void OnVehicleModuleSelected(Item moduleItem, ModularCarGarage carLift, BasePlayer player)
{
    Puts("OnVehicleModuleSelected works!");
}
```
