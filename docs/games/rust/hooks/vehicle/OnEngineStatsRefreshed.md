---
hide_table_of_contents: true
---

# OnEngineStatsRefreshed

## Usage

* Called right after the stats of a modular car engine are refreshed
* No Return behavior

## Examples

```csharp title=""
void OnEngineStatsRefreshed(VehicleModuleEngine engineModule, EngineStorage engineStorage)
{
    Puts("OnEngineStatsRefreshed works!");
}
```
