---
hide_table_of_contents: true
---

# OnFuelCheck

## Usage

* Called when determining whether a vehicle has sufficient fuel
* Returning true or false overrides default behavior

## Examples

```csharp title=""
object OnFuelCheck(EntityFuelSystem fuelSystem)
{
    Puts("OnFuelCheck works!");
    return null;
}
```
