---
hide_table_of_contents: true
---

# OnWaterCollect

## Usage

* Called when a WaterCatch or WaterPump is about to collect water
* Returning a non-null value cancels default behavior

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
