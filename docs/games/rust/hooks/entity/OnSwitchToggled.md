---
hide_table_of_contents: true
---

# OnSwitchToggled

## Usage

* Called right after a player switches an ElectricSwitch or FuelGenerator
* No Return behavior

## Examples

```csharp title=""
void OnSwitchToggled(IOEntity entity, BasePlayer player)
{
    Puts("OnSwitchToggled works!");
}
```
