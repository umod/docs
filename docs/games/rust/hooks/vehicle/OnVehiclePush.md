---
hide_table_of_contents: true
---

# OnVehiclePush

## Usage

* Called when a player tries to push a vehicle
* Return a non-null value to override default behavior

## Examples

```csharp title=""
object OnVehiclePush(BaseVehicle vehicle, BasePlayer player)
{
    Puts("OnVehiclePush works!");
    return null;
}
```
