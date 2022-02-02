---
hide_table_of_contents: true
---

# OnEngineStatsRefresh

## Usage

* Called right before the stats of a modular car engine are refreshed
* Return a non-null value to override default behavior

## Examples

```csharp title=""
object OnEngineStatsRefresh(VehicleModuleEngine engineModule, EngineStorage engineStorage)
{
    Puts("OnEngineStatsRefresh works!");
    return null;
}
```
