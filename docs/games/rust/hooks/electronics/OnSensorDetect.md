---
hide_table_of_contents: true
---

# OnSensorDetect

## Usage

* Called before a sensor detects a player
* Return a non-null value to override default behavior

## Examples

```csharp title=""
object OnSensorDetect(HBHFSensor sensor, BasePlayer player)
{
    Puts("OnSensorDetect works!");
    return null;
}
```
