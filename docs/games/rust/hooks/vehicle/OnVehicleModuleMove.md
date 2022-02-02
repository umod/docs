---
hide_table_of_contents: true
---

# OnVehicleModuleMove

## Usage

* Called when a player tries to move a vehicle module item that is currently on a vehicle
* Return a non-null value to override default behavior

## Examples

```csharp title=""
object OnVehicleModuleMove(BaseVehicleModule module, BaseModularVehicle vehicle, BasePlayer player)
{
    Puts("OnVehicleModuleMove works!");
    return null;
}
```
