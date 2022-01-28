---
hide_table_of_contents: true
---

# OnEngineStart

## Usage

* Called when a player tries to start a vehicle engine (MiniCopter, ModularCar, or MotorRowboat)
* Returning a non-null value overrides default behavior

## Examples

```csharp title=""
object OnEngineStart(BaseVehicle vehicle, BasePlayer driver)
{
    Puts("OnEngineStart works!");
    return null;
}
```
