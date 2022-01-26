---
hide_table_of_contents: true
---

# OnFuelAmountCheck

## Usage

* Called when the amount of fuel in a vehicle is being determined
* Returning a numeric value (int) overrides the default value

## Examples

```csharp title=""
object OnFuelAmountCheck(EntityFuelSystem fuelSystem, Item fuelItem)
{
    Puts("OnFuelAmountCheck works!");
    return null;
}
```
