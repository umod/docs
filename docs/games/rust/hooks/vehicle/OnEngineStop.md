---
hide_table_of_contents: true
---

# OnEngineStop

## Usage

* Called when a vehicle engine is about to stop
* Return a non-null value to override default behavior

## Examples

```csharp title=""
object OnEngineStop(BaseVehicle vehicle)
{
    Puts("OnEngineStop works!");
    return null;
}
```
