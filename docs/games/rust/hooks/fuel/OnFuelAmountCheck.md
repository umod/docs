---
hide_table_of_contents: true
---

# OnFuelAmountCheck

## Usage

* Called when the amount of fuel in a vehicle is being determined
* Return a numeric value (int) to override the default value

## Examples

```csharp title=""
int? OnFuelAmountCheck(EntityFuelSystem fuelSystem, Item fuelItem)
{
    Puts("OnFuelAmountCheck works!");
    return null;
}
```
