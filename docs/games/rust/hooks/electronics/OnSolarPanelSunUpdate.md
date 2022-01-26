---
hide_table_of_contents: true
---

# OnSolarPanelSunUpdate

## Usage

* Called when a solar panel updates the amount of energy it is getting from the sun
* Returning a non-null value overrides default behavior

## Examples

```csharp title=""
object OnSolarPanelSunUpdate(SolarPanel panel, int currentEnergy)
{
    Puts("OnSolarPanelSunUpdate works!");
    return null;
}
```
