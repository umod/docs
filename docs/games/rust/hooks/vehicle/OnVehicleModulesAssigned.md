---
hide_table_of_contents: true
---

# OnVehicleModulesAssigned

## Usage

* Called right after a car has spawned and its module inventory has been filled with module items from a preset
* No return behavior

## Examples

```csharp title=""
void OnVehicleModulesAssigned(ModularCar car, ItemModVehicleModule[] modulePreset)
{
    Puts("OnVehicleModulesAssigned works!");
}
```
