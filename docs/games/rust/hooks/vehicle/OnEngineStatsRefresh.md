---
hide_table_of_contents: true
---

# OnEngineStatsRefresh

## Usage

* Called right before the stats of a modular car engine are refreshed
* Returning a non-null value overrides default behavior

## Examples

```csharp title=""
object OnEngineStatsRefresh(VehicleModuleEngine engineModule, EngineStorage engineStorage)
{
    Puts("OnEngineStatsRefresh works!");
    return null;
}
```
