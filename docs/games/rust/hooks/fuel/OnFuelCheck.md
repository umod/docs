---
hide_table_of_contents: true
---

# OnFuelCheck

## Usage

* Called when determining whether a vehicle has sufficient fuel
* Return true or false to override default behavior

## Examples

```csharp title=""
bool? OnFuelCheck(EntityFuelSystem fuelSystem)
{
    Puts("OnFuelCheck works!");
    return null;
}
```
