---
hide_table_of_contents: true
---

# OnEngineStop

## Usage

* Called when a vehicle engine is about to stop
* Returning a non-null value overrides default behavior

## Examples

```csharp title=""
object OnEngineStop(BaseVehicle vehicle)
{
    Puts("OnEngineStop works!");
    return null;
}
```
