---
hide_table_of_contents: true
---

# OnWaterCollect

## Usage

* Called when a WaterCatch or WaterPump is about to collect water
* Return a non-null value to override default behavior

## Examples

```csharp title=""
object OnWaterCollect(WaterCatcher waterCatcher)
{
    Puts("OnWaterCollect works!");
    return null;
}
```

```csharp title=""
object OnWaterCollect(WaterPump waterPump, ItemDefinition water)
{
    Puts("OnWaterCollect works!");
    return null;
}
```
