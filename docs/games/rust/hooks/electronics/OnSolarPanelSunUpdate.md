---
hide_table_of_contents: true
---

# OnSolarPanelSunUpdate

## Usage

* Called when a solar panel updates the amount of energy it is getting from the sun
* Return a non-null value to override default behavior

## Examples

```csharp title=""
object OnSolarPanelSunUpdate(SolarPanel solarPanel, int currentEnergy)
{
    Puts("OnSolarPanelSunUpdate works!");
    return null;
}
```
