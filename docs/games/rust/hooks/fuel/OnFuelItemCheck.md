---
hide_table_of_contents: true
---

# OnFuelItemCheck

## Usage

* Called when determining which item should be used to fuel a vehicle
* Returning an Item overrides default behavior

## Examples

```csharp title=""
Item? OnFuelItemCheck(EntityFuelSystem fuelSystem, StorageContainer fuelContainer)
{
    Puts("OnFuelItemCheck works!");
    return null;
}
```
