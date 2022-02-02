---
hide_table_of_contents: true
---

# OnTurretDeauthorize

## Usage

* Called right after a modular car has spawned, but before module items are added to its inventory from a preset
* Return a non-null value to override default behavior

## Examples

```csharp title=""
object OnVehicleModulesAssign(ModularCar car, ItemModVehicleModule[] modulePreset)
{
    Puts("OnVehicleModulesAssign works!");
    return null;
}
```
