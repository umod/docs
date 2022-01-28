---
hide_table_of_contents: true
---

# OnEngineStarted

## Usage

* Called right after a vehicle engine has started (MiniCopter, ModularCar, or MotorRowboat)
* No return behavior

## Examples

```csharp title=""
void OnEngineStarted(BaseVehicle vehicle, BasePlayer driver)
{
    Puts("OnEngineStarted works!");
}
```
