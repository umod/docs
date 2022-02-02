---
hide_table_of_contents: true
---

# OnSwitchToggle

## Usage

* Called when a player tries to switch and ElectricSwitch or FuelGenerator
* Return a non-null value to override default behavior

## Examples

```csharp title=""
object OnSwitchToggle(IOEntity entity, BasePlayer player)
{
    Puts("OnSwitchToggle works!");
    return null;
}
```
