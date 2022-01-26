---
hide_table_of_contents: true
---

# OnVehiclePush

## Usage

* Called when a player tries to push a vehicle
* Returning a non-null value overrides default behavior

## Examples

```csharp title=""
object OnVehiclePush(BaseVehicle vehicle, BasePlayer player)
{
    Puts("OnVehiclePush works!");
    return null;
}
```
