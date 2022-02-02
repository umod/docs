---
hide_table_of_contents: true
---

# OnEngineStart

## Usage

* Called when a player tries to start a vehicle engine (MiniCopter, ModularCar, or MotorRowboat)
* Return a non-null value to override default behavior

## Examples

```csharp title=""
object OnEngineStart(BaseVehicle vehicle, BasePlayer driver)
{
    Puts("OnEngineStart works!");
    return null;
}
```
